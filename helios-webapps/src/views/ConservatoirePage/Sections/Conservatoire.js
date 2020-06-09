import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Quote100 from "../../../components/Typography/Quote100.js"

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Avec les Conservatoires et Ecoles de musique</h2>
        </GridItem>
        <GridItem>
        <h5 className={classes.subdescr}>
          L'Ensemble Hélios entre dans les murs pour tisser des projets à la carte autour de la musique de chambre.
          </h5>
        </GridItem>
      </GridContainer>
        <GridContainer>
        <GridItem>
          <h3 className={classes.subtitle}>
          « Autour de la musique de chambre »
          </h3>
          <h4 className={classes.subdescr}>
          L’Ensemble propose un projet de pédagogie et diffusion, qui s’articule autour du répertoire de musique de chambre. Chacune de ces interventions comporte un volet de pédagogie (cours avec les jeunes),  un volet de diffusion (concerts des jeunes et de l'Ensemble Hélios) et est construite de façon à répondre au profil et aux attentes de chaque établissement.
          </h4>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle}>
          « En collaboration avec la classe de flûte »
          </h3>
          <h4 className={classes.subdescr}>
          L'Ensemble propose un programme qui fait s'entrecroiser son propre répertoire et des ensembles de flûtes des trois cycles ( en duos, trios, quatuors... ). <br/><br/>
          A un quatuor de Feld dédié à Hélios, par exemple, répond l'exécution d'un trio de flûte par les étudiants du lieu. Le but est de mobiliser les classes de flûte, en générale très actives, et de montrer aux étudiants les aspects différents du travail du compositeur à travers des formations tranchées. <br/><br/>
          Ce projet sollicite beaucoup les compositeurs flûtistes de tous les temps ( Wendling, Berbiguier, Furstenau, Devienne, Doppler, Belloq, Luypaerts...) mais encore des compositeurs plus variés ( Feld, Hersant, Louvier, Telemann ... )
          </h4>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle}>
          « En collaboration avec les 4 classes de flûte, violon, alto et violoncelle »
          </h3>
          <h4 className={classes.subdescr}>
          Hélios possède un très riche répertoire contemporain, pour les cycles 1, 2 et 3 permettant d'organiser un riche projet de musique de chambre, autour  de courtes pièces spécifiquement adaptées à de « mini-Hélios». <br/><br/>
          Ces pièces ont été écrites à cette intention par des compositeurs de style et langage très variés : Alain Louvier, Jacques Castérède, Graciane Finzi, Enzo Gieco, Stéphane Bortoli, Sophie Lacaze, Raymond Guiot, Gilles Carré, Christel Rayneau, Jean-Michel Damase, Rui Martins, Jean-René Combes-Damien, Sophie Dufeutrelle, Jérôme Naulais, etc… .<br/><br/>
          La plupart de ces pièces sont réunies en recueils aux Editions Billaudot. Ces recueils contiennent aussi de courtes pièces classiques adaptées aux cycles 1 et 2. <br/><br/>
          <b>L'ensemble Hélios, lors d'une résidence souplement adaptées aux exigences de chaque conservatoire, fait travailler ce répertoire aux jeunes musiciens qui en donneront une restitution publique.</b>
          </h4>
        </GridItem>
        <GridItem>
          <h3 className={classes.subtitle}>
          « En collaboration avec toutes les classes du conservatoire »
          </h3>
          <h4 className={classes.subdescr}>
          Hélios propose des résidences avec un compositeur-ami ayant composé pour lui. L'évènement s'articule autour du répertoire de ce compositeur pour les cycles 1, 2 et éventuellement 3. <br/><br/>
          L'Ensemble fait travailler les groupes. Le compositeur explique son langage, ses oeuvres, et accompagne les étudiants avec Hélios. La restitution mêle les jeunes et l'ensemble dans une production monographique.
          </h4>
        </GridItem>
        <GridItem style={{marginBottom:"40px"}}>
        <h3 className={classes.subSubtitle}>
          Témoignages
        </h3>
        <div style={{textAlign:"justify", maxWidth:"100%"}}>
        <Quote100
          text="Je ne résiste pas à l'envie de vous renouveler mes félicitations pour le concert d'hier soir, cette fois avec plus de recul, mais sans me départir du même enthousiasme. Votre projet était remarquable, et la manière dont vous l'avez réalisé, exemplaire.
          Les élèves et étudiants ont reçu une formidable leçon de musique et de professionnalisme. Bravo à vous et à vos partenaires d'Hélios !"
          author="Bernard SOULES, Directeur du CRR de Versailles, 2013"
        />
        <Quote100
          text="J'ai gardé un très bon souvenir de la résidence au cours de laquelle nous avons accueilli les membres de l'Ensemble Hélios (2011-2012).
          Leur grand talent et leur dévouement dans le travail avec les élèves ont permis à tous de mieux connaitre et appréhender le répertoire flûte et trio à cordes.
          Le concert du 5 février 2012, en présence du compositeur Alain Louvier, fut un moment de pur bonheur..."
          author="Patrick MUT, Directeur du CRC Guy-Dinoird, 2012"
        />
        <Quote100
          text="J'ai eu l'occasion d'inviter récemment l'Ensemble Helios dans le cadre
          de la saison artistique du Conservatoire à Rayonnement Départemental du
          Choletais. J'ai pu, en même temps que le public nombreux que cet ensemble
          avait su rassembler, en apprécier le rayonnement artistique né d'une fusion
          totale de ses membres dans un amour commun du partage émotionnel. La
          complicité née d'un véritable travail passionné et obstiné vers la
          constante recherche d'harmonie a produit chez chacun des auditeurs ce
          frémissement commun propre aux moments musicaux d'exception...
          Par ailleurs, chargées d'une mission d'approche du répertoire
          contemporain, les membres d'Helios ont accompagné plusieurs groupes de
          musique de chambre du Conservatoire dans le travail, en présence du
          compositeur, de pièces écrites par Alain Louvier. Ce travail a été conduit
          avec beaucoup de conviction, et l'engagement dont chaque artiste a fait
          preuve dans ses échanges avec les élèves a permis d'assister à une
          restitution de qualité. L'appropriation de ce répertoire inhabituel pour
          les élèves a été rendu possible grâce à un travail précis du compositeur,
          relayé par les artistes d'Helios dans une complémentarité pédagogique
          exemplaire."
          author="Gilles FOUSSIER, Directeur de l’ERD de Cholet, 2009"
        />
        </div>
        </GridItem>
        </GridContainer>
    </div>
  );
}
