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
        <h2 className={classes.title}>Vinciane Béranger</h2>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            Altiste aux multiples facettes, Vinciane Béranger souhaite mieux faire connaître l’alto, et créer des ponts entre les diverses formes d’expression. Membre du Quatuor Manfred jusqu’à 2008, elle explore aujourd’hui de nouveaux horizons, car l’improvisation, la musique de son temps et le contact avec ses auteurs l’intéressent particulièrement. Les liens entre texte parlé et musique enrichissent son travail : représentation scénique autour de la musique ou de la littérature (spectacles autour de Berlioz, de Moby Dick), et théâtre musical (Rebotier et Aperghis). Avec sa viole d’amour, elle aborde les répertoires baroques et contemporains.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            Elle se produit régulièrement comme soliste avec des orchestres européens et américains et participe aux festivals Juventus à Cambrai, de Marlboro (USA), d’Ile de France, d’Aix en Provence, d’Auvers-sur-Oise, aux Folles Journées de Nantes, aux Rencontres musicales d’Evian, aux Flâneries de Reims… Titulaire du Certificat d’Aptitude d’alto, elle est actuellement professeur d’alto et d’improvisation au CRR de Saint-Maur-des-Fossés et au Conservatoire du 6ème arrondissement de Paris.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            Admise à l’âge de 16 ans au Conservatoire National Supérieur de Musique de Paris dans la classe de Gérard Caussé, Vinciane Béranger obtient un premier prix d’alto à l’unanimité et un premier prix de musique de chambre. Elle s’est perfectionnée auprès de Kim Kashkashian en Allemagne et a achevé sa formation au Curtis Institute de Philadelphie en tant que lauréate de la Bourse Lavoisier du Ministère des Affaires Etrangères et du programme Fulbright. Lauréate du Connelly Memorial Prize au Concours International de Washington, et du Concours International de Rome, Deuxième Prix du Concours International de Berne, Premier Prix du Concours d’Illzach, elle est aussi lauréate de la Fondation Natexis-Banques Populaires. Elle joue un alto de Pietro Giovanni Mantegazza, daté de 1770.
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
            <Link to="/christophe" className={classes.navLink}>
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
            <Link to="/christophe" className={classes.navLink}>
              Découvrez un autre musicien
            </Link>
          </Button>
      </MobileView>
    </div>
  );
}




