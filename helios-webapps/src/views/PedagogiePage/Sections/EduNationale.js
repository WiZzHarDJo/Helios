import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import rectoratLogo from "./../../../assets/img/logo-rectorat.jpg";


import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Dans le cadre de l’Education nationale</h2>
          <h5 className={classes.description}>
            Hélios met son expérience au service des jeunes bla bla bla
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        {/*<GridItem>
          <h3 className={classes.subtitle}>
          "Comment Mozart vient aux enfants"
          </h3>
          <div className={classes.subdescr}>
            <iframe width="520" height="320"
              src="https://youtube.com/embed/k7svWN-tfaU" frameBorder="0" allowFullScreen title="Comment Mozart vient aux enfants">
            </iframe>
          </div>
          <h4 className={classes.subdescr}>
          Ce spectacle s’adresse aux enfants de 4 à 11 ans, de la maternelle à la 5ème. <br/>
          Sur scène,un acteur, deux marionnettes, 4 musiciens. L’enfant Mozart se raconte. <br/>
          Un dossier pédagogique très complet de culture musicale, français, mathématiques, histoire etc… bâti autour de Mozart et son temps est à utiliser en amont du spectacle par les enseignants. La culture musicale comprend des exercices audio à l’usage d’enfants non musiciens.          </h4>
          <h4 className={classes.subdescr}>
          Durée : 50 mn, créé en 2012
          </h4>
          {/*<MyCarousel frames={_.shuffle(debussy)} autoplay title="La Presse en parle"/>

          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>Le spectacle "Comment Mozart vient aux enfants" a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>*/}
        <GridItem>
          <h3 className={classes.subtitle}>
          "Des mots aux sons"
          </h3>
          <h4 className={classes.subdescr}>
          Ce concert de musique contemporaine composées sur des poésies concerne un public de collégiens et lycéens.  <br/>
          Ce spectacle musical est à deux titres très original : D'abord, c'est un concert où on entendra uniquement de la musique contemporaine. D'autre part, les oeuvres entendues ont toutes été composées sur des textes de poètes, d’un siècle antérieur. L'intérêt pour les jeunes est donc double : un pied dans leur siècle, au coeur de la création musicale qui est celle de leur temps ; l'autre enraciné par les textes dans le passé, leur patrimoine littéraire. Cette riche transversalité inscrit le spectacle dans 3 domaines artistiques : arts du langage, arts du son, arts du spectacle vivant. <br/>
          Les textes des grands auteurs ( Verlaine, Hugo, Marbeuf, Richepin, Rimbaud…. ) doivent être étudiés en amont avec l’aide des professeurs de lettres. Les musiciens présentent les œuvres (Finzi, Belloq, Rayneau ) et expliquent les procédés compositionnels. <br/>
          Les auditeurs remplissent une fiche de libre expression pour donner leur ressenti sur l’œuvre littéraire et son traitement musical.
          </h4>
          <h4 className={classes.subdescr}>
          Durée : 1h
          </h4>
          {/*<MyCarousel frames={_.shuffle(debussy)} autoplay title="La Presse en parle"/>*/}

          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>Le spectacle "Des mots aux sons" a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle}>
          Sensiblisation aux musiques classique et contemporaine <br/>
          " Arthur et Chimène au temps des musiques...."
          </h3>
          <h4 className={classes.subdescr}>
          Cette action de sensibilisation est destinée aux classes d'école maternelle et d'école primaire jusqu'au CE2. <br/>
          Le quatuor intervient 4 semaines de suite, un concert de restitution auquel participent les enfants clôt le mois d'interventions.  <br/>
          Les séances impliquent les enfants et leurs enseignants. <br/>
          Les enfants apprennent à aimer et différencier la musique classique de la musique contemporaine, guidés par Arthur et Chimène....
          </h4>
          <h4 className={classes.subdescr}>
          4 séances de 50mn et un concert de restitution
          </h4>
          {/*<MyCarousel frames={_.shuffle(debussy)} autoplay title="La Presse en parle"/>*/}

          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>"Arthur et Chimène au temps des musiques... " a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle}>
          Ouverture de l'oreille sur les musiques traditionnelles <br/>
          "Le tour du monde d'Arthur"
          </h3>
          <h4 className={classes.subdescr}>
          Cette action de sensibilisation est destinée aux classes d'école maternelle grande section et d'école primaire jusqu'au CM2. <br/>
          Le quatuor intervient 6 semaines de suite, un concert de restitution auquel participent les enfants clôt le cycle d'interventions. <br/>
          Les séances impliquent les enfants et leurs enseignants. <br/>
          Des chansons, -création Hélios paroles et musiques-, des marionnettes en costumes traditionnels, une carte du monde ajoutent aux musiques des éléments riches de culture et géographie. <br/>
          Notre conceptrice de marionnettes, Brigitte Louchard, a mis au point deux activités de travail manuel à l'usage des enseignants, pour prolonger la présence d'Arthur et de ses amis du Tour du monde dans les classes. <br/>
          Fiches techniques fournies pour la confection par les enfants de répliques des marionnettes, soir en crépon, soit en pâte à sel.
          </h4>
          <h4 className={classes.subdescr}>
          6 séances de 50mn et un concert de restitution
          </h4>
          {/*<MyCarousel frames={_.shuffle(debussy)} autoplay title="La Presse en parle"/>*/}

          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>"Le tour du monde d'Arthur " a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
