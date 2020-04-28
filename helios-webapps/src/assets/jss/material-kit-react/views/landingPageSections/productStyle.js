import { title } from "./../../../../../assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  subtitle: {
    ...title,
    marginBottom: "0.5rem",
    marginTop: "15px",
    minHeight: "16px",
    textDecoration: "none",
    textAlign: "left"
  },
  subdescr:{
    color: "#3C4858",
    textAlign: "left",
    fontSize: "19px",
    marginBottom: "30px",
  },
  partenaireDescr:{
    color: "#3C4858",
    fontSize: "19px",
  },
  subdescrEdition:{
    color: "#3C4858",
    textAlign: "left",
    fontSize: "19px",
    paddingLeft: "2rem"
  },
  subdescrMid:{
    color: "#3C4858",
    textAlign: "left",
    fontSize: "19px",
  },
  rectorat:{
    display: "inline",
    color: "#3C4858",
  },
  verticalAlign:{
    verticalAlign: "middle"
  },
  rectoratImg:{
    marginRight: "10px",
    verticalAlign: "middle"
  },
  typo: {
    marginBottom: "40px",
    position: "relative",
    width: "100%",
    display:"flex",
    alignItems: "center",
    justifyContent: "center"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  pressImg:{
    width:"400px",
    verticalAlign: "middle"
  },
  roundPressImg:{
    width:"200px",
    verticalAlign: "middle"
  }
};

export default productStyle;
