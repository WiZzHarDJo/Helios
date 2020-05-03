import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {Card} from "antd";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import "antd/dist/antd.css";

import QuoteCentered from "../../../components/Typography/QuoteCentered.js";

const useStyles = makeStyles(styles);




export default function ProductSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>La musique contemporaine et l'Ensemble Hélios</h2>
        </GridItem>
        <GridItem>
          <p className={classes.subdescr}>La musique contemporaine enfin, grâce aux grands virtuoses modernes, offre à la flûte un nouvel âge d’or et au quatuor de nouvelles pièces passionnantes : Copland, Denisov, Harvey, Tisné, Schuller, Hosokawa, Tanada... </p>
          <p className={classes.subdescr}>Bien plus, les musiciens d’HÉLIOS ont le plaisir de se voir dédier des compositions par des personnalités de grand talent : Louvier, Bacri, Méfano, Escaïch, Pécou, Rotaru, Finzi, Hersant, Feld...</p>
        </GridItem>
        <GridItem>
            <QuoteCentered
            text="“C’est, pour un créateur, une joie particulière d’être joué par un quatuor formé de quatre rayonnants musiciens, à l’oreille très fine, maîtrisant magnifiquement leur instrument, et d’esprit ouvert.” "
            author="Alain Louvier"
            style={{marginLeft:"20%", marginRight:"20%"}}
          />
        </GridItem>
        <GridItem>
        <div className={classes.subdescr}>
          Les musiciens d’HÉLIOS allient leur passion de la musique de chambre à un engagement constant pour la musique de leur temps.
          Au fil des années, leur répertoire s’est enrichi de nombreuses œuvres qui leur sont dédiées, à ce jour une cinquantaine ! Leur détail, -compositeur, titre, date et lieu de création- est énuméré dans la rubrique "Oeuvres dédiées"
        </div>
        </GridItem>
        <GridItem>
        <div className={classes.subdescr}>
          L'Ensemble Hélios a eu le plaisir de travailler avec tous ses compositeurs.
          Ces expériences sont irremplaçables: la musique y trouve sa réalisation la plus pure, passant d’un imaginaire à l’autre, de celui du compositeur à celui des interprètes.
          Ces échanges très riches n’ont fait que renforcer l’intime conviction des musiciens : il est nécessaire, non seulement de jouer la musique de son temps, mais encore de participer à un long travail de mémoire, en élaborant au contact du compositeur une interprétation la plus proche possible de son idéal.
          Il est souhaitable d'éditer les partitions pour transmettre fidèlement la pensée du créateur, et mieux encore d'enregistrer les oeuvres sous sa direction artistique.
        </div>
        </GridItem>
        <GridItem>
        <div className={classes.subdescr}>
        Les compositeurs qui ont écrit pour HÉLIOS ont des langages et des styles variés : écriture spectrale, sérialisme, enracinement folklorique, élargissement des modes de jeu instrumentaux, aussi bien que minimalisme, théâtre musical, échelles modales ou en quarts-de-tons... Mais leurs œuvres sont toutes empreintes d’émotion, et démontrent précisément dans leur variété, le formidable potentiel actuel de cette combinaison instrumentale, nouvelle alliance de la musique concertante et de la musique de chambre.
        </div>
        </GridItem>
        <GridItem>
          <Card title="Thierry Escaïch, Variations Gothiques" style={{ width: "100%", marginBottom:"25px" }} bordered>
            <iframe
              src="https://youtube.com/embed/4me3Z9ypBGo" frameBorder="0" allowFullScreen title="Thierry Escaïch, Variations Gothiques" style={{ width: "100%", height:"500px" }}>
            </iframe>
            <p>
              Captation en direct (Mairie du 4ème, février 2013) et montage : Guy VERNET
            </p>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
