/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import sanityClient from "../client.js";

import Frame from "../components/Frame";

const issuesListSx = {};

export default function IssuesList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "issue"] | order(publishedAt desc) {
      title,
      slug,
      description,
      frontCover{
        asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => {
        setItems(data);
      })
      .catch(console.error);
  });

  return (
    <div css={issuesListSx}>
      <Frame path={[{ name: "Issues", slug: "/" }]}>
        <Grid gap={2} columns={[1, null, 2]} className="issuesGrid">
          {items.map((issue) => {
            return (
              <div key={issue.title}>
                <div>{issue.title}</div>
                {issue.frontCover && (
                  <img src={issue.frontCover.asset.url} alt="" />
                )}
              </div>
            );
          })}
        </Grid>
      </Frame>
    </div>
  );
}
