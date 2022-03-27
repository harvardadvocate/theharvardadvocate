/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import rightArrow from "../assets/images/right-arrow.svg";
import { Themed } from "theme-ui";
import moment from "moment";
// TODO  move to page
// TODO need a universal marginright
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
      ".date": { fontStyle: "normal", marginTop: "1.5em" },
    },
  },
};
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

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
         sections[]->{title},
       }`,
        { slug }
      )
      .then((data) => setItemData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!itemData) return <div>Loading...</div>;

  return (
    <div sx={contentItemSx}>
      <div className="header">
        {
          //TODO: these should link, also pull this stuff out
        }
        <div className="headerLeft">
          <Themed.h5 sx={{ margin: "0.5em" }}>Sections</Themed.h5>
        </div>
        <div className="headerImgWrapper">
          <img src={rightArrow} alt="right-arrow" />
        </div>
        <div className="headerMiddle">
          <Themed.h5 sx={{ margin: "0.5em" }}>
            {itemData.sections[0].title}
          </Themed.h5>
        </div>
        <div className="headerImgWrapper">
          <img src={rightArrow} alt="right-arrow" />
        </div>
        <div className="headerRight">
          <Themed.h5 sx={{ margin: "0.5em" }}>{itemData.title}</Themed.h5>
        </div>
      </div>
      <div className="horizontalContainer">
        <div className="verticalLines">
          <div className="topVL">
            <Themed.h5>MAGAZINE</Themed.h5>
          </div>
          <div className="bottomVL"></div>
        </div>
        <div className="mainContent">
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
            <div className="date">
              <Themed.h5>
                {moment(itemData.publishedAt).format("MMMM Do YYYY")}
              </Themed.h5>
            </div>
          </div>
          {itemData.mainImage && (
            <img src={urlFor(itemData.mainImage).width(200).url()} alt="" />
          )}
          <div>
            {itemData.body && (
              <BlockContent
                blocks={itemData.body}
                projectId={sanityClient.config().projectId}
                dataset={sanityClient.config().dataset}
              />
            )}
          </div>
          <Link to={"/"}>Back</Link>
        </div>
      </div>
    </div>
  );
}
