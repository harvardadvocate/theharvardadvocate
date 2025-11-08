/** @jsxImportSource theme-ui */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import TextContentList from "../../src/components/TextContentList.js";
import ImageContentGrid from "../../src/components/ImageContentGrid.js";
import sanityClient from "../../lib/sanity.js";
import { Themed } from "theme-ui";
import rightArrow from "../../src/assets/images/right-arrow.svg";
import SectionFrame from "../../src/components/SectionFrame";
import ColorRingLoader from "../../src/components/LoadingRing.js";

const sectionsOverviewSx = {
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    marginBottom: "1vh",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  ".sectionContainer": {
    paddingBottom: "2em",
    paddingInline: "2vw",
  },
  ".searchBarContainer": {
    margin: "10px auto",
    // marginLeft: "5.8em",
    // marginRight: "5.8em",
    verticalAlign: "middle",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    marginTop: "0em",
    ".mainContent": {
      flexGrow: 1,
    },
  },
};


const sectionToQuery = (section) =>
  section !== "Art"
    ? `*[_type == "contentItem" && "${section}" in sections[]->title]  | order(publishedAt desc) {
        title,
        authors[]->{name, slug},
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
  }[0...3]`
    : `*[_type == "contentItem" && "${section}" in sections[]->title]  | order(publishedAt desc) {
        title,
        authors[]->{name, slug},
        issue->{title,slug},
        slug,
        sections[]->{title,slug},
        mainImage{
            asset->{
            _id,
            url
        }
        },
        images[]{asset->{_id, url}}
      }[0...3]`;

const sectionToUrl = (section) => {
  const sectionMap = {
    Art: "/sections/art",
    Fiction: "/sections/fiction",
    Features: "/sections/features",
    Poetry: "/sections/poetry",
  };
  return sectionMap[section];
};

export async function getStaticProps() {
  const data = await sanityClient.fetch(
    `{
      "artItems": ${sectionToQuery("Art")},
      "fictionItems": ${sectionToQuery("Fiction")},
      "featuresItems": ${sectionToQuery("Features")},
      "poetryItems": ${sectionToQuery("Poetry")}
    }`
  );

  return {
    props: {
      artItems: data.artItems,
      fictionItems: data.fictionItems,
      featuresItems: data.featuresItems,
      poetryItems: data.poetryItems,
    },
    revalidate: 3600,
  };
}

export default function SectionsOverview({ artItems, fictionItems, featuresItems, poetryItems }) {

  const sectionHeader = (section) => (
    <div className="sectionHeader">
      <Link href={sectionToUrl(section)}>
        <Themed.h2>{section}</Themed.h2>
        <img src={rightArrow} alt="right-arrow" />
      </Link>
    </div>
  );

  if (!artItems || !fictionItems || !featuresItems || !poetryItems)
    return <ColorRingLoader />;

  return (
    <div sx={sectionsOverviewSx}>
      <Head>
        <title>Sections - The Harvard Advocate</title>
      </Head>


<SectionFrame
        path={[
          {
            name: "Sections",
          },
        ]}
      >

 <div className="sectionContainer">
          {sectionHeader("Art")}
          <ImageContentGrid items={artItems} home={false} noLastBorder={true} />
        </div>
        <div className="sectionContainer">
          {sectionHeader("Fiction")}
          <TextContentList items={fictionItems} noLastBorder={true} />
        </div>
        <div className="sectionContainer">
          {sectionHeader("Features")}
          <TextContentList items={featuresItems} noLastBorder={true} />
        </div>
        <div className="sectionContainer">
          {sectionHeader("Poetry")}
          <TextContentList items={poetryItems} noLastBorder={true} />
        </div>
      </SectionFrame>
    </div>



  );
}
