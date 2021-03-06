import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "../../assets/jss/material-kit-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Quote(props) {
  const { text, author, link, linkText } = props;
  const classes = useStyles();
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quoteCenter}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
      {
        link && 

        <a href={linkText}>(retrouvez l'article complet ici)</a>
      }
    </blockquote>
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node
};
