/** @jsxImportSource theme-ui */
import React, { useEffect } from "react";
import { Themed } from "theme-ui";

const sectionFrameSx = {
  ".fontMod": 
  {
    fontFamily: "Bernhard Gothic Medium, serif",

  },

  marginBottom: "5vh",
  ".header": {
    marginTop: "1em",
    marginBottom: "1em",
    height: "2.5em",
    display: "flex",
    paddingInline: "10em",
    ".headerNormal": {
      borderBottom: "1px solid #000",
      width: "100%",
      textAlign: "center",
    },
  },

  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    marginTop: "0em",
    ".mainContent": {
      flexGrow: 1,
    },
  },

  ".mainContent": {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },

  "@media (max-width: 835px)": {
    margin: "0em 0.8em 2em 0.8em",
    ".header": {
      paddingInline: "inherit",
      marginTop: "1em",
      marginBottom: "auto",
      height: "auto",
      display: "inline-block",
      ".headerNormal": {
        borderBottom: "1px solid #000",
        width: "auto",
      },
    },
  },
};
// TODO: assumes only up to 3 elements in path
export default function SectionFrame(props) {
  useEffect(() => {
    document.title = props.path[0].name;
  });

  return (
    <div sx={sectionFrameSx}>
      <div className="horizontalContainer">
        <div className="header">
          <div className="headerNormal">
            {/* <div className="fontMod"> */}
              <Themed.h2>{
                <div className="fontMod">

              {props.path[0].name}

              </div>
              
              }</Themed.h2>
            {/* </div> */}
          </div>
        </div>

        <div className="mainContent">{props.children}</div>
      </div>
    </div>
  );
}
