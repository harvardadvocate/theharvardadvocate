/** @jsxImportSource theme-ui */
import React from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";
import { PortableText } from "@portabletext/react";
import { theme } from "../theme/theme.js";

const headerColor = theme["colors"]["primary"];

const textListItemSx = {
  maxWidth: "-webkit-fill-available",
  textAlign: "auto",
  a: {
    color: "text",
  },
  ".div1, .div2, .div3, .div4, .div5, .div6, .div7, .div8, .blogArticle, .archiveArticle":
    {
      h2: {
        color: "text",
      },
      h3: {
        color: "headerColor",
      },
      h4: {
        fontFamily: "Poppins",
      },
      padding: "1em",
    },
  h4: {
    fontFamily: "Poppins",
    color: "text",
  },

  h3: {
    color: headerColor,
  },

  ".textPreview": {
    br: {
      display: "none",
    },

    p: {
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      color: "text",
      WebkitLineClamp: "3",
    },
  },

  padding: "0em",

  ".authorName": {
    p: {
      fontFamily: "Poppins!important",
      fontSize: "medium",
    },
  },
};

// custom css for textlistelement on homepage

const textListItemSx_home = {
  maxWidth: "-webkit-fill-available",
  textAlign: "auto",
  h3: {
    color: headerColor,
  },

  h4: {
    fontFamily: "Poppins",
    color: "text",
  },
  ".textPreview": {
    br: {
      display: "none",
    },

    p: {
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      color: "text",
      WebkitLineClamp: "3",
    },
  },

  p: {
    color: "text",
  },

  ".authorName": {
    p: {
      fontFamily: "Poppins!important",
      fontSize: "medium",
    },
  },
};

// custom css: padding is default, no_padding is for mixedgrid

const padding = {
  padding: "2em",
  "@media (max-width: 835px)": {
    padding: "1em",
  },
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
  return (
    <div css={props.home ? textListItemSx_home : textListItemSx}>
      <div css={props.padding ? padding : no_padding}>
        <Link
          to={"/content/" + props.item.slug.current}
          key={props.item.slug.current}
        >
          <div className="listItem">
            <Themed.h3 color={headerColor}>
              {!props.home ? (


                <i>

{props.item.sections[0].title === 'Blog' ? <a></a> :

<a
                    style={{ color: headerColor }}
                    href={"/issues/" + props.item.issue.slug.current}
                  >
                    {" " + props.item.issue.title}
                  </a>


}

                  
                </i>
              ) : (
                <i>
                  <a
                    style={{ color: headerColor }}
                    href={"/sections/" + props.item.sections[0].slug.current}
                  >
                    {props.item.sections[0].title + " "}
                  </a>
                  •{" "}
                  <a
                    style={{ color: headerColor }}
                    href={"/issues/" + props.item.issue.slug.current}
                  >
                    {" " + props.item.issue.title}
                  </a>
                </i>
              )}
            </Themed.h3>

            <Themed.h2>
              <a href={"/content/" + props.item.slug.current}>
                {props.item.title}
              </a>
            </Themed.h2>
            <br />
            <Link to={"/content/" + props.item.slug.current}>
              <div className="textPreview">
                {props.item.body && (
                  <PortableText
                    value={props.item.body[0]}
                    hardBreak={false}
                    components={customComponents}
                  />
                )}
              </div>
            </Link>
            <br />
            {props.hideAuthor ? (
              ""
            ) : (
              <div className="authorName">
                <Themed.p>
                  By{" "}
                  {props.item.authors.map((author, i) => (
                    <>
                      {i !== 0 && ", "}
                      <Link to={"/authors/" + author.slug.current}>
                        {author.name}
                      </Link>
                    </>
                  ))}
                </Themed.p>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
