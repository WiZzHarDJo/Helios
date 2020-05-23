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
    <div style={{border:"5px solid #b4ddff", borderRadius:"15px"}}>
      <div className={classes.program} style={{marginBottom:"40px"}}>
        <b>Mélomanes, rejoignez les « Amis de l’Ensemble Hélios » et faites rayonner la musique ! <br/><br/>
        Soutenez les projets du quatuor et partagez des moments conviviaux avec les musiciens</b>
      </div>

      <div className={classes.subdescrEdition}>
          1. Vous souhaitez participer à la vie de l’Ensemble Hélios ou le soutenir financièrement. <br/>
          Ses domaines de diffusion sont multiples :
          <div className={classes.subdescrEdition}>
          •	Musique classique (plus de 2000 concerts en 30 ans) <br/> <br/>
          •	Musique contemporaine (80 œuvres dédiées et une activité soutenue de création) <br/> <br/>
          •	Projets pédagogiques vers le jeune public et le public familial (3 spectacles pour les enfants, : des actions au sein de l’Education Nationale et des conservatoires lui ont valu l’Habilitation du Rectorat de Paris) <br/> <br/>
          </div>
          </div>

          <div className={classes.subdescrEdition} style={{marginBottom:"40px"}}>
          2. Rapprochez vous de l’Ensemble Hélios !
          <div className={classes.subdescrEdition}>
          •	Vos dons (l’Ensemble Hélios est une association à but non lucratif) <br/>
          •	Votre aide pour diffuser nos programmes et nos événements <br/>
          •	Votre temps pour nous seconder ponctuellement
            </div>
            sont les bienvenus.
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
