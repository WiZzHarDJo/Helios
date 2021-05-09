import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {Row, Col, Button} from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import {
  BrowserView,
  MobileView,
} from "react-device-detect";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>Nathanaëlle Marie</h2>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Nathanaëlle MARIE a étudié au Conservatoire National Supérieur de Musique de Paris, où elle a obtenu un Premier Prix de violon, un Premier Prix de musique de chambre en sonate ainsi qu'un Premier Prix en quatuor à cordes. Elle y a poursuivi un Cycle de Perfectionnement de violon-solo couronné par un Premier Prix, ainsi qu'un Cycle de Perfectionnement de trio avec piano au sein du trio MARIE, avec lequel elle a été lauréate du Forum international de Normandie et du Concours international de Kuhmo en Finlande. Ses professeurs furent Gérard Poulet, Alexandre Brussilovski, le violoncelliste Michel Strauss et le grand pédagogue Georgy Sebök.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Violon-solo de l'Ensemble Ricercata de Paris jusqu'en 2010, elle a joué au Théâtre des Champs-Elysées, à Séoul, Tahiti, Los Angeles et à travers toute l'Europe. Elle s'est produite en soliste ou en musique de chambre aux festivals de Dinard-Côte d'Emeraude, Guil-Durance, Musica, Musique en Ecrins, Plage musicale en Bangor de Belle-Ile en-mer, aux Rencontres musicales de Strasbourg, de La Prée, du Larzac, au festival des Forêts, au festival de Feldkirch en Autriche, au festival Bach à Séoul, au festival Pont Alexandre 3 à Moscou...
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Elle est membre du Quatuor Hélios et du Quatuor Résonnance, avec lesquels elle a joué récemment dans les salles Cortot, Gaveau ou Victoria Hall à Genève. Sa discographie comporte entre autre les deux trios avec piano de Georges Migot -chez Musidisc/Accord-, le premier Quatuor à cordes de Aymé Kunc, paru chez Musidisc/M10, la musique de chambre pour cordes de Renaud Gagneux , l’Office des naufragés d’Olivier Greiff, ainsi que le trio avec piano de Benoît Menut chez Triton- et la musique de chambre avec flûte d'Antoine Tisné avec le quatuor Hélios -chez Horizons disques. Titulaire du C.A. de violon, Nathanaëlle MARIE enseigne au CRD Val-Maubuée à Noisiel.
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
          <Col span={15}>
          </Col>
          <Col span={6}>
          <Button size="large">
            <Link to="/isabelle" className={classes.navLink}>
              Découvrez un autre musicien
            </Link>
          </Button>
          </Col>
        </Row>
      </BrowserView>
      <MobileView>
          <Button size="large" style={{marginBottom:"15px"}}>
            <ArrowLeftOutlined />
            <Link to="/" className={classes.navLink}>
              Retour
            </Link>
          </Button>

          <Button size="large">
            <Link to="/vinciane" className={classes.navLink}>
              Découvrez un autre musicien
            </Link>
          </Button>
      </MobileView>
    </div>
  );
}
