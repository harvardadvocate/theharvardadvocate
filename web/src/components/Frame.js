/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";

const frameSx = {
  margin: "0em 0em 0em 0em",
  ".header": {
    marginLeft: "10%",
    marginRight: "0em",
    marginTop: "1em",
    marginBottom: "1em",
    height: "2.5em",
    width: "75%",
    display: "flex",
    h5: {
      margin: "0.5em",
    },
    a: {
      color: "#000",
      textDecoration: "none",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
    },
    ".headerImgWrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 0.5em",
    },
    ".headerLeft, .headerMiddle": {
      paddingRight: "3em",
      borderBottom: "1px solid #000",
    },
    ".headerRight": {
      borderBottom: "1px solid #000",
      flexGrow: 1,
    },
    ".headerNormal": {
      borderBottom: "1px solid #000",
      width: "100%",
    },
    img: { height: "0.4em" },
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    marginTop: "0em",
    minHeight: "100vh",
    ".mainContent": {
      flexGrow: 1,
    },
  },
  ".verticalLines": {
    width: "20px",
    marginRight: "0px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",

    ".topVL": {
      borderRight: "1px solid #000",
      width: "20px",
      height: "100%",
      h5: {
        lineHeight: 1,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "rotate(180deg)",
      },
    },
  },
  ".mainContent": {
    marginLeft: "0px",
  },
};
// TODO: assumes only up to 3 elements in path
export default function Frame(props) {
  return (
    <div sx={frameSx}>
      <div className="header">
        <div className="headerNormal">
        <Themed.h2>{props.path[0].name}</Themed.h2>
        </div>
      </div>
      <div className="horizontalContainer">
        <div className="mainContent">{props.children}</div></div>
    </div>
  );
}
