/** @jsxImportSource theme-ui */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import ContentItemList from "../components/ContentItemList.js";
import sanityClient from "../client.js";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";

const sectionSx = {
  margin: "2em 5%",
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
};
export default function Section(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contentItem" && "${props.section}" in sections[]->title]  | order(publishedAt desc) {
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
    }`
      )
      .then((data) => setItems(data))
      .catch(console.error);
  }, [props.section]);

  return (
    <div sx={sectionSx}>
      <div className="sectionHeader">
        <Themed.h2>{props.section}</Themed.h2>
        <img src={rightArrow} alt="right-arrow" />
      </div>
      <ContentItemList items={items} />
    </div>
  );
}
