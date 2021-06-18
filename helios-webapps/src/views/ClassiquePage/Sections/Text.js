import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import { Card } from "antd";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            La musique classique et l'Ensemble Hélios
          </h2>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            Le quatuor avec flûte doit son originalité à une alliance de timbres
            exceptionnelle. Dans cette formation, la flûte, bien loin de
            remplacer un éventuel premier violon, apporte un enrichissement de
            couleurs, d’ouverture sonore et la liberté expressive du souffle.
            Cette alliance entre le monde des vents et celui des cordes a
            séduit, au fil des siècles, un nombre impressionnant de
            compositeurs. Mais son histoire et son évolution sont tout à fait
            singulières.
          </div>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            L’ère classique va, aux côtés du quatuor à cordes, consacrer le
            quatuor pour flûte, violon, alto et violoncelle comme une formation
            des plus prisées. Relativement peu de compositeurs baroques avaient
            écrit pour des combinaisons instrumentales en quatuor, un genre
            alors considéré comme l’un des plus difficiles… C’est pourtant des
            quelques exemples laissés en ce domaine par G.P. Telemann ou L.G.
            Guillemain que se trouve issue la forme du quatuor. L’instrument à
            vent jouissant alors d’une formidable popularité, les quatuors pour
            flûte et cordes apparaissent dans les années 1770 et connaissent
            immédiatement un immense succès. Au-delà des sommets incontournables
            que représentent les quatre fameux quatuors de Mozart, ceux de Haydn
            ou encore de J.C. Bach, la littérature classique se révèle
            pléthorique (Boccherini, Pleyel, Hoffmeister, Danzi, Gyrowetz,
            Devienne, Gossec, Cimarosa…) et regorge de magnifiques pages à
            découvrir.
          </div>
        </GridItem>
        <GridItem>
          <Card
            title="J.C. Bach Quatuor n°4 / IX"
            style={{ width: "100%", marginBottom: "25px" }}
            bordered
          >
            <iframe
              src="https://youtube.com/embed/9rm0-cTZZEU"
              frameBorder="0"
              allowFullScreen
              title="J.C. Bach Quatuor n°4 / IX"
              style={{ width: "100%", height: "35rem" }}
            ></iframe>
            <p>
              Captation en direct (Mairie du 4ème, février 2013) et montage :
              Guy VERNET
            </p>
          </Card>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            À l’époque romantique, la flûte voit se réduire son répertoire de
            musique de chambre, au profit de pièces solistes brillantes et
            spectaculaires. Les virtuoses compositeurs de cette période signent
            toutefois quelques quatuors de belle facture, dans lesquels la flûte
            tient certes le premier rôle, mais dont l’éclat et le sens
            divertissant exercent une irrésistible séduction. Les oeuvres de
            Romberg, Mercadante ou Fürstenau en sont de bons exemples, auxquels
            s’ajoutent les magnifiques adaptations d’époque des Sonates a
            quattro de Rossini. Enfin, à l’aube du grand romantisme, Ries et
            Reicha - deux proches de Beethoven - offrent au quatuor avec flûte
            de superbes pages concertantes.
          </div>
        </GridItem>
        <GridItem>
          <Card
            title="Fantaisie Pastorale de Doppler (adaptation T. Perrine)"
            style={{ width: "100%", marginBottom: "25px" }}
            bordered
          >
            <iframe
              src="https://youtube.com/embed/Y2IM4KKAkUY"
              frameBorder="0"
              allowFullScreen
              title="Fantaisie Pastorale de Doppler (adaptation T. Perrine)"
              style={{ width: "100%", height: "35rem" }}
            ></iframe>
            <p>
              Captation en direct (Mairie du 4ème, février 2013) et montage :
              Guy VERNET
            </p>
          </Card>
        </GridItem>
        <GridItem>
          <div className={classes.subdescr}>
            Au début du XXe siècle, la flûte séduit à nouveau les grands
            compositeurs. Debussy, Ravel, Roussel et bien d’autres lui écrivent
            nombre de chefs-d’oeuvre, mais malheureusement sans solliciter le
            quatuor pour flûte et cordes. Ce dernier se voit pourtant consacrer
            de splendides pièces sous la plume de musiciens moins connus mais de
            grand talent : Hennessy, Bourgault-Ducoudray, de Wailly, Thieriot,
            Gnessin… Le Divertimento de V. Andreae, déjà deux fois enregistré
            par l’Ensemble HÉLIOS, est ainsi devenu une pièce essentielle du
            répertoire de cette formation.{" "}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
