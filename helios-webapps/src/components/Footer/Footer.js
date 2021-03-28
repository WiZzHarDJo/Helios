/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


import styles from "./../../assets/jss/material-kit-react/components/footerStyle.js";

import img1 from './../../assets/img/mmc-logo.png';
import img2 from "./../../assets/img/logo-sacem.jpg";
import img3 from "./../../assets/img/rectorat-logo.png";
import img4 from "./../../assets/img/logo-billaudot.png";


const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
            <img src={img1} alt="Logo Musique Nouvelle en Liberté" style={{width:"200px", padding:"0.9375rem"}}/>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <img src={img2} alt="Logo SACEM" style={{width:"200px", padding:"0.9375rem"}}/>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <img src={img3} alt="Logo Rectorat de Paris" style={{width:"200px", height:"130px", padding:"0.9375rem"}}/>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <img src={img4} alt="Logo Editions Gérard Billaudot" style={{width:"200px", padding:"0.9375rem"}}/>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/contact"
                className={classes.block}
              >
                Contact
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/mecenat"
                className={classes.block}
              >
                Soutenez-nous
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <div>
              &copy; {1900 + new Date().getYear()} , fait par {" "}
          <a
            href="https://www.linkedin.com/in/joaquim-giret-imhaus/"
            className={aClasses}
            target="_blank"
          >
            Joaquim Giret-Imhaus
          </a>{" "}
          pour Hélios.
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
