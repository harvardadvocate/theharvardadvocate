/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Grid } from "theme-ui";

const footerSx = {
  borderTop: "1px solid rgba(0,0,0,0.20)",
  display: "flex",
  paddingTop: "3vh",
  paddingLeft: "5vw",
  paddingRight: "10vw",
  paddingBottom: "3vh",
  ".footerContainer": {
    width: "100%",
  },

  ".leftMost": {
    float: "left",
  },

  ".sectionsAndMore": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    float: "right",
    gridGap: "5vw",
  },

  img: {
    marginRight: "1vw",
    width: "3vw",
  },
  ".linkLogo": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    float: "left",
  },
};


export default function Footer() {
  return (
    <div sx={footerSx}>
      <div className="footerContainer">
        <div className="leftMost">
          <b>The Harvard Advocate</b>
          <br/>
          21 South Street
          <br/>
          Cambridge, MA 02138
          <br/>
          president@theharvardadvocate.com
          <br/><br/><br/>
          <Link className="linkLogo" to={"/"}>
            <img src={logo} alt="The Advocate Logo" />
            2023 <span>&copy;</span> The Harvard Advocate
          </Link>
        </div>
        <div className="sectionsAndMore">
          <div className="sections">
            <b>Sections</b>
            <br/><br/>
            <a href="sections/art">Art</a>
            <br/>
            <a href="sections/fiction">Fiction</a>
            <br/>
            <a href="sections/features">Features</a>
            <br/>
            <a href="sections/poetry">Poetry</a>
            <br/>
            <a href="sections/blog">Blog</a>
          </div>
          <div className="more">
            <b>More</b>
            <br/>
            <br/>
            <a href="advertise">Advertise</a>
            <br/>
            <a href="comp">Comp</a>
            <br/>
            <a href="shop">Shop</a>
            <br/>
            <a href="donate">Donate</a>
            <br/>

          </div>
        </div>
      </div>
    </div>
  );
}
