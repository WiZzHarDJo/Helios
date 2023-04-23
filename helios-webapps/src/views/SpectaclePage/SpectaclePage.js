import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { BrowserView, MobileView } from "react-device-detect";

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Spectacles from "./Sections/Spectacles.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
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
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/spectaclecouverture.JPG")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} style={{ marginTop: "18rem" }}>
                L'Ensemble Hélios, le musicien <br />
                devient acteur
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <BrowserView>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Spectacles />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <Spectacles />
          </div>
        </div>
      </MobileView>
      <Footer />
    </div>
  );
}
