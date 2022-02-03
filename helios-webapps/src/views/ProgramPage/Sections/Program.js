import React from "react";
import _ from "lodash";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import "antd/dist/antd.css";

import program from "./../../../assets/data/programexample.json";
import ProgramCard from "./../../../components/ProgramCard/ProgramCard.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const renderProgram = (programItem, id) => {
    return <ProgramCard key={id} programItem={programItem} />;
  };

  return (
    <React.Fragment>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>
              Proposition de programmes musicaux
            </h2>
          </GridItem>
          <GridItem>
            <p className={classes.subdescr}>
              La richesse du répertoire pour flûte, violon, alto et violoncelle
              permet à l’Ensemble HÉLIOS de proposer de nombreux programmes
              variés suivant les époques, styles, pays, esthétiques, thèmes… Les
              quelques propositions indiquées ici sont donc loin de représenter
              une liste exhaustive !
            </p>
            <p className={classes.subdescr}>
              L’ensemble module également sa formation afin d’inclure duos et
              trios dans divers programmes, et propose également divers
              quintettes pour flûte et cordes, ou flûte, trio à cordes et harpe.
              Il se tient toujours à l’écoute des organisateurs de concerts afin
              de leur proposer les programmes répondant idéalement à leurs
              attentes.
            </p>
            <p className={classes.subdescr}>
              Survolez les programmes pour voir les oeuvres qui les composent.
            </p>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className={classes.subdescr}
          >
            {program.length && _.map(program, renderProgram)}
          </div>
        </GridContainer>
      </div>
    </React.Fragment>
  );
}
