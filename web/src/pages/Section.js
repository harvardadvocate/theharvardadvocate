/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import TextContentList from "../components/TextContentList.js";
import ImageContentGrid from "../components/ImageContentGrid.js";
import sanityClient from "../client.js";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";
import { useParams, Link } from "react-router-dom";
import Frame from "../components/Frame";
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
        <TextContentList items={items} />
      </Frame>
    </div>
  );
}
