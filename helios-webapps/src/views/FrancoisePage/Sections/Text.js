import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import { Row, Col, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { BrowserView, MobileView } from "react-device-detect";

import "./responsive.css";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

import alto from "../../../assets/img/tri/team/francoise-noir.png";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Francoise Renard</h2>
        </GridItem>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
          className="responsive"
        >
          <img src={alto} className="responsiveImg" alt="Quatuor Hélios" />
          <GridItem>
            <div className={classes.subdescr}>
              Diplomée en 1992 du CNSM de Paris Dans la classe de Bruno
              Pasquier, Françoise RENARD se perfectionne à Bordeaux avec Tasso
              Adamopoulos. Titulaire du CA, elle partage alors son activité
              entre l’enseignement (Conservatoires de Bondy et d’Argenteuil) et
              la Musique de Chambre. Elle participe à de nombreux Festivals en
              France comme à l’etranger au sein de formations allant du duo à
              l’octuor.
            </div>
            <div className={classes.subdescr}>
              En 2004, elle déménage en Italie et poursuit sa carrière au sein
              de divers orchestres ( Orchestra del Teatro Regio di Parma,
              Orchestra Filarmonica della Fenice à Venise, Orchestra del teatro
              Comunale di Bologna, Orchestra Filarmonica di Modena, Filarmonica
              Gioacchino Rossini de Pesaro) en tant qu’alto solo ou co-soliste
              et sous la direction de prestigieux chefs tels que Yuri
              Temirkanoff, Riccardo Muti, Michel Plasson, Hirofumi Yoshida..
            </div>
          </GridItem>
        </div>
        <GridItem>
          <div className={classes.subdescr}>
            Elle se produit aussi régulièrement en Musique de Chambre au sein de
            formations très variées avec des collègues de renom tel Roberto
            Baraldi-violon solo du théâtre de la Fenice - et Daniel Formentelli
            -alto solo du théâtre Communal de Bologne.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            De retour en France elle a intégré l’Ensemble Hélios.
          </div>
        </GridItem>
      </GridContainer>
      <BrowserView>
        <Row>
          <Col span={3}>
            <Button size="large">
              <ArrowLeftOutlined />
              <Link to="/" className={classes.navLink}>
                Retour
              </Link>
            </Button>
          </Col>
          <Col span={15}></Col>
          <Col span={6}>
            <Button size="large">
              <Link to="/christophe" className={classes.navLink}>
                Découvrez un autre musicien
              </Link>
            </Button>
          </Col>
        </Row>
      </BrowserView>
      <MobileView>
        <Button size="large" style={{ marginBottom: "15px" }}>
          <ArrowLeftOutlined />
          <Link to="/" className={classes.navLink}>
            Retour
          </Link>
        </Button>

        <Button size="large">
          <Link to="/christophe" className={classes.navLink}>
            Découvrez un autre musicien
          </Link>
        </Button>
      </MobileView>
    </div>
  );
}
