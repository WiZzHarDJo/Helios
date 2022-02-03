import React from "react";
import _ from "lodash";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import { Card } from "antd";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

import videoGalery from "./../../../assets/data/videoGalery.json";

const useStyles = makeStyles(styles);

export default function Videos() {
  const classes = useStyles();

  const renderVideo = (video, id) => {
    return (
      <Card
        title={video.title}
        style={{ width: "100%", marginBottom: "25px" }}
        bordered
      >
        <iframe
          src={`https://youtube.com/embed/${video.src}`}
          frameBorder="0"
          allowFullScreen
          title={video.title}
          style={{ width: "100%", height: "35rem" }}
        ></iframe>
        <p>{video.legend}</p>
      </Card>
    );
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Extraits musicaux</h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem>
          {videoGalery.length && _.map(videoGalery, renderVideo)}
        </GridItem>
      </GridContainer>
    </div>
  );
}
