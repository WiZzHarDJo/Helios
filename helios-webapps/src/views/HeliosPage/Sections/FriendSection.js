import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import GridItem from "../../../components/Grid/GridItem.js";
import { Button } from "antd";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import "antd/dist/antd.css";
import "./responsive.css";

import team3 from "../../../assets/img/tri/team/alto.jpg";

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
        <h2 className={classes.title}>Les Amis de l'Ensemble Hélios</h2>
        <div className="friends">
          <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img src={team3} alt="..." className={imageClasses} />
            </GridItem>
            <h4 className={classes.cardTitle}>
              Isabelle Lequien
              <br />
              <small className={classes.smallTitle}>Alto</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                Isabelle Lequien débute l'apprentissage de la musique par le
                violon et le piano et se tourne très vite vers la sonorité
                chaleureuse de l'alto. Elle obtient en 1985 un1er prix au CNSM
                de Paris ...
              </p>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button size="large">
                <Link to="/isabelle" className={classes.navLink}>
                  En savoir plus +
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}
