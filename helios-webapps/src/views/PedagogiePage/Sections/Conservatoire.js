import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Dans le cadre des conservatoires et écoles de musique.</h2>
          <h5 className={classes.description}>
            Hélios met son expérience au service des jeunes musiciens et les aident à progresser bla bla bla
            Les descriptifs complets de ces projets sont disponibles à la demande.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          « Autour de la musique de chambre »
          </h3>
          <h4 className={classes.subdescr}>
          L’Ensemble propose un projet de pédagogie et diffusion, qui s’articule autour du répertoire contemporain, pour les cycles 1, 2 et 3. <br/>
          Cette intervention se fait sous forme de résidence et s’adapte à l’établissement concerné. <br/>
          Elle peut s’organiser autour du répertoire d’un compositeur spécifique, et concerne alors toutes les classes. <br/>
          Elle peut aussi s’organiser autour des classes de flûte, violon, alto, violoncelle par le montage d’œuvres pédagogiques pour les cycles 1 et 2, ou d’œuvres du répertoire pour le cycle 3. <br/><br/>
          Hélios possède un très riche répertoire pour ce travail de musique de chambre, courtes pièces spécifiquement adaptées à de « mini-Hélios» et écrites à cette intention par des compositeurs de style et langage très variés : Alain Louvier, Jacques Castérède, Graciane Finzi, Enzo Gieco, Raymond Guiot, Gilles Carré, Christel Rayneau, Jean-Michel Damase, Rui Martins, Jean-René Combes-Damien etc….
          </h4>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          « En collaboration avec la classe de flûte »
          </h3>
          <h4 className={classes.subdescr}>
          L'Ensemble propose un programme qui fait s'entrecroiser son propre répertoire et des ensembles de flûtes des trois cycles ( en duos, trios, quatuors). <br/><br/>
          A un quatuor de Feld dédié à Hélios, par exemple, répond l'exécution d'un trio de flûte par les étudiants du lieu. Le but est de mobiliser les classes de flûte, en générale très actives, et de montrer aux étudiants les aspects différents du travail du compositeur à travers des formations tranchées. <br/><br/>
          Ce projet sollicite beaucoup les compositeurs flûtistes de tous les temps ( Wendling, Berbiguier, Furstenau, Devienne, Doppler, Belloq, Luypaerts...) mais encore des compositeurs plus variés ( Feld, Hersant, Louvier, Telemann ...)
          </h4>
        </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
