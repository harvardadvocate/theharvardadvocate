/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

import Frame from "../components/Frame";

const issuesListSx = {
  ".issueItem": {
    cursor: "pointer",
    maxHeight: "20%",
    height: "20%",
    marginTop: "12%",
  },
  ".issueTitle:hover": {
    color: "#D6362F"
  },
  "img:hover": {
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
  },

};

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
    }, []);

  console.log(items);
  
  return (
    <div css={issuesListSx}>
      <Frame path={[{ name: "Issues", slug: "/issues" }]}>
        <Grid gap={2} columns={[1, null, 2]} className="issuesGrid">
          {items.map((issue) => {
            return (
              <div className="issueItem" key={issue.title}>
                <Link to={"/issues/" + issue.slug.current}>
                  {issue.frontCover && "asset" in issue.frontCover && (
                    <img src={issue.frontCover.asset.url} alt="" />
                  )}
                  <br></br>
                  <div class="issueTitle">{issue.title}</div>

                </Link>
              </div>
            );
          })}
        </Grid>
      </Frame>
    </div>
  );
}
