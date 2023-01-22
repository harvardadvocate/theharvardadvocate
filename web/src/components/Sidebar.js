/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Grid } from "theme-ui";

const sidebarSx = {
  padding: "2.5em 7em 2em 1em",
  height: "100%",
  borderRight: "0.5px solid #000",
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
  ".buttonLink": {
    color: "white",
    backgroundColor: "#e2251e",
    padding: "10px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
    fontFamily: "sans-serif",
    fontWeight: "600",
  },
  ".logo": {
    marginBottom: "0.4em",
  },
  ".sectionsLink": {
    display: "flex",
    gap: "16px",
  },
  ".dropdownButton::before": {
    cursor: "pointer",
    display: "inline-block",
    content: '"\\203A"',
    transition: "transform 0.3s",
  },
  ".rotated::before": {
    transform: "rotate(90deg)",
  },
  ".advoStyle": {
    marginTop: "25px",
    fontSize: "40px",
  }
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
  const [moreExpanded, setMoreExpanded] = useState(() =>
    [
      "/shop",
      "/donate",
      "/advertise",
      "/comp",
    ].includes(location.pathname)
      ? true
      : false
  );


  const highlightLink = (pathname) => {
    if (pathname === "/issues")
      return location.pathname.includes("/issues") ? " highlight" : "";
    return location.pathname === pathname ? " highlight" : "";

  };

  return (
    <div sx={sidebarSx}>
      <Grid className="sidebar" columns={1} gap={3}>
        <Link className={"link logo"} to={"/"}>
          <img src={logo} alt="The Advocate Logo" />
          <div className = "advoStyle">
            The Harvard Advocate
          </div>
        </Link>
        <div style={{ borderTop: "1px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div>

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
            onClick={() => setSectionsExpanded(!sectionsExpanded)}
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
        <div className="sectionsLink">
          <div
            sx={{
              fontStyle: moreExpanded ? "italic" : "none",
            }}
            className={(moreExpanded ? " rotated" : "")}
            onClick={() => setMoreExpanded(!moreExpanded)}
          >
            More
          </div>
          <div
            className={"dropdownButton" + (moreExpanded ? " rotated" : "")}
            onClick={() => setMoreExpanded(!moreExpanded)}
          ></div>
        </div>
        {moreExpanded && (
          <Grid className="sublinks" columns={1} gap={3}>
            <Link
              className={`link ${highlightLink("/shop")}`}
              to="/shop"
            >
              Shop
            </Link>
            <Link
              className={`link ${highlightLink("/donate")}`}
              to="/donate"
            >
              Donate
            </Link>
            <Link
              className={`link ${highlightLink("/advertise")}`}
              to="/advertise"
            >
              Advertise
            </Link>
            <Link
              className={`link ${highlightLink("/comp")}`}
              to="/comp"
            >
              Comp
            </Link>
            <Link
              className={`link ${highlightLink("/masthead")}`}
              to="/masthead"
            >
              Masthead
            </Link>
          </Grid>
        )}
    <div style={{ borderTop: "1px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div>

        <Link className = "buttonLink" to={"/submit"}>
          Submit
        </Link>

        <Link className = "buttonLink" to={"/subscribe"}>
          Subscribe
        </Link>

      </Grid>

    </div>
  );
}
