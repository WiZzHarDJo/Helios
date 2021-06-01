import { cardTitle, title } from "./../../../../../assets/jss/material-kit-react.js";
import imagesStyle from "./../../../../../assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontSize:"35px"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle:{
    fontSize: "25px",
  },
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999",
    fontSize:"15px"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  parent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(550px, 1fr))",
    gridTemplateRows: "repeat(2, 1fr)",
    gridColumnGap: "2rem",
    gridRowGap: "2rem",
    },
    div1: { gridArea: 1 / 1 / 2 / 2 },
    div2: { gridArea: 1 / 2 / 2 / 3 },
    div3 :{ gridArea: 2 / 1 / 3 / 2 },
    div4: { gridArea: 2 / 2 / 3 / 3 }
};

export default teamStyle;
