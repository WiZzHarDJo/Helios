import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js"

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import "antd/dist/antd.css";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ErrorPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Ensemble Hélios"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../assets/img/tournesol.jpg")}>
      <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <h1 className={classes.title}>Erreur 404</h1>
          <p style={{fontSize:"20px"}}>
            Il semblerait qu'une erreur se soit produite ou que la page que vous cherchiez à atteindre n'existe pas.<br/><br/>
            Vous pouvez utiliser le menu pour naviguer jusqu'à la page que vous cherchez ou appuyer sur précédent.
          </p>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        </div>
      </div>
      <div style={{height:"250px"}}/>
      <Footer />
    </div>
  );
}
