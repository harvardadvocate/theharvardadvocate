/** @jsxImportSource theme-ui */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useIsMobile } from "../utils/isMobile.js";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const footerSx = {
  ".fontMod": {
    fontFamily: "Bernhard Gothic Medium, serif",
  },
  width: "-webkit-fill-available",
  height: "5rem" /* Footer height */,

  borderTop: "1px solid rgba(0,0,0,0.20)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "3vh",
  paddingLeft: "5vw",
  paddingRight: "5vw",
  paddingBottom: "3vh",

  ".footerContainer": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  ".leftMost": {
    textAlign: "center",
    marginBottom: "2vh",
  },

  ".sectionsAndMore": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2vh",
    gridColumnGap: "5vw",
  },
  
  // a: {
  //   color: "#000",
  //   textDecoration: "none"
  // },

  img: {
    marginRight: "1vw",
    width: "3vw",
  },
  ".linkLogo": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2vh",
  },

  ".socialIcons": {
    display: "flex",
    alignItems: "flexStart",
    height: "100%",
    flexDirection: "row",
  },
  ".socialIcon": {
    margin: "0 1vw",
    fontSize: "1.5rem",
    color: "black",
    "&:hover": {
      color: "gray",
    },
  },

  "@media (min-width: 835px)": {
    ".footerContainer": {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    ".leftMost": {
      marginBottom: "0",
      marginRight: "5vw",
      textAlign: "left",
      float: "none",
    },

    ".sectionsAndMore": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "flex-start",
      marginTop: "0",
    },

    ".sections": {
      marginBottom: "2vh",
    },

    ".more": {
      marginBottom: "2vh",
    },
  },
};

export default function Footer() {
  var isMobile = useIsMobile();

  return (
    <div sx={footerSx}>
      <div className="footerContainer">
        <div className="leftMost">
          <div className="fontMod">
            THE HARVARD ADVOCATE
          </div>
          {/* <br /> */}
          21 South Street
          <br />
          Cambridge, MA 02138
          <br />
          president@theharvardadvocate.com
          <br />
          <br />
          <br />
          <Link className="linkLogo" to={"/"}>
            <img src={logo} alt="The Advocate Logo" loading="lazy" />
            2024 &nbsp; <span>&copy;</span> &nbsp; The Harvard Advocate
          </Link>
        </div>
        <div className="socialIcons">
          <a
            href="https://twitter.com/harvardadvocate"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/harvardadvocate"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
          >
            <FaInstagram />
          </a>
        </div>
        {isMobile ? (
          ""
        ) : (
          <div className="sectionsAndMore">
            <div className="sections">
              <div className="fontMod">SECTIONS</div>
              {/* <br /> */}
              {/* <br /> */}
              <a href="/sections/art">Art</a>
              <br />
              <a href="/sections/fiction">Fiction</a>
              <br />
              <a href="/sections/features">Features</a>
              <br />
              <a href="/sections/poetry">Poetry</a>
              <br />
              <a href="/sections/columns">Columns</a>
              <br />
              <a href="/sections/blog">Blog</a>
            </div>
            <div className="more">
            <div className="fontMod">MORE</div>
            {/* <br /> */}
              {/* <br /> */}
              <a href="/shop">Shop</a>
              <br />
              <a href="/donate">Donate</a>
              <br />
              <a href="/advertise">Advertise</a>
              <br />
              <a href="/comp">Comp</a>
              <br />
              <a href="/masthead">Masthead</a>
              <br />
              <a href="/contact">Contact</a>
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
