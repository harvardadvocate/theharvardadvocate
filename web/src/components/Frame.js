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
    h5: {
      margin: "0.5em",
    },
    a: {
      color: "#000",
      textDecoration: "none",
      cursor: "pointer",
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
    img: { height: "0.4em" },
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    marginTop: "2em",
    minHeight: "100vh",
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
      marginBottom: "1em",
    },
  },
  ".mainContent": {
    marginLeft: "20px",
  },
};
// TODO: assumes only up to 3 elements in path
export default function Frame(props) {
  return (
    <div sx={frameSx}>
      <div className="header">
        {
          //TODO: these should link, also pull this stuff out
        }
        <div className={props.path.length > 1 ? "headerLeft" : "headerRight"}>
          {"slug" in props.path[0] ? (
            <Link to={props.path[0].slug}>
              <Themed.h5>{props.path[0].name}</Themed.h5>
            </Link>
          ) : (
            <Themed.h5>{props.path[0].name}</Themed.h5>
          )}
        </div>
        {props.path.length > 1 && (
          <>
            <div className="headerImgWrapper">
              <img src={rightArrow} alt="right-arrow" />
            </div>
            <div
              className={props.path.length > 2 ? "headerMiddle" : "headerRight"}
            >
              {"slug" in props.path[1] ? (
                <Link to={props.path[1].slug}>
                  <Themed.h5>{props.path[1].name}</Themed.h5>
                </Link>
              ) : (
                <Themed.h5>{props.path[1].name}</Themed.h5>
              )}
            </div>
          </>
        )}
        {props.path.length > 2 && (
          <>
            <div className="headerImgWrapper">
              <img src={rightArrow} alt="right-arrow" />
            </div>
            <div className="headerRight">
              {"slug" in props.path[2] ? (
                <Link to={props.path[2].slug}>
                  <Themed.h5>{props.path[2].name}</Themed.h5>
                </Link>
              ) : (
                <Themed.h5>{props.path[2].name}</Themed.h5>
              )}
            </div>
          </>
        )}
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
