/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageListElement from "./ImageListElement";
import { Grid } from "theme-ui";
import { buildSubarraysOfSize } from "../assets/utils"
import { useIsMobile } from "../utils/isMobile";

const imageContentGridSx = {
  ".mainGrid": {
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    gridTemplateColumns: "1fr",
    gridGap: "1vh",
    justifyItems: "center",
    paddingInline: "2vw",
  },

  ".gridRow": {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    paddingBottom: "1vh",
  },

  ".artItem, .artItemNoLastBorder": {
    borderRight: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
  },

  ".artItem:last-child": {
    borderRight: "none",
  },

  ".artItemNoLastBorder:last-child": {
    borderRight: "none",
  }
};

const imageContentGridSxVertical = {
  ".mainGrid": {
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    gridTemplateColumns: "1fr",
    gridGap: "1vh",
    paddingTop: "1vh",
    justifyItems: "center",
    paddingInline: "2vw",
  },

  ".gridRow": {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr",
    width: "100%",
  },


  ".artItem, .artItemNoLastBorder": {
    borderRight: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
  },

  ".artItem:last-child": {
    borderRight: "none",
  },

  "@media (max-width: 835px)": {
    ".artItem, .artItemNoLastBorder": {
      borderRight: "0",
      borderBottom: "1px solid rgba(0,0,0,0.2)",
    },

    ".artItemNoLastBorder:last-child": {
      borderBottom: "0",
    },

  },
};



export default function ImageContentGrid(props) {

  var vertical = false;
  var isMobile = useIsMobile();
  if (props.vertical || isMobile) {
    vertical = true;
  }

  var perChunk; // items per row

  if (props.vertical) {
    var perChunk = 1;
  }
  else {
    var perChunk = 3
  }

  const resultArray = buildSubarraysOfSize(props.items, perChunk);


  return (
    <div sx={vertical ? imageContentGridSxVertical : imageContentGridSx}>
      <div className = "mainGrid">
        {(resultArray).map((row, index1) => {
          return (
            <div className="gridRow" key={index1}>
            {(row).map((artItem, index2) => {
              return (
                <div className={props.noLastBorder ? "artItemNoLastBorder" : "artItem"} key={index2}>
                  <ImageListElement item={artItem} key={index2} home={false} hideAuthor={props.hideAuthor}/>
                </div>
              );
            })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
