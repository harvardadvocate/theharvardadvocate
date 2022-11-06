/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";

const imageListElementSx = {
  padding: "0.8em 0",
  a: {
    color: "text",
    textDecoration: "none",
  },
  ".listItemImage img": {
    maxHeight: "200px",
  },
  ".listItem": {
    display: "flex",
    flexDirection: "column",
    gap: "0.1em",
    textAlign: "left",
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

export default function ImageListElement(props) {
  return (
    <div sx={imageListElementSx}>
      <Link to={"/" + props.item.slug.current} key={props.item.slug.current}>
        <div className="listItem">
          <div className="listItemImage">
            {props.item.mainImage ? (
              <img src={props.item.mainImage.asset.url} alt="" />
            ) : // TODO: better (more robust) check for this
            props.item.images && props.item.images[0] ? (
              <img src={props.item.images[0].asset.url} alt="" />
            ) : null}
          </div>
          <div>
            <Themed.h3>{props.item.title}</Themed.h3>
          </div>
          <div>
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
