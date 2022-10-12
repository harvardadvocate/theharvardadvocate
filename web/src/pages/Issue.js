/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import Frame from "../components/Frame";

const issueSx = {};

export default function Issue() {
  const [items, setItems] = useState(null);
  const [issue, setIssue] = useState(null);
  const { issueSlug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "issue" && slug.current == $issueSlug]`, {
        issueSlug,
      })
      .then((issueData) => {
        setIssue(issueData[0]);
        sanityClient
          .fetch(
            `*[_type == "contentItem" && $issueId == issue->_id]{
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

  if (!items || !issue) return <div>Loading...</div>;

  return (
    <div css={issueSx}>
      <Frame
        path={[
          { name: "Issues", slug: "/issues" },
          { name: issue.title, slug: "/issues/" + issue.slug.current },
        ]}
      >
        <Themed.h2>{issue.title}</Themed.h2>
      </Frame>
    </div>
  );
}
