/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
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
    a: {
      color: "#9F9F9F",
    },
    ".highlight": {
      color: "primary",
      fontWeight: "bold",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
    },
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
  ".sectionsLink": {
    display: "flex",
    gap: "16px",
  },
  ".dropdownButton::before": {
    display: "inline-block",
    content: '"\\203A"',
    transition: "transform 0.3s",
  },
  ".rotated::before": {
    transform: "rotate(90deg)",
  },
};

export default function Sidebar() {
  const location = useLocation();
  const [sectionsExpanded, setSectionsExpanded] = useState(() =>
    [
      "/sections/art",
      "/sections/fiction",
      "/sections/features",
      "/sections/poetry",
      "/sections/columns",
      "/sections/blog",
    ].includes(location.pathname)
      ? true
      : false
  );

  const highlightLink = (pathname) => {
    return location.pathname === pathname ? " highlight" : "";
  };

  return (
    <div sx={sidebarSx}>
      <Grid className="sidebar" columns={1} gap={3}>
        <Link className={"link logo"} to={"/"}>
          <img src={logo} alt="The Advocate Logo" />
        </Link>
        <Link className={`link ${highlightLink("/")}`} to={"/"}>
          Home
        </Link>
        <Link className={`link ${highlightLink("/about")}`} to={"/about"}>
          About
        </Link>
        <Link className={`link ${highlightLink("/issues")}`} to={"/issues"}>
          Issues
        </Link>
        <div className="sectionsLink">
          <Link
            className={`link ${highlightLink("/sections")}`}
            sx={{
              fontStyle: sectionsExpanded ? "italic" : "none",
            }}
            to={"/sections"}
          >
            Sections
          </Link>
          <div
            className={"dropdownButton" + (sectionsExpanded ? " rotated" : "")}
            onClick={() => setSectionsExpanded(!sectionsExpanded)}
          ></div>
        </div>
        {sectionsExpanded && (
          <Grid className="sublinks" columns={1} gap={3}>
            <Link
              className={`link ${highlightLink("/sections/art")}`}
              to="/sections/art"
            >
              Art
            </Link>
            <Link
              className={`link ${highlightLink("/sections/fiction")}`}
              to="/sections/fiction"
            >
              Fiction
            </Link>
            <Link
              className={`link ${highlightLink("/sections/features")}`}
              to="/sections/features"
            >
              Features
            </Link>
            <Link
              className={`link ${highlightLink("/sections/poetry")}`}
              to="/sections/poetry"
            >
              Poetry
            </Link>
            <Link
              className={`link ${highlightLink("/sections/columns")}`}
              to="/sections/columns"
            >
              Columns
            </Link>
            <Link
              className={`link ${highlightLink("/sections/blog")}`}
              to="/sections/blog"
            >
              Blog
            </Link>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
