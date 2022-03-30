/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Grid } from "theme-ui";

const sidebarSx = {
  padding: "2.5em 1em 2em 2em",
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
  ".logo": {
    marginBottom: "0.4em",
  },
};

/* todo: highlight when on that page, 
also make sure sections is expanded if on a section page*/
export default function Sidebar() {
  const [sectionsExpanded, setSectionsExpanded] = useState(false);

  return (
    <div sx={sidebarSx}>
      <Grid className="sidebar" columns={1} gap={3}>
        <Link className={"link logo"} to={"/"}>
          <img src={logo} alt="The Advocate Logo" />
        </Link>
        <Link className={"link"} to={"/"}>
          Home
        </Link>
        <Link className={"link"} to={"/about"}>
          About
        </Link>
        <Link className={"link"} to={"/"}>
          Issues
        </Link>
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
          <Grid className="sublinks" columns={1} gap={3}>
            <Link className={"link"} to="/sections/art">
              Art
            </Link>
            <Link className={"link"} to="/sections/fiction">
              Fiction
            </Link>
            <Link className={"link"} to="/sections/features">
              Features
            </Link>
            <Link className={"link"} to="/sections/poetry">
              Poetry
            </Link>
            <Link className={"link"} to="/sections/columns">
              Columns
            </Link>
            <Link className={"link"} to="/sections/blog">
              Blog
            </Link>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
