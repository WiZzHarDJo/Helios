import React, { useState } from "react";
import _ from "lodash";
import moment from "moment";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import { Row, Col, Card } from "antd";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

import { BrowserView, MobileView } from "react-device-detect";

import programmation from "./../../../assets/data/prograChronologieBrouillon.json";

import "moment/locale/fr";
moment.locale("fr");

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const [data, setData] = useState(programmation);

  const now = moment();

  const renderHeures = (heure, id) => {
    return (
      <div
        style={{
          minWidth: "5rem",
          textAlign: "center",
          marginRight: "1rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          fontWeight: "bold",
        }}
        key={id}
      >
        {heure}
      </div>
    );
  };

  const renderProgrammation = (program, id) => {
    if (id % 2 === 0 && !moment(program.datum).isBefore(now)) {
      return (
        <GridItem key={id} style={{ marginBottom: "40px" }}>
          <Card hoverable>
            <h4 className={classes.subtitle}>{program.title}</h4>
            <Row
              type="flex"
              style={{ alignItems: "center" }}
              justify="center"
              gutter={10}
            >
              <Col span={14}>
                <p className={classes.subdescr}>{program.description}</p>
                {"artiste" in program && (
                  <p className={classes.subdescr}>
                    <b>Programme de l'évènement :</b> {program.artiste}
                    {program.duration}
                  </p>
                )}
                <p className={classes.subdescr}>
                  <b>{program.date}</b> <br />
                  <div style={{ display: "flex" }}>
                    {program.heures.map(renderHeures)}
                  </div>
                  {program.lieu}
                </p>
              </Col>
              <Col span={10}>
                <p className={classes.partenaireDescr}>
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    style={{
                      height: "350px",
                      width: "425px",
                      objectFit: "cover",
                    }}
                  />
                </p>
              </Col>
            </Row>
          </Card>
        </GridItem>
      );
    } else if (!moment(program.datum).isBefore(now)) {
      return (
        <GridItem key={id} style={{ marginBottom: "40px" }}>
          <Card>
            <h4 className={classes.subtitle} style={{ marginBottom: "20px" }}>
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
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    style={{
                      height: "350px",
                      width: "425px",
                      objectFit: "cover",
                    }}
                  />
                </p>
              </Col>
              <Col span={14}>
                <p className={classes.subdescr}>{program.description}</p>
                {"artiste" in program && (
                  <p className={classes.subdescr}>
                    <b>Programme de l'évènement :</b> {program.artiste}
                    {program.duration}
                  </p>
                )}
                <p className={classes.subdescr}>
                  <b>{program.date}</b> <br />
                  <div style={{ display: "flex" }}>
                    {program.heures.map(renderHeures)}
                  </div>
                  {program.lieu}
                </p>
              </Col>
            </Row>
          </Card>
        </GridItem>
      );
    }
  };

  const renderProgrammationMobile = (program, id) => {
    if (!moment(program.datum).isBefore(now)) {
      return (
        <GridItem key={id} style={{ marginBottom: "40px" }}>
          <Card>
            <h4 className={classes.subtitle} style={{ marginBottom: "20px" }}>
              {program.title}
            </h4>
            <p className={classes.partenaireDescr}>
              <img
                src={program.imageUrl}
                alt={program.title}
                style={{ height: "350px", width: "425px", objectFit: "cover" }}
              />
            </p>

            <p className={classes.subdescr}>{program.description}</p>
            {"artiste" in program && (
              <p className={classes.subdescr}>
                <b>Programme de l'évènement :</b> {program.artiste}
                {program.duration}
              </p>
            )}
            <p className={classes.subdescr}>
              <b>{program.date}</b> <br />
              <div style={{ display: "flex" }}>
                {program.heures.map(renderHeures)}
              </div>
              {program.lieu}
            </p>
          </Card>
        </GridItem>
      );
    }
  };

  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem style={{ marginBottom: "40px" }}>
          <h3 className={classes.subtitle}>Prochains évènements</h3>
        </GridItem>
        <BrowserView>
          {programmation.length && _.map(data, renderProgrammation)}
        </BrowserView>
        <MobileView>
          {programmation.length && _.map(data, renderProgrammationMobile)}
        </MobileView>
      </GridContainer>
    </div>
  );
}
