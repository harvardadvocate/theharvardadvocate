/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";

const frameSx = {
  marginBottom: "5vh",
  ".header": {
    marginTop: "1em",
    marginBottom: "1em",
    height: "2.5em",
    display: "flex",
    ".headerNormal": {
      borderBottom: "1px solid #000",
      width: "100%",
      textAlign: "center",
    },
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    paddingInline: "10vw",
    minHeight: "100vh",
    flexDirection: "column",
    marginTop: "0em",
    ".mainContent": {
      flexGrow: 1,
    },
  },

  ".mainContent": {
    marginLeft: "auto",
    marginRight: "auto",
    width: "69%",
  },

  "@media (max-width: 835px)": {
    ".header": {
      paddingInline: "inherit",
      marginTop: "1em",
      marginBottom: "auto",
      height: "auto",
      display: "inline-block",
      ".headerNormal": {
        borderBottom: "1px solid #000",
        width: "auto",
      },
    },
    ".mainContent": {
      width: "90%",
    },
    ".horizontalContainer": {
      paddingInline: "2vw",
    }
  },
};
// TODO: assumes only up to 3 elements in path
export default function Frame(props) {

  return (
    <div sx={frameSx}>
      <div className="horizontalContainer">
          <div className="header">
            <div className="headerNormal">
            <Themed.h2>{props.path[0].name}</Themed.h2>
            </div>
          </div>

          <div className="mainContent">{props.children}</div>
      </div>
    </div>
  );
}
