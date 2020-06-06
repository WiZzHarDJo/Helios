import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {Card, Row, Col} from 'antd';

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import "antd/dist/antd.css";

import mozart from "./../../../assets/img/mozart-child.jpg";
import paris from "./../../../assets/img/parisgravure.jpg";
import promenade from "./../../../assets/img/promenade-classique.jpg";
import harpe from "./../../../assets/img/harpe.jpg";
import ballade1 from "./../../../assets/img/ballade-siecle.jpg";
import ballade2 from "./../../../assets/img/mozart.jpg";

const useStyles = makeStyles(styles);




export default function ProductSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Proposition de programmes musicaux</h2>
          </GridItem>
        <GridItem>
          <p className={classes.subdescr}>La richesse du répertoire pour flûte, violon, alto et violoncelle permet à l’Ensemble HÉLIOS de proposer de nombreux programmes variés suivant les époques, styles, pays, esthétiques, thèmes… Les quelques propositions indiquées ici sont donc loin de représenter une liste exhaustive !</p>
          <p className={classes.subdescr}>L’ensemble module également sa formation afin d’inclure duos et trios dans divers programmes, et propose également divers quintettes pour flûte et cordes, ou flûte, trio à cordes et harpe. Il se tient toujours à l’écoute des organisateurs de concerts afin de leur proposer les programmes répondant idéalement à leurs attentes.</p>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
      <GridItem style={{marginBottom:"25px"}}>
        <Card title="Intégrale des Quatuors de Mozart" style={{ width: "100%" }} bordered>
          <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
          >
            <Col span={12}>
            <img alt="Mozart" src={mozart} style={{width: "400px"}}/>
            </Col>
            <Col span={12}>
            <div className={classes.program}>
                <p>Quatuor en Sol majeur KV 285a</p>
                <p>Quatuor en Ut majeur KV 285b</p>
                <p>Quatuor en La majeur KV 298</p>
                <p>Quatuor en Ré majeur KV 285</p>
              </div>
            </Col>
          </Row>
        </Card>
      </GridItem>
      <GridItem style={{marginBottom:"25px"}}>
        <Card title="Mozart à Paris" style={{ width: "100%" }} bordered>
        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
            <Col span={12}>
            <div className={classes.program}>
              <p><b>DEVIENNE François</b> (1759-1803)<br/>
                Quatuor en la mineur op.66 n°1
              </p>
              <p><b>BOCCHERINI Luigi</b> (1743-1805)<br/>
                Trio à cordes op.14 n°2 en ut mineur</p>
              <p><b>DEVIENNE François</b> (1759-1803)<br/>
                Trio pour flûte, violon et violoncelle op.19 n°5</p>
              <p><b>VIOTTI Giovanni</b> (1753-1824)<br/>
                Quatuor en ut mineur op. 22 n°2  </p>
              <p><b>MOZART Wolfgang Amadeus</b> (1756-1791)<br/>
                Quatuor en ré majeur KV 285
              </p>
            </div>
            </Col>
            <Col span={12}>
            <img alt="Paris" src={paris} style={{width: "500px"}}/>
            </Col>
          </Row>
        </Card>
      </GridItem>
      <GridItem style={{marginBottom:"25px"}}>
        <Card title="Promenade Classique" style={{ width: "100%" }} bordered>
        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
            <Col span={12}>
            <img alt="Promenade" src={promenade} style={{width: "500px"}}/>
            </Col>
            <Col span={12}>
              <div className={classes.program}>
                <p><b>TELEMANN Georg-Philipp</b> (1681-1767)<br/>
                  Quartett (sol m)</p>
                <p><b>HAYDN Joseph</b> (1732-1809)<br/>
                  Trio flûte/violon/violoncelle</p>
                <p><b>ROSSINI Gioacchino</b> (1792-1868)<br/>
                  Quatuor n° 3 en si bémol majeur</p>
                <p><b>BEETHOVEN Ludwig von</b> (1770-1827)<br/>
                  Trio à cordes en ut mineur op.9 n°3</p>
                <p><b>MOZART Wolfgang Amadeus</b> (1756-1791)<br/>
                  Quatuor en ré majeur KV 285</p>
              </div>
            </Col>
          </Row>
        </Card>
      </GridItem>
      <GridItem style={{marginBottom:"25px"}}>
        <Card title="Quintette avec harpe" style={{ width: "100%" }} bordered>
        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
            <Col span={12}>
              <div className={classes.program}>
                <p><b>ROUSSEL Albert</b> (1869-1937)<br/>
                  Sérénade op.30</p>
                <p><b>ANDREAE Volkmar</b> (1879-1962)<br/>
                  Divertimento Op. 43</p>
                <p><b>DEBUSSY Claude</b> (1862-1918)<br/>
                  Trio pour flûte, alto et harpe</p>
                <p><b>JOLIVET André</b> (1905-1974)<br/>
                  Chant de Linos</p>
              </div>
            </Col>
            <Col span={12}>
            <img alt="Harpe" src={harpe} style={{width: "400px"}}/>
            </Col>
          </Row>
        </Card>
      </GridItem>
      <GridItem style={{marginBottom:"25px"}}>
        <Card title="Ballade au fil des siècles - I" style={{ width: "100%" }} bordered>
        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
            <Col span={12}>
            <img alt="Ballade I" src={ballade1} style={{width: "500px"}}/>
            </Col>
            <Col span={12}>
              <div className={classes.program}>
                <p><b>BACH Johann Christian</b> (1735-1782)<br/>
                  Quatuor en mi bémol majeur op.8 n°6</p>
                <p><b>SCHUBERT Franz</b> (1797-1828)<br/>
                  Trio à cordes en si bémol majeur D 581</p>
                <p><b>FELD Jindrich</b> (néen1925)<br/>
                  Nocturne (en mémoire de J.P. Rampal) (2002)</p>
                <p><b>ROUSSEL Albert</b> (1869-1937)<br/>
                  Trio pour flûte, alto et violoncelle op.40</p>
                <p><b>ANDREAE Volkmar</b> (1879-1962)<br/>
                  Divertimento Op. 43</p>
              </div>
            </Col>
          </Row>
        </Card>
      </GridItem>
      <GridItem style={{marginBottom:"25px"}}>
        <Card title="Ballade au fil des siècles - II" style={{ width: "100%" }} bordered>
        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
            <Col span={12}>
              <div className={classes.program}>
                <p><b>MOZART Wolfgang Amadeus</b> (1756-1791)<br/>
                  Quatuor en ut majeur KV 285b</p>
                <p><b>BEETHOVEN Ludwig von</b> (1770-1827)<br/>
                  Duo alto et violoncelle WOo32 Les Lunettes</p>
                <p><b>VILLA-LOBOS Heitor</b> (1887-1959)<br/>
                  Assobio a jato pour flûte et violoncelle</p>
                <p><b>RIES Ferdinand</b> (1784-1838)<br/>
                  Quatuor en la majeur op.145 n°3</p>
                <p><b>MARTINS Rui</b> (né en1958)<br/>
                  Labyrinthe (1997)</p>
              </div>
            </Col>
            <Col span={12}>
              <img alt="Ballade II" src={ballade2} style={{width: "500px"}}/>
            </Col>
          </Row>
        </Card>
      </GridItem>
      </GridContainer>
    </div>
  );
}
