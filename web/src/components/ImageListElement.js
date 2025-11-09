/** @jsxImportSource theme-ui */
import React from "react";
import Link from "next/link";
import { theme } from "../theme/theme.js";
import { optimizeImageLoading } from "../utils/image.js";

const headerColor = theme["colors"]["primary"];

const imageListElementSx = {
  ".fontMod": {
    fontFamily: "Bernhard Gothic Medium, serif",
  },
  maxWidth: "100%",
  padding: "1em",
  a: {
    color: "text",
    textDecoration: "none",
  },
  ".listItemImage img": {
    width: "100%",
  },
  ".listItem": {
    display: "flex",
    flexDirection: "column",
    gap: "0.1em",
    textAlign: "center",
    alignItems: "center",
  },
  h4: {
    fontFamily: "Poppins",
    fontSize: "0.7em",
    color: headerColor,
  },
  ".authorName": {
    p: {
      fontFamily: "Poppins!important",
      fontSize: "medium",
    },
  },

  "@media (max-width: 835px)": {
    padding: "1em",
  },
};

const imageListElementSx_home = {
  ".fontMod": {
    fontFamily: "Bernhard Gothic Medium, serif",
  },
  padding: "1em",
  maxWidth: "100%",
  a: {
    color: "text",
    textDecoration: "none",
  },
  ".listItemImage img": {
    width: "100%",
  },
  ".listItem": {
    display: "flex",
    flexDirection: "column",
  },
  h4: {
    fontFamily: "Poppins",
    fontSize: "0.8em",
  },
  ".authorName": {
    p: {
      fontFamily: "Poppins!important",
      fontSize: "medium",
    },
  },
  "@media (max-width: 835px)": {
    padding: "1em",
  },
};

export default function ImageListElement(props) {
  return (
    <div sx={props.home ? imageListElementSx_home : imageListElementSx}>
      <Link
        href={"/content/" + props.item.slug.current}
        key={props.item.slug.current}
      >
        <div className="listItem">
          <div className="listItemImage">
            {props.item.mainImage ? (
              <img
                src={optimizeImageLoading(props.item.mainImage.asset.url)}
                loading="lazy"
                alt={props.item.title}
              />
            ) : // TODO: better (more robust) check for this
            props.item.images && props.item.images[0] ? (
              <img
                src={optimizeImageLoading(props.item.images[0].asset.url)}
                loading="lazy"
                alt={props.item.title}
              />
            ) : null}
          </div>
          <div>
            <h3 sx={{ variant: "styles.h3" }} style={{ color: headerColor }}>
              {props.home && (
                <React.Fragment>
                  {" "}
                  <i>Art •</i>
                </React.Fragment>
              )}

              <i> {props.item.issue.title}</i>
              <div className="fontMod">

              </div>
            </h3>
            <h2 sx={{ variant: "styles.h2" }}><div className="fontMod">{props.item.title}</div></h2>
          </div>
          <div>
            {"authors" in props.item &&
              (props.hideAuthor ? (
                ""
              ) : (
                <div className="authorName">
                  <p sx={{ variant: "styles.p" }}>
                    By{" "}
                    {
                      //TODO: link to author page
                    }
                    {props.item.authors.map(({ name }) => name).join(", ")}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
