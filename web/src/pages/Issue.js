/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import sanityClient from "../client.js";
import { useParams, Link } from "react-router-dom";
import SectionFrame from "../components/SectionFrame";

const issueSx = {
  ".mainGrid": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
};

export default function Issue() {
  const [items, setItems] = useState(null);
  const [issue, setIssue] = useState(null);
  const { issueSlug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "issue" && slug.current == $issueSlug] {
        _id,
        title,
        slug,
        description,
        frontCover{
          asset->{
            _id,
            url
          }
        }
      }`, {issueSlug})
      .then((issueData) => {
        setIssue(issueData[0]);
        sanityClient
          .fetch(
            `*[_type == "contentItem" && issue->_id == $issueId]{
            title,
            slug,
            authors[]->{name},
            sections[]->{title}
          }`,
            { issueId: issueData[0]["_id"] }
          )
          .then((data) => setItems(data))
          .catch(console.error);
      })
      .catch(console.error);
  }, [issueSlug]);

  if (!items || !issue) {
    return <div>Loading...</div>
  }
  else {
    console.log(issue);
    console.log(items);
  }
  return (
    <div css={issueSx}>
      <SectionFrame
        path={[
          { name: issue.title, slug: "/issues" },
          { name: issue.title, slug: "/issues/" + issue.slug.current },
        ]}
      >
      <div className="mainGrid">
        <div className="issueCover">
          {issue.frontCover && "asset" in issue.frontCover && (
            <img src={issue.frontCover.asset.url} alt="" />
          )}
        </div>
      </div>
      </SectionFrame>
    </div>

  );
}
