import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import MyCarousel from '../../../components/MyCarousel/MyCarousel.js';

import debussyPress from './../../../assets/data/debussy.json';

import {Carousel} from 'antd';

import _ from "lodash";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import rectoratLogo from "./../../../assets/img/logo-rectorat.jpg";

const useStyles = makeStyles(styles);

const debussy = [
  {
     newspaper:"PARISCOPE",
     content:"Voilà un spectacle musical dont on ressort intellectuellement plus riche ! Imaginé par Christel Rayneau, il retrace la vie du compositeur français Claude Debussy( 1862-1918) par le biais des souvenirs de Miss, la gouvernante anglaise de sa fille adorée, Claude-Emma, surnommée « Chouchou ». Cette jeune anglaise pleine de malice, suffragette exilée à Paris, est incarnée par la lumineuse Emilie Chevrillon. Pendant une heure- que l’on aimerait plus longue tant le récit est captivant-, elle nous plonge dans le quotidien de Chouchou, de son élégante maman et de son illustre papa, mais aussi dans celui du monde tel qu’il allait au début du XXème siècle. La crue de la Seine de 1910, le naufrage du transatlantique « Titanic » en 1912, la Première guerre mondiale…les grands évènements de l’époque côtoient les anecdotes personnelles des Debussy.Tout est raconté simplement et de façon vivante. Ce n’est jamais ennuyeux ni pompeux, ce qui rend cette création jeune public formidable. Projetées en arrière-scène, des images d’époque aident à appréhender la France des années 1900, tandis que les belles partitions de Debussy, jouées en live par le Quatuor Hélios ( flûte et trio à cordes) accompagnent le récit empli de sensibilité de Miss. Grâce à la finesse et à la légèreté de sa mise en scène, Stéphanie Tesson relève haut la main un pari qui pouvait sembler osé : passionner les enfants avec Debussy. On a adoré ! A partir de 6 ans",
    author:"Judith Rablat-Tuil"
  }
]

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Spectacles</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <h3 className={classes.subtitle}>
          "Debussy, Miss et Chouchou"
          </h3>
          <div className={classes.subdescr}>
            <iframe width="520" height="320"
              src="https://www.youtube.com/embed/kmJjmniexcA" frameBorder="0" allowFullScreen title="Debussy, Miss et Chouchou">
            </iframe>
          </div>
          <p className={classes.subdescr}>
          Ce spectacle s'adresse aux enfants de 6 à 15 ans et aux grands enfants qui les accompagnent. <br/>
          Par Miss, gouvernante de Chouchou, fille de Claude Debussy, le spectateur rentre au sein du foyer du compositeur, mais baigne aussi dans l'actualité de la Belle Epoque. <br/>
          Extraits musicaux en direct et images d'archives aident à plonger dans cet univers vieux d'un siècle.
          </p>
          <p className={classes.subdescr}>
          Durée : 55 mn, créé en 2015
          </p>
          {/*<MyCarousel frames={_.shuffle(debussy)} autoplay title="La Presse en parle"/>*/}

          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>Le spectacle "Debussy, Miss et Chouchou" a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle}>
          "Comment Mozart vient aux enfants"
          </h3>
          <div className={classes.subdescr}>
            <iframe width="520" height="320"
              src="https://youtube.com/embed/k7svWN-tfaU" frameBorder="0" allowFullScreen title="Comment Mozart vient aux enfants">
            </iframe>
          </div>
          <p className={classes.subdescr}>
          Ce spectacle s’adresse aux enfants de 4 à 11 ans, et à leurs parents.  <br/>
          Sur scène, un acteur, deux marionnettes et 4 musiciens : l’enfant Mozart se raconte, anecdotes couvrant sa vie de voyages entre ses 4 et ses 11 ans. <br/>
          Un autre temps, un être hors du commun, et pourtant un enfant tellement semblable, à bien des égards, à celui assis dans la salle. Des extraits musicaux ponctuent le spectacle, parmi les plus connus du musicien génial.
          </p>
          <p className={classes.subdescr}>
          Durée : 50 mn, créé en 2012
          </p>
          {/*<MyCarousel frames={_.shuffle(debussy)} autoplay title="La Presse en parle"/>*/}

          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>Le spectacle "Comment Mozart vient aux enfants" a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle}>
          "Des mots aux sons"
          </h3>
          <p className={classes.subdescr}>
          Ce concert de musique contemporaine composées sur des poésies concerne un public de collégiens et lycéens.  <br/>
          Ce spectacle musical est à deux titres très original : D'abord, c'est un concert où on entendra uniquement de la musique contemporaine. D'autre part, les oeuvres entendues ont toutes été composées sur des textes de poètes, d’un siècle antérieur. L'intérêt pour les jeunes est donc double : un pied dans leur siècle, au coeur de la création musicale qui est celle de leur temps ; l'autre enraciné par les textes dans le passé, leur patrimoine littéraire. Cette riche transversalité inscrit le spectacle dans 3 domaines artistiques : arts du langage, arts du son, arts du spectacle vivant. <br/>
          Les textes des grands auteurs ( Verlaine, Hugo, Marbeuf, Richepin, Rimbaud…. ) doivent être étudiés en amont avec l’aide des professeurs de lettres. Les musiciens présentent les œuvres (Finzi, Belloq, Rayneau ) et expliquent les procédés compositionnels. <br/>
          Les auditeurs remplissent une fiche de libre expression pour donner leur ressenti sur l’œuvre littéraire et son traitement musical.
          </p>
          <p className={classes.subdescr}>
          Durée : 1h
          </p>
          {/*<MyCarousel frames={_.shuffle(debussy)} autoplay title="La Presse en parle"/>*/}

          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>Le spectacle "Des mots aux sons" a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle}>
          "L’amour en toutes lettres"
          </h3>
          <p className={classes.subdescr}>
          Lectures pour adultes de textes d’auteurs célèbres, ponctués de musiques. <br/>
          Celles-ci permettent de rêver ou méditer sur les courtes phrases de texte-lien qui décrivent l’irrémédiable évolution du lien amoureux dans sa durée…
          </p>
          <p className={classes.subdescr}>
          Durée : 1h40
          </p>
          {/*<MyCarousel frames={_.shuffle(debussy)} autoplay title="La Presse en parle"/>*/}
 
        </GridItem>
      </GridContainer>
    </div>
  );
}
