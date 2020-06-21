import React from "react";
import _ from "lodash";
import moment from "moment";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {Row, Col} from "antd";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

import {
  BrowserView,
  MobileView,
} from "react-device-detect";

import programmation from "./../../../assets/data/programmation.json";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const now = moment();

  const renderProgrammation = (program, id) => {

    if(id % 2 === 0 && !moment(program.datum).isBefore(now)){
      return (
        <GridItem key={id} style={{marginBottom:"40px"}}>
      <h4 className={classes.subtitle}>
        {program.title}
      </h4>
      <Row
      type="flex"
      style={{ alignItems: "center" }}
      justify="center"
      gutter={10}
  >
        <Col span={14}>
          <p className={classes.subdescr}>
          {program.description}
          </p>
          {
            'artiste' in program && (
              <p className={classes.subdescr}>
              <b>Programme de l'évènement :</b> {program.artiste}
              {program.duration}
              </p>
            )
          }
          <p className={classes.subdescr}>
          <b>{program.date}</b> <br/>
          {program.lieu}
          </p>
        </Col>
        <Col span={10}>
          <p className={classes.partenaireDescr}>
            <img src={require(`./../../../assets/img/${program.img}`)} alt={program.title} style={{height:"350px",width:"425px", objectFit:"cover"}}/>
          </p>
        </Col>
        </Row>
    </GridItem>
    )
    }
    else if(!moment(program.datum).isBefore(now)){
      return(
        <GridItem key={id} style={{marginBottom:"40px"}}>
      <h4 className={classes.subtitle} style={{marginBottom:"20px"}}>
        {program.title}
      </h4>
      <Row
      type="flex"
      style={{ alignItems: "center" }}
      justify="center"
      gutter={10}
  >
        <Col span={10}>
          <p className={classes.partenaireDescr}>
            <img src={require(`./../../../assets/img/${program.img}`)} alt={program.title} style={{height:"350px",width:"425px", objectFit:"cover"}}/>
          </p>
        </Col>
        <Col span={14}>
          <p className={classes.subdescr}>
          {program.description}
          </p>
          {
            'artiste' in program && (
              <p className={classes.subdescr}>
              <b>Programme de l'évènement :</b> {program.artiste}
              {program.duration}
              </p>
            )
          }
          <p className={classes.subdescr}>
          <b>{program.date}</b> <br/>
          {program.lieu}
          </p>
        </Col>
        </Row>
    </GridItem>
      )
    }
  }

  const renderProgrammationMobile = (program, id) => {

    if(!moment(program.datum).isBefore(now)){
      return(
        <GridItem key={id} style={{marginBottom:"40px"}}>
      <h4 className={classes.subtitle} style={{marginBottom:"20px"}}>
        {program.title}
      </h4>
          <p className={classes.partenaireDescr}>
            <img src={require(`./../../../assets/img/${program.img}`)} alt={program.title} style={{height:"350px",width:"425px", objectFit:"cover"}}/>
          </p>

          <p className={classes.subdescr}>
          {program.description}
          </p>
          {
            'artiste' in program && (
              <p className={classes.subdescr}>
              <b>Programme de l'évènement :</b> {program.artiste}
              {program.duration}
              </p>
            )
          }
          <p className={classes.subdescr}>
          <b>{program.date}</b> <br/>
          {program.lieu}
          </p>
    </GridItem>
      )
    }
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>1er Semestre 2020</h2>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
          <div className={classes.subdescr}>
            Plusieurs concerts ont été annulés ou décalés du fait du confinement dû au Covid 19.
            Nous mettrons à jour les dates de nos prochains concerts dès que nous aurons de la visibilité.
            Merci pour votre compréhension.
          </div>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Prochains évènements
          </h3>
        </GridItem>
        <BrowserView>
          {programmation.length && _.map(programmation, renderProgrammation)}
        </BrowserView>
        <MobileView>
        {programmation.length && _.map(programmation, renderProgrammationMobile)}
        </MobileView>

      </GridContainer>
    </div>
  );
}
