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

import styles from "./../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import "antd/dist/antd.css";
import "./responsive.css";

import team1 from "../../../assets/img/tri/team/flute.jpg";
import team2 from "../../../assets/img/tri/team/violon.jpg";
import team3 from "../../../assets/img/tri/team/alto.jpg";
import team4 from "../../../assets/img/tri/team/celo.jpg";

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
        <h2 className={classes.title}>Les Musiciens</h2>
        <div className="parent">
          <div className="div1">
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
                  fait de brillantes études au C.N.S.M. de Paris, couronnées par
                  un 1er Prix de flûte (classe d’Alain Marion), un 1er Prix et
                  un 3e cycle de musique de chambre (classe de Christian
                  Lardé).....
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button size="large">
                  <Link to="/christel" className={classes.navLink}>
                    En savoir plus +
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="div2">
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Christophe Beau
                <br />
                <small className={classes.smallTitle}>Violoncelle</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Elève de Marcel Bardon au CNR de Paris, Christophe Beau
                  obtient une Médaille d'Or (1985), un Premier Prix d'Excellence
                  de violoncelle (1986) et un Premier Prix de Virtuosité (1987).
                  Il entre ensuite au CNSM ...
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button size="large">
                  <Link to="/christophe" className={classes.navLink}>
                    En savoir plus +
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="div3">
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
                  Nathanaëlle Marie a étudié au Conservatoire National Supérieur
                  de Musique de Paris, où elle a obtenu un Premier Prix de
                  violon, un Premier Prix de musique de chambre en sonate...
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button size="large">
                  <Link to="/nathanaelle" className={classes.navLink}>
                    En savoir plus +
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="div4">
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
      </div>
    </React.Fragment>
  );
}
