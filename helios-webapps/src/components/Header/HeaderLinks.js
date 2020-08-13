/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "./../CustomDropdown/CustomDropdown.js";
import Button from "./../CustomButtons/Button.js";

import styles from "./../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
                    <CustomDropdown
                      buttonText="Hélios"
                      dropdownHeader="Qui sommes-nous ?"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "L'ensemble Hélios",
                        "Discographie",
                        "Edition Musicale",
                        "Gallerie médias"
                      ]}
                      dropdownLinks={[
                        "/helios",
                        "/discographie",
                        "/edition",
                        "/galerie"]}
                    />
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to="/" className={classes.navLink}>
            Concerts
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to="/spectacles" className={classes.navLink}>
            Spectacles
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <CustomDropdown
                      buttonText="Pédagogie"
                      dropdownHeader="Actions menées"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Education Nationale",
                        "Conservatoire et Ecoles de Musique",
                      ]}
                      dropdownLinks={[
                        "/ecole",
                        "/conservatoire"
                      ]}
                    />
      </ListItem>
      <ListItem className={classes.listItem}>
                    <CustomDropdown
                      buttonText="Répertoire"
                      dropdownHeader="Répertoire musical"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Musique classique",
                        "Musique contemporaine",
                        "Oeuvres dédiées à Hélios",
                        "Proposition de programmes"
                      ]}
                      dropdownLinks={[
                        "/classique",
                        "/contemporain",
                        "/oeuvres",
                        "/programme"]}
                    />
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to="/presse" className={classes.navLink}>
            Presse
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to="/mecenat" className={classes.navLink}>
            Soutenez-nous
          </Link>
      </ListItem>
    </List>
  );
}
