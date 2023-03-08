/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { PortableText } from "@portabletext/react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import TextListElement from "../components/TextListElement.js";
import TextContentList from "../components/TextContentList.js";

import { theme } from "../theme/theme";

const mainColor = theme["colors"]["primary"];
const headerColor = theme["colors"]["headerColor"];

const gridSx = {
  hr: {
    border: "0.1px solid rgba(0, 0, 0, .2)",
  },
  margin: "0em 0em 0em 0em",

  ".issueItem": {
    cursor: "pointer",
  },
  ".issueCover": {
    height: "max-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
    marginBottom: "8%",
    img: {
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
      maxWidth: "69%",
      maxHeight: "75%",
    },
    a: {
      justifyContent: "center",
      display: "flex",
    }
  },

  ".mainGrid": {
    placeItems: "center",
    display: "grid",
    justifyItems: "start",
  },

  ".featuredArticles": {
    color: "#FFFFFF",
    paddingRight: "2vw",
    paddingTop: "2vh",
    marginTop: "8%",
    marginBottom: "8%",
    h5: {
      fontFamily: "sans-serif",
    },
    hr: {
      border: "0.1px solid white",
    }
  },

  ".fromss": {
    gridColumn: "-1 / 2",
    gridRow: "1",
    width: "10vw",
    zIndex: "0",
    padding: "1em",
    zIndex: "1",
    position: "relative",
  },

  ".readFullIssue": {
    color: "#FFFFFF",
    span: {
      border: "2px solid #FFFFFF",
      borderRadius: "5px",
      paddingInline: "10px",
      color: mainColor,
      backgroundColor: "#FFFFFF",
      float: "left"
    },
    h6: {
      marginLeft: "3em",
      border: "4px solid " + mainColor,
      paddingInline: "10px",
      borderRadius: "5px",
      fontFamily: "sans-serif"
    },
  },

  ".articleLink": {
    color: "#FFFFFF",
  },
  ".topArticles": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr repeat(2, 0.5fr)",
    gridColumnGap: "0px",
    gridRowGap: "0px",
  },

  ".textPreview1, .textPreview2, .textPreview3, .textPreview4, .textPreview5, .textPreview6, .textPreview": {
    br: {
      display: "none",
    },
    p: {
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
    }
  },

  ".textPreview1, .textPreview2, .textPreview3, .textPreview": {
    p: {
      WebkitLineClamp: "3",
    }
  },

  ".textPreview4": {
    p: {
      WebkitLineClamp: "6",
    }
  },

  ".textPreview5, .textPreview6": {
    p: {
      WebkitLineClamp: "3",
    },
  },

  ".div1": {
    gridArea: "1 / 1 / 2 / 3",
    // borderLeft: "1px solid rgba(0, 0, 0, .2)",
    borderRight: "1px solid rgba(0, 0, 0, .2)",
  },

  ".div2": {
    gridArea: "1 / 2 / 2 / 3",
    // borderLeft: "1px solid rgba(0, 0, 0, .2)",
    borderRight: "1px solid rgba(0, 0, 0, .2)",
  },

  ".div3": {
    gridArea: "1 / 3 / 3 / 4"
  },

  ".div1, .div2, .div3, .div4, .div5, .div6, .div7, .div8, .blogArticle, .archiveArticle": {
    h3: {
      color: "headerColor",
    },
    h4: {
      "fontFamily": "Poppins",
    },
    padding: "1em",
  },

  ".div1, .div2, .div3, .blogArticle": {
    textAlign: "left",
    paddingLeft: "8em",
    paddingRight: "2em",
  },

  ".div4": {
    gridArea: "1 / 1 / 2 / 3",
    // borderTop: "1px solid rgba(0, 0, 0, .2)",
    marginTop: "0em",
    display: "flex",
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
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
    borderLeft: "1px solid rgba(0, 0, 0, .2)",
    height: "min-content",
  },

  ".div7image, .div7content": {
    minWidth: "100%",
  },

  ".div8": {
    gridArea: "3 / 3 / 4 / 4",
    borderLeft: "1px solid rgba(0, 0, 0, .2)",
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
        <TextContentList items={[props.items[0], props.items[1], props.items[2]]} home={props.home}></TextContentList>

    <div className="topArticles">
  <div className="div4">
  <div className="div4image">
    <a href={props.items[3].slug.current}><img src={props.items[3].mainImage.asset.url} alt="Illustration"></img></a>
  </div>
  <div className="div4content">
    <div className="articleHeader">
      <Themed.h3><i><a href={"sections/" + props.items[3].sections[0].slug.current}>{props.items[3].sections[0].title}</a> • <a href={"issues/" + props.items[3].issue.slug.current}>{props.items[3].issue.title}</a></i></Themed.h3>
    </div>
    <a href={props.items[3].slug.current}><Themed.h2>{props.items[3].title}</Themed.h2></a>
    <br/>
    <Link to={props.items[3].slug.current}>
    <div className = "textPreview4">
      {props.items[3].body && (
        <PortableText
          value={props.items[3].body}
          hardBreak={false}
          components={customComponents}
        />
      )}
    </div>
    </Link>
    <br/>
    <Themed.h4>By {props.items[3].authors[0].name}</Themed.h4>
  </div>

</div>

<div className="div5">

<TextListElement item={props.items[4]} home={props.home} padding={false}></TextListElement>
</div>

<div className="div6">
<TextListElement item={props.items[5]} home={props.home} padding={false}></TextListElement>

  {/* <div className="articleHeader">
    <Themed.h3><i><a href={"sections/" + props.items[5].sections[0].slug.current}>{props.items[5].sections[0].title}</a> • <a href={"issues/" + props.items[5].issue.slug.current}>{props.items[5].issue.title}</a></i></Themed.h3>
  </div>

  <a href={props.items[5].slug.current}><Themed.h2>{props.items[5].title}</Themed.h2></a>
  <br/>
  <Link to={props.items[5].slug.current}>
  <div className = "textPreview5">
    {props.items[5].body && (
      <PortableText
        value={props.items[4].body}
        hardBreak={false}
        components={customComponents}
      />
    )}
  </div>
  </Link>
  <br/>
  <Themed.h4>By {props.items[5].authors[0].name}</Themed.h4> */}
</div>


<div className="div7">
  <div className="div7image">
    <a href={props.items[6].slug.current}><img src={props.items[6].mainImage.asset.url} alt="Art image"></img></a>
  </div>
  <div className="div7content">
    <div className="articleHeader">
      <Themed.h3><i><a href={"sections/" + props.items[6].sections[0].slug.current}>{props.items[6].sections[0].title}</a> • <a href={"issues/" + props.items[6].issue.slug.current}>{props.items[6].issue.title}</a></i></Themed.h3>
    </div>
    <a href={props.items[6].slug.current}><Themed.h2>{props.items[6].title}</Themed.h2></a>
    <Themed.h4>By {props.items[6].authors[0].name}</Themed.h4>
  </div>
</div>
<div className="div8">
  <div className="div8image">
    <a href={props.items[7].slug.current}><img src={props.items[7].mainImage.asset.url} alt="Art image"></img></a>
  </div>
  <div className="div8content">
    <div className="articleHeader">
      <Themed.h3><i><a href={"sections/" + props.items[7].sections[0].slug.current}>{props.items[7].sections[0].title}</a> • <a href={"issues/" + props.items[7].issue.slug.current}>{props.items[7].issue.title}</a></i></Themed.h3>
    </div>
    <a href={props.items[7].slug.current}><Themed.h2>{props.items[7].title}</Themed.h2></a>
    <Themed.h4>By {props.items[7].authors[0].name}</Themed.h4>
  </div>

</div>
</div>
</div>

    );
}