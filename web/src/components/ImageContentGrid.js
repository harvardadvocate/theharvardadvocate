/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageListElement from "./ImageListElement";
import { Grid } from "theme-ui";
import { buildSubarraysOfSize } from "../assets/utils"

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

  ".artItem": {
    borderRight: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
  },

  ".artItem:last-child": {
    borderRight: "none",
  },
};


export default function ImageContentGrid(props) {

  const perChunk = 3 // items per row
  const resultArray = buildSubarraysOfSize(props.items, perChunk);

  return (
    <div sx={imageContentGridSx}>
      <div className = "mainGrid">
        {(resultArray).map((row, index1) => {
          return (
            <div className="gridRow" key={index1}>
            {(row).map((artItem, index2) => {
              return (
                <div className="artItem" key={artItem.name}>
                  <ImageListElement item={artItem} key={index2} home={false}/>
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
