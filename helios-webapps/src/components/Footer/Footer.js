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

import img1 from './../../assets/img/mnl-logo.jpg';
import img2 from './../../assets/img/proquartet-logo.jpg';


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
            <img src={img1} alt="mnl-logo" style={{width:"400px", padding:"0.9375rem"}}/>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <img src={img2} alt="proquartet-logo" style={{width:"120px", padding:"0.9375rem"}}/>
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
          </List>
        </div>
        <div className={classes.right}>
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
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
