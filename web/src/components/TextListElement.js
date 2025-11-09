/** @jsxImportSource theme-ui */
import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { theme } from "../theme/theme.js";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity.js";
import { extractPreviewBlocks } from "../../lib/utils/extractPreviewBlocks.js";

const headerColor = theme["colors"]["primary"];

const textListItemSx = {
  ".fontMod": {
    fontFamily: "Bernhard Gothic Medium, serif",
    
  },
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
        fontFamily: "Poppins",
        fontSize: "30px",
        size: "30px",

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
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    p: {
      color: "text",
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
  ".fontMod": {
    fontFamily: "Bernhard Gothic Medium, serif",
  },
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
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    p: {
      color: "text",
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

// Setup for handling images from Sanity
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// // `components` object passed to PortableText
const customComponents = {
  block: {
    normal: ({ children }) => <p sx={{ variant: "styles.p" }}>{children}</p>,
    code: ({ children }) => <p sx={{ variant: "styles.p", lineHeight: 0.75 }}>{children}</p>,
  },
  marks: {
    center: ({ children }) => <div className="centerText">{children}</div>,
    sub: ({ children }) => <sub>{children}</sub>,
  },
  types: {
    image: ({ value }) => <img src={urlFor(value).url()} alt={value.alt || "Content image"} />,
  },
};

export default function TextListItem(props) {
  return (
    <div css={props.home ? textListItemSx_home : textListItemSx}>
      <div css={props.padding ? padding : no_padding}>

        <div className="listItem" key={props.item.slug.current}>
          <h3 sx={{ variant: "styles.h3" }} color={headerColor}>
          {!props.home ? (
              <i>
                {props.item.sections[0].title === "Notes" ? (
                  <Link href="/sections/notes">
                    <span style={{ color: headerColor }}>Notes</span>
                  </Link>
                ) : (
                  <Link href={"/issues/" + props.item.issue.slug.current}>
                    <span style={{ color: headerColor }}>{" " + props.item.issue.title}</span>
                  </Link>
                )}
              </i>
            ) : (
              <i>
                <Link href={"/sections/" + props.item.sections[0].slug.current}>
                  <span style={{ color: headerColor }}>
                    {props.item.sections[0].title === "Notes" ? "Notes from 21 South Street" : props.item.sections[0].title}{" "}
                  </span>
                </Link>
                •{" "}
                <Link href={"/issues/" + props.item.issue.slug.current}>
                  <span style={{ color: headerColor }}>{" " + props.item.issue.title}</span>
                </Link>
              </i>
            )}
            </h3>
            <h2 sx={{ variant: "styles.h2" }}>
              <div className="fontMod">
                <Link href={"/content/" + props.item.slug.current}>
                  {props.item.title}
                </Link>
              </div>

            </h2>
            <br />
            <Link href={"/content/" + props.item.slug.current}>
              <div className="textPreview">
                {props.item.body && props.item.body.length > 0 && (
                  <PortableText
                    value={extractPreviewBlocks(props.item.body)}
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
                <p sx={{ variant: "styles.p" }}>
                  By{" "}
                  {props.item.authors.map((author, i) => (
                    <span key={author._id || author.slug?.current || i}>
                      {i !== 0 && ", "}
                      <Link href={"/authors/" + author.slug.current}>
                        {author.name}
                      </Link>
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
      </div>
    </div>
  );
}
