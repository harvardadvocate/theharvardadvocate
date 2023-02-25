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
