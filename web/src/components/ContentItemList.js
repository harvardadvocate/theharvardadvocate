/** @jsxImportSource theme-ui */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

const contentItemListSx = {
  padding: "1em",
  ".listItem": {
    padding: "1em",
    borderBottom: "2px solid #eee",
  },

  ".listItemImage": {
    maxWidth: "300px",
  },
};

export default function ContentItemList(props) {
  return (
    <div sx={contentItemListSx}>
      <div>
        {props.items &&
          props.items.map((item, index) => (
            <Link to={"/" + item.slug.current} key={item.slug.current}>
              <div key={index} className="listItem">
                {item.mainImage && (
                  <img
                    src={item.mainImage.asset.url}
                    alt=""
                    className="listItemImage"
                  />
                )}
                <span>
                  <h2>{item.title}</h2>
                  <h3>{item.author}</h3>
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
