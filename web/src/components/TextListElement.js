/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";
import { PortableText } from "@portabletext/react";
import { theme } from "../theme/theme.js";

// const headerColor = theme['colors']['headerColor'];
const headerColor = theme["colors"]["primary"];


const textListItemSx = {
  maxWidth: "100%",
  textAlign: "auto",

  a: {

    color : "text",
  
  },


  ".div1, .div2, .div3, .div4, .div5, .div6, .div7, .div8, .blogArticle, .archiveArticle": {
    h2: {
      color: "text",
    },
    h3: {
      color: "headerColor",
    },
    h4: {
      "fontFamily": "Poppins",
    },
    padding: "1em",
  },


  h4: {
    "fontFamily": "Poppins",
    "color": "text",

  },

  h3: {
     "color": headerColor,
  },
  

  ".textPreview": {
    br: {
      display: "none",
    },

    p: {
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      color: "text",
      display: "-webkit-box",
      WebkitLineClamp: "5",
    }
  },

   padding: "0em",

  
};


const textListItemSx_home = {
  // a {
  //   color : headerColor,  
  // },
   // padding: "1em",


   h3: {
    "color": headerColor,
    },

    h4: {
      "fontFamily": "Poppins",
      "color": "text",
    },


   ".textPreview": {
    br: {
      display: "none",
    },

    p: {
      // overflow: "hidden",
      // WebkitBoxOrient: "vertical",
      color: "text",
      // display: "-webkit-box",
      // WebkitLineClamp: "5",
    }
  },


  // padding: "2em",

};

const padding = {
  padding: "2em",

};

const no_padding = {
  padding: "0em",

};

// // `components` object passed to PortableText
const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
  },
};


export default function TextListItem(props) {
  // console.log(props.home);
  return (
    <div css={props.home ? textListItemSx_home : textListItemSx}>
      <div css={props.padding ? padding : no_padding}> 
    {/* <div> */}
      <Link to={"/" + props.item.slug.current} key={props.item.slug.current}>
        <div className="listItem">   

      <Themed.h3 color={headerColor}>
        {!props.home 
        ?  props.item.issue.title  
        : <i><a style={{ color: headerColor }} href={"sections/" + props.item.sections[0].slug.current}>{props.item.sections[0].title + " "}</a>     
         •  <a style={{ color: headerColor }} href={"issues/" + props.item.issue.slug.current}>{" " + props.item.issue.title}</a></i>
        }
      </Themed.h3>

      <Themed.h2><a href={props.item.slug.current}>{props.item.title}</a></Themed.h2>
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
    </div>
  );
}
