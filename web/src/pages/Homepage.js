/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";

const homepageSx = {
  margin: "2em 5% 2em 0",
  ".header": {
    marginLeft: "20px",
    borderBottom: "1px solid #000",
  },
  ".horizontalContainer": {
    display: "flex",
    width: "100%",
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
};

// TODO: pull out "frame" for pages including margin

export default function Homepage() {
  return (
    <div css={homepageSx}>
      <div className="header">
        <Themed.h5 sx={{ margin: "0.5em" }}>Homepage</Themed.h5>
      </div>
      <div className="horizontalContainer">
        <div className="verticalLines">
          <div className="topVL">
            <Themed.h5>MAGAZINE</Themed.h5>
          </div>
          <div className="bottomVL"></div>
        </div>
        <div className="mainContent"></div>
      </div>
    </div>
  );
}
