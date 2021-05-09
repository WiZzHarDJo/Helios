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
        <h2 className={classes.title}>Isabelle Lequien</h2>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Isabelle Lequien débute l'apprentissage de la musique par le violon et le
piano et se tourne très vite vers la sonorité chaleureuse de l'alto.
Elle obtient en 1985 un1er prix au CNSM de Paris dans la classe de Colette Lequien.
Passionnée de musique de chambre elle intègre le cycle de perfectionnement du
CNSM dans la classe de Christian Ivaldi et fonde le quatuor avec piano Fidelio qui remporte le 1er prix "Sergio Lorenzi" au concours international de
Trieste (Italie).

          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Elle devient l’altiste du quatuor à cordes Quad (avec Jeanne Marie Conquer-violon notamment) puis du trio Celmis avec Christophe Poiget-violon et Jean Ferry-violoncelle en 2018.
Elle forme un duo avec le pianiste Aurélien pontier.
Elle partage son activité musicale entre des concerts en
soliste ou en musique de chambre (la Roque d'Anthéron, festivals de Stresa et de Malte, salle Gaveau à Paris,
Théatres de St Quentin en Yvelines, du Rond Point des Champs Elysées à Paris, de la criée à
Marseille, week ends de l'Ermitage à La Baule, les Estivales en Puisaye Forterre , etc..).

          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Elle se tourne vers des expériences théâtrales d’abord au sein du trio « Arts d’Echos » (notamment « l’Hypothèse Mozart » pièce-musicale sur un texte de Frédéric Sounac, mise en scène Bernard Bloch à l’affiche la saison 2008-2009) puis seule avec deux monologues: « Madame Marguerite » » de Roberto Athayde et « Le Sas » de Michel Azama, en collaboration avec le compositeur Thierry Machuel mise en scène Karine Kadi, qu’elle joue au CRR de Boulogne Billancourt en 2017.
Très attirée par la pédagogie elle obtient le CA d’alto en 1995.
Elle enseigne depuis au CRD d’Auxerre et au CRR de Boulogne Billancourt.
Elle rejoint Michel Michalakakos au CNSM de Paris en 1997 et Gérard Caussé en 2007.

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




