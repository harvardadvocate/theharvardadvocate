/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import ContentItemList from "../components/ContentItemList.js";
import sanityClient from "../client.js";

const artSectionStyle = css`
  width: 80%;
  padding: 3em 5em;

  .listItem {
    padding: 1em;
    border-bottom: 2px solid #eee;
  }

  .listItemImage {
    max-width: 300px;
  }
`;

export default function Section(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contentItem" && "${props.section}" in sections[]->title]{
        title,
        author,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    } | order(publishedAt desc)`
      )
      .then((data) => setItems(data))
      .catch(console.error);
  }, [props.section]);

  return (
    <div css={artSectionStyle}>
      <ContentItemList items={items} />
    </div>
  );
}
