/** @jsxImportSource theme-ui */
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import sanityClient from "../../lib/sanity.js";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { Themed } from "theme-ui";

import ContentFrame from "../../src/components/ContentFrame";
import ColorRingLoader from "../../src/components/LoadingRing.js";
import Zoom from "../../src/components/Zoom";
import Vimeo from '@u-wave/react-vimeo';
import { useIsMobile } from "../../src/utils/isMobile.js";


const contentItemSx = {

  ".contentHeader": {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    borderBottom: "1px solid #000",
    paddingBottom: "0.5em",
    marginBottom: "1em",
    ".dateShareContainer": {
      marginTop: "1.5em",
      display: "flex",
      justifyContent: "space-between",
      h5: { fontStyle: "normal" },
    },
    ".share": {
      cursor: "pointer", // add cursor property to change cursor pointer
    },
  },
  p: {
    marginBottom: "1.5em",
  },
  ".images": {
    img: {
      width: "100%",
    },

  },
  ".centerText": {
    textAlign: "center",
  },
  blockquote: {
    background: "#f9f9f9",
    borderLeft: "10px solid #ccc",
    margin: "1.5em 10px",
    padding: "0.5em 10px",
    fontStyle: "italic",
    lineHeight: "1.5em",
  },
};
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// // `components` object passed to PortableText
const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    h6: ({ children }) => <h6>{children}</h6>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    pre: ({ children }) => <pre>{children}</pre>,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),
  },
  marks: {
    em: ({ children }) => <em>{children}</em>,
    strong: ({ children }) => <strong>{children}</strong>,
    center: ({ children }) => <div className="centerText">{children}</div>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
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
    image: ({ value }) => <img src={urlFor(value).url()} alt="" />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
};



export default function ContentItem({ itemData }) {

  var isMobile = useIsMobile();

  const [isLinkCopied, setIsLinkCopied] = useState(false); // new state variable

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsLinkCopied(true);
  };

  if (!itemData) return <ColorRingLoader />;

  const thumbnailUrl = itemData.mainImage == null ? "https://i.imgur.com/6OVMP6v.jpg" : itemData.mainImage.asset.url;

  return (


    <div>

      <Head>
        <title>{itemData.title}</title>
        <meta name='title' property="og:title" content={itemData.title} />
        <meta name='description' property="og:description" content={
          itemData.title + " by " + itemData.authors[0].name + " for The Harvard Advocate, the art and literary magazine of Harvard College."
          }  />
        <meta name='twitter:description' content={
          itemData.title + " by " + itemData.authors[0].name + " for The Harvard Advocate, the art and literary magazine of Harvard College."
          }  />
        <meta name='twitter:title' content={itemData.title} />
        <meta
          name="image"
          property="og:image"
          content={thumbnailUrl}
        />
        <meta
          name="twitter:image"
          content={thumbnailUrl}
        />
      </Head>

      <div sx={contentItemSx}>

        <ContentFrame
          path={[
            {
              name: "Sections",
              slug: "/sections",
            },
            {
              name: itemData.sections[0].title,
              slug: "/sections/" + itemData.sections[0].slug.current,
            },
            { name: itemData.title, slug: "/content/" + itemData.slug.current },
          ]}
        >
            <div className="contentHeader">
              <div className="topLine">
                <Themed.h5>

                {itemData.sections[0].title === 'Notes' ?
                  <Link href={"/sections/" + itemData.sections[0].slug.current}>
                    {itemData.sections[0].title}
                  </Link>:

                  <div>
                    <Link href={"/sections/" + itemData.sections[0].slug.current}>
                      {itemData.sections[0].title}
                    </Link>•{" "}
                    <Link href={"/issues/" + itemData.issue.slug.current}>
                    {itemData.issue.title} Issue{" "}
                    </Link>
                  </div>

                }



              </Themed.h5>
            </div>
            <div className="title">
              <Themed.h1>{itemData.title}</Themed.h1>
            </div>
            <div className="authors">
              <Themed.h3>
                By{" "}
                {itemData.authors.map((author, i) => (
                  <>
                    {i !== 0 && ", "}
                    <Link href={"/authors/" + author.slug.current}>
                      {author.name}
                    </Link>
                  </>
                ))}
              </Themed.h3>
            </div>
            <div className="dateShareContainer">
              <div className="date">
                <Themed.h5>
                </Themed.h5>
              </div>
              <div className="share">
                {isLinkCopied ? (
                  <Themed.h5>
                    <i>Link Copied</i>
                  </Themed.h5> // change button text to "Link Copied" when the link is copied
                ) : (
                  <Themed.h5 onClick={handleShareClick}>Share</Themed.h5> // add onClick event handler to the "Share" button
                )}
              </div>
            </div>
          </div>
          <div className="images">
            {itemData.vimeoLink ?

            <div align="center" width="100%">

              <br></br>

                <Vimeo
                video={itemData.vimeoLink}
                showTitle={false}
                showPortrait={false}
                showByline={false}
                width={isMobile ? 400 : 700}
                />
                <br></br>

              </div>
            :
            ""}
            {itemData.images &&
              itemData.images.map((image, i) => (
              itemData.sections[0].title === "Art" ? (
                // <img src={image.asset.url} key={i} alt="" />
                <Zoom src={image.asset.url}></Zoom>
                ) : (
                <img key={i} src={image.asset.url} alt="" />
                )
              ))}
            {!itemData.images && itemData.mainImage ? (
              itemData.sections[0].title === "Art" ? (
              <Zoom src={itemData.mainImage.asset.url}></Zoom>
              ) : (
                <img src={itemData.mainImage.asset.url} alt="" />
              )
            ) : (
              ""
            )}
          </div>
          {itemData.body && (
            <PortableText
              value={itemData.body}
              hardBreak={false}
              components={customComponents}
            />
          )}
        </ContentFrame>
      </div>

    </div>
  );
}

export async function getStaticPaths() {
  const slugs = await sanityClient.fetch(
    `*[_type == "contentItem"].slug.current`
  );

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const itemData = await sanityClient.fetch(
    `*[slug.current == $slug]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
         }
       },
     body,
     publishedAt,
     issue->{title, slug},
     authors[]->{name, slug},
     sections[]->{title, slug},
     images[]{asset->{_id, url}},
     vimeoLink
   }[0]`,
    { slug: params.slug }
  );

  if (!itemData) {
    return { notFound: true };
  }

  return {
    props: { itemData },
    revalidate: 3600,
  };
}
