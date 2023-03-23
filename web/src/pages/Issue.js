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
          frontCover,
          publishedAt,
          slug,
          title,
          _createdAt,
          _id,
          _rev,
          _type,
          _updatedAt,
          "items": *[_type == "contentItem" && ^._id == issue._ref]
        }`,
        {
          issueSlug,
        }
      )
      .then((issueData) => {
        setIssue({ ...issueData[0], items: undefined });
        setItems(issueData[0].items);
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
