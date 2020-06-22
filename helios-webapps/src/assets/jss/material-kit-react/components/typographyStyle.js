import {
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "./../../material-kit-react.js";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px"
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee",
    verticalAlign: "middle",
    maxWidth: "50%"
  },
  quoteBlue: {
    padding: "10px 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #b4ddff",
    verticalAlign: "middle",
    maxWidth: "50%"
  },
  quote100: {
    padding: "10px 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee",
    verticalAlign: "middle",
    maxWidth: "100%"
  },
  quoteBlue100: {
    padding: "10px 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #b4ddff",
    verticalAlign: "middle",
    maxWidth: "100%"
  },
  quoteCenter: {
    padding: "10px 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee",
    verticalAlign: "middle",
    marginLeft:"20%",
    marginRight:"20%"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic",
    color: "#777"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: primaryColor
  },
  infoText: {
    color: infoColor
  },
  successText: {
    color: successColor
  },
  warningText: {
    color: warningColor
  },
  dangerText: {
    color: dangerColor
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  }
};

export default typographyStyle;
