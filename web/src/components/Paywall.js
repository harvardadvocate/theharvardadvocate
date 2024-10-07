/** @jsxImportSource theme-ui */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useIsMobile } from "../utils/isMobile.js";
import { theme } from "../theme/theme.js";

import { FaTwitter, FaInstagram } from "react-icons/fa";
const buttonColor = theme["colors"]["buttonColor"];
const buttonColorHover = theme["colors"]["buttonColorHover"];



const paywall = {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(0,0,0,0.20)",
    backgroundColor: "white",
    padding: "auto",
    opacity: 1,
    position: "fixed",
    width: "70%",
    height: "15rem",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    margin: "auto",
    left: 225,
    right: 25,




    
  ".innerText": {
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",

      padding: "2vh",
    },
 
  ".header":{
    marginTop: "2vh",
    marginBottom: "2vh",
    fontSize: "50px",
  },

  ".subtitle":{
    borderTop: "1px solid rgba(0,0,0,0.20)",
    padding: "2vh",
  },

  ".buttonLink": {
    color: "white",
    backgroundColor: buttonColor,
    padding: "10px 10px",
    textDecoration: "none",
    display: "inline-block",
    borderRadius: "4px",
    fontSize: "16px",
    width: "20%",
    fontFamily: "sans-serif",
    fontWeight: "600",
  },
  ".buttonLink:hover": {
    backgroundColor: buttonColorHover,
  },

  "@media (min-width: 835px)": {
    ".footerContainer": {

    },

  },
};

export default function Paywall() {
  var isMobile = useIsMobile();

  return (
    <div sx={paywall}>
      {/* <div className="paywallContainer"> */}
        {isMobile ? (
          ""
        ) : (
            <div className="innerText">
              <div className="header">
              Want to read more? Subscribe to the Harvard Advocate!
              </div>
              <div className="subtitle">
                Your subscription goes towards the advancement and support of the independent arts.
              </div>
              <div className = "button">
                <Link className="buttonLink" to={"/subscribe"}>
                Subscribe
                </Link>
              </div>
              
            </div>

          
        )}
      </div>
  );
}
