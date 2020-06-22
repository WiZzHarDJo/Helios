import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import Quote from "../../../components/Typography/Quote.js";
import GridItem from "../../../components/Grid/GridItem.js";

import {
  BrowserView,
  MobileView,
} from "react-device-detect";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import teleramaLogo from "./../../../assets/img/telerama-logo.jpg";
import lacroixLogo from "./../../../assets/img/la-croix-logo.webp";
import radioClassiqueLogo from "./../../../assets/img/radio-classique-logo.png";
import franceBleueLogo from "./../../../assets/img/logo-france-bleu-seo.jpg";
import laMuseLogo from "./../../../assets/img/logo_lamuse.png";
import repCentreLogo from "./../../../assets/img/rep-centre-logo.gif";
import bienPublicLogo from "./../../../assets/img/bien-public-logo.jpg";
import saoneLoireLogo from "./../../../assets/img/saone-loire-logo.png";
import siegenerLogo from "./../../../assets/img/siegener-logo.png";
import indeLogo from "./../../../assets/img/independant-logo.jpg";
import laPresseLogo from "./../../../assets/img/lapresse-logo.png";
import percheLogo from "./../../../assets/img/leperche-logo.png";
import ouestLogo from "./../../../assets/img/ouest-france-logo.jpg";
import dnaLogo from "./../../../assets/img/dna-logo.jpg";
import actionLogo from "./../../../assets/img/action-logo.png";
import lettreMusicienLogo from "./../../../assets/img/musician-letter-logo.jpg";
import cnsmLogo from "./../../../assets/img/cnsm-logo.png";
import bolshoiLogo from "./../../../assets/img/bolshoi-logo-big.gif";
import pariscopeLogo from "./../../../assets/img/pariscope-logo.png";
import traversiereLogo from "./../../../assets/img/traversiere-logo.png";
import crescendoLogo from "./../../../assets/img/crescendo-logo.jpg";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <BrowserView>
      <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>La presse en parle</h2>
        </GridItem>
      </GridContainer>
      <GridContainer >
      <GridItem>
          <div className={classes.typo}>
              <img src={crescendoLogo} alt="Logo Crescendo Magazine" className={classes.pressImg}/>
            <Quote
              text="Pour Que l’Esprit Vive, association fondée en 1932, œuvre pour lutter contre l’isolement rural par l’art et la culture. Son infatigable directrice, Agnès Desjobert, développe le réseau des petits villages dont les habitants accueillent, le temps d’un week-end bien rempli, ponctuellement, puis régulièrement, des artistes professionnels. Dernier de la saison, le concert d’aujourd’hui se déroule à Jailly-les-Moulins, village de Bourgogne, très enclavé. Dix minutes avant, des dizaines de voitures stationnent, la nef de la petite église est bondée, certainement deux fois l’effectif total de la population (88 habitants).
              Le quatuor Hélios, justement réputé, se compose d’une flûte et d’un trio à cordes, formation relativement rare, particulièrement lorsqu’elle est permanente. Pas moins de 78 œuvres ont été écrites à son intention. Deux d’entre elles, de deux compositrices, s’insèreront entre trois quatuors avec flûte de Mozart. Ainsi constitué, le programme répond à toutes les attentes. D’autant que la flûtiste, Christel Rayneau, captive le public en lui présentant chaque œuvre de façon claire, démonstrative et juste. (...)
              L’acoustique favorable de l’église amplifie le son et altère parfois la dynamique, détail un peu dérisoire par rapport à l’approche exemplaire des Hélios, familiers de longue date de ces œuvres qu’ils affectionnent visiblement. L’insouciance, la jovialité, l’énergie y font bon ménage, le jeu de chacun des complices permettant une conversation idéale. (...)
              De Ivane Béatrice Bellocq, Soleil noir (2006), titre en forme d’oxymore, se fonde sur un étrange poème d’un détenu de l’enfer russe. L’œuvre musicale est forte, ambitieuse, expressive, explorant de nombreux modes de jeu (jusqu’au chant dans l’ouïe du violon). On en sort accablé.
              Les longues et chaleureuses ovations de l’assistance lui valent un bis, Paris s’éveille (Jacques Dutronc), que le public identifie spontanément et chante de bon cœur (chœur), l’écriture raffinée des cordes et la flûte virtuose lui offrant un écrin bienvenu."
              author="Yvan Beuvard, Crescendo Magazine, 'Une belle et singulière aventure musicale', 2 mars 2020"
              link
              linkText="https://www.crescendo-magazine.be/une-belle-et-singuliere-aventure-musicale/"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
              <img src={traversiereLogo} alt="Logo Traversière" className={classes.pressImg}/>
            <Quote
              text="Ce samedi 6 avril a eu lieu au Temple St-Jean, rue de Grenelle à Paris, un concert exceptionnel du désormais célèbre quatuor avec flûte, l’ensemble Hélios. Mené de main de maitresse (!) par la brillante Christel Rayneau, cette formation aguerrie à tous les styles de répertoire nous a offert un moment inoubliable parce que rare par sa programmation moderne et éclectique, et éminemment précieux pour sa grande qualité artistique.

              Du baroque de J. Chrétien Bach au contemporain de Fabrice GREGORUTTI en sa présence pour la création de leur 74ème dédicace (pour près de 200 créations au total), les membres du quatuor Hélios sont décidément à l’aise dans toutes les époques musicales. (...)
              Dans l’adagio interprété avec une sensibilité profondément touchante nous avons été transportés aux sommets de l’expression artistique. Qu’ils soient tous félicités pour l’intégrité de l’ensemble d’une homogénéité exemplaire.

              Quant à Doppler on en a redécouvert le visage dans une réjouissante version de sa « Fantaisie pastorale hongroise » réarrangée en l’espèce pour flûte et cordes par Thibault PERRINE (aux éditions BILLAUDOT) avec, cerise sur le gâteau en guise de final héroïque, une cadence de la flûte du contre-Ré au Ré grave comme j’avais toujours rêvé de l’entendre ! Un vrai régal de bout en bout que nous avons dégusté sans en perdre la moindre miette. (...)
              Vivement la séance de rattrapage !"
              author="Claude Abraham, travailleur artistique de longue date : technicien de l’audiovisuel et du spectacle, acteur de complément et depuis quelques années flûtiste dans plusieurs formations orchestrales, Traverière Magazine, mardi 16 avril 2019"
              link
              linkText="https://latraversiere.fr/webzine/retrospectives/ensemble-helios-concert-du-6-04-2019/"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
              <img src={pariscopeLogo} alt="Logo Pariscope" className={classes.pressImg}/>
            <Quote
              text="Voilà un spectacle musical dont on ressort intellectuellement plus riche !
              Imaginé par Christel Rayneau, il retrace la vie du compositeur français Claude Debussy (1862-1918) par le biais des souvenirs de Miss, la gouvernante anglaise de sa fille adorée, Claude-Emma, surnommée « Chouchou ». Cette jeune anglaise pleine de malice, suffragette exilée à Paris, est incarnée par la lumineuse Emilie Chevrillon. Pendant une heure- que l’on aimerait plus longue tant le récit est captivant-, elle nous plonge dans le quotidien de Chouchou, de son élégante maman et de son illustre papa, mais aussi dans celui du monde tel qu’il allait au début du XXème siècle. La crue de la Seine de 1910, le naufrage du transatlantique « Titanic » en 1912, la Première guerre mondiale…les grands évènements de l’époque côtoient les anecdotes personnelles des Debussy.
              Tout est raconté simplement et de façon vivante. Ce n’est jamais ennuyeux ni pompeux, ce qui rend cette création jeune public formidable.
              Projetées en arrière-scène, des images d’époque aident à appréhender la France des années 1900, tandis que les belles partitions de Debussy, jouées en live par le Quatuor Hélios ( flûte et trio à cordes) accompagnent le récit empli de sensibilité de Miss.
              Grâce à la finesse et à la légèreté de sa mise en scène, Stéphanie Tesson relève haut la main un pari qui pouvait sembler osé : passionner les enfants avec Debussy.
              On a adoré ! A partir de 6 ans"
              author="Judith Rablat-Tuil, Pariscope"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
              <img src={teleramaLogo} alt="Logo Télérama" className={classes.pressImg}/>
            <Quote
              text="Un spectacle musical, écrit et mis en scène avec subtilité, que le jeu vif et juste de la comédienne, Emilie Chevrillon, rend d'autant plus sensible."
              author="Françoise Sabatier-Morel, Récompensé par TT sur Télérama"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"100px"}}/>
          <img src={radioClassiqueLogo} alt="Logo Radio Classique" className={classes.roundPressImg}/>
          <div style={{width:"100px"}}/>
            <Quote
              text="Un très très joli spectacle, qui mérite vraiment les éloges… Une comédienne au ton toujours juste."
              author="Radio Classique, Coup de coeur"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={lacroixLogo} alt="Logo La Croix" className={classes.pressImg}/>
            <Quote
              text="Porté par la présence lumineuse de la comédienne Emilie Chevrillon, le spectacle, souvent enjoué et plein d'humour, avec finesse et sans démagogie, met à la portée des jeunes oreilles une musique réputée difficile."
              author="Emmanuelle Guiliani, La Croix"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"100px"}}/>
          <img src={franceBleueLogo} alt="Logo France Bleu" className={classes.roundPressImg}/>
          <div style={{width:"100px"}}/>
            <Quote
              text="C'est un très joli spectacle....De la musique classique en pagaille, couplée avec des images d'archives."
              author="France Bleu"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={laMuseLogo} alt="Logo La Muse" className={classes.pressImg}/>
            <Quote
              text="Joli spectacle musical à partager avec des enfants dès 7 -8 ans. L’histoire de la famille Debussy vue par Miss, la gouvernante anglaise de Chouchou, dernière fille du grand compositeur.
              Quatre musiciens sont sur scène, ce qui assez exceptionnel et permet à tous une belle immersion dans l’univers musical du compositeur. C’est donc à un mini-concert au quel les enfants sont conviés, avec des extraits d’œuvres qui ponctuent les différents moments de la vie de Chouchou, que l’on voit grandir.
              Chouchou, la fille chérie des Debussy n'est pas sur scène. Elle est présente par des photos anciennes projetées astucieusement dans le décor. Le chef d'orchestre du spectacle, c'est Miss, très bien interprétée par Emilie Chevrillon. Vive, enjouée, elle a une belle présence et crée une proximité très agréable avec le public. Elle raconte le quotidien de la famille, qui vit au rythme des créations du compositeur. Si Debussy est un homme qui aime que le silence règne dans sa maison, c’est aussi un excellent père, comme le montrent les lettres touchantes qu'il envoie à sa fille.
              Un autre aspect intéressant du spectacle est d'avoir restitué le contexte historique de l’époque avec des images d'archives. "
              author="La Muse"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={repCentreLogo} alt="Logo La République du Centre" className={classes.pressImg}/>
            <Quote
              text="340 enfants ont investi l'espace Georges-Blareau, à Sully, pour assister au concert scolaire organisé par les Amis du festival, vendredi. Depuis jeudi se succèdent de nombreuses écoles du canton dans la salle de spectacle. L'école du Centre et l'école Jeanne-d'Arc de Sully ainsi que l'école de Dampierre-en-Burly ont envoyé leurs classes du CP au CM2.
              Les petits auditeurs ont su apprécier la prestation du quatuor Hélios. Sur les airs les plus connus de Wolfgang Amadeus Mozart, un comédien et les quatre musiciens ont recréé l'univers du jeune prodige, âgé de six ans lorsqu'il commença à composer.
              Ce fut un voyage dans le temps avec Wolfi, marionnette de Mozart et celle de sa soeur Nannerl qui parcourut l'Europe en famille.
              Rires et applaudissements ont prouvé que le spectacle avait tenu toutes ses promesses ; puissance musicale et jeux de scènes d'envergures ont touché les enfants."
              author="La République du Centre '11 écoles et 1000 enfants au concert', 31 Mai 2015"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={bienPublicLogo} alt="Logo Le Bien public" className={classes.pressImg}/>
            <Quote
              text="Pour le dernier concert de la saison, l'Ensemble Hélios a littéralement subjugué un public connaisseur venu nombreux en la Chapelle Ste Anne.
              Les trois mouvements du quatuor op 37 de Dressler donnent le ton : vif, enjoué, romantique. Le violoncelliste scande la mesure avec sa jambe, les musiciennes sourient, le public sent qu'il va aimer 'cette oeuvre sortie du sommeil d'une bibliothèque', selon la flûtiste. Puis du contemporain parmi les soixante oeuvres composées pour l'Ensemble Hélios : celles d'Alexandre Gasparov et Nicolas Bacri. Les musiciens attirent l'attention du public sur les sourdines de plomb qui rendent l'atmosphère pystique de l'oeuvre du premier compositeur, puis le caractère furtif du sommeil des très courtes pièces des Nocturnes du second.
              La légèreté et le soleil de l'Italie envahissent l'espace et illuminent les auditeurs avec le quatuor en mib de JC Bach. Enfin, Mozart plonge le public dans un enthousiasme sans pareil.
              Ce concert était soutenu par Musique Nouvelle en liberté."
              author="Chantal Blancher, Le Bien public 'Hors saison musical : un dernier concert très apprécié', 1er avril 2015"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"400px"}}/>
            <Quote
              text="J'étais impatient d'écouter le CD du Quatuor Hélios, consacré à des oeuvres du 20ème siècle. Je vous prie de partager avec vos partenaires mes compliments pour la finesse des interprétations."
              author="Henri Dutilleux, compositeur de musique classique et contemporaine"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={repCentreLogo} alt="Logo La République du Centre" className={classes.pressImg}/>
            <Quote
              text="Samedi la salle des mariages recevait l'Ensemble Hélios. Hélios, c'est une pâte sonore intense et multicolore, un soleil ardent, un miroir de poésie qui unit dans un souffle commun une flûte somptueuse et un trio à cordes. Le Debussy des Epigraphes antiques réveille des mondes fascinants, le Trio de Roussel vibre dans la lumière d'Hélios, avant le rêve des 3 Nocturnes de Nicolas Bacri, figure majeure de la musique de notre temps, qui travaille à la résurrection d'un opéra de Bordes.
              Sauvage ou méditative, dans les tourbillons de la fête ou contemplant des paysages larges comme l'espace, la Suite Basque de Bordes emportait une salle comble dans un monde de rythmes échevelés, de sensualité harmonique, de jeux de couleurs, charmée par ce quêteur d'authentique, qui, parti boire à la source, savait écouter, dans les auberges enfumées ou de la bouche d'un berger, la voix et l'âme d'un peuple."
              author="Philippe Haller, La République du Centre, 'Le soleil ardent d'Hélios', 25 novembre 2014"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"400px"}}/>
            <Quote
              text="Le son chaleureux et lumineux de Christel Rayneau, sa capacité à intégrer les différents modes de jeu à la beauté de l'arc sonore du dessin, l'expérience bien connue de ses partenaires en musique contemporaine, la conviction commune aux quatre musiciens, tout concourt à nous faire partager un monde de sensations nourri d'une attention à tous les signes de l'imaginaire.
              La prise de son de Sébastien Nolly, très présente, très fidèle, ne mérite que des éloges et nous donne l'impression de recevoir les musiciens dans notre salon. La musique suggère bien plus encore, vibrante réussite d'un esprit aux aguets des mouvements de l'âme ; les interprètes y mettent tout leur coeur. La Monodie IV permet d'apprécier la délicate sensibilité de la flûtiste en solo."
              author="Sylviane Falcinelli, Décembre 2013"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={saoneLoireLogo} alt="Logo Journal de Saône et Loire" className={classes.pressImg}/>
            <Quote
              text="Le public nombreux a salué l’interprétation remarquablement inspirée, l’étonnante virtuosité et la beauté des sonorités des musiciens. Une soirée riche en émotions musicales…."
              author="Journal de Saône et Loire, 15 octobre 2012"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"400px"}}/>
            <Quote
              text="Les musiciens ont transmis leur bonheur au public qui les a beaucoup applaudis.
              On quitte le concert le sourire aux lèvres, en se sentant privilégié d’avoir assisté à quelques chose de très spécial, non-reproductible. Dommage pour les autres que cet événement n’ait pas été enregistré."
              author="Emanuel Borja, 'Portrait musical de Gertrude Stein avec le Quatuor Helios' au Grand Palais"
              link
              linkText="http://eborja.unblog.fr/musique-et-theatre/articles-recents/portrait-musical-de-gertrude-stein-avec-le-quatuor-helios/"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={siegenerLogo} alt="Logo Siegener Zeitung" className={classes.pressImg}/>
            <Quote
              text="L’ensemble conquiert l’assemblée. L’interprétation dépasse l’ordinaire : une expérience musicale très intense."
              author="Siegener Zeitung, 5 décembre 2011"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={indeLogo} alt="Logo L'Indépendant" className={classes.pressImg}/>
            <Quote
              text="Les quatre musiciens ont offert un superbe concert de musique de chambre, tout en sensibilité et délicatesse. Ce fut un des précieux moments du festival."
              author="L'Indépendant (Festival 'Aujourd'hui Musiques')"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={repCentreLogo} alt="Logo La République du Centre" className={classes.pressImg}/>
            <Quote
              text="Il faut aussi cette magie indéfinissable qui permet aux musiciens de réellement communiquer avec le public. Ce fut le cas lundi soir : avec un programme parfaitement équilibré, les quatre musiciennes ont su montrer leur capacités techniques mais aussi donner de l'émotion et partager un vrai moment de musique."
              author="La République Du Centre"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"370px"}}/>
            <Quote
              text="Une prestation de grande qualité, applaudie à sa juste valeur."
              author="La Gazette"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"100px"}}/>
          <img src={laPresseLogo} alt="Logo La Presse" className={classes.roundPressImg}/>
          <div style={{width:"100px"}}/>
            <Quote
              text="Quatre musiciens talentueux et chaleureux, un moment délicat et harmonieux."
              author="La Presse (Festival de Besançon)"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={percheLogo} alt="Logo Le Perche" className={classes.pressImg}/>
            <Quote
              text="Les quatre musiciens du Quatuor HÉLIOS ont su marquer les mémoires, au cours d'une soirée musicale, où la qualité s'est disputée à la diversité."
              author="Le Perche (Printemps Musical du Perche)"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={actionLogo} alt="Logo L'Action" className={classes.pressImg}/>
            <Quote
              text="L'émotion, la sensibilité, une finesse et une précision de jeu des concertistes ont fait de ce spectacle un des meilleurs moments du Festival."
              author="L'Action (Printemps musical du Perche)"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"100px"}}/>
          <img src={ouestLogo} alt="Logo Ouest France" className={classes.roundPressImg}/>
          <div style={{width:"100px"}}/>
            <Quote
              text="Soirée de charme, soirée exceptionnelle, soirée de rêve : chacun l'a ressenti."
              author="Ouest France"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={dnaLogo} alt="Logo DNA" className={classes.pressImg}/>
            <Quote
              text="Le Quatuor HÉLIOS vient d’ouvrir le deuxième Festival International de flûte d’Obernai. La transcription par Franz-Anton Hoffmeister de la sonate n°11 de Mozart a permis aux jeunes artistes d’exprimer leur ardent lyrisme dans un dialogue aéré, vif, passionné. Vivement ovationnées, les valeureuses quartettistes offraient deux bis très contrastés. M. Jindrich Feld et Mme Alain Marion étaient venus tout exprès de Prague et de Paris pour ce concert."
              author="Dernières Nouvelles d’Alsace (Festival 'Flûtes 2002' d’Obernai)"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"100px"}}/>
          <img src={lettreMusicienLogo} alt="Logo La Lettre du Musicien" className={classes.roundPressImg}/>
          <div style={{width:"100px"}}/>
            <Quote
              text="L’équilibre entre musique de chambre et musique concertante que requiert le quatuor pour flûte et cordes est difficile. Mais son histoire récente apporte les preuves indiscutables de sa renaissance. Celle-ci est largement due à l’Ensemble HÉLIOS, qui, en menant des recherches particulièrement poussées sur le répertoire et surtout en sollicitant de nombreux compositeurs a offert un nouvel avenir à cette formation."
              author="La Lettre du Musicien, n° 306 (décembre 2004)"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={cnsmLogo} alt="Logo CNSM" className={classes.pressImg}/>
            <Quote
              text="Quatre têtes bien faites, huit mains habiles unies dans une même pensée, un goût très sûr, un sens exquis de la mesure, juste ce qu’il faut de tact et de maîtrise pour avoir toutes les audaces, tel se présente l’Ensemble HÉLIOS, auquel je souhaite tout le succès qu’il mérite."
              author="Christian Lardé, (flûtiste, concertiste international, ancien professeur de musique de chambre au C.N.S.M. de Paris)"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <img src={bolshoiLogo} alt="Logo Bolshoi" className={classes.pressImg}/>
            <Quote
              text="J’ai été ravi et enthousiasmé de l’interprétation musicale de votre formation. L’exécution était d’une richesse admirable quant aux langages et coloris de la palette musicale, avec finesse d’interprétation et une grande maîtrise de chacune des musiciens. Sans aucun doute, le Quatuor HÉLIOS fait partie des meilleurs ensembles de musique de chambre européens"
              author="Igor Bogoulavsky, (Premier alto solo du Bolchoï Théâtre de Moscou, professeur au Conservatoire Gnessin de Moscou)"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
          <div style={{width:"400px"}}/>
            <Quote
              text="J'ai bien reçu votre CD et suis parfaitement conquis, tout d'abord par ce programme panorama de ce siècle, et par le magnifique engagement musical de l'Ensemble."
              author="Bernard Pierreuse, (flûtiste, soliste de l’Orchestre de Liège, enseignant et auteur de l’ouvrage de référence 'Flûte Littérature' / éd. Jobert/Transtalantiques)"
            />
          </div>
      </GridItem>
      <GridItem>
          <div className={classes.typo}>
            <div style={{width:"400px"}}/>
            <Quote
              text="Les oeuvres d’Alain Louvier, Rui Martins et Jean-René Combes-Damiens furent écrites à l’intention de l’Ensemble HÉLIOS. Ses membres s’y montrent d’enthousiastes interprètes (…). Dans un état de totale concentration, de complet investissement, le quatuor saisit toutes ces pages à bras-le corps."
              author='Serge Grégory, (Mensuel "Répertoire")'
            />
          </div>
      </GridItem>
      </GridContainer>
    </div>
      </BrowserView>

      <MobileView>
      <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>La presse en parle</h2>
        </GridItem>
      </GridContainer>
      <GridContainer >
      <GridItem>
              <img src={crescendoLogo} alt="Logo Crescendo Magazine" className={classes.pressImg}/>
            <Quote
              text="Pour Que l’Esprit Vive, association fondée en 1932, œuvre pour lutter contre l’isolement rural par l’art et la culture. Son infatigable directrice, Agnès Desjobert, développe le réseau des petits villages dont les habitants accueillent, le temps d’un week-end bien rempli, ponctuellement, puis régulièrement, des artistes professionnels. Dernier de la saison, le concert d’aujourd’hui se déroule à Jailly-les-Moulins, village de Bourgogne, très enclavé. Dix minutes avant, des dizaines de voitures stationnent, la nef de la petite église est bondée, certainement deux fois l’effectif total de la population (88 habitants).
              Le quatuor Hélios, justement réputé, se compose d’une flûte et d’un trio à cordes, formation relativement rare, particulièrement lorsqu’elle est permanente. Pas moins de 78 œuvres ont été écrites à son intention. Deux d’entre elles, de deux compositrices, s’insèreront entre trois quatuors avec flûte de Mozart. Ainsi constitué, le programme répond à toutes les attentes. D’autant que la flûtiste, Christel Rayneau, captive le public en lui présentant chaque œuvre de façon claire, démonstrative et juste. (...)
              L’acoustique favorable de l’église amplifie le son et altère parfois la dynamique, détail un peu dérisoire par rapport à l’approche exemplaire des Hélios, familiers de longue date de ces œuvres qu’ils affectionnent visiblement. L’insouciance, la jovialité, l’énergie y font bon ménage, le jeu de chacun des complices permettant une conversation idéale. (...)
              De Ivane Béatrice Bellocq, Soleil noir (2006), titre en forme d’oxymore, se fonde sur un étrange poème d’un détenu de l’enfer russe. L’œuvre musicale est forte, ambitieuse, expressive, explorant de nombreux modes de jeu (jusqu’au chant dans l’ouïe du violon). On en sort accablé.
              Les longues et chaleureuses ovations de l’assistance lui valent un bis, Paris s’éveille (Jacques Dutronc), que le public identifie spontanément et chante de bon cœur (chœur), l’écriture raffinée des cordes et la flûte virtuose lui offrant un écrin bienvenu."
              author="Yvan Beuvard, Crescendo Magazine, 'Une belle et singulière aventure musicale', 2 mars 2020"
              link
              linkText="https://www.crescendo-magazine.be/une-belle-et-singuliere-aventure-musicale/"
            />
      </GridItem>
      <GridItem>
              <img src={traversiereLogo} alt="Logo Traversière" className={classes.pressImg}/>
            <Quote
              text="Ce samedi 6 avril a eu lieu au Temple St-Jean, rue de Grenelle à Paris, un concert exceptionnel du désormais célèbre quatuor avec flûte, l’ensemble Hélios. Mené de main de maitresse (!) par la brillante Christel Rayneau, cette formation aguerrie à tous les styles de répertoire nous a offert un moment inoubliable parce que rare par sa programmation moderne et éclectique, et éminemment précieux pour sa grande qualité artistique.

              Du baroque de J. Chrétien Bach au contemporain de Fabrice GREGORUTTI en sa présence pour la création de leur 74ème dédicace (pour près de 200 créations au total), les membres du quatuor Hélios sont décidément à l’aise dans toutes les époques musicales. (...)
              Dans l’adagio interprété avec une sensibilité profondément touchante nous avons été transportés aux sommets de l’expression artistique. Qu’ils soient tous félicités pour l’intégrité de l’ensemble d’une homogénéité exemplaire.

              Quant à Doppler on en a redécouvert le visage dans une réjouissante version de sa « Fantaisie pastorale hongroise » réarrangée en l’espèce pour flûte et cordes par Thibault PERRINE (aux éditions BILLAUDOT) avec, cerise sur le gâteau en guise de final héroïque, une cadence de la flûte du contre-Ré au Ré grave comme j’avais toujours rêvé de l’entendre ! Un vrai régal de bout en bout que nous avons dégusté sans en perdre la moindre miette. (...)
              Vivement la séance de rattrapage !"
              author="Claude Abraham, travailleur artistique de longue date : technicien de l’audiovisuel et du spectacle, acteur de complément et depuis quelques années flûtiste dans plusieurs formations orchestrales, Traverière Magazine, mardi 16 avril 2019"
              link
              linkText="https://latraversiere.fr/webzine/retrospectives/ensemble-helios-concert-du-6-04-2019/"
            />
      </GridItem>
      <GridItem>
              <img src={pariscopeLogo} alt="Logo Pariscope" className={classes.pressImg}/>
            <Quote
              text="Voilà un spectacle musical dont on ressort intellectuellement plus riche !
              Imaginé par Christel Rayneau, il retrace la vie du compositeur français Claude Debussy (1862-1918) par le biais des souvenirs de Miss, la gouvernante anglaise de sa fille adorée, Claude-Emma, surnommée « Chouchou ». Cette jeune anglaise pleine de malice, suffragette exilée à Paris, est incarnée par la lumineuse Emilie Chevrillon. Pendant une heure- que l’on aimerait plus longue tant le récit est captivant-, elle nous plonge dans le quotidien de Chouchou, de son élégante maman et de son illustre papa, mais aussi dans celui du monde tel qu’il allait au début du XXème siècle. La crue de la Seine de 1910, le naufrage du transatlantique « Titanic » en 1912, la Première guerre mondiale…les grands évènements de l’époque côtoient les anecdotes personnelles des Debussy.
              Tout est raconté simplement et de façon vivante. Ce n’est jamais ennuyeux ni pompeux, ce qui rend cette création jeune public formidable.
              Projetées en arrière-scène, des images d’époque aident à appréhender la France des années 1900, tandis que les belles partitions de Debussy, jouées en live par le Quatuor Hélios ( flûte et trio à cordes) accompagnent le récit empli de sensibilité de Miss.
              Grâce à la finesse et à la légèreté de sa mise en scène, Stéphanie Tesson relève haut la main un pari qui pouvait sembler osé : passionner les enfants avec Debussy.
              On a adoré ! A partir de 6 ans"
              author="Judith Rablat-Tuil, Pariscope"
            />
      </GridItem>
      <GridItem>
              <img src={teleramaLogo} alt="Logo Télérama" className={classes.pressImg}/>
            <Quote
              text="Un spectacle musical, écrit et mis en scène avec subtilité, que le jeu vif et juste de la comédienne, Emilie Chevrillon, rend d'autant plus sensible."
              author="Françoise Sabatier-Morel, Récompensé par TT sur Télérama"
            />
      </GridItem>
      <GridItem>
          <img src={radioClassiqueLogo} alt="Logo Radio Classique" className={classes.roundPressImg}/>
            <Quote
              text="Un très très joli spectacle, qui mérite vraiment les éloges… Une comédienne au ton toujours juste."
              author="Radio Classique, Coup de coeur"
            />
      </GridItem>
      <GridItem>
          <img src={lacroixLogo} alt="Logo La Croix" className={classes.pressImg}/>
            <Quote
              text="Porté par la présence lumineuse de la comédienne Emilie Chevrillon, le spectacle, souvent enjoué et plein d'humour, avec finesse et sans démagogie, met à la portée des jeunes oreilles une musique réputée difficile."
              author="Emmanuelle Guiliani, La Croix"
            />
      </GridItem>
      <GridItem>
          <img src={franceBleueLogo} alt="Logo France Bleu" className={classes.roundPressImg}/>
            <Quote
              text="C'est un très joli spectacle....De la musique classique en pagaille, couplée avec des images d'archives."
              author="France Bleu"
            />
      </GridItem>
      <GridItem>
          <img src={laMuseLogo} alt="Logo La Muse" className={classes.pressImg}/>
            <Quote
              text="Joli spectacle musical à partager avec des enfants dès 7 -8 ans. L’histoire de la famille Debussy vue par Miss, la gouvernante anglaise de Chouchou, dernière fille du grand compositeur.
              Quatre musiciens sont sur scène, ce qui assez exceptionnel et permet à tous une belle immersion dans l’univers musical du compositeur. C’est donc à un mini-concert au quel les enfants sont conviés, avec des extraits d’œuvres qui ponctuent les différents moments de la vie de Chouchou, que l’on voit grandir.
              Chouchou, la fille chérie des Debussy n'est pas sur scène. Elle est présente par des photos anciennes projetées astucieusement dans le décor. Le chef d'orchestre du spectacle, c'est Miss, très bien interprétée par Emilie Chevrillon. Vive, enjouée, elle a une belle présence et crée une proximité très agréable avec le public. Elle raconte le quotidien de la famille, qui vit au rythme des créations du compositeur. Si Debussy est un homme qui aime que le silence règne dans sa maison, c’est aussi un excellent père, comme le montrent les lettres touchantes qu'il envoie à sa fille.
              Un autre aspect intéressant du spectacle est d'avoir restitué le contexte historique de l’époque avec des images d'archives. "
              author="La Muse"
            />
      </GridItem>
      <GridItem>
          <img src={repCentreLogo} alt="Logo La République du Centre" className={classes.pressImg}/>
            <Quote
              text="340 enfants ont investi l'espace Georges-Blareau, à Sully, pour assister au concert scolaire organisé par les Amis du festival, vendredi. Depuis jeudi se succèdent de nombreuses écoles du canton dans la salle de spectacle. L'école du Centre et l'école Jeanne-d'Arc de Sully ainsi que l'école de Dampierre-en-Burly ont envoyé leurs classes du CP au CM2.
              Les petits auditeurs ont su apprécier la prestation du quatuor Hélios. Sur les airs les plus connus de Wolfgang Amadeus Mozart, un comédien et les quatre musiciens ont recréé l'univers du jeune prodige, âgé de six ans lorsqu'il commença à composer.
              Ce fut un voyage dans le temps avec Wolfi, marionnette de Mozart et celle de sa soeur Nannerl qui parcourut l'Europe en famille.
              Rires et applaudissements ont prouvé que le spectacle avait tenu toutes ses promesses ; puissance musicale et jeux de scènes d'envergures ont touché les enfants."
              author="La République du Centre '11 écoles et 1000 enfants au concert', 31 Mai 2015"
            />
      </GridItem>
      <GridItem>
          <img src={bienPublicLogo} alt="Logo Le Bien public" className={classes.pressImg}/>
            <Quote
              text="Pour le dernier concert de la saison, l'Ensemble Hélios a littéralement subjugué un public connaisseur venu nombreux en la Chapelle Ste Anne.
              Les trois mouvements du quatuor op 37 de Dressler donnent le ton : vif, enjoué, romantique. Le violoncelliste scande la mesure avec sa jambe, les musiciennes sourient, le public sent qu'il va aimer 'cette oeuvre sortie du sommeil d'une bibliothèque', selon la flûtiste. Puis du contemporain parmi les soixante oeuvres composées pour l'Ensemble Hélios : celles d'Alexandre Gasparov et Nicolas Bacri. Les musiciens attirent l'attention du public sur les sourdines de plomb qui rendent l'atmosphère pystique de l'oeuvre du premier compositeur, puis le caractère furtif du sommeil des très courtes pièces des Nocturnes du second.
              La légèreté et le soleil de l'Italie envahissent l'espace et illuminent les auditeurs avec le quatuor en mib de JC Bach. Enfin, Mozart plonge le public dans un enthousiasme sans pareil.
              Ce concert était soutenu par Musique Nouvelle en liberté."
              author="Chantal Blancher, Le Bien public 'Hors saison musical : un dernier concert très apprécié', 1er avril 2015"
            />
      </GridItem>
      <GridItem>
          <div style={{width:"400px"}}/>
            <Quote
              text="J'étais impatient d'écouter le CD du Quatuor Hélios, consacré à des oeuvres du 20ème siècle. Je vous prie de partager avec vos partenaires mes compliments pour la finesse des interprétations."
              author="Henri Dutilleux, compositeur de musique classique et contemporaine"
            />
      </GridItem>
      <GridItem>
          <img src={repCentreLogo} alt="Logo La République du Centre" className={classes.pressImg}/>
            <Quote
              text="Samedi la salle des mariages recevait l'Ensemble Hélios. Hélios, c'est une pâte sonore intense et multicolore, un soleil ardent, un miroir de poésie qui unit dans un souffle commun une flûte somptueuse et un trio à cordes. Le Debussy des Epigraphes antiques réveille des mondes fascinants, le Trio de Roussel vibre dans la lumière d'Hélios, avant le rêve des 3 Nocturnes de Nicolas Bacri, figure majeure de la musique de notre temps, qui travaille à la résurrection d'un opéra de Bordes.
              Sauvage ou méditative, dans les tourbillons de la fête ou contemplant des paysages larges comme l'espace, la Suite Basque de Bordes emportait une salle comble dans un monde de rythmes échevelés, de sensualité harmonique, de jeux de couleurs, charmée par ce quêteur d'authentique, qui, parti boire à la source, savait écouter, dans les auberges enfumées ou de la bouche d'un berger, la voix et l'âme d'un peuple."
              author="Philippe Haller, La République du Centre, 'Le soleil ardent d'Hélios', 25 novembre 2014"
            />
      </GridItem>
      <GridItem>
            <Quote
              text="Le son chaleureux et lumineux de Christel Rayneau, sa capacité à intégrer les différents modes de jeu à la beauté de l'arc sonore du dessin, l'expérience bien connue de ses partenaires en musique contemporaine, la conviction commune aux quatre musiciens, tout concourt à nous faire partager un monde de sensations nourri d'une attention à tous les signes de l'imaginaire.
              La prise de son de Sébastien Nolly, très présente, très fidèle, ne mérite que des éloges et nous donne l'impression de recevoir les musiciens dans notre salon. La musique suggère bien plus encore, vibrante réussite d'un esprit aux aguets des mouvements de l'âme ; les interprètes y mettent tout leur coeur. La Monodie IV permet d'apprécier la délicate sensibilité de la flûtiste en solo."
              author="Sylviane Falcinelli, Décembre 2013"
            />
      </GridItem>
      <GridItem>
          <img src={saoneLoireLogo} alt="Logo Journal de Saône et Loire" className={classes.pressImg}/>
            <Quote
              text="Le public nombreux a salué l’interprétation remarquablement inspirée, l’étonnante virtuosité et la beauté des sonorités des musiciens. Une soirée riche en émotions musicales…."
              author="Journal de Saône et Loire, 15 octobre 2012"
            />
      </GridItem>
      <GridItem>
            <Quote
              text="Les musiciens ont transmis leur bonheur au public qui les a beaucoup applaudis.
              On quitte le concert le sourire aux lèvres, en se sentant privilégié d’avoir assisté à quelques chose de très spécial, non-reproductible. Dommage pour les autres que cet événement n’ait pas été enregistré."
              author="Emanuel Borja, 'Portrait musical de Gertrude Stein avec le Quatuor Helios' au Grand Palais"
              link
              linkText="http://eborja.unblog.fr/musique-et-theatre/articles-recents/portrait-musical-de-gertrude-stein-avec-le-quatuor-helios/"
            />
      </GridItem>
      <GridItem>
          <img src={siegenerLogo} alt="Logo Siegener Zeitung" className={classes.pressImg}/>
            <Quote
              text="L’ensemble conquiert l’assemblée. L’interprétation dépasse l’ordinaire : une expérience musicale très intense."
              author="Siegener Zeitung, 5 décembre 2011"
            />
      </GridItem>
      <GridItem>
          <img src={indeLogo} alt="Logo L'Indépendant" className={classes.pressImg}/>
            <Quote
              text="Les quatre musiciens ont offert un superbe concert de musique de chambre, tout en sensibilité et délicatesse. Ce fut un des précieux moments du festival."
              author="L'Indépendant (Festival 'Aujourd'hui Musiques')"
            />
      </GridItem>
      <GridItem>
          <img src={repCentreLogo} alt="Logo La République du Centre" className={classes.pressImg}/>
            <Quote
              text="Il faut aussi cette magie indéfinissable qui permet aux musiciens de réellement communiquer avec le public. Ce fut le cas lundi soir : avec un programme parfaitement équilibré, les quatre musiciennes ont su montrer leur capacités techniques mais aussi donner de l'émotion et partager un vrai moment de musique."
              author="La République Du Centre"
            />
      </GridItem>
      <GridItem>

            <Quote
              text="Une prestation de grande qualité, applaudie à sa juste valeur."
              author="La Gazette"
            />
      </GridItem>
      <GridItem>

          <img src={laPresseLogo} alt="Logo La Presse" className={classes.roundPressImg}/>
            <Quote
              text="Quatre musiciens talentueux et chaleureux, un moment délicat et harmonieux."
              author="La Presse (Festival de Besançon)"
            />
      </GridItem>
      <GridItem>
          <img src={percheLogo} alt="Logo Le Perche" className={classes.pressImg}/>
            <Quote
              text="Les quatre musiciens du Quatuor HÉLIOS ont su marquer les mémoires, au cours d'une soirée musicale, où la qualité s'est disputée à la diversité."
              author="Le Perche (Printemps Musical du Perche)"
            />
      </GridItem>
      <GridItem>
          <img src={actionLogo} alt="Logo L'Action" className={classes.pressImg}/>
            <Quote
              text="L'émotion, la sensibilité, une finesse et une précision de jeu des concertistes ont fait de ce spectacle un des meilleurs moments du Festival."
              author="L'Action (Printemps musical du Perche)"
            />
      </GridItem>
      <GridItem>
          <img src={ouestLogo} alt="Logo Ouest France" className={classes.roundPressImg}/>
            <Quote
              text="Soirée de charme, soirée exceptionnelle, soirée de rêve : chacun l'a ressenti."
              author="Ouest France"
            />
      </GridItem>
      <GridItem>
          <img src={dnaLogo} alt="Logo DNA" className={classes.pressImg}/>
            <Quote
              text="Le Quatuor HÉLIOS vient d’ouvrir le deuxième Festival International de flûte d’Obernai. La transcription par Franz-Anton Hoffmeister de la sonate n°11 de Mozart a permis aux jeunes artistes d’exprimer leur ardent lyrisme dans un dialogue aéré, vif, passionné. Vivement ovationnées, les valeureuses quartettistes offraient deux bis très contrastés. M. Jindrich Feld et Mme Alain Marion étaient venus tout exprès de Prague et de Paris pour ce concert."
              author="Dernières Nouvelles d’Alsace (Festival 'Flûtes 2002' d’Obernai)"
            />
      </GridItem>
      <GridItem>
          <img src={lettreMusicienLogo} alt="Logo La Lettre du Musicien" className={classes.roundPressImg}/>
          <div style={{width:"100px"}}/>
            <Quote
              text="L’équilibre entre musique de chambre et musique concertante que requiert le quatuor pour flûte et cordes est difficile. Mais son histoire récente apporte les preuves indiscutables de sa renaissance. Celle-ci est largement due à l’Ensemble HÉLIOS, qui, en menant des recherches particulièrement poussées sur le répertoire et surtout en sollicitant de nombreux compositeurs a offert un nouvel avenir à cette formation."
              author="La Lettre du Musicien, n° 306 (décembre 2004)"
            />
      </GridItem>
      <GridItem>
          <img src={cnsmLogo} alt="Logo CNSM" className={classes.pressImg}/>
            <Quote
              text="Quatre têtes bien faites, huit mains habiles unies dans une même pensée, un goût très sûr, un sens exquis de la mesure, juste ce qu’il faut de tact et de maîtrise pour avoir toutes les audaces, tel se présente l’Ensemble HÉLIOS, auquel je souhaite tout le succès qu’il mérite."
              author="Christian Lardé, (flûtiste, concertiste international, ancien professeur de musique de chambre au C.N.S.M. de Paris)"
            />
      </GridItem>
      <GridItem>
          <img src={bolshoiLogo} alt="Logo Bolshoi" className={classes.pressImg}/>
            <Quote
              text="J’ai été ravi et enthousiasmé de l’interprétation musicale de votre formation. L’exécution était d’une richesse admirable quant aux langages et coloris de la palette musicale, avec finesse d’interprétation et une grande maîtrise de chacune des musiciens. Sans aucun doute, le Quatuor HÉLIOS fait partie des meilleurs ensembles de musique de chambre européens"
              author="Igor Bogoulavsky, (Premier alto solo du Bolchoï Théâtre de Moscou, professeur au Conservatoire Gnessin de Moscou)"
            />
      </GridItem>
      <GridItem>
            <Quote
              text="J'ai bien reçu votre CD et suis parfaitement conquis, tout d'abord par ce programme panorama de ce siècle, et par le magnifique engagement musical de l'Ensemble."
              author="Bernard Pierreuse, (flûtiste, soliste de l’Orchestre de Liège, enseignant et auteur de l’ouvrage de référence 'Flûte Littérature' / éd. Jobert/Transtalantiques)"
            />
      </GridItem>
      <GridItem>
            <Quote
              text="Les oeuvres d’Alain Louvier, Rui Martins et Jean-René Combes-Damiens furent écrites à l’intention de l’Ensemble HÉLIOS. Ses membres s’y montrent d’enthousiastes interprètes (…). Dans un état de totale concentration, de complet investissement, le quatuor saisit toutes ces pages à bras-le corps."
              author='Serge Grégory, (Mensuel "Répertoire")'
            />
      </GridItem>
      </GridContainer>
    </div>
      </MobileView>
    </React.Fragment>
    
  );
}
