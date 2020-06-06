import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {Row, Col, Button, Collapse } from "antd";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

import img1 from "./../../../assets/img/logo-liberté.png";
import img2 from "./../../../assets/img/logo-sacem.jpg";
import img3 from "./../../../assets/img/rectorat-logo.png";
import img4 from "./../../../assets/img/logo-billaudot.png";

import Entreprise from "./Entreprise";
import Particulier from "./Particulier";

const useStyles = makeStyles(styles);
const { Panel } = Collapse;

export default function ProductSection() {
  const classes = useStyles();

  const [type, setType] = useState(0);

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>Devenez mécène ou donnez un peu de votre temps à l’Ensemble Helios</h2>
        </GridItem>
        <GridItem>
          <h5 className={classes.subdescr}>
          Entrez dans les coulisses de l’Ensemble Hélios et participer au projet qui vous correspond.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem style={{marginBottom:"40px"}}>
          <Collapse>
            <Panel header="Saison musicale de l’Ensemble Hélios" style={{textAlign: "left", fontSize:"30px"}}>
              <h4 className={classes.subdescrEdition}>
                •	Une saison de concerts classiques <br/>
                •	Une politique de création en compagnie des compositeurs les plus talentueux de notre temps <br/>
                •	Un échange régulier avec le jeune public par des spectacles musicaux, des actions culturelles et éducatives <br/>
                •	L’Ensemble Hélios a pour projet de partager et de transmettre la musique, classique ou contemporaine, sous toutes ses formes, par le concert ou le spectacle. <br/>
                •	Ses musiciens s’engagent dans de multiples actions culturelles et éducatives à destination de tous les publics <br/>
                •	L’Ensemble Hélios passe de nombreuses commandes aux compositeurs pour nourrir son importante activité de création (80 œuvres dédiées à ce jour) <br/>
              </h4>
            </Panel>
            <Panel header="Actions culturelles et éducatives" style={{textAlign: "left", fontSize:"30px"}}>
              <h4 className={classes.subdescrEdition}>
                •	Les musiciens de l’Ensemble Hélios s’engagent pour faire découvrir la musique à tous les publics qu’il s’agisse des :
              <div className={classes.subdescrEdition}>
                o	Plus jeunes (concerts éducatifs, concerts en famille, contes musicaux…) <br/>
                o	Publics empêchés (visites musicales à l’hôpital au chevet des enfants malades, actions à destination des personnes handicapées, concerts en milieu carcéral ou en Ehpads….).
              </div>
              </h4>
            </Panel>
            <Panel header="Récompenses et Reconnaissance" style={{textAlign: "left", fontSize:"30px"}}>
              <h4 className={classes.subdescrEdition}>
                •	Les musiciens de l’Ensemble Hélios : 4 prix de CNSM & 10 prix internationaux <br/>
                •	L’Ensemble Hélios :
                <div className={classes.subdescrEdition}>
                  o	Lauréat des Fondations Cziffra et Menuhin <br/>
                  o	Récompensé en 2016 par la Fondation Louis de Polignac <br/>
                  o	« Coup de Cœur » Radio Classique & 2T Télérama pour son spectacle Jeune public « Debussy Miss et Chouchou » <br/>
                  o	180 représentations pour son spectacle « Comment Mozart vient aux enfants… ». <br/>
                </div>
              </h4>
            </Panel>
            <Panel header="Associez-vous au projet qui vous ressemble" style={{textAlign: "left", fontSize:"30px"}}>
              <h4 className={classes.subdescrEdition}>
                •	Concerts <br/>
                •	Spectacles vers les publics empêchés <br/>
                •	Actions culturelles et éducatives <br/>
                •	Commandes d’œuvres contemporaines <br/>
              </h4>
            </Panel>
          </Collapse>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Les « Amis de l’Ensemble Hélios »
          </h3>
          <h4 className={classes.subdescr}>
          Depuis 30 ans, l’Ensemble Hélios est soutenu par des auditeurs fidèles, enthousiasmés par l’aventure entreprise par les 4 musiciens : explorer les territoires inconnus du répertoire du trio à cordes et flûte et l’élargir en suscitant des compositions. <br/><br/>
          En nous rejoignant, prenez part à l’aventure.
          <div className={classes.subdescrEdition}>
          •	Rencontrez les musiciens, les compositeurs…. <br/>
          •	Assistez à des répétitions… <br/>
          •	Partagez des moments conviviaux autour de concerts privés.
          </div>
          </h4>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem style={{marginBottom:"40px"}}>
        <Row
          type="flex"
          style={{ alignItems: "center" }}
          justify="center"
          gutter={10}
        >
          <Col span={12}>
            <div className={classes.title} style={{height:"150px"}}>
              <Button block style={{height:"inherit", fontSize:"xxx-large", backgroundColor:"#ffe57f"}} onClick={() => setType(1)}>Vous êtes une entreprise</Button>
            </div>
          </Col>
          <Col span={12}>
          <div className={classes.title} style={{height:"150px"}}>
              <Button block style={{height:"inherit", fontSize:"xxx-large", backgroundColor:"#b4ddff"}} onClick={() => setType(2)}>Vous êtes un particulier</Button>
            </div>
          </Col>
        </Row>
        {
          type===1 &&
          <Entreprise/>
        }
        {
          type===2 &&
          <Particulier/>
        }
        </GridItem>
      </GridContainer>

      <GridContainer>
      <GridItem>
          <h3 className={classes.subtitle} style={{marginBottom:"40px"}}>
          Partenariats
          </h3>
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
