/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";
import sanityClient from "../client.js";
import { useParams, Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";

const authorSx = {
  ".authorHeader": {
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

// TODO: include list of author's pieces

export default function Author() {
  const [authorData, setAuthorData] = useState(null);
  const [authoredItems, setAuthoredItems] = useState(null);
  const { authorSlug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author" && slug.current == $authorSlug]{
           name,
           slug,
           image, 
           bio
         }`,
        { authorSlug }
      )
      .then((data) => setAuthorData(data[0]))
      .catch(console.error);
  }, [authorSlug]);

  // TODO: fetch author's works

  if (!authorData) return <div>Loading...</div>;

  return (
    <div sx={authorSx}>
      <Frame
        path={[
          {
            name: "Authors",
          },
          {
            name: authorData.name,
            slug: authorData.slug,
          },
        ]}
      >
        <div className="authorHeader">
          <Themed.h2>{authorData.name}</Themed.h2>
          <img src={rightArrow} alt="right-arrow" />
        </div>
        <div className="authorBio">
          {authorData.image && (
            <img src={urlFor(authorData.image).width(200).url()} alt="" />
          )}
          <Themed.p>{authorData.bio}</Themed.p>
        </div>
      </Frame>
    </div>
  );
}
