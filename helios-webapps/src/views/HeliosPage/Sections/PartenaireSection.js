import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import img1 from "./../../../assets/img/logo-liberté.png";
import img2 from "./../../../assets/img/logo-sacem.jpg";
import img3 from "./../../../assets/img/rectorat-logo.png";
import img4 from "./../../../assets/img/logo-billaudot.png";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import {Row, Col} from 'antd';

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nos Partenaires</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
        <p className={classes.subdescr}>
            L'Ensemble Hélios a l'honneur d'être soutenu dans ses activités artistiques de création et de concerts par les partenaires suivants :
        </p>
        </GridItem>
        <GridItem>
          <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
          <Col span={12}>
            <p className={classes.partenaireDescr}>
              <a href="https://www.mnl-paris.com"> <b>Musique Nouvelle en Liberté</b></a>
            </p>
          </Col>
          <Col span={12}>
            <p className={classes.partenaireDescr}>
            <a href="https://www.sacem.fr/"> <b>La Société des auteurs, compositeurs et éditeurs de musique</b></a>
            </p>
          </Col>
        </Row>
        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
          <Col span={12}>
            <p className={classes.partenaireDescr}>
              <img src={img1} alt="Logo Musique Nouvelle en Liberté" style={{width:"30rem"}}/>
            </p>
          </Col>
          <Col span={12}>
            <p className={classes.partenaireDescr}>
            <img src={img2} alt="Logo SACEM" style={{width:"18rem", height:"10rem"}}/>
            </p>
          </Col>
        </Row>

        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
          <Col span={12}>
            <p className={classes.partenaireDescr}>
              <a href="https://www.ac-paris.fr/portail/"> <b>Le Rectorat de Paris</b></a>
            </p>
          </Col>
          <Col span={12}>
            <p className={classes.partenaireDescr}>
            <a href="https://www.billaudot.com/fr/"> <b>Les Editions Gérard Billaudot</b></a>
            </p>
          </Col>
        </Row>

        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
          <Col span={12}>
            <p className={classes.partenaireDescr}>
              <img src={img3} alt="Logo Rectorat de Paris" style={{width:"12rem", height:"8rem"}}/>
            </p>
          </Col>
          <Col span={12}>
            <p className={classes.partenaireDescr}>
            <img src={img4} alt="Logo Editions Gérard Billaudot" style={{width:"25rem"}}/>
            </p>
          </Col>
        </Row>
        </GridItem>
      </GridContainer>
    </div>
  );
}
