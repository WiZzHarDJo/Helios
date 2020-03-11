import React from "react";
import _ from "lodash";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import artwork from "./../../../assets/data/oeuvres.json";
import OeuvreCard from "./../../../components/OeuvreCard/OeuvreCard.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const renderArtwork = (artworkItem, id) => {
    return <OeuvreCard key={id} artworkItem={artworkItem}/>
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Oeuvres dédiées à Hélios</h2>
          <p>L'ensemble Hélios à l'honneur d'avoir été l'inspiration de plus de 70 oeuvres qui lui ont été dédiées.</p>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
            <div style={{display: "inline-flex", flexWrap: "wrap", justifyContent:"center"}} className={classes.subdescr}>
                {artwork.length && _.map(artwork, renderArtwork) }
            </div>
      </GridContainer>
    </div>
  );
}
