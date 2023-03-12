/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { PortableText } from "@portabletext/react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import TextListElement from "../components/TextListElement.js";
import TextContentList from "../components/TextContentList.js";
import ImageListElement from "../components/ImageListElement.js";
import { theme } from "../theme/theme";


// MixedGrid: takes 8 items in as props, sorts them as irregular grid
// indices: 0-2 text, 3 text+art, 4-5 text, 6-7 art

const mainColor = theme["colors"]["primary"];
const headerColor = theme["colors"]["headerColor"];

const gridSx = {
  hr: {
    border: "0.1px solid rgba(0, 0, 0, .2)",
  },
  margin: "0em 0em 0em 0em",


  ".mainGrid": {
    placeItems: "center",
    display: "grid",
    justifyItems: "start",
  },

  ".topArticles": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr repeat(2, 0.5fr)",
    gridColumnGap: "0px",
    gridRowGap: "0px",
  },


  ".div4, .div5, .div6, .div7, .div8, .blogArticle, .archiveArticle": {
    h3: {
      color: "headerColor",
    },
    h4: {
      "fontFamily": "Poppins",
    },
    padding: "1em",
  },
  
  ".div4": {
    gridArea: "1 / 1 / 2 / 3",
    borderTop: "0px solid rgba(0, 0, 0, .2)",
    marginTop: "0em",
    display: "flex",
    // borderBottom: "1px solid rgba(0, 0, 0, .2)",
    alignItems: "center",
  },

  ".div4image": {
    display: "inline-block",
    verticalAlign: "middle",
    minWidth: "50%",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    display: "flex",
  },

  ".div4content": {
    display: "inline-block",
    verticalAlign: "middle",
  },


  ".div5": {
    gridArea: "2 / 1  / 3 / 3",
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    paddingBottom: "1em",

  },

  ".div6": {
    gridArea: "3 / 1 / 4 / 3",
  },

  ".div7": {
    gridArea: "1 / 3 / 3 / 4",
    display: "flex",
    flexDirection: "column",
    marginTop: "0em",
    alignItems: "left",
    marginLeft: "1em",
    borderLeft: "0px solid rgba(0, 0, 0, .2)",
    height: "min-content",
  },

  ".div7image, .div7content": {
    minWidth: "100%",
  },

  ".div8": {
    gridArea: "3 / 3 / 4 / 4",
    borderLeft: "0px solid rgba(0, 0, 0, .2)",
    marginLeft: "1em",
  },

  ".div8image, .div8content": {
    minWidth: "100%",
  },

  "@media (max-width: 767px)": {
    ".featuredGrid": {
      display: "none",
      height: "0",
    },
    "hr": {
      display: "none",
    },
    ".mainGrid": {
      gridTemplateColumns: "1fr",
      placeItems: "unset"
    },
    ".issueTitle": {
      textAlign: "center",
    },
    ".readFullIssue": {
      textAlign: "center",
      span: {
        display: "none",
      },
      h6: {
        marginLeft: "0em",
        textDecoration: "underline",
      },
    },
  },
};

// // `components` object passed to PortableText
const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
  },
};

export default function MixedGrid (props) {


  console.log(props.home);
  console.log("mixedgrid props")
    return (
    <div css={gridSx}>

      {/* first three text articles */}
      <TextContentList items={[props.items[0], props.items[1], props.items[2]]} border={true} home={props.home}></TextContentList>

      <div className="topArticles">
        {/* text article + accompanying art */}
        <div className="div4">
          <div className="div4image">
            <a href={props.items[3].slug.current}><img src={props.items[3].mainImage.asset.url} alt="Illustration"></img></a>
          </div>
          <div className="div4content">
            <TextListElement item={props.items[3]} home={true}></TextListElement>
          </div>
        </div>

        {/* two text articles */}

        <div className="div5">
          <TextListElement item={props.items[4]} home={props.home} padding={false}></TextListElement>
        </div>

        <div className="div6">
          <TextListElement item={props.items[5]} home={props.home} padding={false}></TextListElement>
        </div>

        {/* two art articles */}

        <div className="div7">
          <ImageListElement item={props.items[6]} home={true}></ImageListElement>
        </div>


        <div className="div8">
          <ImageListElement item={props.items[7]} home={true}></ImageListElement>
        </div>

      </div>
    </div>
    );
  }