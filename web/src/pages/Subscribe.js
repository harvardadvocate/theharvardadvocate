/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

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
  },
  ".bigBox": {
    border: "2px solid black",
    justifyContent: "center",
    width: "30%",
    height: "35%",
    marginLeft: "35%",
    borderRadius: "10px",
    opacity: "0.5",
  }
};

export default function Subscribe() {
  return (
    <div sx={subscribeSx}>
    <div className="horizontalContainer">
      <div className="mainContent">
        <h3 align="center">Thank you for considering subscribing to the Harvard Advocate!</h3>
        <br/>
        <h4 align="center" style={{"opacity":"0.5"}}>Cancel or pause anytime.</h4>
        <br/><br/>
        <div className="bigBox">
        <h3 align="center">Full subscription</h3>
        </div>
      </div>
    </div>
    </div>
  );
}
