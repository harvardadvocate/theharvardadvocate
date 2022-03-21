/** @jsxImportSource theme-ui */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";

const homepageSx = {
  margin: "0.5em",
  width: "90%",
  ".horizontalContainer": {
    display: "flex",
    borderTop: "1px solid #000",
  },
  ".verticalLines": {},
  ".topVL": {},
  ".mainContent": {},
};

export default function Homepage() {
  return (
    <div css={homepageSx}>
      <div className="header">
        <Themed.h5 sx={{ margin: "0.5em" }}>Homepage</Themed.h5>
      </div>
      <div className="horizontalContainer">
        <div className="verticalLines">
          <div className="topVL"></div>
          <div className="bottomVL"></div>
        </div>
        <div className="mainContent"></div>
      </div>
    </div>
  );
}
