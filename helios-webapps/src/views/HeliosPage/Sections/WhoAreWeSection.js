import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import "./responsive.css";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import arbre from "../../../assets/img/tri/arbre.jpg"

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Qui sommes nous ?</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <div style={{display:"flex", alignItems: "center", marginBottom:"20px"}} className="responsive">
        <img src={arbre} className="responsiveImg"/>
        <GridItem>
          <p className={classes.subdescr}>
            Bien plus que la rencontre fortuite d’une flûtiste et d’un trio à cordes, l’Ensemble HÉLIOS est une formation constituée, réunissant quatre artistes dont l'engagement et le talent portent le genre du quatuor pour flûte et cordes à son plein épanouissement. Articulé autour d'un quatuor flûte et trio à cordes, les musiciens d'Hélios se présentent aussi en géométrie variable. La harpe s'ajoute souvent  à la formation pour le répertoire du quintette flûte, trio à cordes et harpe. Duos et trios apparaissent aussi dans les programmations.
          </p>
          <p className={classes.subdescr}>
            Le travail mené par ces musiciens depuis près de 20 ans revêt ainsi une importance considérable. Au-delà des oeuvres majeures que sont les quatre quatuors de Mozart, ils s'attachent, grâce à d’incessantes recherches, à faire redécouvrir au public une immense littérature encore peu connue.
          </p>
          <p className={classes.subdescr}>
            Leur répertoire comprend aujourd’hui plus de deux cents quatuors couvrant les époques classique et romantique, et la première moitié du XXe siècle. Leur redécouverte – ponctuée d’un premier enregistrement mondial – des exceptionnels quatuors de Ferdinand Ries (1784-1838) a marqué une étape décisive dans la remise en lumière de ce répertoire.
          </p>
        </GridItem>
        </div>
        <GridItem>
          <p className={classes.subdescr}>
            Par ailleurs, ils allient leur passion de la musique de chambre à un engagement constant pour la musique contemporaine. Ils ont rapidement suscité de nombreuses compositions nouvelles et assurent chaque année plusieurs créations (80 oeuvres dédiées à ce jour). 
          </p>
          <p className={classes.subdescr}>
            Des personnalités marquantes de notre temps telles que Thierry Escaïch, Alain Louvier, Paul Méfano, Jindrich Feld, Nicolas Bacri, Thierry Pécou, Philippe Hersant…. ont écrit à l’intention de l’Ensemble Hélios, redonnant ainsi au quatuor avec flûte sa place et son importance dans la musique de notre temps.
          </p>
          <p className={classes.subdescr}>
            L'ensemble Hélios, lauréat des Fondations Menuhin et Cziffra, a aussi reçu en 2016 le prix du conseil d'administration de la Fondation Prince Louis de Polignac.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
