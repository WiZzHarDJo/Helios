import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import MyCarousel from "../../../components/MyCarousel/MyCarousel.js";
import MyCarouselProf from "../../../components/MyCarouselProf/MyCarouselProf.js";

import { BrowserView, MobileView } from "react-device-detect";

import { Card } from "antd";
import "antd/dist/antd.css";

import _ from "lodash";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import rectoratLogo from "./../../../assets/img/logo/logo-rectorat.jpg";

import spectacleData from "./../../../assets/data/spectacles.json";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const renderSpectacle = (spectacle, id) => {
    return (
      <Card
        title={spectacle.title}
        key={id}
        style={{ width: "100%", marginBottom: "60px" }}
        bordered
      >
        {spectacle.video !== "" && (
          <iframe
            src={`https://youtube.com/embed/${spectacle.video}`}
            frameBorder="0"
            allowFullScreen
            title={spectacle.title}
            style={{ width: "100%", height: "500px" }}
          ></iframe>
        )}
        <p className={classes.subdescr}>{spectacle.description}</p>
        <p className={classes.subdescr}>
          <b>{spectacle.info}</b>
        </p>
        {spectacle.press != null && (
          <MyCarousel
            title="La presse en parle"
            autoplay
            frames={spectacle.press}
          />
        )}
        {spectacle.ecole != null && (
          <MyCarousel
            title="Ils en parlent"
            autoplay
            frames={spectacle.ecole}
          />
        )}
        <div className={classes.rectorat}>
          <img
            src={rectoratLogo}
            alt="Logo du rectorat"
            className={classes.rectoratImg}
          />
          <b className={classes.verticalAlign}>
            Le spectacle {spectacle.title} a reçu l'habilitation de la
            délégation académique aux arts et à la culture du rectorat de Paris.
          </b>
        </div>
      </Card>
    );
  };

  const renderSpectacleMobile = (spectacle, id) => {
    return (
      <Card
        title={spectacle.title}
        key={id}
        style={{ width: "100%", marginBottom: "60px" }}
        bordered
      >
        {spectacle.video !== "" && (
          <iframe
            src={`https://youtube.com/embed/${spectacle.video}`}
            frameBorder="0"
            allowFullScreen
            title={spectacle.title}
            style={{ width: "100%", height: "235px" }}
          ></iframe>
        )}
        <p className={classes.subdescr}>{spectacle.description}</p>
        <p className={classes.subdescr}>
          <b>{spectacle.info}</b>
        </p>
        <div className={classes.rectorat}>
          <img
            src={rectoratLogo}
            alt="Logo du rectorat"
            className={classes.rectoratImg}
          />
          <b className={classes.verticalAlign}>
            Le spectacle {spectacle.title} a reçu l'habilitation de la
            délégation académique aux arts et à la culture du rectorat de Paris.
          </b>
        </div>
      </Card>
    );
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Spectacles</h2>
        </GridItem>
        <GridItem>
          <h5 className={classes.subdescr}>
            Soucieux de ne pas se cantonner dans le rôle du musicien classique,
            curieux d’élargir ses modes d’expression et de toucher un public
            familial, l'Ensemble Hélios écrit et produit ses spectacles. <br />
            <br />
            Christel Rayneau, Directrice artistique de l'Ensemble Hélios créé
            les textes et les livrets pédagogiques. Tous ses spectacles ont reçu
            l'habilitation de la délégation académique aux arts et à la culture
            du rectorat de Paris.
          </h5>
          {/* <p className={classes.subdescr}>
            <h4>• « Comment Mozart vient aux enfants ? »</h4>
            <h4>• « Debussy, Miss et Chouchou »</h4>
            <h4>• « J'suis diffférent »</h4>
          </p> */}
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <BrowserView>
            {spectacleData.length && _.map(spectacleData, renderSpectacle)}
          </BrowserView>
          <MobileView>
            {spectacleData.length &&
              _.map(spectacleData, renderSpectacleMobile)}
          </MobileView>
        </GridItem>
      </GridContainer>
    </div>
  );
}
