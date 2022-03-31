/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";

const textListItemSx = {
  padding: "0.4em 0",
  a: {
    color: "text",
    textDecoration: "none",
  },
  ".listItemImage": {
    maxWidth: "300px",
  },
  ".listItem": {
    display: "flex",
    alignItems: "stretch",
    gap: "0.6em",
  },
  ".itemBody": {
    padding: "0.8em 0",
    borderBottom: "1px solid #000",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  ".issueTag": {
    borderRight: "1px solid #000",
    display: "flex",
    alignItems: "center",
    h5: {
      fontStyle: "normal",
      textTransform: "uppercase",
      lineHeight: 1.1,
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      transform: "rotate(180deg)",
      margin: "2px",
    },
  },
};

export default function TextListItem(props) {
  return (
    <div sx={textListItemSx}>
      <Link to={"/" + props.item.slug.current} key={props.item.slug.current}>
        <div className="listItem">
          <div className="issueTag">
            <Themed.h5>
              {
                // TODO: link to issue page
                "issue" in props.item &&
                  props.item.issue.title.replace("Commencement", "Comm.")
              }
            </Themed.h5>
          </div>
          <div className="itemBody">
            <Themed.h3>{props.item.title}</Themed.h3>
            {"authors" in props.item && (
              <Themed.h4>
                BY{" "}
                {
                  //TODO: link to author page
                }
                {props.item.authors
                  .map(({ name }) => name.toUpperCase())
                  .join(", ")}
              </Themed.h4>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
