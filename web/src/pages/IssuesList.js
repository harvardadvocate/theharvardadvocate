/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import Frame from "../components/Frame";

const issuesListSx = {};

export default function IssuesList() {
  return (
    <div css={issuesListSx}>
      <Frame path={[{ name: "Issues", slug: "/" }]}></Frame>
    </div>
  );
}
