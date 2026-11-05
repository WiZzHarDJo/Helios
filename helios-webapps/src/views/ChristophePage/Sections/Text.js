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

import cello from "../../../assets/img/tri/celloplay.JPG";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Christophe Beau</h2>
        </GridItem>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
          className="responsive"
        >
          <img src={cello} className="responsiveImg" alt="Quatuor Hélios" />
          <GridItem>
            <div className={classes.subdescr}>
              Elève de Marcel Bardon au CNR de Paris, Christophe Beau obtient
              une Médaille d'Or (1985), un Premier Prix d'Excellence de
              violoncelle (1986) et un Premier Prix de Virtuosité (1987).En
              1988, il entre au CNSM de Lyon dans la classe d' Yvan Chiffoleau
              où il obtient un Premier Prix de violoncelle.
            </div>
            <div className={classes.subdescr}>
              Sélectionné par l' European Mozart Foundation, il part à Prague en
              1993 pour suivre les master-classes de musique de chambre. Il se
              produit dans les mardis de la Musique de Chambre de Radio France
              avec l'Ensemble De nos jours.Depuis 1992, Christophe Beau est
              membre des Virtuoses de France. En 1994, il est Directeur et
              co-fondateur du Festival Musique en Ecrins pendant 13 ans. Il
              réside à l'Abbaye de la Prée de 1995 à 1998 où il participe aux
              Rencontres Musicales.
            </div>
          </GridItem>
        </div>
        <GridItem>
          <div className={classes.subdescr}>
            Depuis 2000, il se produit chaque année au Japon, en particulier
            avec le quatuor Ravel. Depuis 2005, il parcouurt l'Europe,l'Asie et
            les Amériques avec des ensembles dont il est membre permanent :
            Accroche Notes, Lucilin, ou l'Ensemble Hélios.
          </div>

          <div className={classes.subdescr}>
            Titulaire du Certificat d'Aptitude à l'enseignement du violoncelle
            en 1995, Christophe Beau est Professeur titulaire au Conservatoire
            Gabriel Fauré à Paris.
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
              <Link to="/christel" className={classes.navLink}>
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
          <Link to="/christel" className={classes.navLink}>
            Découvrez un autre musicien
          </Link>
        </Button>
      </MobileView>
    </div>
  );
}
