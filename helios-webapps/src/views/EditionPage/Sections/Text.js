import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Edition musicale et l'Ensemble Hélios
          </h2>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            Les{" "}
            <a href="https://www.billaudot.com/fr/">Editions G. BILLAUDOT</a>{" "}
            ont nommé l'Ensemble Hélios directeur d’une collection qui porte son
            nom, consacrant la formation comme une référence éditoriale en
            matière de flûte et trio à cordes. Une première dans le monde de
            l’édition musicale.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            Dans cette collection, l’Ensemble Hélios ré-édite des publications
            classiques et publie certaines des œuvres dont il est dédicataire,
            ouvrant à un large public l’accès à son fabuleux répertoire.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            De belles transcriptions viennent aussi l’élargir :
            <div className={classes.subdescrEdition}>
              • Plaisir du flûtiste pour les pièces brillantes de Bizet ou
              Doppler
            </div>
            <div className={classes.subdescrEdition}>
              • Plaisir du public pour les merveilleuses transcriptions des «
              Préludes » de Debussy ou bien de la « Pavane pour une infante
              défunte » de Ravel réalisées par Alain Louvier.
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            La collection « Ensemble Hélios » laisse une large place au
            répertoire pédagogique. La formation a élaboré des volumes
            pédagogiques à destination des jeunes musiciens de premier et second
            cycles des conservatoires, contenant des œuvres classiques et
            contemporaines. Ces volumes rencontrent un grand succès.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            Voici les premières publications de cette collection :
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrMid}>
            Parmi lesquelles, les <Link to="/oeuvres">œuvres dédiées</Link> à
            l’ensemble Hélios par des compositeurs :
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>3 nocturnes op 79</i>, de <b>Nicolas Bacri</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Océane</i>, de <b>Jérôme Naulais</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Ombres et clartés</i>, de <b>Jacques Castérède</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Images de la poésie grecque</i>, de <b>Charles Chaynes</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>15 mn</i>, de <b>Jean-Michel Damase</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Daumier face à Don Quichotte</i>, de <b>Antoine Duhamel</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Variations gothiques</i>, de <b>Thierry Escaïch</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Nocturne</i>, de <b>Jindrich Feld</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Océan mer</i>, de <b>Graciane Finzi</b>
          </div>
        </GridItem>
        <GridItem>
          <div
            className={classes.subdescrEdition}
            style={{ marginBottom: "20px" }}
          >
            <i>Labyrinthe</i>, de <b>Rui Martins</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrMid}>
            Ainsi que des oeuvres classiques :
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Quartetto en Ré M kv 311</i>, de <b>Wolfgang Amadeus Mozart</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Quartetto en La M kv 331</i>, de <b>Wolfgang Amadeus Mozart</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Fantaisie brillante sur Carmen</i>, de <b>François Borne</b>
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescrEdition}>
            <i>Fantaisie pastorale hongroise</i>, de <b>Franz Doppler</b>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
