/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageListElement from "./ImageListElement";
import { Grid } from "theme-ui";

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
    maxWidth: "100%",
  },

  ".artItem:last-child": {
    borderRight: "none",
  },
};






export default function ImageContentGrid(props) {

  const perChunk = 3 // items per row

  const resultArray = (props.items).reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/perChunk)

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

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
