import React from "react";
import _ from "lodash";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import { BrowserView, MobileView } from "react-device-detect";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import "antd/dist/antd.css";

import temoignages from "./../../../assets/data/tisne.json";
import QuoteBlue from "../../../components/Typography/QuoteBlue.js";
import QuoteBlue100 from "../../../components/Typography/QuoteBlue100.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const renderTemoignage = (temoignageItem, id) => {
    return (
      <QuoteBlue
        key={id}
        text={temoignageItem.text}
        author={temoignageItem.author}
      />
    );
  };

  const renderTemoignageMobile = (temoignageItem, id) => {
    return (
      <QuoteBlue100
        key={id}
        text={temoignageItem.text}
        author={temoignageItem.author}
      />
    );
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Témoignages</h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <BrowserView>
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className={classes.subdescr}
          >
            {temoignages.length && _.map(temoignages, renderTemoignage)}
          </div>
        </BrowserView>
        <MobileView>
          <div className={classes.subdescr}>
            {temoignages.length && _.map(temoignages, renderTemoignageMobile)}
          </div>
        </MobileView>
      </GridContainer>
    </div>
  );
}
