import React, { useState } from "react";
import _ from "lodash";
import moment from "moment";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import { Row, Col, Card } from "antd";
import { PhoneTwoTone } from "@ant-design/icons";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "antd/dist/antd.css";

import { BrowserView, MobileView } from "react-device-detect";

import programmation from "./../../../assets/data/prograChronoSeptembre.json";

import styled from "styled-components";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "./../../../assets/animations/Animation";

import { useScroll } from "./../../../assets/animations/useScroll";

import "moment/locale/fr";
moment.locale("fr");

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const [data, setData] = useState(programmation);

  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  const [element6, controls6] = useScroll();
  const [element7, controls7] = useScroll();
  const [element8, controls8] = useScroll();
  const [element9, controls9] = useScroll();
  const [element10, controls10] = useScroll();
  const [element11, controls11] = useScroll();
  const [element12, controls12] = useScroll();
  const [element13, controls13] = useScroll();
  const [element14, controls14] = useScroll();
  const [element15, controls15] = useScroll();
  const [element16, controls16] = useScroll();
  const [element17, controls17] = useScroll();
  const [element18, controls18] = useScroll();
  const [element19, controls19] = useScroll();
  const [element20, controls20] = useScroll();
  const [element21, controls21] = useScroll();
  const [element22, controls22] = useScroll();
  const [element23, controls23] = useScroll();

  const now = moment();
  const currentYear = new Date().getFullYear();

  let janvier = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 1 === month && currentYear === year;
  });

  let fevrier = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 2 === month && currentYear === year;
  });

  let mars = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 3 === month && currentYear === year;
  });

  let avril = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 4 === month && currentYear === year;
  });

  let mai = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 5 === month && currentYear === year;
  });

  let juin = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 6 === month && currentYear === year;
  });

  let juillet = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 7 === month && currentYear === year;
  });

  let aout = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 8 === month && currentYear === year;
  });

  let septembre = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 9 === month && currentYear === year;
  });

  let octobre = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 10 === month && currentYear === year;
  });

  let novembre = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 11 === month && currentYear === year;
  });

  let decembre = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 12 === month && currentYear === year;
  });

  let janvier1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 1 === month && currentYear + 1 === year;
  });

  let fevrier1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 2 === month && currentYear + 1 === year;
  });

  let mars1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 3 === month && currentYear + 1 === year;
  });

  let avril1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 4 === month && currentYear + 1 === year;
  });

  let mai1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 5 === month && currentYear + 1 === year;
  });

  let juin1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 6 === month && currentYear + 1 === year;
  });

  let juillet1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 7 === month && currentYear + 1 === year;
  });

  let aout1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 8 === month && currentYear + 1 === year;
  });

  let septembre1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 9 === month && currentYear + 1 === year;
  });

  let octobre1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 10 === month && currentYear + 1 === year;
  });

  let novembre1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 11 === month && currentYear + 1 === year;
  });

  let decembre1 = programmation.filter((e) => {
    let month = new Date(e.datum).getMonth() + 1;
    let year = new Date(e.datum).getFullYear();
    return 12 === month && currentYear + 1 === year;
  });

  const renderProgrammation = (program, id) => {
    if (id % 2 === 0 && !moment(program.datum).isBefore(now)) {
      return (
        <Hide>
          <GridItem key={id} style={{ marginBottom: "40px" }}>
            <motion.div variants={photoAnim}>
              <Card>
                <h4 className={classes.subtitle}>{program.title}</h4>
                <Row
                  type="flex"
                  style={{ alignItems: "center" }}
                  justify="center"
                  gutter={10}
                >
                  <Col span={14}>
                    <p className={classes.subdescr}>{program.description}</p>
                    {"artiste" in program && (
                      <p className={classes.subdescr}>
                        <b>Programme de l'évènement :</b> {program.artiste}
                        {program.duration}
                      </p>
                    )}
                    <p className={classes.subdescr}>
                      <b>{program.date}</b> <br />
                      {program.lieu}
                    </p>
                    {("billeterie" in program || "phone" in program) && (
                      <p className={classes.subdescr}>
                        {"billeterie" in program && (
                          <>
                            <b>
                              <a
                                href={program.billeterie}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Réservez vos billets
                              </a>
                            </b>
                            <br />
                          </>
                        )}
                        {"phone" in program && (
                          <>
                            <PhoneTwoTone /> {program.phone}
                          </>
                        )}
                      </p>
                    )}
                  </Col>
                  <Col span={10}>
                    <p className={classes.partenaireDescr}>
                      <img
                        src={program.imageUrl}
                        alt={program.title}
                        style={{
                          height: "350px",
                          width: "425px",
                          objectFit: "cover",
                        }}
                      />
                    </p>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </GridItem>
        </Hide>
      );
    } else if (!moment(program.datum).isBefore(now)) {
      return (
        <Hide>
          <GridItem key={id} style={{ marginBottom: "40px" }}>
            <motion.div variants={photoAnim}>
              <Card>
                <h4
                  className={classes.subtitle}
                  style={{ marginBottom: "20px" }}
                >
                  {program.title}
                </h4>
                <Row
                  type="flex"
                  style={{ alignItems: "center" }}
                  justify="center"
                  gutter={10}
                >
                  <Col span={10}>
                    <p className={classes.partenaireDescr}>
                      <img
                        src={program.imageUrl}
                        alt={program.title}
                        style={{
                          height: "350px",
                          width: "425px",
                          objectFit: "cover",
                        }}
                      />
                    </p>
                  </Col>
                  <Col span={14}>
                    <p className={classes.subdescr}>{program.description}</p>
                    {"artiste" in program && (
                      <p className={classes.subdescr}>
                        <b>Programme de l'évènement :</b> {program.artiste}
                        {program.duration}
                      </p>
                    )}
                    <p className={classes.subdescr}>
                      <b>{program.date}</b> <br />
                      {program.lieu}
                    </p>
                    {("billeterie" in program || "phone" in program) && (
                      <p className={classes.subdescr}>
                        {"billeterie" in program && (
                          <>
                            <b>
                              <a
                                href={program.billeterie}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Réservez vos billets
                              </a>
                            </b>
                            <br />
                          </>
                        )}
                        {"phone" in program && (
                          <>
                            <PhoneTwoTone /> {program.phone}
                          </>
                        )}
                      </p>
                    )}
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </GridItem>
        </Hide>
      );
    }
  };

  const renderProgrammationMobile = (program, id) => {
    if (!moment(program.datum).isBefore(now)) {
      return (
        <Hide>
          <GridItem key={id} style={{ marginBottom: "40px" }}>
            <motion.div variants={photoAnim}>
              <Card>
                <h4
                  className={classes.subtitle}
                  style={{ marginBottom: "20px" }}
                >
                  {program.title}
                </h4>
                <p className={classes.partenaireDescr}>
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    style={{
                      height: "350px",
                      width: "425px",
                      objectFit: "cover",
                    }}
                  />
                </p>

                <p className={classes.subdescr}>{program.description}</p>
                {"artiste" in program && (
                  <p className={classes.subdescr}>
                    <b>Programme de l'évènement :</b> {program.artiste}
                    {program.duration}
                  </p>
                )}
                <p className={classes.subdescr}>
                  <b>{program.date}</b> <br />
                  {program.lieu}
                </p>
                {("billeterie" in program || "phone" in program) && (
                  <p className={classes.subdescr}>
                    {"billeterie" in program && (
                      <>
                        <b>
                          <a
                            href={program.billeterie}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Réservez vos billets
                          </a>
                        </b>
                        <br />
                      </>
                    )}
                    {"phone" in program && (
                      <>
                        <PhoneTwoTone /> {program.phone}
                      </>
                    )}
                  </p>
                )}
              </Card>
            </motion.div>
          </GridItem>
        </Hide>
      );
    }
  };

  return (
    <div className={classes.section}>
      <Concerts>
        <GridItem style={{ marginBottom: "40px" }}>
          <h2 className={classes.title}>
            Saison {currentYear}-{currentYear + 1}
          </h2>
          <h3 className={classes.subtitle}>Prochains évènements</h3>
        </GridItem>
        <BrowserView>
          {janvier.length > 0 && (
            <motion.div ref={element} variants={fade} animate={controls}>
              <MonthTitle variants={fade}>Janvier {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {janvier.length && _.map(janvier, renderProgrammation)}
            </motion.div>
          )}
          {fevrier.length > 0 && (
            <motion.div ref={element1} variants={fade} animate={controls1}>
              <MonthTitle variants={fade}>Février {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {fevrier.length && _.map(fevrier, renderProgrammation)}
            </motion.div>
          )}
          {mars.length > 0 && (
            <motion.div ref={element2} variants={fade} animate={controls2}>
              <MonthTitle variants={fade}>Mars {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {mars.length && _.map(mars, renderProgrammation)}
            </motion.div>
          )}
          {avril.length > 0 && (
            <motion.div ref={element3} variants={fade} animate={controls3}>
              <MonthTitle variants={fade}>Avril {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {avril.length && _.map(avril, renderProgrammation)}
            </motion.div>
          )}
          {mai.length > 0 && (
            <motion.div ref={element4} variants={fade} animate={controls4}>
              <MonthTitle variants={fade}>Mai {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {mai.length && _.map(mai, renderProgrammation)}
            </motion.div>
          )}
          {juin.length > 0 && (
            <motion.div ref={element5} variants={fade} animate={controls5}>
              <MonthTitle variants={fade}>Juin {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {juin.length && _.map(juin, renderProgrammation)}
            </motion.div>
          )}
          {juillet.length > 0 && (
            <motion.div ref={element6} variants={fade} animate={controls6}>
              <MonthTitle variants={fade}>Juillet {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {juillet.length && _.map(juillet, renderProgrammation)}
            </motion.div>
          )}
          {aout.length > 0 && (
            <motion.div ref={element7} variants={fade} animate={controls7}>
              <MonthTitle variants={fade}>Août {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {aout.length && _.map(aout, renderProgrammation)}
            </motion.div>
          )}
          {septembre.length > 0 && (
            <motion.div ref={element8} variants={fade} animate={controls8}>
              <MonthTitle variants={fade}>Septembre {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {septembre.length && _.map(septembre, renderProgrammation)}
            </motion.div>
          )}
          {octobre.length > 0 && (
            <motion.div ref={element9} variants={fade} animate={controls9}>
              <MonthTitle variants={fade}>Octobre {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {octobre.length && _.map(octobre, renderProgrammation)}
            </motion.div>
          )}
          {novembre.length > 0 && (
            <motion.div ref={element10} variants={fade} animate={controls10}>
              <MonthTitle variants={fade}>Novembre {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {novembre.length && _.map(novembre, renderProgrammation)}
            </motion.div>
          )}
          {decembre.length > 0 && (
            <motion.div ref={element11} variants={fade} animate={controls11}>
              <MonthTitle variants={fade}>Décembre {currentYear}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {decembre.length && _.map(decembre, renderProgrammation)}
            </motion.div>
          )}
          {janvier1.length > 0 && (
            <motion.div ref={element12} variants={fade} animate={controls12}>
              <MonthTitle variants={fade}>Janvier {currentYear + 1}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {janvier1.length && _.map(janvier1, renderProgrammation)}
            </motion.div>
          )}
          {fevrier1.length > 0 && (
            <motion.div ref={element13} variants={fade} animate={controls13}>
              <MonthTitle variants={fade}>Février {currentYear + 1}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {fevrier1.length && _.map(fevrier1, renderProgrammation)}
            </motion.div>
          )}
          {mars1.length > 0 && (
            <motion.div ref={element14} variants={fade} animate={controls14}>
              <MonthTitle variants={fade}>Mars {currentYear + 1}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {mars1.length && _.map(mars1, renderProgrammation)}
            </motion.div>
          )}
          {avril1.length > 0 && (
            <motion.div ref={element15} variants={fade} animate={controls15}>
              <MonthTitle variants={fade}>Avril {currentYear + 1}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {avril1.length && _.map(avril1, renderProgrammation)}
            </motion.div>
          )}
          {mai1.length > 0 && (
            <motion.div ref={element16} variants={fade} animate={controls16}>
              <MonthTitle variants={fade}>Mai {currentYear + 1}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {mai1.length && _.map(mai1, renderProgrammation)}
            </motion.div>
          )}
          {juin1.length > 0 && (
            <motion.div ref={element17} variants={fade} animate={controls17}>
              <MonthTitle variants={fade}>Juin {currentYear + 1}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {juin1.length && _.map(juin1, renderProgrammation)}
            </motion.div>
          )}
          {juillet1.length > 0 && (
            <motion.div ref={element18} variants={fade} animate={controls18}>
              <MonthTitle variants={fade}>Juillet {currentYear + 1}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {juillet1.length && _.map(juillet1, renderProgrammation)}
            </motion.div>
          )}
          {aout1.length > 0 && (
            <motion.div ref={element19} variants={fade} animate={controls19}>
              <MonthTitle variants={fade}>Août {currentYear + 1}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {aout1.length && _.map(aout1, renderProgrammation)}
            </motion.div>
          )}
          {septembre1.length > 0 && (
            <motion.div ref={element20} variants={fade} animate={controls20}>
              <MonthTitle variants={fade}>
                Septembre {currentYear + 1}
              </MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {septembre1.length && _.map(septembre1, renderProgrammation)}
            </motion.div>
          )}
          {octobre1.length > 0 && (
            <motion.div ref={element21} variants={fade} animate={controls21}>
              <MonthTitle variants={fade}>Octobre {currentYear + 1}</MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {octobre1.length && _.map(octobre1, renderProgrammation)}
            </motion.div>
          )}
          {novembre1.length > 0 && (
            <motion.div ref={element22} variants={fade} animate={controls22}>
              <MonthTitle variants={fade}>
                Novembre {currentYear + 1}
              </MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {novembre1.length && _.map(novembre1, renderProgrammation)}
            </motion.div>
          )}
          {decembre1.length > 0 && (
            <motion.div ref={element23} variants={fade} animate={controls23}>
              <MonthTitle variants={fade}>
                Décembre {currentYear + 1}
              </MonthTitle>
              <motion.div variants={lineAnim} className="line"></motion.div>
              {decembre1.length && _.map(decembre1, renderProgrammation)}
            </motion.div>
          )}
        </BrowserView>
        <MobileView>
          {programmation.length && _.map(data, renderProgrammationMobile)}
        </MobileView>
      </Concerts>
    </div>
  );
}

const Concerts = styled(motion.GridContainer)`
  .line {
    height: 0.5rem;
    background: #ffe57f;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const MonthTitle = styled(motion.h2)`
  text-align: left;
  font-size: 2rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;
