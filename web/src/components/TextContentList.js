/** @jsxImportSource theme-ui */
import React from "react";
import TextListElement from "./TextListElement";
import { buildSubarraysOfSize } from "../utils/buildSubarrays";
import { useIsMobile } from "../utils/isMobile";

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
    alignItems: "start",
    paddingBottom: "1vh",
    paddingTop: "1vh",
    width: "100%",
  },

  ".articleItem, .articleItemNoLastBorder": {
    borderRight: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
  },

  ".articleItem:last-child": {
    borderRight: "none",
  },

  ".articleItemNoLastBorder:last-child": {
    borderRight: "none",
  },
};

const textContentListSxVertical = {
  ".mainGrid": {
    display: "grid",
    gridTemplateRows: "repeat(minmax(0,1fr))",
    gridTemplateColumns: "minmax(0,1fr)",
    gridGap: "1vh",
    paddingTop: "1vh",
    justifyItems: "center",
    paddingInline: "2vw",
  },

  ".gridRow": {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr",
    wordBreak: "break-word",
    width: "100%",
  },

  ".articleItem, .articleItemNoLastBorder": {
    borderRight: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
  },

  ".articleItem:last-child, .articleItemNoLastBorder": {
    borderRight: "none",
  },

  "@media (max-width: 835px)": {
    ".articleItem, .articleItemNoLastBorder": {
      borderRight: "0",
      borderBottom: "1px solid rgba(0,0,0,0.2)",
    },

    ".articleItemNoLastBorder:last-child": {
      borderRight: "0",
      borderBottom: "0",
    },

    ".mainGrid": {
      paddingTop: "0",
    },
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
  var vertical = false;
  var isMobile = useIsMobile();
  if (props.vertical || isMobile) {
    vertical = true;
  }

  var perChunk; // items per row

  if (props.vertical) {
    perChunk = 1;
  } else {
    perChunk = 3;
  }

  const resultArray = buildSubarraysOfSize(props.items, perChunk);

  var paddingVar;
  if (props.padding || props.padding === false) {
    paddingVar = props.padding;
  } else {
    paddingVar = true;
  }

  return (
    <div sx={vertical ? textContentListSxVertical : textContentListSx}>
      <div
        sx={
          props.border
            ? vertical
              ? add_border_vertical
              : add_border
            : no_border
        }
      >
        <div className="mainGrid">
          {resultArray.map((row) => {
            return (
              <div className="gridRow">
                {row.map((item, index) => {
                  return (
                    <div
                      className={
                        props.noLastBorder
                          ? "articleItemNoLastBorder"
                          : "articleItem"
                      }
                      key={item.name}
                    >
                      <TextListElement
                        item={item}
                        key={index}
                        home={props.home}
                        padding={paddingVar}
                        hideAuthor={props.hideAuthor}
                      />
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
