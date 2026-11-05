import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";

import GridItem from "../../../components/Grid/GridItem.js";

import { PhoneTwoTone } from "@ant-design/icons";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

import { BrowserView, MobileView } from "react-device-detect";

import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fade,
  photoAnim,
  lineAnim,
} from "./../../../assets/animations/Animation";

import { useScroll } from "./../../../assets/animations/useScroll";

import "moment/locale/fr";
moment.locale("fr");

const useStyles = makeStyles(styles);

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const formatDate = (date) => {
  // 1er du mois, et suppression de l'heure 00:00
  const prettyDate = moment(date)
    .format("LLLL")
    .replace(/\b1\b/g, "1er")
    .replace("00:00", "");
  return capitalize(prettyDate);
};

const formatHour = (heure) => heure.replace(":", "h").replace(":00", "");

function ConcertCard({ program }) {
  const hasTickets = program.billeterie && program.billeterie !== "";
  const hasPhone = program.phone && program.phone !== "";

  return (
    <motion.div variants={photoAnim}>
      <Poster>
        <div className="media">
          <div
            className="photo"
            role="img"
            aria-label={program.title}
            style={{ backgroundImage: `url("${program.imageUrl}")` }}
          />
          <div className="shade" />
          <span className="date">
            {formatDate(program.datum)}, {formatHour(program.heure)}
          </span>
          <h3 className="title">{program.title}</h3>
        </div>
        <div className="body">
          {program.lieu && <p className="place">📍 {program.lieu}</p>}
          {program.description && <p>{program.description}</p>}
          {"artiste" in program && (
            <p>
              <b>Programme de l'évènement :</b> {program.artiste}
              {program.duration}
            </p>
          )}
          {(hasTickets || hasPhone) && (
            <div className="actions">
              {hasTickets && (
                <a
                  className="cta"
                  href={program.billeterie}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réservez vos billets
                </a>
              )}
              {hasPhone && (
                <span className="phone">
                  <PhoneTwoTone /> {program.phone}
                </span>
              )}
            </div>
          )}
        </div>
      </Poster>
    </motion.div>
  );
}

function MonthSection({ title, concerts }) {
  const [element, controls] = useScroll();

  return (
    <motion.div ref={element} variants={fade} animate={controls}>
      <MonthTitle variants={fade}>{title}</MonthTitle>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <CardsGrid>
        {concerts.map((program, index) => (
          <ConcertCard key={index} program={program} />
        ))}
      </CardsGrid>
    </motion.div>
  );
}

export default function UpcomingConcerts() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://helios-serverless-api.netlify.app/.netlify/functions/findComingSoon`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const now = moment();
  const currentYear = now.year();
  // Un concert reste affiché 48h après sa date
  const upcoming = (data || []).filter(
    (e) => !moment(e.datum).add(48, "hours").isBefore(now)
  );

  // Concerts à venir de l'année en cours et de la suivante, groupés par mois (YYYY-MM)
  const byMonth = _.groupBy(
    upcoming.filter((e) => {
      const year = moment(e.datum).year();
      return year === currentYear || year === currentYear + 1;
    }),
    (e) => moment(e.datum).format("YYYY-MM")
  );

  return (
    <div className={classes.section}>
      <Concerts>
        <GridItem style={{ marginBottom: "40px" }}>
          <h2 className={classes.title}>
            Saison {currentYear}-{currentYear + 1}
          </h2>
          <h3 className={classes.subtitle}>Prochains évènements</h3>
        </GridItem>
        <BrowserView>
          {Object.keys(byMonth)
            .sort()
            .map((key) => (
              <MonthSection
                key={key}
                title={capitalize(moment(`${key}-01`).format("MMMM YYYY"))}
                concerts={byMonth[key]}
              />
            ))}
        </BrowserView>
        <MobileView>
          <CardsGrid>
            {upcoming.map((program, index) => (
              <ConcertCard key={index} program={program} />
            ))}
          </CardsGrid>
        </MobileView>
      </Concerts>
    </div>
  );
}

const Concerts = styled(motion.GridContainer)`
  .line {
    height: 0.5rem;
    background: #ffe57f;
    margin-bottom: 3rem;
  }
`;

const MonthTitle = styled(motion.h2)`
  text-align: left;
  font-size: 2rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

// Le ratio fixe + background-size: cover absorbe les photos de formats variés
const Poster = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px -12px rgba(0, 0, 0, 0.45);
  }

  .media {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #222;
  }
  .photo {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
  }
  &:hover .photo {
    transform: scale(1.06);
  }
  .shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.25) 55%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .date {
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    background: #ffe57f;
    color: #111;
    font-size: 0.8rem;
    font-weight: 700;
  }
  .title {
    position: absolute;
    left: 1.2rem;
    right: 1.2rem;
    bottom: 1rem;
    margin: 0;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 800;
    line-height: 1.15;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 1.2rem;
    color: #333;
    text-align: left;
  }
  .body p {
    margin: 0;
  }
  .place {
    font-weight: 600;
  }
  .actions {
    margin-top: auto;
    padding-top: 0.6rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }
  .cta {
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    background: #111;
    color: #ffe57f;
    font-weight: 700;
    transition: background 0.2s ease, color 0.2s ease;
  }
  .cta:hover {
    background: #ffe57f;
    color: #111;
  }
`;
