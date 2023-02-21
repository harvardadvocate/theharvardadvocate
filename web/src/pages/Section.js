/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import TextContentList from "../components/TextContentList.js";
import ImageContentGrid from "../components/ImageContentGrid.js";
import sanityClient from "../client.js";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";
import { useParams, Link } from "react-router-dom";
import SectionFrame from "../components/SectionFrame";

const sectionSx = {
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  maxWidth: "100vw",
};

const sectionToQuery = (section, start, end) =>
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
    }[${start}...${end}]`;

export default function Section(props) {
  const [items, setItems] = useState(null);
  const [section, setSection] = useState("");
  const { sectionSlug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "section" && slug.current == $sectionSlug]`, { // fetch section data to get section name
        sectionSlug,
      })
      .then((sectionData) => {
        setSection(sectionData[0].title); // set section name
        sanityClient
          .fetch(sectionToQuery(sectionData[0].title, 0, 24)) // query section
          .then((data) => setItems(data))
          .catch(console.error);
      })
      .catch(console.error);
  }, [sectionSlug]);

  if (!items) return <div>Loading...</div>;

  return (
    <div sx={sectionSx}>
      <SectionFrame
        path={[
          {
            name: section,
            slug: "/sections/{section}",
          },
        ]}
      >
        <TextContentList items={items} />
      </SectionFrame>
    </div>
  );
}
