import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import Carousel from "../../../components/Carousel/Carousel.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import imageCarousel from "../../../assets/data/galeriePhoto.json";
import imageCarouselNB from "../../../assets/data/galeriePhotoNB.json";
import imageCarouselConcert from "../../../assets/data/galeriePhotoConcert.json";
import imageCarouselRodin from "../../../assets/data/galeriePhotoRodin.json";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Galerie photo de l'Ensemble Hélios</h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem style={{ marginBottom: "5vh" }}>
          <Carousel images={imageCarousel} />
          <div style={{ color: "black", fontWeight: "bold" }}>
            Crédit photographies :
            <a href="https://www.annikmarinphotos.com/"> Annik MARIN</a>
          </div>
        </GridItem>
        <GridItem>
          <Carousel images={imageCarouselNB} />
          <div style={{ color: "black", fontWeight: "bold" }}>
            Crédit photographies :
            <a href="https://www.annikmarinphotos.com/"> Annik MARIN</a>
          </div>
        </GridItem>
        <GridItem>
          <Carousel images={imageCarouselConcert} />
          <div style={{ color: "black", fontWeight: "bold" }}>
            Concert donné au Cercle de l'Union Interalliée
          </div>
        </GridItem>

        <GridItem>
          <Carousel images={imageCarouselRodin} />
          <div style={{ color: "black", fontWeight: "bold" }}>
            Concert donné aux Jardins du Musée Rodin Bari
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
