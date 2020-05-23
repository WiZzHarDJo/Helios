import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {Link} from "react-router-dom";
import {Button} from "antd";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  return (
    <div style={{border:"5px solid #ffe57f", borderRadius:"15px"}}>
      <div className={classes.program} style={{marginBottom:"40px"}}>
        <b>Associez votre nom et votre image à l’Ensemble Hélios <br/><br/>
        Soutenez des projets qui font écho aux valeurs de votre entreprise <br/><br/>
        Proposez à vos clients un évènement culturel d’exception</b>
      </div>

      <div className={classes.subdescrEdition}>
        1. Vous souhaitez être le Mécène d’un :
        <div className={classes.subdescrEdition}>
          •	Quatuor de musique classique cordes & flûte aux musiciens issus du CNSM de Paris et récompensés par des prix internationaux <br/> <br/>
          •	Au répertoire immense, promouvant la musique contemporaine (80 œuvres dédiées à l’Ensemble Hélios à ce jour par des compositeurs contemporains de renom Hersant, Bacri, Damase, Canat de Chizy, Escaïch….) <br/> <br/>
          •	Habilité par le Rectorat de Paris pour ses actions pédagogiques et de diffusion vers le jeune public : contes musicaux, actions en milieu scolaires, actions au sein des conservatoires. <br/> <br/>
          •	Dépassant le cadre habituel des salles de concert pour porter son art aux publics empêchés dans les hôpitaux, le milieu carcéral, les Ehpads…. <br/> <br/>
          •	Reconnu par les spécialistes et la critique (Coups de cœur Radio Classique, 2 T Télérama) <br/> <br/>
        </div>
      </div>

      <div className={classes.subdescrEdition} style={{marginBottom:"40px"}}>
        2. Vous souhaitez monter ou sponsoriser avec nous un projet particulier :
        <div className={classes.subdescrEdition}>
          •	Concert d’entreprise <br/>
          •	Evènement commercial <br/>
          •	Spectacle de Noël <br/>
          •	Achat groupé de places par votre CE <br/>
          •	Autre projet
        </div>
      </div>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} style={{marginBottom:"40px"}}>
        <h2>Alors  n’hésitez-pas, contactez-nous, nous serons ravis de vous rencontrer </h2>
        <Button size="large">
          <Link to="/contact" className={classes.navLink}>
            Nous contacter
          </Link>
        </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
