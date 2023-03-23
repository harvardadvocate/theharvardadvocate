/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextListElement from "./TextListElement";
import { buildSubarraysOfSize } from "../assets/utils"
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
    paddingBottom: "1vh",
  },

  ".articleItem": {
    borderRight: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
  },

  ".articleItem:last-child": {
    borderRight: "none",
  },
};



const add_border = {

  ".gridRow": {
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  },
};

const no_border = {

  ".gridRow": {
    borderBottom: "0px solid rgba(0,0,0,0.2)",
  },
};

export default function TextContentList(props) {

  const perChunk = 3 // items per row
  const resultArray = buildSubarraysOfSize(props.items, perChunk);

  return (
    <div sx={textContentListSx}>
      <div sx={props.border ? add_border : no_border}>
        <div className = "mainGrid">
          {(resultArray).map((row) => {
            return (
              <div className="gridRow">
              {(row).map((item, index) => {
                return (
                  <div className="articleItem" key={item.name}>
                    <TextListElement item={item} key={index} home={props.home} padding={true}/>
                  </div>
                );
              })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
