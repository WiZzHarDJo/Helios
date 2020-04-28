import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import img1 from "./../../../assets/img/logo-liberté.png";
import img2 from "./../../../assets/img/logo-sacem.jpg";
import img3 from "./../../../assets/img/rectorat-logo.png";
import img4 from "./../../../assets/img/logo-billaudot.png";



// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";


import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nos Partenaires</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
        <p className={classes.subdescr}>
            L'Ensemble Hélios a l'honneur d'être soutenu dans ses activités artistiques de création et de concerts par les partenaires suivants :
          </p>
          <p className={classes.partenaireDescr}>
          <a href="https://www.mnl-paris.com"> Musique Nouvelle en Liberté</a>
          <img src={img1} alt="Logo Musique Nouvelle en Liberté" style={{marginTop:"10px", width:"30rem"}}/>
          </p>
          <p className={classes.partenaireDescr}>
            <a href="https://www.sacem.fr/"> La Société des auteurs, compositeurs et éditeurs de musique</a>
            <img src={img2} alt="Logo SACEM" style={{marginTop:"10px", width:"30rem"}}/>
          </p>
          <p className={classes.partenaireDescr}>
            <a href="https://www.ac-paris.fr/portail/"> Le Rectorat de Paris</a>
            <img src={img3} alt="Logo Rectorat de Paris" style={{marginTop:"10px", width:"30rem"}}/>
          </p>
          <p className={classes.partenaireDescr}>
            <a href="https://www.billaudot.com/fr/"> Les Editions Gérard Billaudot</a>
            <img src={img4} alt="Logo Editions Gérard Billaudot" style={{marginTop:"10px", width:"30rem"}}/>
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
