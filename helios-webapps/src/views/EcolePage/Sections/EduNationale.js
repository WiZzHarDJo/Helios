import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Quote100 from "../../../components/Typography/Quote100.js";
import rectoratLogo from "./../../../assets/img/logo-rectorat.jpg";
import Carousel from "../../../components/Carousel/Carousel.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import images from "../../../assets/data/arthur&chimene.json";
import images1 from "../../../assets/data/tourMondeArthur.json";
import soleil from "../../../assets/data/monsieurSoleil.json"
import miette from "../../../assets/data/miette.json"
import imagesPedago from "../../../assets/data/pedagogie.json";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Dans le cadre de l’Education Nationale</h2>
        </GridItem>
        <GridItem>
          <h5 className={classes.subdescr}>
          L'Ensemble Hélios ouvre aux enfants le monde de la musique et réjouit les coeurs.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Des projets musicaux et/ou pédagogiques pour les écoles
          </h3>
          <h4 className={classes.subdescr}>
          L'Ensemble Helios a élaboré de nombreuses actions pour le jeune public dans un cadre scolaire (ou dans le cadre de centres aérés, colonies, etc). <br/>
          3 spectacle jeune Public sont proposés actuellement par l'Ensemble Helios. Il s'agit de : <br/>
          • « <b>Comment Mozart vient aux enfants</b> » <br/>
          • « <b>Debussy, Miss et Chouchou</b> » <br/>
          • « <b>J'suis diffférent</b> » <br/> <br/>
          Vous pouvez voir leurs descriptifs en Rubrique Spectacles. Dans le cas de séances scolaires, un épais dossier pédagogique comportant des éléments audio est fourni aux enseignants. <br/><br/>

          A l'intérieur des écoles, l'Ensemble Hélios a élaboré des projets spécifiques, qui sont présentés de façon détaillée ci-dessous. Il s'agit de :<br/>
          • « <b>Des mots aux sons</b> » <br/>
          • « <b>Arthur et Chimène au temps des musiques...</b> » <br/>
          • « <b>Le tour du monde d'Arthur</b> » <br/>
          • « <b>Miette et Prof et le monde merveilleux de la musique</b> » <br/>
          • « <b>Monsieur Soleil aime la musique</b> » <br/> <br/>
          Par ailleurs, l'Ensemble Hélios est ouvert à tout nouveau projet.<br/>
          N'hésitez pas à nous faire part de vos idées, suggestions afin que nous préparions un nouveau support de travail adapté à vos attentes.
          </h4>
          <Carousel images={imagesPedago}/>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          « Des mots aux sons »
          </h3>
          <h4 className={classes.subdescr}>
          Ce concert de musique contemporaine composées sur des poésies concerne un public de collégiens et lycéens.  <br/>
          Ce spectacle musical est à deux titres très original : D'abord, c'est un concert où on entendra uniquement de la musique contemporaine. D'autre part, les oeuvres entendues ont toutes été composées sur des textes de poètes, d’un siècle antérieur. L'intérêt pour les jeunes est donc double : un pied dans leur siècle, au coeur de la création musicale qui est celle de leur temps ; l'autre enraciné par les textes dans le passé, leur patrimoine littéraire. Cette riche transversalité inscrit le spectacle dans 3 domaines artistiques : arts du langage, arts du son, arts du spectacle vivant. <br/><br/>
          Les textes des grands auteurs ( Verlaine, Hugo, Marbeuf, Richepin, Rimbaud…. ) doivent être étudiés en amont avec l’aide des professeurs de lettres. Les musiciens présentent les œuvres (Finzi, Belloq, Rayneau ) et expliquent les procédés compositionnels. <br/>
          Les auditeurs remplissent une fiche de libre expression pour donner leur ressenti sur l’œuvre littéraire et son traitement musical.
          </h4>
          <h4 className={classes.subdescr}>
          Durée : 1h
          </h4>
          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>Le spectacle "Des mots aux sons" a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>

        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Sensiblisation aux musiques classique et contemporaine <br/>
          « Arthur et Chimène au temps des musiques.... »
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
          <Carousel images={images} />
          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>"Arthur et Chimène au temps des musiques... " a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle}>
          Ouverture de l'oreille sur les musiques traditionnelles <br/>
          « Le tour du monde d'Arthur »
          </h3>
          <h4 className={classes.subdescr}>
          Cette action de sensibilisation est destinée aux classes d'école maternelle grande section et d'école primaire jusqu'au CM2. <br/>
          Le quatuor intervient 6 semaines de suite, un concert de restitution auquel participent les enfants clôt le cycle d'interventions. <br/>
          Les séances impliquent les enfants et leurs enseignants. <br/><br/>
          Des chansons, -création Hélios paroles et musiques-, des marionnettes en costumes traditionnels, une carte du monde ajoutent aux musiques des éléments riches de culture et géographie. <br/><br/>
          Notre conceptrice de marionnettes, Brigitte Louchard, a mis au point deux activités de travail manuel à l'usage des enseignants, pour prolonger la présence d'Arthur et de ses amis du Tour du monde dans les classes. <br/>
          Fiches techniques fournies pour la confection par les enfants de répliques des marionnettes, soir en crépon, soit en pâte à sel.
          </h4>
          <h4 className={classes.subdescr}>
          6 séances de 50mn et un concert de restitution
          </h4>
          <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subSubtitle}>
            Témoignages
          </h3>
          <div style={{textAlign:"justify"}}>
          <Quote100
            text="Chers tous quatre,
            Nous vous remercions vivement pour ce beau projet autour d’Arthur et Chimène, qui a tant apporté aux enfants. Découvrir de nouvelles musiques, apprendre à écouter, se laisser surprendre, essayer les instruments, vous regarder jouer, monter sur scène : nos « grands » sont allés de découvertes en découvertes.
            Nous avons été très touchés par votre disponibilité, votre indulgence, vos encouragements rassurants et bienveillants à la fin du spectacle.
            Pour Elisa et Armelle ce fut une grande première de participer à un projet comme celui-là, et ce sera sûrement très formateur pour leurs prochaines années d’enseignement.
            Nous partageons aussi avec vous les remerciements de plusieurs parents conscients de l’investissement de tous les participants.
            Bonne continuation à vous quatre, et une pensée particulière pour Arthur et Chimène qui ont si bien accompagné les enfants !
            Bien à vous"
            author="L’équipe de Marie Marvingt, Issy-les-Moulineaux, 2018"
          />
          </div>
          </GridItem>
          <Carousel images={images1}/>
          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>"Le tour du monde d'Arthur" a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Sensiblisation aux musiques classique et contemporaine <br/>
          « Miette et Prof et le monde merveilleux de la musique »
          </h3>
          <h4 className={classes.subdescr}>
          Lors de leurs interventions dans les classes et en compagnie des marionettes Miette et Prof, les 2 musiciens initient les petits à la musique et aux mots pour la dire. <br/>
          Les enfants sont auditeurs, mais aussi acteurs, par le chant et les jeux musicaux. <br/>
          Document de suivi communiqué aux enseignants
          </h4>
          <h4 className={classes.subdescr}>
          Durée : 4 séances de présentation & d’échange avec les élèves (45 min chaque)
          </h4>
          <Carousel images={miette}/>
          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>Le spectacle "Miette et Prof et le monde merveilleux de la musique" a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
          <h3 className={classes.subtitle}>
          Sensiblisation aux musiques classique et contemporaine <br/>
          « Monsieur Soleil aime la musique »
          </h3>
          <h4 className={classes.subdescr}>
          Action pédagogique, conçue pour les enfants pour voyager dans la musique, au fil de l’histoire … <br/>
          • En compagnie du « Roi Soleil » et de Lully <br/>
          • En rencontrant les compositeurs Mozart et Ries <br/>
          • En voyageant au Japon, Pays du « Soleil Levant », avec ses Haïkus <br/>
          • En chantant sous le soleil d’Espagne, avec ses castagnettes <br/>
          • En dansant le Tango en Argentine <br/>
          • En écoutant des musiciens contemporains <br/>
          • Avec une flûte, un violon, un alto et un violoncelle <br/>
          • De la naissance de la musique au constat que la musique est infinie <br/>
          </h4>
          <h4 className={classes.subdescr}>
          Durée : 1 séance de présentation (1h)
          </h4>
          <Carousel images={soleil}/>
          <div className={classes.rectorat}>
            <img src={rectoratLogo} alt="Logo du rectorat" className={classes.rectoratImg}/>
            <b className={classes.verticalAlign}>Le spectacle "Monsieur Soleil aime la musique" a reçu l'habilitation de la délégation académique aux arts et à la culture du rectorat de Paris.</b>
          </div>
        </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
