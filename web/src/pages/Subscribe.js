/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";

const subscribeSx = {
  ".subscribeBody": {
    marginTop: "0.4em",
    marginLeft: "22%",
    marginRight: "25%"
  },
  i: {
    textAlign: "center",
    display: "block"
  },
  margin: "0em 0em 2em 0em",
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    marginTop: "0em",
    minHeight: "100vh",
    ".mainContent": {
      flexGrow: 1,
    },
  },
  ".mainContent": {
    marginLeft: "0px",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ".bigBox": {
    display: "flex",
    flexDirection: "column",
    border: "2px solid lightgrey",
    justifyContent: "center",
    width: "30%",
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
    opacity: "0.5",
    marginTop: "10px",
    fontFamily: "sans-serif",
    fontSize: "16px",
    textAlign: "center",
    marginBottom: "2%",
  },
  ".buttonLink": {
    color: "white",
    backgroundColor: "#e2251e",
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
};

export default function Subscribe() {
  return (
    <div sx={subscribeSx}>
    <div className="horizontalContainer">
      <div className="mainContent">
        <Themed.h2>Thank you for considering subscribing to the Harvard Advocate!</Themed.h2>
        <p align="center">Cancel or pause anytime.</p>
        <div className="bigBox">
        <h3 align="center">Full Subscription</h3>
        <br/>
        <Themed.h2 align="center"><strike>&nbsp;$45.00&nbsp;</strike>$35.00 / yr </Themed.h2>
        <br/>
        <p>Renews automatically. Cancel anytime. Non-refundable.</p>
        <div  align="center">
            <Link className = "buttonLink" to={""}>
              SUBSCRIBE NOW
            </Link>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
