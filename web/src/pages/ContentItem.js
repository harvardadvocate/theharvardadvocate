/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { Themed } from "theme-ui";
import moment from "moment";
import Frame from "../components/Frame";

const contentItemSx = {
  margin: "2em 5% 2em 0 ",
  ".header": {
    marginLeft: "20px",
    display: "flex",
    ".headerImgWrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 0.5em",
    },
    ".headerLeft, .headerMiddle": {
      paddingRight: "3em",
      borderBottom: "1px solid #000",
    },
    ".headerRight": {
      borderBottom: "1px solid #000",
      flexGrow: 1,
    },
    img: { height: "0.4em" },
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    marginTop: "2em",
    ".mainContent": {
      flexGrow: 1,
    },
  },
  ".verticalLines": {
    width: "20px",
    marginRight: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",

    ".topVL": {
      borderRight: "1px solid #000",
      width: "20px",
      height: "250px",
      h5: {
        lineHeight: 1,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "rotate(180deg)",
      },
    },
    ".bottomVL": {
      borderRight: "1px solid #000",
      width: "20px",
      flexGrow: 1,
    },
  },
  ".mainContent": {
    marginLeft: "20px",
    ".contentHeader": {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      borderBottom: "1px solid #000",
      paddingBottom: "0.5em",
      ".dateShareContainer": {
        marginTop: "1.5em",
        display: "flex",
        justifyContent: "space-between",
        h5: { fontStyle: "normal" },
      },
    },
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
  },
};

export default function ContentItem() {
  const [itemData, setItemData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
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
         issue->{title},
         authors[]->{name},
         sections[]->{title, slug},
       }`,
        { slug }
      )
      .then((data) => setItemData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!itemData) return <div>Loading...</div>;

  return (
    <div sx={contentItemSx}>
      <Frame
        path={[
          {
            name: "Sections",
          },
          {
            name: itemData.sections[0].title,
            slug: "/sections/" + itemData.sections[0].slug,
          },
          { name: itemData.issue.title, slug: itemData.slug },
        ]}
      >
        <div className="contentHeader">
          <div className="topLine">
            <Themed.h5>
              {itemData.sections[0].title} • {itemData.issue.title}
            </Themed.h5>
          </div>
          <div className="title">
            <Themed.h1>{itemData.title}</Themed.h1>
          </div>
          <div className="authors">
            <Themed.h4>
              By {itemData.authors.map(({ name }) => name).join(", ")}
            </Themed.h4>
          </div>
          <div className="dateShareContainer">
            <div className="date">
              <Themed.h5>
                {moment(itemData.publishedAt).format("MMMM Do YYYY")}
              </Themed.h5>
            </div>
            <div className="share">
              <Themed.h5>Share</Themed.h5>
            </div>
          </div>
        </div>
        {itemData.mainImage && (
          <img src={urlFor(itemData.mainImage).width(200).url()} alt="" />
        )}
        <div>
          {itemData.body && (
            <PortableText
              value={itemData.body}
              hardBreak={false}
              components={customComponents}
            />
          )}
        </div>
      </Frame>
    </div>
  );
}
