import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "./../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../../assets/img/faces/avatar.jpg";
import team2 from "../../../assets/img/faces/christian.jpg";
import team3 from "../../../assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Les Musiciens</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Christel Rayneau
                <br />
                <small className={classes.smallTitle}>Flûte traversière</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                fait de brillantes études au C.N.S.M. de Paris, couronnées par un 1er Prix de flûte (classe d’Alain Marion), un 1er Prix et un 3e cycle de musique de chambre (classe de Christian Lardé).....
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Link to="/" className={classes.navLink}>
                  En savoir plus +
                </Link>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Nathanaëlle Marie
                <br />
                <small className={classes.smallTitle}>Violon</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Nathanaëlle Marie a étudié au Conservatoire National Supérieur de Musique de Paris,
                où elle a obtenu un Premier Prix de violon, un Premier Prix de musique de chambre en sonate...
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Link to="/" className={classes.navLink}>
                  En savoir plus +
                </Link>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Vinciane Béranger
              <br />
                <small className={classes.smallTitle}>Alto</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Altiste aux multiples facettes, Vinciane Béranger souhaite mieux faire connaître l’alto, et créer des ponts entre les diverses formes d’expression.
                Membre du Quatuor Manfred jusqu’à 2008, elle explore aujourd’hui de nouveaux horizons...
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Link to="/" className={classes.navLink}>
                  En savoir plus +
              </Link>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Christophe Beau
              <br />
                <small className={classes.smallTitle}>Violoncelle</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Elève de Marcel Bardon au CNR de Paris, Christophe Beau obtient une Médaille d'Or (1985), un Premier Prix d'Excellence de violoncelle (1986) et un Premier Prix de Virtuosité (1987).En 1988, il entre au CNSM de Lyon dans la classe d' Yvan Chiffoleau où il obtient un Premier Prix de violoncelle.....
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Link to="/" className={classes.navLink}>
                  En savoir plus +
              </Link>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
