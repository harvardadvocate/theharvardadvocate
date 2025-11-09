/** @jsxImportSource theme-ui */
import React, { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";
import TextContentList from "../../src/components/TextContentList.js";
import SectionFrame from "../../src/components/SectionFrame";
import ColorRingLoader from "../../src/components/LoadingRing.js";
import ImageContentGrid from "../../src/components/ImageContentGrid.js";
import sanityClient from "../../lib/sanity.js";

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
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadTriggerRef = useRef(null);

  // Reset state when section changes
  useEffect(() => {
    setItems(initialItems);
    setHasMore(true);
    setIsLoading(false);
  }, [sectionSlug, initialItems]);

  const loadItems = (num) => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const currentPost = items ? items.length : 0;

    fetch(
      `/api/sections/items?sectionTitle=${encodeURIComponent(
        sectionTitle
      )}&start=${currentPost}&end=${currentPost + num}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setHasMore(false);
        } else {
          setItems([...items, ...data]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // Check if we're in the browser and IntersectionObserver is available
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && loadTriggerRef.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isLoading && hasMore) {
            loadItems(42);
          }
        },
        { rootMargin: '200px' }
      );

      const currentElement = loadTriggerRef.current;
      intersectionObserver.observe(currentElement);

      return () => {
        intersectionObserver.unobserve(currentElement);
      };
    }
  }, [items, isLoading, hasMore]);

  if (!items) {
    return <ColorRingLoader />;
  }

  const sectionUrl = `https://theharvardadvocate.com/sections/${sectionSlug}`;
  const sectionDescriptions = {
    'art': 'Visual art featured in The Harvard Advocate - paintings, illustrations, photography, and digital art.',
    'fiction': 'Original short stories and fiction pieces from The Harvard Advocate.',
    'features': 'In-depth articles, essays, and features from The Harvard Advocate.',
    'poetry': 'Poetry and verse published by The Harvard Advocate.',
    'notes': 'Notes from 21 South Street - fresh online pieces we experiment with outside of our print cycle.',
  };
  const description = sectionDescriptions[sectionSlug.toLowerCase()] ||
    `${sectionTitle} section of The Harvard Advocate, America's oldest continuously published college literary magazine.`;

  return (
    <div sx={sectionSx}>
      <NextSeo
        title={sectionTitle}
        description={description}
        canonical={sectionUrl}
        openGraph={{
          type: 'website',
          url: sectionUrl,
          title: `${sectionTitle} - The Harvard Advocate`,
          description: description,
        }}
      />

      <SectionFrame
        path={[
          {
            name: sectionTitle,
            slug: "/sections/{section}",
          },
        ]}
      >
        <h1 sx={{ variant: "styles.h1" }} style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          {sectionTitle} - The Harvard Advocate
        </h1>



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
      {hasMore && (
        <div ref={loadTriggerRef} className="more">
          <p style={virtualStyle}></p>
        </div>
      )}
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
    sectionToQuery(sectionData.title, 0, 99)
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
