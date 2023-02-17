/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextListElement from "./TextListElement";

const textContentListSx = {
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

  ".articleItem": {
    borderRight: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
  },

  ".articleItem:last-child": {
    borderRight: "none",
  },
};


export default function TextContentList(props) {
  console.log("props");
  console.log(props);
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
    <div sx={textContentListSx}>
      <div className = "mainGrid">
        {(resultArray).map((row) => {
          return (
            <div className="gridRow">
            {(row).map((item, index) => {
              return (
                <div className="articleItem" key={item.name}>
                  <TextListElement item={item} key={index} />
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
