/** @jsxImportSource theme-ui */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Grid } from "theme-ui";

const sidebarSx = {
  padding: "2em",
  height: "100%",
  ".link": {
    fontSize: "2",
    textDecoration: "none",
    color: "text",
    cursor: "pointer",
  },
  ".sublinks": {
    marginLeft: "1em",
  },
  ".highlight": {
    color: "primary",
    fontWeight: "bold",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
};

/* todo: highlight when on that page, 
also make sure sections is expanded if on a section page*/
export default function Sidebar() {
  const [sectionsExpanded, setSectionsExpanded] = useState(false);

  return (
    <div sx={sidebarSx}>
      <Grid className="sidebar" columns={1} gap={2}>
        <Link className={"link"} to={"/"}>
          <img src={logo} alt="The Advocate Logo" />
        </Link>
        <Link className={"link"} to={"/"}>
          Home
        </Link>
        {/* {<Link className={"link"} to={"/about"}>
        About
      </Link>
      <Link className={"link"} to={"/issues"}>
        Issues
      </Link>} */}
        <div
          className={"link" + (sectionsExpanded ? " highlight" : "")}
          onClick={() => setSectionsExpanded(!sectionsExpanded)}
          sx={{
            fontStyle: sectionsExpanded ? "italic" : "none",
          }}
        >
          {/* the down arrow thingy that rotates */}
          Sections
        </div>
        {sectionsExpanded && (
          <Grid className="sublinks" columns={1} gap={2}>
            <Link className={"link"} to="/art">
              Art
            </Link>
            <Link className={"link"} to="/fiction">
              Fiction
            </Link>
            <Link className={"link"} to="/features">
              Features
            </Link>
            <Link className={"link"} to="/poetry">
              Poetry
            </Link>
            <Link className={"link"} to="/columns">
              Columns
            </Link>
            <Link className={"link"} to="/blog">
              Blog
            </Link>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
