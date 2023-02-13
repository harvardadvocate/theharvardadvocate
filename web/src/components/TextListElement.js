/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";
import { PortableText } from "@portabletext/react";

const textListItemSx = {
  textAlign: "center",
  a: {
    color: "text",
    textDecoration: "none",
  },
  h4: {
    "fontFamily": "Poppins",
    "fontSize": "0.7em",
    color: "#d34c21",

  },


  ".textPreview": {

    br: {
      display: "none",
    },
    p: {
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      WebkitLineClamp: "3",
    }
  },

  padding: "1em",

};


// // `components` object passed to PortableText
const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
  },
};


export default function TextListItem(props) {
  console.log(props);
  return (
    <div sx={textListItemSx}>
      <Link to={"/" + props.item.slug.current} key={props.item.slug.current}>
        <div className="listItem">
          <a href={props.item.slug.current}><Themed.h2>{props.item.title}</Themed.h2></a>
          <br/>
          <Link to={"/" + props.item.slug.current}>
            <div className = "textPreview">
              {props.item.body && (
                <PortableText
                  value={props.item.body[0]}
                  hardBreak={false}
                  components={customComponents}
                />
              )}
            </div>
          </Link>
          <br/>
          <Themed.h4>By {props.item.authors[0].name}</Themed.h4>
        </div>
      </Link>
    </div>
  );
}
