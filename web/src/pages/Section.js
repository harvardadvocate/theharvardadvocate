/** @jsxImportSource theme-ui */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import ContentItemList from "../components/ContentItemList.js";
import sanityClient from "../client.js";

const artSectionSx = {};
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
    <div sx={artSectionSx}>
      <h3 sx={{ fontStyle: "italic" }}>{props.section}</h3>
      <ContentItemList items={items} />
    </div>
  );
}
