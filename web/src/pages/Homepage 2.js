/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import Frame from "../components/Frame";

const homepageSx = {};

export default function Homepage() {
  return (
    <div css={homepageSx}>
      <Frame path={[{ name: "Homepage", slug: "/" }]} />
    </div>
  );
}
