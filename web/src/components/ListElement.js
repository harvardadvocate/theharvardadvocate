/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";

const listItemSx = {
  padding: "0.8em 0",
  borderBottom: "1px solid #000",
  a: {
    color: "text",
    textDecoration: "none",
  },
  ".listItemImage": {
    maxWidth: "300px",
  },
  ".listItem": {
    display: "flex",
    alignItems: "center",
    gap: "0.6em",
  },
  ".issueTag": {
    borderRight: "1px solid #000",

    h5: {
      fontStyle: "normal",
      textTransform: "uppercase",
      lineHeight: 1,
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      transform: "rotate(180deg)",
      margin: "2px",
    },
  },
};

export default function ListItem(props) {
  return (
    <div sx={listItemSx}>
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
          <div>
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
