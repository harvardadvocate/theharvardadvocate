/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";

const frameSx = {
  margin: "0em 0em 2em 0em",
  ".header": {
    marginTop: "1em",
    marginBottom: "1em",
    height: "2.5em",
    display: "flex",
    paddingInline: "10em",

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
        <div className="mainContent">{props.children}</div>
      </div>
    </div>
  );
}
