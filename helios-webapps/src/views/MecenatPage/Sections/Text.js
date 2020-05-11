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
import "antd/dist/antd.css";

import img1 from "./../../../assets/img/logo-liberté.png";
import img2 from "./../../../assets/img/logo-sacem.jpg";
import img3 from "./../../../assets/img/rectorat-logo.png";
import img4 from "./../../../assets/img/logo-billaudot.png";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>Devenez mécène ou donnez un peu de votre temps à l’Ensemble Helios</h2>
        </GridItem>
        <GridItem>
          <h5 className={classes.subdescr}>
          Entrez dans les coulisses de l’Ensemble Hélios et participer au projet qui vous correspond.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Saison musicale de l’Ensemble Helios
          </h3>
          <h4 className={classes.subdescrEdition}>
            •	Une saison de concerts classiques <br/>
            •	Une politique de création en compagnie des compositeurs les plus talentueux de notre temps <br/>
            •	Un échange régulier avec le jeune public par des spectacles musicaux, des actions culturelles et éducatives <br/>
            •	L’Ensemble Hélios a pour projet de partager et de transmettre la musique, classique ou contemporaine, sous toutes ses formes, par le concert ou le spectacle. <br/>
            •	Ses musiciens s’engagent dans de multiples actions culturelles et éducatives à destination de tous les publics <br/>
            •	L’Ensemble Hélios passe de nombreuses commandes aux compositeurs pour nourrir son importante activité de création (80 œuvres dédiées à ce jour) <br/>
          </h4>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Actions culturelles et éducatives
          </h3>
          <h4 className={classes.subdescrEdition}>
          •	Les musiciens de l’Ensemble Hélios s’engagent pour faire découvrir la musique à tous les publics qu’il s’agisse des :
          <div className={classes.subdescrEdition}>
            o	Plus jeunes (concerts éducatifs, concerts en famille, contes musicaux…) <br/>
            o	Publics empêchés (visites musicales à l’hôpital au chevet des enfants malades, actions à destination des personnes handicapées, concerts en milieu carcéral ou en Ehpads….).
          </div>
          </h4>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle} style={{marginBottom:"40px"}}>
          Partenariats
          </h3>
          <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
          <Col span={12}>
            <p className={classes.partenaireDescr}>
              <a href="https://www.mnl-paris.com"> <b>Musique Nouvelle en Liberté</b></a>
            </p>
          </Col>
          <Col span={12}>
            <p className={classes.partenaireDescr}>
            <a href="https://www.sacem.fr/"> <b>La Société des auteurs, compositeurs et éditeurs de musique</b></a>
            </p>
          </Col>
        </Row>
        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
          <Col span={12}>
            <p className={classes.partenaireDescr}>
              <img src={img1} alt="Logo Musique Nouvelle en Liberté" style={{marginTop:"10px", width:"30rem"}}/>
            </p>
          </Col>
          <Col span={12}>
            <p className={classes.partenaireDescr}>
            <img src={img2} alt="Logo SACEM" style={{marginTop:"10px", width:"30rem", height:"16rem"}}/>
            </p>
          </Col>
        </Row>

        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
          <Col span={12}>
            <p className={classes.partenaireDescr}>
              <a href="https://www.ac-paris.fr/portail/"> <b>Le Rectorat de Paris</b></a>
            </p>
          </Col>
          <Col span={12}>
            <p className={classes.partenaireDescr}>
            <a href="https://www.billaudot.com/fr/"> <b>Les Editions Gérard Billaudot</b></a>
            </p>
          </Col>
        </Row>

        <Row
            type="flex"
            style={{ alignItems: "center" }}
            justify="center"
            gutter={10}
        >
          <Col span={12}>
            <p className={classes.partenaireDescr}>
              <img src={img3} alt="Logo Rectorat de Paris" style={{marginTop:"10px", width:"20rem", height:"10rem"}}/>
            </p>
          </Col>
          <Col span={12}>
            <p className={classes.partenaireDescr}>
            <img src={img4} alt="Logo Editions Gérard Billaudot" style={{marginTop:"10px", width:"30rem"}}/>
            </p>
          </Col>
        </Row>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Récompenses et Reconnaissance
          </h3>
          <h4 className={classes.subdescrEdition}>
          •	Les musiciens de l’Ensemble Hélios : 4 prix de CNSM & 10 prix internationaux <br/>
          •	L’Ensemble Hélios :
            <div className={classes.subdescrEdition}>
              o	Lauréat des Fondations Cziffra et Menuhin <br/>
              o	Récompensé en 2016 par la Fondation Louis de Polignac <br/>
              o	« Coup de Cœur » Radio Classique & 2T Télérama pour son spectacle Jeune public « Debussy Miss et Chouchou » <br/>
              o	180 représentations pour son spectacle « Comment Mozart vient aux enfants… ». <br/>
            </div>
          </h4>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Associez-vous au projet qui vous ressemble
          </h3>
          <h4 className={classes.subdescrEdition}>
            •	Concerts <br/>
            •	Spectacles vers les publics empêchés <br/>
            •	Actions culturelles et éducatives <br/>
            •	Commandes d’œuvres contemporaines <br/>
          </h4>
        </GridItem>
        </GridContainer>
      </div>



      <GridContainer>
        <GridItem style={{marginBottom:"40px"}}>
        <Row
          type="flex"
          style={{ alignItems: "center" }}
          justify="center"
          gutter={10}
        >
          <Col span={12}>
            <div className={classes.title}>
              <b>Vous êtes une entreprise</b>
            </div>
          </Col>
          <Col span={12}>
          <div className={classes.title}>
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
            <div className={classes.program} style={{marginBottom:"40px"}}>
            Associez votre nom et votre image à l’Ensemble Hélios <br/><br/>
            Soutenez des projets qui font écho aux valeurs de votre entreprise <br/><br/>
            Proposez à vos clients un évènement culturel d’exception
            </div>
          </Col>
          <Col span={12}>
          <div className={classes.program}>
          Mélomanes, rejoignez les « Amis de l’Ensemble Hélios » et faites rayonner la musique ! <br/><br/>
          Soutenez les projets du quatuor et partagez des moments conviviaux avec les musiciens
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
            <div className={classes.subdescrEdition}>
            1. Vous souhaitez être le Mécène d’un :
            <div className={classes.subdescrEdition}>
            •	Quatuor de musique classique cordes & flûte aux musiciens issus du CNSM de Paris et récompensés par des prix internationaux <br/> <br/>
            •	Au répertoire immense, promouvant la musique contemporaine (80 œuvres dédiées à l’Ensemble Hélios à ce jour par des compositeurs contemporains de renom Hersant, Bacri, Damase, Canat de Chizy, Escaïch….) <br/> <br/>
            •	Habilité par le Rectorat de Paris pour ses actions pédagogiques et de diffusion vers le jeune public : contes musicaux, actions en milieu scolaires, actions au sein des conservatoires. <br/> <br/>
            •	Dépassant le cadre habituel des salles de concert pour porter son art aux publics empêchés dans les hôpitaux, le milieu carcéral, les Ehpads…. <br/> <br/>
            •	Reconnu par les spécialistes et la critique (Coups de cœur Radio Classique, 2 T Télérama) <br/> <br/>
            </div>
            </div>
          </Col>
          <Col span={12}>
          <div className={classes.subdescrEdition}>
          1. Vous souhaitez participer à la vie de l’Ensemble Hélios ou le soutenir financièrement. <br/>
          Ses domaines de diffusion sont multiples :
          <div className={classes.subdescrEdition}>
          •	Musique classique (plus de 2000 concerts en 30 ans) <br/> <br/>
          •	Musique contemporaine (80 œuvres dédiées et une activité soutenue de création) <br/> <br/>
          •	Projets pédagogiques vers le jeune public et le public familial (3 spectacles pour les enfants, : des actions au sein de l’Education Nationale et des conservatoires lui ont valu l’Habilitation du Rectorat de Paris) <br/> <br/>
          </div>
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
            <div className={classes.subdescrEdition}>
            2. Vous souhaitez monter ou sponsoriser avec nous un projet particulier :
            <div className={classes.subdescrEdition}>
            •	Concert d’entreprise <br/>
            •	Evènement commercial <br/>
            •	Spectacle de Noël <br/>
            •	Achat groupé de places par votre CE <br/>
            •	Autre projet
            </div>
            </div>
          </Col>
          <Col span={12}>
          <div className={classes.subdescrEdition}>
          2. Rapprochez vous de l’Ensemble Hélios !
          <div className={classes.subdescrEdition}>
          •	Vos dons (l’Ensemble Hélios est une association à but non lucratif) <br/>
          •	Votre aide pour diffuser nos programmes et nos événements <br/>
          •	Votre temps pour nous seconder ponctuellement
            </div>
            sont les bienvenus.
            </div>
          </Col>
        </Row>
        </GridItem>
      </GridContainer>


      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} style={{marginBottom:"40px"}}>
        <h2>Alors  n’hésitez-pas, contactez-nous, nous serons ravis de vous rencontrer </h2>
        <Button size="large">
          <Link to="/contact" className={classes.navLink}>
            Nous contacter
          </Link>
        </Button>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Les « Amis de l’Ensemble Hélios »
          </h3>
          <h4 className={classes.subdescr}>
          Depuis 30 ans, l’Ensemble Hélios est soutenu par des auditeurs fidèles, enthousiasmés par l’aventure entreprise par les 4 musiciens : explorer les territoires inconnus du répertoire du trio à cordes et flûte et l’élargir en suscitant des compositions. <br/><br/>
          En nous rejoignant, prenez part à l’aventure.
          <div className={classes.subdescrEdition}>
          •	Rencontrez les musiciens, les compositeurs…. <br/>
          •	Assistez à des répétitions… <br/>
          •	Partagez des moments conviviaux autour de concerts privés.
          </div>
          </h4>
        </GridItem>
        </GridContainer>
    </div>
  );
}
