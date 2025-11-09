/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import TextContentList from "../../src/components/TextContentList.js";
import sanityClient from "../../lib/sanity.js";
import SectionFrame from "../../src/components/SectionFrame";
import ColorRingLoader from "../../src/components/LoadingRing.js";
import ImageContentGrid from "../../src/components/ImageContentGrid.js";

const sectionSx = {
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
};

const virtualStyle = {
  position: "absolute",
  height: "200px",
  top: "-200px",
  width: "100%",
  pointerEvent: "none",
};

const sectionToQuery = (section, start, end) =>
  `*[_type == "contentItem" && "${section}" in sections[]->title]  | order(publishedAt desc) {
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
        },
        images[]{asset->{_id, url}}
    }[${start}...${end}]`;

export default function Section({ initialItems, sectionTitle, sectionSlug }) {
  const [items, setItems] = useState(initialItems);

  const loadItems = (num) => {
    var currentPost = 0;
    if (items) {
      currentPost = items.length;
    }
    sanityClient
      .fetch(sectionToQuery(sectionTitle, currentPost, currentPost + num)) // query section
      .then((data) => setItems([...items, ...data]))
      .catch(console.error);
  };

  useEffect(() => {
    // Check if we're in the browser and IntersectionObserver is available
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio === 0) return;
        loadItems(9);
      });

      const currentElement = document.querySelector(".more");
      if (currentElement) {
        intersectionObserver.observe(currentElement);
      }
      return () => {
        if (currentElement) {
          intersectionObserver.unobserve(currentElement);
        }
      };
    }
  });

  if (!items) {
    return <ColorRingLoader />;
  }

  return (
    <div sx={sectionSx}>
      <Head>
        <title>{sectionTitle}</title>
      </Head>

      <SectionFrame
        path={[
          {
            name: sectionTitle,
            slug: "/sections/{section}",
          },
        ]}
      >



        {sectionSlug === "art" ? (
          <ImageContentGrid items={items} />
        ) : (

          <TextContentList
            items={items}
            home={false}
            border={true}
          ></TextContentList>

        )}
      </SectionFrame>
      <div className="more">
        <p style={virtualStyle}></p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = await sanityClient.fetch(
    `*[_type == "section"].slug.current`
  );

  const paths = slugs.map((sectionSlug) => ({
    params: { sectionSlug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const sectionData = await sanityClient.fetch(
    `*[_type == "section" && slug.current == $sectionSlug][0]`,
    { sectionSlug: params.sectionSlug }
  );

  if (!sectionData) {
    return { notFound: true };
  }

  const items = await sanityClient.fetch(
    sectionToQuery(sectionData.title, 0, 24)
  );

  return {
    props: {
      initialItems: items,
      sectionTitle: sectionData.title,
      sectionSlug: params.sectionSlug,
    },
    revalidate: 3600,
  };
}
