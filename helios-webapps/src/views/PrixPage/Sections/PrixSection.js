import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import "./responsive.css";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import assemblee from "../../../assets/img/prixlaique/assembleenationale.jpg";

import radio from "../../../assets/audio/radioorient.mp3";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Prix de l'Initiative Laïque 2022</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
          className="responsive"
        >
          <img
            src={assemblee}
            className="responsiveImg"
            alt="Yaël Braun-Pivet"
          />
          <GridItem>
            <p className={classes.subdescr}>
              Lors des « Rendez-vous de l'Histoire » à Blois, le{" "}
              <b>Prix de l'Initiative Laïque 2022</b> a été décerné vendredi 7
              octobre à l'Ensemble Helios pour son spectacle{" "}
              <b>« J'suis différent »</b>, à destination du jeune public de 4 à
              11 ans, hymne au respect des differences et à la tolerance.
            </p>
            <p className={classes.subdescr}>
              Ce Prix organisé par la MGEN, la MAIF et la CASDEN a été remis au
              quatuor par le President de la MAIF, Yves Pellisier, en présence
              de Matthias Savignac, President de la MGEN, de François Brun,
              administrateur de la CASDEN et de Yaël Braun-Pivet, Présidente de
              l Assemblée Nationale.
            </p>
            <p className={classes.subdescr}>
              Le spectacle « J'suis différent » met en scéne dans une forêt un
              trio à cordes qui refuse de jouer avec une flutiste au pretexte
              que la flûte n'est pas un instrument (elle n'a pas de cordes ni
              d'archet) et que les sons qui en émanent ne sont pas de la
              musique. Ce rejet de la différence va peu à peu s'estomper pour
              mettre en évidence la beauté de la musique produite par le mélange
              des instruments à corde et à vent. La force du spectacle réside
              dans son universalité.
            </p>
            <p className={classes.subdescr}>
              Ce message humaniste trés fort, transmis via un spectacle musical
              et le dossier pédagogique trés complet (francais, instruction
              civique, mathématiques, dessin etc) remis aux enseignants des
              classes de MS au CM2 sont les éléments clefs qui ont retenu l'
              attention du Jury.{" "}
            </p>
          </GridItem>
        </div>
        <GridItem>
          <p className={classes.subdescr} style={{ textAlign: "center" }}>
            <i>
              La présidente de l'Assemblée Nationale Yaël Braun-Pivet félicitant
              l'Ensemble Hélios pour son prix et son engagement, lors de son
              discours, au « Rendez-vous de l'Histoire » à Blois.
            </i>
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
