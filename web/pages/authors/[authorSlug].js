/** @jsxImportSource theme-ui */
import { NextSeo } from "next-seo";
import Link from "next/link";
import Frame from "../../src/components/Frame";
// rightArrow is loaded from public/images instead of imported
import sanityClient from "../../lib/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import { unionBy } from "lodash";
import { PortableText } from "@portabletext/react";
import TextContentList from "../../src/components/TextContentList.js";
import ImageContentGrid from "../../src/components/ImageContentGrid.js";
import ColorRingLoader from "../../src/components/LoadingRing.js";
import { createPersonSchema } from "../../lib/seo/schemas.js";

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

// PortableText components for author bio
const bioComponents = {
  block: {
    normal: ({ children }) => <p sx={{ variant: "styles.p" }}>{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    h6: ({ children }) => <h6>{children}</h6>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    code: ({ children }) => <pre><code>{children}</code></pre>,
  },
  marks: {
    em: ({ children }) => <em>{children}</em>,
    strong: ({ children }) => <strong>{children}</strong>,
    center: ({ children }) => <div style={{ textAlign: 'center' }}>{children}</div>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a href={value?.href} target={target} rel={target === "_blank" && "noindex nofollow"}>
          {children}
        </a>
      );
    },
    sup: ({ children }) => <sup>{children}</sup>,
    sub: ({ children }) => <sub>{children}</sub>,
    underline: ({ children }) => <u>{children}</u>,
    strikethrough: ({ children }) => <s>{children}</s>,
  },
  types: {
    image: ({ value }) => <img src={urlFor(value).url()} alt={value.alt || "Author bio image"} />,
  },
};

export default function Author({ authorData, authoredItems, sections }) {
  if (!authorData) return <ColorRingLoader />;

  const authorUrl = `https://theharvardadvocate.com/authors/${authorData.slug.current}`;
  const authorImageUrl = authorData.image ? urlFor(authorData.image).width(400).url() : null;
  const bioText = typeof authorData.bio === 'string' ? authorData.bio :
    'Author for The Harvard Advocate, America\'s oldest continuously published college literary magazine.';

  // Generate Person Schema
  const personSchema = createPersonSchema({
    name: authorData.name,
    url: authorUrl,
    image: authorImageUrl,
    description: bioText,
    worksFor: {
      "@type": "Organization",
      "name": "The Harvard Advocate",
      "url": "https://theharvardadvocate.com"
    }
  });

  return (
    <div sx={authorSx}>
      <NextSeo
        title={authorData.name}
        description={bioText.length > 160 ? bioText.substring(0, 157) + '...' : bioText}
        canonical={authorUrl}
        openGraph={{
          type: 'profile',
          url: authorUrl,
          title: authorData.name,
          description: bioText,
          images: authorImageUrl ? [
            {
              url: authorImageUrl,
              width: 400,
              height: 400,
              alt: `Portrait of ${authorData.name}`,
            },
          ] : [],
          profile: {
            firstName: authorData.name.split(' ')[0],
            lastName: authorData.name.split(' ').slice(1).join(' '),
          },
        }}
      />

      {/* Person Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

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
          <h1 sx={{ variant: "styles.h1" }}>{authorData.name}</h1>
          {authorData.image && (
            <img src={urlFor(authorData.image).width(200).url()} alt={`Portrait of ${authorData.name}`} />
          )}
          {authorData.bio && (
            typeof authorData.bio === 'string' ? (
              <p sx={{ variant: "styles.p" }}>{authorData.bio}</p>
            ) : (
              <PortableText
                value={authorData.bio}
                components={bioComponents}
              />
            )
          )}
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
                    <h2 sx={{ variant: "styles.h2" }}> {section.title} </h2>
                  </Link>
                  <img src="/images/right-arrow.svg" alt="right-arrow" />
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
    revalidate: 86400,
  };
}
