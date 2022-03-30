/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import Frame from "../components/Frame";

const issueSx = {};

export default function Issue() {
  return (
    <div css={issueSx}>
      <Frame path={[{ name: "Issues", slug: "/" }]}></Frame>
    </div>
  );
}
