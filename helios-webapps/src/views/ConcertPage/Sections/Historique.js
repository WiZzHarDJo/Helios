import React from "react";
import _ from "lodash";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

import history from "./../../../assets/data/season.json";

import { Collapse } from 'antd';
const { Panel } = Collapse;

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  const renderSalles = (salle,id) => {
    return (
      <div className={classes.subdescrEdition} style={{marginBottom: "20px"}} key={id}>
        <i>• {salle}</i>
      </div>
    )
  }

  const renderHistory = (season, id) => {
    return (
      <Panel header={season.saison} key={id} style={{fontWeight:"bold", color: "#3C4858", fontSize: "19px"}}>
          {season.salles.length && _.map(season.salles, renderSalles)}
      </Panel>
    )
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Historique des saisons de l'Ensemble Hélios</h2>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            L'ensemble Hélios au cours de ses 30 ans d'existence s'est produit dans de très nombreuses salles de spectacles et a promu des dizaines de compositeurs classiques et contemporains. Voici le programme synthétique des 5 derniers années.
          </div>
        </GridItem>
        <GridItem>
          <Collapse defaultActiveKey={['0']}>
            {history.length && _.map(history, renderHistory)}
          </Collapse>
        </GridItem>
      </GridContainer>
    </div>
  );
}
