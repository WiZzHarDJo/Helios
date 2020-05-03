import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {Row, Col, Button} from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>Christel Rayneau</h2>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Christel Rayneau fait de brillantes études au C.N.S.M. de Paris, couronnées par un 1er Prix de flûte (classe d’Alain Marion), un 1er Prix et un 3e cycle de musique de chambre (classe de Christian Lardé).
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Elle remporte ensuite plusieurs prix dans différents concours internationaux : 2e Prix du Concours Maria Canals de Barcelone, 1er Prix à l'unanimité du concours du Lyceum de Berne, 2e Prix du Concours du Printemps de Prague, Prix du Concours International de Sonates de Vierzon, et Prix du Concours International de musique de chambre de Paris (formation quintette à vent).
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Elle obtient son Certificat d'Aptitude de flûte en 1984, et est nommée en 1990 professeur titulaire au Conservatoire National de Région de Versailles. Elle y a animé pendant 15 ans un atelier de pédagogie. Elle y est actuellement en charge de la musique de chambre contemporaine pour les étudiants de Licence. Elle donne des master-classes en France et à l'étranger (Mexique, Pologne, Russie, Espagne, Allemagne... )
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Depuis 1988, elle est flûte solo de l'Orchestre des Concerts Lamoureux. Elle est la flûte solo de l'Orchestre de L'Opéra de Massy depuis sa création en 1992.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Par ailleurs, Christel Rayneau est régulièrement, comme soliste,l'invitée d'orchestres - Nancy, Pays de Loire, Cannes-Provence-Alpes-Côte d'Azur, Neuchâtel, JW Audoli, Erwartung… - et de festivals : Festival de Franche-Comté, Festival Présences de Radio-France, Festival de Chinon, Choralies de Vaison-la-Romaine, Floréal d'Epinal, Festival Arts au Soleil, Festival Mer et Vie, Printemps musical du Perche, Festival Aspekte de Salzbourg, Annecy, Festival Aujourd’hui musiques de Perpignan…  
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Chambriste passionnée, elle est la fondatrice de l’Ensemble HÉLIOS, et se produit en outre régulièrement en duo flûte et harpe en France et à l'étranger.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
          Discographie :<br/>
          Escaïch Scènes d'enfants pour flûte violoncelle et piano ; Quatuor de Ferdinand Ries ; Plurielles (Lacaze, Finzi, Rotaru, Piechowska) ; Récital ( Mozart Rossini, Feld, Bacri, Andreae) ; Quatuors du 20ème siècle ( Louvier, Martins, Andreae, Combes-Damiens, Kaufmann) ; Monographie Antoine Tisné
          </div>
        </GridItem>
      </GridContainer>
        <Row>
          <Col span={3}>
          <Button size="large">
            <ArrowLeftOutlined />
            <Link to="/" className={classes.navLink}>
              Retour
            </Link>
          </Button>
          </Col>
          <Col span={15}>
          </Col>
          <Col span={6}>
          <Button size="large">
            <Link to="/nathanaelle" className={classes.navLink}>
              Découvrez un autre musicien
            </Link>
          </Button>
          </Col>
        </Row>
    </div>
  );
}
