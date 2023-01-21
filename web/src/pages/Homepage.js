/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import { Grid } from "theme-ui";

const homepageSx = {
  ".featuredIssue": {
    width: "100%",
    height: "70%",
    backgroundColor: "#D6362F",
  },
  margin: "0em 0em 0em 0em",
  ".header": {
    marginLeft: "0px",
    width: "100%",
    display: "flex",
    h5: {
      margin: "0.5em",
    },
    a: {
      color: "#000",
      textDecoration: "none",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
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
    marginTop: "0em",
    marginLeft: "0em",
    minHeight: "100vh",
    ".mainContent": {
      flexGrow: 1,
    },
  },
  ".mainContent": {
    marginLeft: "0px",
  },
};

export default function Homepage() {
  return (
    <div css={homepageSx}>
    <div className="horizontalContainer">
      <div className="mainContent">
        <div className="featuredIssue">
          <Grid columns={"2fr 3fr"}>
            <div className="issueCover"></div>
            <div className="featuredArticles"></div>
          </Grid>
        </div>
      </div>
    </div>
    </div>
  );
}
