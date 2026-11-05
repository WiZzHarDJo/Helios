import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Quote100 from "../../../components/Typography/Quote100.js";

import { Card, Row, Col } from "antd";
import MyCarousel from "../../../components/MyCarousel/MyCarousel.js";

import { BrowserView, MobileView } from "react-device-detect";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

import cdLuypaert1 from "./../../../assets/img/disco/luypaerts1.jpg";
import cdLuypaert2 from "./../../../assets/img/disco/luypaerts2.jpg";
import cdSernee from "./../../../assets/img/disco/CD-Sernee.jpg";
import cdBordes from "./../../../assets/img/disco/CD-Bordes.jpg";
import cdTisne from "./../../../assets/img/disco/cd-tisne.jpg";
import cdHelios from "./../../../assets/img/disco/cd-helios.jpg";
import cdPlurielles from "./../../../assets/img/disco/cd-pluriel.jpg";
import cdWolfgang from "./../../../assets/img/disco/cd-wolfgang.jpg";
import cdFerdinand from "./../../../assets/img/disco/cd-ferdinand.jpg";

import temoignage from "./../../../assets/data/tisne.json";

import MyPDF from "./../../../assets/files/commande.pdf";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <BrowserView>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>
                Discographie de l'Ensemble Hélios
              </h2>
            </GridItem>
            <GridItem style={{ marginBottom: "40px" }}>
              <div className={classes.subdescr}>
                Si vous désirez commander des CDs de l'Ensemble Hélios, veuillez
                cliquez{" "}
                <a href={MyPDF} download="Bon de commande Ensemble Hélios.pdf">
                  {" "}
                  ici{" "}
                </a>{" "}
                pour télécharger le formulaire à compléter.
              </div>
            </GridItem>
            <GridItem>
              <Card
                title="LUYPAERTS deux générations de compositeurs"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <div
                  style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginBottom: "15px",
                  }}
                  className={classes.subdescr}
                >
                  <img
                    src={cdLuypaert1}
                    alt="CD Luypaerts"
                    style={{ marginRight: "10px" }}
                  />
                  <img
                    src={cdLuypaert2}
                    alt="CD Luypaerts"
                    style={{ marginLeft: "10px" }}
                  />
                </div>
                <p className={classes.program}>
                  CD des compositeurs Guy Luypaerts et Guy-Claude Luypaerts{" "}
                  <br /> Hélios y grave le quatuor que lui a dédié Guy-Claude
                  Luypaerts, "Parfums de mer"
                </p>
                <Quote100
                  author="Franck Masquelier, Traversière Magazine Janvier 2019"
                  text="A découvrir particulièrement sur le CD 1 le quatuor 'Parfums de mer' magnifiquement interprété et mis en valeur par la virtuosité de Christel Rayneau et de son Ensemble Hélios. Les deux premiers mouvements sont très 'Debussystes' avec des couleurs sonores impressionistes et une virtuosité toute en retenue. Quant au troisième mouvement, il fait penser incontestablement à l'univers d'Albert Roussel, avec des ricochets rythmiques et des mélodies parfois intérieures, parfois entremêlées."
                />
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="John Sernee, Sun flowers"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <img
                  src={cdSernee}
                  alt="CD Serneee"
                  style={{ marginBottom: "15px" }}
                />
                <p className={classes.program}>
                  CD monographique du compositeur John SERNEE (2018) <br />
                  Hélios y grave le quatuor que lui a dédié le compositeur, Sun
                  Flowers
                </p>
                <Quote100
                  author="John Sernee, compositeur du disque"
                  text="La réalisation du disque « Dialogues musicaux » a été une belle expérience humaine avec l’Ensemble Hélios, couplée à un très beau travail d’équipe. L'Ensemble Helios a déployé une grande énergie à tout réunir, il fallait  toute leur virtuosité pour interpréter mes compositions et j’en suis admiratif."
                />
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Charles Bordes, Oeuvres Basques"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <Row
                  type="flex"
                  style={{ alignItems: "center" }}
                  justify="center"
                  gutter={10}
                >
                  <Col span={10}>
                    <p className={classes.partenaireDescr}>
                      <img src={cdBordes} alt="CD Bordes" />
                    </p>
                  </Col>
                  <Col span={14}>
                    <p className={classes.subdescr}>
                      Les oeuvres basques pour piano de Charles Bordes figurent
                      sur ce CD, interprétées par François-René Duchâche et
                      Olivier Laville. <br />
                      <br />
                      Le pianiste François-René Duchâble, qui avait entendu
                      l'Ensemble Hélios en concert, a souhaité que la version
                      originale de la suite Basque, quintette pour flûte et
                      quatuor à cordes, transcrit pour piano et qu'il grave sur
                      le premier CD, constitue le second CD, comme le miroir
                      d'une oeuvre. <br />
                      <br />
                      Cet enregistrement de la Suite Basque est une prise live
                      du concert donné par l'Ensemble Hélios avec Lucie Bessière
                      au second violon lors des Journées Charles Bordes de 2015.{" "}
                      <br />
                      <br />
                      CD sorti en 2018
                    </p>
                  </Col>
                </Row>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Antoine Tisné, Les voix de l'ombre"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <Row
                  type="flex"
                  style={{ alignItems: "center" }}
                  justify="center"
                  gutter={10}
                >
                  <Col span={14}>
                    <p className={classes.subdescr}>
                      Ce coffret comprend deux CD de la musique pour flûte du
                      compositeur Antoine Tisné, 1932-1998. <br />
                      <br />
                      Le premier présente les deux quatuors pour trio à cordes
                      et flûte de Tisné, "Etudes d'après Maurice Denis" et "Les
                      voix de l'ombre", un trio flûte, violon et alto "Sérénade
                      de la nuit", et la "Monodie pour un espace sacré" pour
                      flûte seule. Ce CD ne contient que des premiers
                      enregistrements mondiaux. <br />
                      <br />
                      Un CD de ré-édition de la sonate pour flûte avec Alain
                      Marion et Claude Bonneton, et du concerto pour flûte avec
                      Jean-Pierre Rampal et l'orchestre de l'ORTF vient
                      compléter ce panorama de la musique pour flûte du
                      compositeur. Antoine Tisné, compositeur trop oublié depuis
                      sa disparition, nous offre des oeuvres d'une grande force
                      expressive, toutes empreintes de spiritualité.
                    </p>
                  </Col>
                  <Col span={10}>
                    <p className={classes.partenaireDescr}>
                      <img
                        src={cdTisne}
                        alt="CD Tisne"
                        style={{ marginBottom: "15px" }}
                      />
                    </p>
                  </Col>
                </Row>
                <MyCarousel title="Témoignages" autoplay frames={temoignage} />
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Quatuor pour flûte et cordes du XXe siècle"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <Row
                  type="flex"
                  style={{ alignItems: "center" }}
                  justify="center"
                  gutter={10}
                >
                  <Col span={10}>
                    <p className={classes.partenaireDescr}>
                      <img
                        src={cdHelios}
                        alt="CD Helios"
                        style={{ marginBottom: "15px" }}
                      />
                    </p>
                  </Col>
                  <Col span={14}>
                    <p className={classes.subdescr}>
                      Les œuvres d’A. Louvier et J.R. Combes- Damiens démontrent
                      de manière éclatante tout le potentiel de cette
                      combinaison instrumentale dans la littérature
                      contemporaine : les modes de jeu et les styles d’écriture
                      actuels révolutionnent son expression, tandis qu’elle
                      apporte également à la musique d’aujourd’hui une nouvelle
                      alliance de la musique concertante et de la musique de
                      chambre. Si l’on y ajoute le succès public que reçoivent
                      toujours les quatuors d’Andreae et de Kaufmann, et le clin
                      d’œil plein d’humour de Rui Martins, on aura vite compris
                      que l’Ensemble HÉLIOS a gagné son pari : le quatuor avec
                      flûte peut à présent vivre un second âge d’or.
                    </p>
                  </Col>
                </Row>
                <div className={classes.program}>
                  <h5>
                    <b>Volkmar ANDREAE</b> (1879-1962)
                    <br />
                    "Divertimento Op. 43"
                  </h5>
                  <h5>
                    <b>Armin KAUFMANN</b> (1902-1980)
                    <br />
                    "Quartett Op. 17"
                  </h5>
                  <h5>
                    <b>Rui MARTINS</b> (né en 1958)
                    <br />
                    "Labyrinthe"
                  </h5>
                  <h5>
                    <b>Alain LOUVIER</b> (né en 1945)
                    <br />
                    "Eclipse"
                  </h5>
                  <h5>
                    <b>Jean-René COMBES-DAMIENS</b> (né en 1957)
                    <br />
                    "Son Ombre"
                  </h5>
                </div>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Plurielles"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <Row
                  type="flex"
                  style={{ alignItems: "center" }}
                  justify="center"
                  gutter={10}
                >
                  <Col span={14}>
                    <p className={classes.subdescr}>
                      Pourquoi donner la parole à des femmes ? Parce qu’elles ne
                      l’ont pas toujours assez. Et surtout parce que la parole
                      féminine est singulière. Il y a dans le verbe comme dans
                      les musiques des femmes, une dimension de poésie et de
                      force mêlées, et un universalisme qui tient sans doute à
                      la spécificité de leur sensibilité et de mode de pensée.
                      Parmi les œuvres qui composent ce CD, toutes sont issues
                      d’un métissage culturel (France-Australie, Roumanie-Tibet,
                      France- Pologne, France-Japon) et font déborder
                      l’interprète de son cadre habituel, le muant en récitant,
                      l’improvisant percussioniste, l’exigeant acteur.
                    </p>
                  </Col>
                  <Col span={10}>
                    <p className={classes.partenaireDescr}>
                      <img
                        src={cdPlurielles}
                        alt="CD Plurielles"
                        style={{ marginBottom: "15px" }}
                      />
                    </p>
                  </Col>
                </Row>
                <div className={classes.program}>
                  <h5>
                    <b>FINZI</b>
                    <br />
                    La lune à la fenêtre
                  </h5>
                  <h5>
                    <b>PIECHOWSKA</b>
                    <br />
                    Ephémères
                  </h5>
                  <h5>
                    <b>LACAZE</b>
                    <br />
                    Broken words ; Voyelles pour flûte solo
                  </h5>
                  <h5>
                    <b>ROTARU</b>
                    <br />
                    Antara ; Légende pour flûte solo
                  </h5>
                </div>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Récital / 5 Quatuors pour flûte et cordes"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <Row
                  type="flex"
                  style={{ alignItems: "center" }}
                  justify="center"
                  gutter={10}
                >
                  <Col span={10}>
                    <p className={classes.partenaireDescr}>
                      <img
                        src={cdWolfgang}
                        alt="CD Wolfgang"
                        style={{ marginBottom: "15px" }}
                      />
                    </p>
                  </Col>
                  <Col span={14}>
                    <p className={classes.subdescr}>
                      Quatuors, Nocturnes & Divertissements. Ce programme offre
                      une sélection de quelques pièces parmi les plus
                      représentatives du répertoire et fréquemment demandées
                      pour les concerts de l'Ensemble HÉLIOS. Aux pages les plus
                      populaires de Mozart et de Rossini ainsi qu’au brillant
                      Divertimento d’Andreae s’ajoutent ici deux œuvres dédiées
                      aux interprètes : les Nocturnes "miniatures" de N. Bacri
                      et la pièce de J. Feld en hommage au grand flûtiste
                      Jean-Pierre Rampal figurent en effet parmi les titres
                      contemporains auxquels le public réserve toujours un
                      accueil enthousiaste. Les quatuors de Fernand Ries qui ont
                      fait l’objet d’un disque séparé, sont eux aussi
                      régulièrement inscrits aux programmes de l’ensemble.
                    </p>
                  </Col>
                </Row>
                <div className={classes.program}>
                  <h5>
                    <b>MOZART</b>
                    <br />
                    Quatuor en Do Majeur
                  </h5>
                  <h5>
                    <b>BACRI</b>
                    <br />
                    Nocturnes
                  </h5>
                  <h5>
                    <b>FELD</b>
                    <br />
                    Nocturne
                  </h5>
                  <h5>
                    <b>ANDREAE</b>
                    <br />
                    Divertimento
                  </h5>
                  <h5>
                    <b>ROSSINI</b>
                    <br />
                    Quatuor
                  </h5>
                </div>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Ferdinand Ries (1784 – 1838)"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <Row
                  type="flex"
                  style={{ alignItems: "center" }}
                  justify="center"
                  gutter={10}
                >
                  <Col span={14}>
                    <p className={classes.subdescr}>
                      Les quatuors Op. 145 et WoO. 35 de Ferdinand Ries
                      représentent d’authentiques joyaux en matière de musique
                      de chambre avec flûte, à une époque où celle-ci n’était
                      justement guère florissante et où les virtuoses écrivaient
                      essentiellement pour eux- mêmes. Ces pages revêtent donc
                      une importance particulière, et frappent en premier lieu
                      par leurs qualités concertantes. La flûte se voit certes
                      confier un rôle brillant, mais les développements comme la
                      thématique sont toujours répartis aux quatre instruments.
                      L’individualité expressive de chaque voix, le dialogue
                      entre les protagonistes aussi original que constant, en
                      font des pages à marquer d’une pierre blanche dans le
                      répertoire, probablement les meilleures du genre après
                      celles de Mozart.
                    </p>
                  </Col>
                  <Col span={10}>
                    <p className={classes.partenaireDescr}>
                      <img
                        src={cdFerdinand}
                        alt="CD Ferdinand"
                        style={{ marginBottom: "15px" }}
                      />
                    </p>
                  </Col>
                </Row>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </BrowserView>

      <MobileView>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>
                Discographie de l'Ensemble Hélios
              </h2>
            </GridItem>
            <GridItem style={{ marginBottom: "40px" }}>
              <div className={classes.subdescr}>
                Si vous désirez commander un ou des disques de l'Ensemble
                Hélios, veuillez cliquez{" "}
                <a href={MyPDF} download="Bon de commande Ensemble Hélios.pdf">
                  {" "}
                  ici{" "}
                </a>{" "}
                pour télécharger le formulaire à compléter.
              </div>
            </GridItem>
            <GridItem>
              <Card
                title="LUYPAERTS deux générations de compositeurs"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <div
                  style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginBottom: "15px",
                  }}
                  className={classes.subdescr}
                >
                  <img
                    src={cdLuypaert1}
                    alt="CD Luypaerts"
                    style={{ marginRight: "10px" }}
                  />
                  <img
                    src={cdLuypaert2}
                    alt="CD Luypaerts"
                    style={{ marginLeft: "10px" }}
                  />
                </div>
                <p className={classes.program}>
                  CD des compositeurs Guy Luypaerts et Guy-Claude Luypaerts{" "}
                  <br /> Hélios y grave le quatuor que lui a dédié Guy-Claude
                  Luypaerts, "Parfums de mer"
                </p>
                <Quote100
                  author="Franck Masquelier, Traversière Magazine Janvier 2019"
                  text="A découvrir particulièrement sur le CD 1 le quatuor 'Parfums de mer' magnifiquement interprété et mis en valeur par la virtuosité de Christel Rayneau et de son Ensemble Hélios. Les deux premiers mouvements sont très 'Debussystes' avec des couleurs sonores impressionistes et une virtuosité toute en retenue. Quant au troisième mouvement, il fait penser incontestablement à l'univers d'Albert Roussel, avec des ricochets rythmiques et des mélodies parfois intérieures, parfois entremêlées."
                />
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="John Sernee, Sun flowers"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <img
                  src={cdSernee}
                  alt="CD Serneee"
                  style={{ marginBottom: "15px" }}
                />
                <p className={classes.program}>
                  CD monographique du compositeur John SERNEE (2018) <br />
                  Hélios y grave le quatuor que lui a dédié le compositeur, Sun
                  Flowers
                </p>
                <Quote100
                  author="John Sernee, compositeur du disque"
                  text="La réalisation du disque « Dialogues musicaux » a été une belle expérience humaine avec l’Ensemble Hélios, couplée à un très beau travail d’équipe. L'Ensemble Helios a déployé une grande énergie à tout réunir, il fallait  toute leur virtuosité pour interpréter mes compositions et j’en suis admiratif."
                />
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Charles Bordes, Oeuvres Basiques"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <p className={classes.partenaireDescr}>
                  <img src={cdBordes} alt="CD Bordes" />
                </p>
                <p className={classes.subdescr}>
                  Les oeuvres basques pour piano de Charles BORDES figurent sur
                  ce CD, interprétées par François-René Duchâble et Olivier
                  Laville. <br />
                  <br />
                  Le pianiste François-René Duchâble, qui avait entendu
                  l'Ensemble Hélios en concert, a souhaité que la version
                  originale de la suite Basque, quintette pour flûte et quatuor
                  à cordes, transcrit pour piano et qu'il grave sur le premier
                  CD, constitue le second CD, comme le miroir d'une oeuvre.{" "}
                  <br />
                  <br />
                  Cet enregistrement de la Suite Basque est une prise live du
                  concert donné par l'Ensemble Hélios avec Lucie Bessière au
                  second violon lors des Journées Charles Bordes de 2015. <br />
                  <br />
                  CD sorti en 2018
                </p>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Antoine Tisné, Les voix de l'ombre"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <p className={classes.partenaireDescr}>
                  <img
                    src={cdTisne}
                    alt="CD Tisne"
                    style={{ marginBottom: "15px" }}
                  />
                </p>
                <p className={classes.subdescr}>
                  Ce coffret veut faire connaitre la musique pour flûte du
                  compositeur Antoine Tisné, 1932-1998. Il comprend deux CD.{" "}
                  <br />
                  <br />
                  Le premier présente les deux quatuors pour trio à cordes et
                  flûte de Tisné, "Etudes d'après Maurice Denis" et "Les voix de
                  l'ombre", un trio flûte, violon et alto "Sérénade de la nuit",
                  et la "Monodie pour un espace sacré" pour flûte seule. Ce CD
                  ne contient que des premiers enregistrements mondiaux. <br />
                  <br />
                  Un CD de ré-édition de la sonate pour flûte avec Alain Marion
                  et Claude Bonneton, et du concerto pour flûte avec Jean-Pierre
                  Rampal et l'orchestre de l'ORTF vient compléter ce panorama de
                  la musique pour flûte du compositeur. Antoine Tisné,
                  compositeur trop oublié depuis sa disparition, nous offre des
                  oeuvres d'une grande force expressive, toutes empreintes de
                  spiritualité.
                </p>
                <iframe
                  src="https://youtube.com/embed/KxwHEkRXPWs"
                  frameBorder="0"
                  allowFullScreen
                  title="Enregistrement Tisné"
                  style={{
                    width: "100%",
                    height: "235px",
                    marginBottom: "15px",
                  }}
                ></iframe>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Quatuor pour flûte et cordes du XXe siècle"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <p className={classes.partenaireDescr}>
                  <img
                    src={cdHelios}
                    alt="CD Helios"
                    style={{ marginBottom: "15px" }}
                  />
                </p>

                <p className={classes.subdescr}>
                  Les œuvres d’A. Louvier et J.R. Combes- Damiens démontrent de
                  manière éclatante tout le potentiel de cette combinaison
                  instrumentale dans la littérature contemporaine : les modes de
                  jeu et les styles d’écriture actuels révolutionnent son
                  expression, tandis qu’elle apporte également à la musique
                  d’aujourd’hui une nouvelle alliance de la musique concertante
                  et de la musique de chambre. Si l’on y ajoute le succès public
                  que reçoivent toujours les quatuors d’Andreae et de Kaufmann,
                  et le clin d’œil plein d’humour de Rui Martins, on aura vite
                  compris que l’Ensemble HÉLIOS a gagné son pari : le quatuor
                  avec flûte peut à présent vivre un second âge d’or.
                </p>

                <div className={classes.program}>
                  <h3>Extraits : </h3>
                  <h5>
                    <b>Volkmar ANDREAE</b> (1879-1962)
                    <br />
                    "Divertimento Op. 43"
                  </h5>
                  <h5>
                    <b>Armin KAUFMANN</b> (1902-1980)
                    <br />
                    "Quartett Op. 17"
                  </h5>
                  <h5>
                    <b>Rui MARTINS</b> (né en 1958)
                    <br />
                    "Labyrinthe"
                  </h5>
                  <h5>
                    <b>Alain LOUVIER</b> (né en 1945)
                    <br />
                    "Eclipse"
                  </h5>
                  <h5>
                    <b>Jean-René COMBES-DAMIENS</b> (né en 1957)
                    <br />
                    "Son Ombre"
                  </h5>
                </div>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Plurielles"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <p className={classes.partenaireDescr}>
                  <img
                    src={cdPlurielles}
                    alt="CD Plurielles"
                    style={{ marginBottom: "15px" }}
                  />
                </p>
                <p className={classes.subdescr}>
                  Pourquoi donner la parole à des femmes ? Parce qu’elles ne
                  l’ont pas toujours assez. Et surtout parce que la parole
                  féminine est singulière. Il y a dans le verbe comme dans les
                  musiques des femmes, une dimension de poésie et de force
                  mêlées, et un universalisme qui tient sans doute à la
                  spécificité de leur sensibilité et de mode de pensée. Parmi
                  les œuvres qui composent ce CD, toutes sont issues d’un
                  métissage culturel (France-Australie, Roumanie-Tibet, France-
                  Pologne, France-Japon) et font déborder l’interprète de son
                  cadre habituel, le muant en récitant, l’improvisant
                  percussioniste, l’exigeant acteur.
                </p>

                <div className={classes.program}>
                  <h3>Extraits : </h3>
                  <h5>
                    <b>FINZI</b>
                    <br />
                    La lune à la fenêtre
                  </h5>
                  <h5>
                    <b>PIECHOWSKA</b>
                    <br />
                    Ephémères
                  </h5>
                  <h5>
                    <b>LACAZE</b>
                    <br />
                    Broken words ; Voyelles pour flûte solo
                  </h5>
                  <h5>
                    <b>ROTARU</b>
                    <br />
                    Antara; Légende pour flûte solo
                  </h5>
                </div>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Récital / 5 Quatuors pour flûte et cordes"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <p className={classes.partenaireDescr}>
                  <img
                    src={cdWolfgang}
                    alt="CD Wolfgang"
                    style={{ marginBottom: "15px" }}
                  />
                </p>

                <p className={classes.subdescr}>
                  Quatuors, Nocturnes & Divertissements. Ce programme offre une
                  sélection de quelques pièces parmi les plus représentatives du
                  répertoire et fréquemment demandées pour les concerts de
                  l1Ensemble HÉLIOS. Aux pages les plus populaires de Mozart et
                  de Rossini ainsi qu’au brillant Divertimento d’Andreae
                  s’ajoutent ici deux œuvres dédiées aux interprètes : les
                  Nocturnes "miniatures" de N. Bacri et la pièce de J. Feld en
                  hommage au grand flûtiste Jean-Pierre Rampal figurent en effet
                  parmi les titres contemporains auxquels le public réserve
                  toujours un accueil enthousiaste. Les quatuors de Fernand Ries
                  qui ont fait l’objet d’un disque séparé, sont eux aussi
                  régulièrement inscrits aux programmes de l’ensemble.
                </p>

                <div className={classes.program}>
                  <h3>Extraits : </h3>
                  <h5>
                    <b>MOZART</b>
                    <br />
                    Quatuor en DOM
                  </h5>
                  <h5>
                    <b>BACRI</b>
                    <br />
                    Nocturnes
                  </h5>
                  <h5>
                    <b>FELD</b>
                    <br />
                    Nocturne
                  </h5>
                  <h5>
                    <b>ANDREAE</b>
                    <br />
                    Divertimento
                  </h5>
                  <h5>
                    <b>ROSSINI</b>
                    <br />
                    Quatuor
                  </h5>
                </div>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                title="Ferdinand Ries (1784 – 1838)"
                style={{ width: "100%", marginBottom: "25px" }}
                bordered
              >
                <p className={classes.partenaireDescr}>
                  <img
                    src={cdFerdinand}
                    alt="CD Ferdinand"
                    style={{ marginBottom: "15px" }}
                  />
                </p>
                <p className={classes.subdescr}>
                  Les quatuors Op. 145 et WoO. 35 de Ferdinand Ries représentent
                  d’authentiques joyaux en matière de musique de chambre avec
                  flûte, à une époque où celle-ci n’était justement guère
                  florissante et où les virtuoses écrivaient essentiellement
                  pour eux- mêmes. Ces pages revêtent donc une importance
                  particulière, et frappent en premier lieu par leurs qualités
                  concertantes. La flûte se voit certes confier un rôle
                  brillant, mais les développements comme la thématique sont
                  toujours répartis aux quatre instruments. L’individualité
                  expressive de chaque voix, le dialogue entre les protagonistes
                  aussi original que constant, en font des pages à marquer d’une
                  pierre blanche dans le répertoire, probablement les meilleures
                  du genre après celles de Mozart.
                </p>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </MobileView>
    </React.Fragment>
  );
}
