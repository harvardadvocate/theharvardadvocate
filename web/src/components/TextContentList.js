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


const textContentListSxVertical = {
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

const add_border_vertical = {

  ".gridRow": {
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  },

  ".gridRow:last-child": {
    borderBottom: "none",
  },

};

const no_border = {

  ".gridRow": {
    borderBottom: "0px solid rgba(0,0,0,0.2)",
  },
};

export default function TextContentList(props) {
  var perChunk; // items per row

  if (props.vertical) {
    var perChunk = 1;
  }
  else {
    var perChunk = 3
  }

  const resultArray = buildSubarraysOfSize(props.items, perChunk);

  var paddingVar;
  if (props.padding || props.padding == false) {
    paddingVar = props.padding;
  }
  else {
    paddingVar = true;
  }
  console.log("resultArray");
  console.log(resultArray);
  return (
    <div sx={props.vertical ? textContentListSxVertical : textContentListSx}>
      <div sx={props.border ? (props.vertical ? add_border_vertical : add_border) : no_border}>
        <div className = "mainGrid">
          {(resultArray).map((row) => {
            return (
              <div className="gridRow">
              {(row).map((item, index) => {
                return (
                  <div className="articleItem" key={item.name}>
                    <TextListElement item={item} key={index} home={props.home} padding={paddingVar} hideAuthor={props.hideAuthor}/>
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
