import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import img1 from "./../../../assets/img/mnl-logo.jpg";
import img2 from "./../../../assets/img/proquartet-logo.jpg";


// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";


import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nos Partenaires</h2>
          <p className={classes.description}>
            L'Ensemble Hélios a l'honneur d'être soutenu dans ses activités artistiques de création et de concerts par <a href="https://www.mnl-paris.com">Musiques Nouvelles en Liberté</a>.
            <img src={img1} alt="mnl-logo" style={{marginTop:"10px"}}/>
          </p>
          <p className={classes.description}>
            L'Ensemble Hélios travaille en partenariat avec l'association <a href="https://www.proquartet.fr">Proquartet</a>.
            <br/>
            <img src={img2} alt="proquartet-logo" style={{marginTop:"15px"}}/>
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
