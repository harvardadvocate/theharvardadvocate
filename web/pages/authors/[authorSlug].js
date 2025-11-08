/** @jsxImportSource theme-ui */
import Head from "next/head";
import { Themed } from "theme-ui";
import Link from "next/link";
import Frame from "../../src/components/Frame";
import rightArrow from "../../src/assets/images/right-arrow.svg";
import sanityClient from "../../lib/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import { unionBy } from "lodash";
import TextContentList from "../../src/components/TextContentList.js";
import ImageContentGrid from "../../src/components/ImageContentGrid.js";
import ColorRingLoader from "../../src/components/LoadingRing.js";

const authorSx = {
  ".authorHeader": {
    marginBottom: "0.5em",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
};

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Author({ authorData, authoredItems, sections }) {
  if (!authorData) return <ColorRingLoader />;

  return (
    <div sx={authorSx}>
      <Head>
        <title>{authorData.name}</title>
      </Head>

      <Frame
        path={[
          {
            name: authorData.name,
          },
          {
            name: authorData.name,
            slug: authorData.slug,
          },
        ]}
      >
        <div className="authorBio">
          {authorData.image && (
            <img src={urlFor(authorData.image).width(200).url()} alt="" />
          )}
          <Themed.p>{authorData.bio}</Themed.p>
        </div>
        {sections &&
          sections.map((section) => {
            const sectionItems = authoredItems.filter(
              (i) => i.sections[0].title === section.title
            );
            return (
              <div key={section.title}>
                <div className="sectionHeader">
                  <Link href={"/sections/" + section.slug.current}>
                    <Themed.h2> {section.title} </Themed.h2>
                  </Link>
                  <img src={rightArrow} alt="right-arrow" />
                </div>
                {section.title !== "Art" ? (
                  <TextContentList
                    items={sectionItems}
                    vertical={true}
                    border={true}
                    home={false}
                    hideAuthor={true}
                    padding={false}
                  />
                ) : (
                  <ImageContentGrid
                    items={sectionItems}
                    vertical={true}
                    border={true}
                    home={false}
                    hideAuthor={true}
                    padding={false}
                  />
                )}
              </div>
            );
          })}
      </Frame>
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = await sanityClient.fetch(
    `*[_type == "author"].slug.current`
  );

  const paths = slugs.map((authorSlug) => ({
    params: { authorSlug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const data = await sanityClient.fetch(
    `*[_type == "author" && slug.current == $authorSlug]{
       _id,
       name,
       slug,
       image,
       bio,
      "itemData": *[_type == "contentItem" && ^._id in authors[]._ref]{title, body, slug, authors[]->{name, slug}, issue->{title, slug}, sections[]->{title, slug}, images[]{asset->{_id, url}}, mainImage{asset->{_id,url}}}}[0]`,
    { authorSlug: params.authorSlug }
  );

  if (!data) {
    return { notFound: true };
  }

  const authorData = { _id: data._id, name: data.name, slug: data.slug, image: data.image, bio: data.bio };
  const authoredItems = data.itemData;
  const sections = unionBy(...authoredItems.map((item) => item.sections), "title");

  return {
    props: {
      authorData,
      authoredItems,
      sections,
    },
    revalidate: 3600,
  };
}
