/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import TextContentList from "../components/TextContentList.js";
import ImageContentGrid from "../components/ImageContentGrid.js";
import sanityClient from "../client.js";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";
import { useParams, Link } from "react-router-dom";
import Frame from "../components/Frame";
const sectionsOverviewSx = {
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  ".sectionContainer": {
    paddingBottom: "2em",
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
    }[0...4]`
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
        }[0...4]`;

const sectionToUrl = (section) => {
  const sectionMap = {
    Art: "/sections/art",
    Fiction: "/sections/fiction",
    Features: "/sections/features",
    Poetry: "/sections/poetry",
  };
  return sectionMap[section];
};

export default function SectionsOverview(props) {
  const [artItems, setArtItems] = useState(null);
  const [fictionItems, setFictionItems] = useState(null);
  const [featuresItems, setFeaturesItems] = useState(null);
  const [poetryItems, setPoetryItems] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(sectionToQuery("Art"))
      .then((data) => setArtItems(data))
      .catch(console.error);
    sanityClient
      .fetch(sectionToQuery("Fiction"))
      .then((data) => setFictionItems(data))
      .catch(console.error);
    sanityClient
      .fetch(sectionToQuery("Features"))
      .then((data) => setFeaturesItems(data))
      .catch(console.error);
    sanityClient
      .fetch(sectionToQuery("Poetry"))
      .then((data) => setPoetryItems(data))
      .catch(console.error);
  });

  const sectionHeader = (section) => (
    <div className="sectionHeader">
      <Link to={sectionToUrl(section)}>
        <Themed.h2>{section}</Themed.h2>
        <img src={rightArrow} alt="right-arrow" />
      </Link>
    </div>
  );

  if (!artItems || !fictionItems || !featuresItems || !poetryItems)
    return <div>Loading...</div>;

  return (
    <div sx={sectionsOverviewSx}>
      <Frame
        path={[
          {
            name: "Sections",
          },
        ]}
      >
        <div className="sectionContainer">
          {sectionHeader("Art")}
          <ImageContentGrid items={artItems} />
        </div>
        <div className="sectionContainer">
          {sectionHeader("Fiction")}
          <TextContentList items={fictionItems} />
        </div>
        <div className="sectionContainer">
          {sectionHeader("Features")}
          <TextContentList items={featuresItems} />
        </div>
        <div className="sectionContainer">
          {sectionHeader("Poetry")}
          <TextContentList items={poetryItems} />
        </div>
      </Frame>
    </div>
  );
}
