/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import TextContentList from "../components/TextContentList.js";
import ImageContentGrid from "../components/ImageContentGrid.js";
import sanityClient from "../client.js";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";
import { useParams, Link } from "react-router-dom";
import Frame from "../components/Frame";
import MixedGrid from "../components/MixedGrid";
const sectionSx = {
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  maxWidth: "100vw",
};

// TODO: paginate
const sectionToQuery = (section) =>
    `*[_type == "contentItem" && "${section}" in sections[]->title]  | order(publishedAt desc) {
        title,
        authors[]->{name},
        issue->{title,slug},
        sections[]->{title,slug},
        slug,
        body,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }[0...24]`;

export default function Section(props) {
  const [items, setItems] = useState(null);
  const [section, setSection] = useState("");
  const { sectionSlug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "section" && slug.current == $sectionSlug]`, {
        sectionSlug,
      })
      .then((sectionData) => {
        setSection(sectionData[0].title);
        sanityClient
          .fetch(sectionToQuery(sectionData[0].title))
          .then((data) => setItems(data))
          .catch(console.error);
      })
      .catch(console.error);


  }, [sectionSlug]);

  if (!items) return <div>Loading...</div>;


  const result = Object.values(items);
  console.log("this is my result");
  console.log(items[0]);
  console.log(items[1]);
  console.log(items[2]);
  console.log(items[3]);
  console.log(items[4]);
  console.log(items[5]);
  console.log(items[6]);
  console.log(items[7]);
  console.log(items[8]);


  return (
    <div sx={sectionSx}>
      <Frame
        path={[
          {
            name: section,
            slug: "/sections/{section}",
          },
        ]}
      >
{/* 
      <MixedGrid home={false} items={[items[0], items[1], items[2],
      items[3], items[4], items[5], items[6], items[7], items[8]]}></MixedGrid> */}
        <TextContentList items={items} />
      </Frame>
    </div>
  );
}
