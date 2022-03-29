/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import TextContentList from "../components/TextContentList.js";
import ImageContentGrid from "../components/ImageContentGrid.js";
import sanityClient from "../client.js";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";

const sectionSx = {
  margin: "2em 5% 2em 0 ",
  ".header": {
    marginLeft: "20px",
    display: "flex",
    ".headerImgWrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 0.5em",
    },
    ".headerLeft": {
      paddingRight: "3em",
      borderBottom: "1px solid #000",
    },
    ".headerRight": {
      borderBottom: "1px solid #000",
      flexGrow: 1,
    },
    img: { height: "0.4em" },
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    marginTop: "2em",
    ".mainContent": {
      flexGrow: 1,
    },
  },
  ".verticalLines": {
    width: "20px",
    marginRight: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",

    ".topVL": {
      borderRight: "1px solid #000",
      width: "20px",
      height: "250px",
      h5: {
        lineHeight: 1,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "rotate(180deg)",
      },
    },
    ".bottomVL": {
      borderRight: "1px solid #000",
      width: "20px",
      flexGrow: 1,
    },
  },
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
};

// TODO: paginate
const sectionToQuery = (section) =>
  section !== "Art"
    ? `*[_type == "contentItem" && "${section}" in sections[]->title]  | order(publishedAt desc) {
        title,
        authors[]->{name},
        issue->{title},
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }[0...25]`
    : `*[_type == "contentItem" && "${section}" in sections[]->title]  | order(publishedAt desc) {
      title,
      authors[]->{name},
      issue->{title},
      slug,
      mainImage{
        asset->{
        _id,
        url
      }
    },
    images[]{asset->{_id, url}}
}[0...10]`;

export default function Section(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(sectionToQuery(props.section))
      .then((data) => setItems(data))
      .catch(console.error);
  }, [props.section]);

  return (
    <div sx={sectionSx}>
      <div className="header">
        {
          //TODO: these should link, also pull this stuff out
        }
        <div className="headerLeft">
          <Themed.h5 sx={{ margin: "0.5em" }}>Sections</Themed.h5>
        </div>
        <div className="headerImgWrapper">
          <img src={rightArrow} alt="right-arrow" />
        </div>
        <div className="headerRight">
          <Themed.h5 sx={{ margin: "0.5em" }}>{props.section}</Themed.h5>
        </div>
      </div>
      <div className="horizontalContainer">
        <div className="verticalLines">
          <div className="topVL">
            <Themed.h5>MAGAZINE</Themed.h5>
          </div>
          <div className="bottomVL"></div>
        </div>
        <div className="mainContent">
          <div className="sectionHeader">
            <Themed.h2>{props.section}</Themed.h2>
            <img src={rightArrow} alt="right-arrow" />
          </div>
          {props.section !== "Art" ? (
            <TextContentList items={items} />
          ) : (
            <ImageContentGrid items={items} />
          )}
        </div>
      </div>
    </div>
  );
}
