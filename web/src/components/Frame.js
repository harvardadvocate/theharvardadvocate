/** @jsxImportSource theme-ui */
import React, { useEffect } from "react";
import { Themed } from "theme-ui";

const frameSx = {
  marginBottom: "5vh",
  ".header": {
    marginTop: "1em",
    marginBottom: "0.5em",
    display: "flex",
    ".headerNormal": {
      width: "100%",
      textAlign: "center",
    },
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    paddingInline: "10vw",
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
    width: "69%",
  },

  ".divider": {
    width: "100%",
    border: "0.5px solid #000",
  },

  "@media (max-width: 835px)": {
    ".header": {
      paddingInline: "inherit",
      marginTop: "1em",
      marginBottom: "auto",
      height: "auto",
      display: "inline-block",
      ".headerNormal": {
        width: "auto",
      },
    },
    ".mainContent": {
      width: "90%",
    },
    ".horizontalContainer": {
      paddingInline: "2vw",
    },
  },
};
// TODO: assumes only up to 3 elements in path
export default function Frame(props) {
  useEffect(() => {
    document.title = props.path[0].name;
  });
  return (
    <div sx={frameSx}>
      <div className="horizontalContainer">
        <div className="header">
          <div className="headerNormal">
            <Themed.h2>{props.path[0].name}</Themed.h2>
          </div>
        </div>
        {/*Only hide divider if showDivider prop is explicitly passed as false*/}
        {((props.showDivider != null && props.showDivider) ||
          props.showDivider == null) && <hr className="divider" />}
        <div className="mainContent">{props.children}</div>
      </div>
    </div>
  );
}
