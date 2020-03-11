import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";



const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>Edition musicales et Hélios</h2>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Les éditions <a href="https://www.billaudot.com/fr/">G. BILLAUDOT</a> ont nommé en 2001 l'Ensemble HÉLIOS Directeur d'une collection consacrée à la formation flûte et trio à cordes – une première dans le monde de l’édition musicale.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          *Bacri 3 nocturnes op 79
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Borne Fantaisie brillante sur Carmen
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          *Castérède Ombres et clartés
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          *Chayne Images de la poésie grecque
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          *Damase 15 mn
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Doppler Fantaisie pastorale hongroise
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          *Duhamel Daumier face à Don Quichotte
          </div>
        </GridItem>

        <GridItem>
          <div className={classes.subdescr}>
          *Escaïch Variations gothiques
          </div>
        </GridItem>

        <GridItem>
          <div className={classes.subdescr}>
          *Feld Nocturne
          </div>
        </GridItem>

        <GridItem>
          <div className={classes.subdescr}>
          *Finzi Océan mer
          </div>
        </GridItem>

        <GridItem>
          <div className={classes.subdescr}>
          *Martins Labyrinthe
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Mozart Quartetto en RéM kv 311
          </div>
        </GridItem>

        <GridItem>
          <div className={classes.subdescr}>
          Mozart Quartetto en La M kv 331
          </div>
        </GridItem>

        <GridItem>
          <div className={classes.subdescr}>
          *Naulais Océane
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
