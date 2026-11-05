import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";

import GridItem from "../../../components/Grid/GridItem.js";

import { Row, Col, Card, Button } from "antd";
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

function ConcertImage({ program, classes }) {
  return (
    <p className={classes.partenaireDescr}>
      <img
        src={program.imageUrl}
        alt={program.title}
        style={{ height: "350px", width: "425px", objectFit: "cover" }}
      />
    </p>
  );
}

function ConcertDetails({ program, classes }) {
  return (
    <>
      <p className={classes.subdescr}>{program.description}</p>
      {"artiste" in program && (
        <p className={classes.subdescr}>
          <b>Programme de l'évènement :</b> {program.artiste}
          {program.duration}
        </p>
      )}
      <p className={classes.subdescr}>
        <b>
          {formatDate(program.datum)}, {formatHour(program.heure)}
        </b>{" "}
        <br />
        {program.lieu}
      </p>
      {("billeterie" in program || "phone" in program) && (
        <p className={classes.subdescr}>
          {program.billeterie !== "" && (
            <Button size="large" style={{ marginBottom: "1rem" }}>
              <b>
                <a
                  href={program.billeterie}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réservez vos billets
                </a>
              </b>
            </Button>
          )}
          {program.phone !== "" && (
            <div>
              <PhoneTwoTone /> {program.phone}
            </div>
          )}
        </p>
      )}
    </>
  );
}

// layout: "textFirst" | "imageFirst" | "stacked" (mobile)
function ConcertCard({ program, layout, classes }) {
  const image = <ConcertImage program={program} classes={classes} />;
  const details = <ConcertDetails program={program} classes={classes} />;

  return (
    <Hide>
      <GridItem style={{ marginBottom: "40px" }}>
        <motion.div variants={photoAnim}>
          <Card>
            <h4 className={classes.subtitle} style={{ marginBottom: "20px" }}>
              {program.title}
            </h4>
            {layout === "stacked" ? (
              <>
                {image}
                {details}
              </>
            ) : (
              <Row
                type="flex"
                style={{ alignItems: "center" }}
                justify="center"
                gutter={10}
              >
                {layout === "imageFirst" && <Col span={10}>{image}</Col>}
                <Col span={14}>{details}</Col>
                {layout === "textFirst" && <Col span={10}>{image}</Col>}
              </Row>
            )}
          </Card>
        </motion.div>
      </GridItem>
    </Hide>
  );
}

function MonthSection({ title, concerts, classes }) {
  const [element, controls] = useScroll();

  return (
    <motion.div ref={element} variants={fade} animate={controls}>
      <MonthTitle variants={fade}>{title}</MonthTitle>
      <motion.div variants={lineAnim} className="line"></motion.div>
      {concerts.map((program, index) => (
        <ConcertCard
          key={index}
          program={program}
          layout={index % 2 === 0 ? "textFirst" : "imageFirst"}
          classes={classes}
        />
      ))}
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
                classes={classes}
              />
            ))}
        </BrowserView>
        <MobileView>
          {upcoming.map((program, index) => (
            <ConcertCard
              key={index}
              program={program}
              layout="stacked"
              classes={classes}
            />
          ))}
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
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const MonthTitle = styled(motion.h2)`
  text-align: left;
  font-size: 2rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;
