import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import { PhoneTwoTone, MailTwoTone } from "@ant-design/icons";

import styles from "./../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import "antd/dist/antd.css";
import "./responsive.css";

import christel from "../../../assets/img/tri/team/flute.jpg";
import beatrice from "../../../assets/img/tri/team/bea.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <React.Fragment>
      <div className={classes.section}>
        <h2 className={classes.title}>Contactez-nous</h2>
        <div className="parent">
          <div className="div1">
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={beatrice}
                  alt="Béatrice Imhaus"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Béartice Imhaus
                <br />
                <small className={classes.smallTitle}>Présidente</small>
              </h4>
              <CardBody>
                <p className={classes.bigDescription}>
                  <PhoneTwoTone /> 06 60 73 36 06 <br />
                  <MailTwoTone /> helios.bim@orange.fr
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="div2">
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={christel}
                  alt="Christel Rayneau"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Christel Rayneau
                <br />
                <small className={classes.smallTitle}>
                  Directrice Artistique
                </small>
              </h4>
              <CardBody>
                <p className={classes.bigDescription}>
                  <PhoneTwoTone /> 06 60 59 77 51 <br />
                  <MailTwoTone /> c-rayneau@wanadoo.fr
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

/* import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import { Card } from "antd";
import { PhoneTwoTone, MailTwoTone } from "@ant-design/icons";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contactez-nous</h2>
        </GridItem>
        <GridItem>
          <Card
            title="Numéros et adresse email"
            style={{ width: "100%", marginBottom: "25px" }}
            bordered
          >
            <h3>
              Présidente : Béatrice Imhaus 
            </h3>
            <h3>
              Directrice Artistique : Christel Rayneau 
            </h3>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
 */
