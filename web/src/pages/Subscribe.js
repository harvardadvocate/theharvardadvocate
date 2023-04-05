/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import { theme } from "../theme/theme.js";
import { useIsMobile } from "../utils/isMobile.js";
import { useEffect } from "react";
const buttonColor = theme["colors"]["buttonColor"];
const buttonColorHover = theme["colors"]["buttonColorHover"];

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
    paddingBottom: "2vh",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ".mainText": {
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
    width: "27rem",
    height: "38%",
    borderRadius: "10px",
    boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
    opacity: "1",
    p: {
      opacity: "1",
      marginBottom: "5%",
    },
    strike: {
      marginRight: "0.5em",
      color: "rgba(0,0,0,0.5)",
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

  "@media (max-width: 835px)": {
    ".mainContent": {
      margin: "0em 0em 1em 0em",
      marginTop: "1em",
    },
    ".bigBox": {
      height: "20%",
      padding: "3vh",
      width: "90%",
      borderRadius: "10px",
      p: {
        opacity: "1",
        marginBottom: "5%",
      },
    },
    ".image": {
      width: "100%",
    },
  },
};

export default function Subscribe() {
  var isMobile = useIsMobile();
  useEffect(() => {
    document.title = "Subscribe";
  });
  return (
    <div sx={subscribeSx}>
      <div className="horizontalContainer">
        <div className="mainContent">
          <div className="mainText">
            {isMobile ? (
              <Themed.h3>
                Thank you for considering subscribing to the Harvard Advocate!
              </Themed.h3>
            ) : (
              <Themed.h2>
                Thank you for considering subscribing to the Harvard Advocate!
              </Themed.h2>
            )}
            <p align="center">
              By subscribing, you receive two print issues a year, printed on
              high-quality paper, delivered straight to your doorstep.
            </p>
          </div>
          <br></br>
          <div className="bigBox">
            {isMobile ? (
              <Themed.h4 align="center">Full Subscription</Themed.h4>
            ) : (
              <Themed.h2 align="center">Full Subscription</Themed.h2>
            )}

            <br />
            <Themed.h3>
              <strike>&nbsp;$45.00&nbsp;</strike>$35.00 / yr{" "}
            </Themed.h3>
            <br />
            <Themed.p>
              Renews automatically. Cancel anytime. Non-refundable.
            </Themed.p>
            <div align="center">
              <a
                className="buttonLink"
                href={"https://buy.stripe.com/eVa9Ej3Hy4Hw7T26oo"}
                target="_blank"
                rel="noreferrer"
              >
                SUBSCRIBE NOW
              </a>
            </div>
          </div>
          <div className="image">
            <img
              src="/subscribe_image.jpg"
              loading="lazy"
              alt="subscribe graphic"
            />
            <figcaption>
              Illustration from{" "}
              <em>The Importance of Knees as a Bracing Thing</em>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}
