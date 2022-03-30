/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";

const frameSx = {
  margin: "2em 5% 2em 0 ",
  ".header": {
    marginLeft: "20px",
    display: "flex",
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
    img: { height: "0.4em" },
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    marginTop: "2em",
    ".mainContent": {
      flexGrow: 1,
    },
  },
  ".verticalLines": {
    width: "20px",
    marginRight: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",

    ".topVL": {
      borderRight: "1px solid #000",
      width: "20px",
      height: "250px",
      h5: {
        lineHeight: 1,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "rotate(180deg)",
      },
    },
    ".bottomVL": {
      borderRight: "1px solid #000",
      width: "20px",
      flexGrow: 1,
    },
  },
  ".mainContent": {
    marginLeft: "20px",
  },
};

export default function Frame(props) {
  return (
    <div sx={frameSx}>
      <div className="header">
        {
          //TODO: these should link, also pull this stuff out
        }
        <div className="headerLeft">
          <Themed.h5 sx={{ margin: "0.5em" }}>{props.path[0]}</Themed.h5>
        </div>
        <div className="headerImgWrapper">
          <img src={rightArrow} alt="right-arrow" />
        </div>
        <div className="headerMiddle">
          <Themed.h5 sx={{ margin: "0.5em" }}>{props.path[1]}</Themed.h5>
        </div>
        <div className="headerImgWrapper">
          <img src={rightArrow} alt="right-arrow" />
        </div>
        <div className="headerRight">
          <Themed.h5 sx={{ margin: "0.5em" }}>{props.path[2]}</Themed.h5>
        </div>
      </div>
      <div className="horizontalContainer">
        <div className="verticalLines">
          <div className="topVL">
            <Themed.h5>MAGAZINE</Themed.h5>
          </div>
          <div className="bottomVL"></div>
        </div>
        <div className="mainContent">{props.children}</div>
      </div>
    </div>
  );
}
