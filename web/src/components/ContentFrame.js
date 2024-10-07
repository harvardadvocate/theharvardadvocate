/** @jsxImportSource theme-ui */
import React from "react";

const frameSx = {
  
  marginBottom: "5vh",


  ".header": {
    marginLeft: "5%",
    marginRight: "2em",
    marginTop: "0px",
    marginBottom: "1em",
    height: "em",
    maxWidth: "90%",
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
    ".headerNormal": {
      borderBottom: "1px solid #000",
      width: "100%",
    },
    img: { height: "0.4em" },
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    overflow: "hidden",

    paddingInline: "10vw",
    marginTop: "0em",
    minHeight: "100vh",
    flexDirection: "column",
    ".mainContent": {
      flexGrow: 1,
    },
  },
  ".verticalLines": {
    width: "20px",
    marginRight: "0px",
    display: "none",
  },
  ".mainContent": {
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",

    width: "69%",
  },
  "@media (max-width: 835px)": {
    ".header": {
      marginBottom: "0em",
      display: "none",
    },
    ".mainContent": {
      width: "90%",
    },
    ".horizontalContainer": {
      paddingInline: "2vw",
      marginTop: "2vh",
    },
  },
};
// TODO: assumes only up to 3 elements in path
export default function ContentFrame(props) {
  return (
    <div sx={frameSx}>
      <div className="header"></div>
      <div className="horizontalContainer">
        <div className="mainContent">{props.children}</div>
      </div>
    </div>
  );
}
