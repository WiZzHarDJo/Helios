import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {Row, Col} from "antd";
import {Link} from "react-router-dom";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Button } from "antd";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>Comment soutenir l'Ensemble Hélios ?</h2>
        </GridItem>

      </GridContainer>
      <GridContainer>
        <GridItem>
        <Row
          type="flex"
          style={{ alignItems: "center" }}
          justify="center"
          gutter={10}
        >
          <Col span={12}>
            <div className={classes.program}>
              <b>Vous êtes une entreprise</b>
            </div>
          </Col>
          <Col span={12}>
          <div className={classes.program}>
              <b>Vous êtes un particulier</b>
            </div>
          </Col>
        </Row>
        <Row
          type="flex"
          style={{ alignItems: "center" }}
          justify="center"
          gutter={10}
        >
          <Col span={12}>
            <div className={classes.program}>
              Vous souhaitez être un mécène/donateur pour :
            </div>
          </Col>
          <Col span={12}>
          <div className={classes.program}>
              Vous aimez la musique et voulez nous aider en :
          </div>
          </Col>
        </Row>
        <Row
          type="flex"
          style={{ alignItems: "center" }}
          justify="center"
          gutter={10}
        >
          <Col span={12}>
            <div className={classes.program}>
            • L'ensemble Hélios <br/>
            • Un projet particulier : <br/>
            </div>
          </Col>
          <Col span={12}>
          <div className={classes.program}>
          • Faisant un don (Défiscalisable)<br/>
          • Donnant de votre temps (Bénévolat)<br/>
          </div>
          </Col>
        </Row>
        <Row
          type="flex"
          style={{ alignItems: "center" }}
          justify="center"
          gutter={10}
        >
          <Col span={12}>
            <div className={classes.program}>
            • Concert<br/>
            • Pédagogie<br/>
            • Spectacle<br/>
            </div>
          </Col>
          <Col span={12}/>
        </Row>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
        <Button size="large">
          <Link to="/contact" className={classes.navLink}>
            Contactez-nous
          </Link>
        </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
