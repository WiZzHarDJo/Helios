import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import MyCarousel from '../../../components/MyCarousel/MyCarousel.js';

import { Card} from 'antd';
import "antd/dist/antd.css";

import _ from "lodash";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import rectoratLogo from "./../../../assets/img/logo-rectorat.jpg";

import spectacleData from "./../../../assets/data/spectacles.json";

const useStyles = makeStyles(styles);



export default function ProductSection() {
  const classes = useStyles();

  const renderSpectacle = (spectacle, id) => {
    console.log("press", spectacle.press);
    return (
      <Card title={spectacle.title} key={id} style={{ width: "100%", marginBottom:"25px" }} bordered>
        {
          spectacle.video !== "" &&

          <iframe
              src={`https://youtube.com/embed/${spectacle.video}`} frameBorder="0" allowFullScreen title={spectacle.title} style={{ width: "100%", height:"500px" }}>
          </iframe>
        }
        <p>
          {spectacle.description}
        </p>
        <p>
          {spectacle.info}
        </p>
        {
          spectacle.press != null &&

          <MyCarousel title="La presse en parle" autoplay frames={spectacle.press}/>
        }
        <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>Le spectacle {spectacle.title} a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
      </Card>
    )
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Spectacles</h2>
          <h5 className={classes.description}>
          Soucieux de ne pas se cantonner dans le rôle du musicien classique et très curieux d’élargir ses modes d’expression, Hélios a produit plusieurs spectacles.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          {spectacleData.length && _.map(spectacleData, renderSpectacle) }
      </GridItem>
      </GridContainer>
    </div>
  );
}
