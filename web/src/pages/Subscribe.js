/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";
import { theme } from "../theme/theme.js";

const buttonColor = theme['colors']['buttonColor'];
const buttonColorHover = theme['colors']['buttonColorHover'];

const subscribeSx = {
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    ".mainContent": {
      flexGrow: 1,
    },
  },
  ".mainContent": {
    marginLeft: "0px",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ".mainText" : {
    width: "80%",
    textAlign: "center",
  },
  ".bigBox": {
    display: "flex",
    padding: "40px",
    textAlign: "center",
    flexDirection: "column",
    border: "2px solid lightgrey",
    justifyContent: "center",
    width: "20rem",
    height: "38%",
    borderRadius: "10px",
    boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
    opacity: "1",
    p: {
      opacity: "1",
      marginBottom: "5%",
    },
    strike: {
      opacity: "0.5",
      marginRight: "0.5em",
    },
  },
  p: {
    color: "rgba(0,0,0,0.5)",
    marginTop: "10px",
    fontFamily: "sans-serif",
    fontSize: "16px",
    textAlign: "center",
    marginBottom: "2%",
  },
  ".buttonLink": {
    color: "white",
    backgroundColor: buttonColor,
    padding: "10px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    borderRadius: "4px",
    fontSize: "18px",
    width: "80%",
    fontFamily: "sans-serif",
    fontWeight: "600",
    padding: "20px",
  },
  ".buttonLink:hover": {
    backgroundColor: buttonColorHover,
  },
  ".image": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    marginTop: "10px",
    width: "400px",
    textAlign: "center",
  },

  "@media (max-width: 767px)": {
    ".mainContent": {
      margin: "0em 0em 1em 0em",
      marginTop: "1em",
    },
    ".bigBox": {
      display: "flex",
      padding: "3vh",
      flexDirection: "column",
      border: "2px solid lightgrey",
      justifyContent: "center",
      width: "90%",
      borderRadius: "10px",
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
      opacity: "1",
      p: {
        opacity: "1",
        marginBottom: "5%",
      },
      strike: {
        color: "rgba(0,0,0,0.5)",
        marginRight: "0.5em",
      },
    },
    ".image": {
      width: "100%",
    }
  },

};

export default function Subscribe() {
  return (
    <div sx={subscribeSx}>
      <div className="horizontalContainer">
        <div className="mainContent">
          <div className="mainText">
          <Themed.h2>Thank you for considering subscribing to the Harvard Advocate!</Themed.h2>
          <p align="center">By subscribing, you receive four print issues a year, printed on high-quality paper, delivered straight to your doorstep.</p>
          </div>
          <br></br>
          <div className="bigBox">
            <h3 align="center">Full Subscription</h3>
            <br/>
            <Themed.h2><strike>&nbsp;$45.00&nbsp;</strike>$35.00 / yr </Themed.h2>
            <br/>
            <p>Renews automatically. Cancel anytime. Non-refundable.</p>
            <div  align="center">
                <a className = "buttonLink" href={"https://buy.stripe.com/eVa9Ej3Hy4Hw7T26oo"} target="_blank">
                  SUBSCRIBE NOW
                </a>
            </div>
          </div>
          <div className="image">
            <img src="/subscribe_image.jpg"/>
            <figcaption>Illustration from <em>The Importance of Knees as a Bracing Thing</em></figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}
