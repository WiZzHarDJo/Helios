import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {Card} from "antd";
import {PhoneTwoTone, MailTwoTone} from "@ant-design/icons";


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
          <Card title="Numéros et addresse email" style={{ width: "100%", marginBottom:"25px" }} bordered>
          <h3>Présidente : Béatrice Imhaus <PhoneTwoTone /> 06 60 73 36 06 <MailTwoTone /> helios.bim@orange.fr</h3>
          <h3>Directrice Artistique : Christel Rayneau <PhoneTwoTone /> 06 60 59 77 51 <MailTwoTone /> c-rayneau@wanadoo.fr</h3>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
