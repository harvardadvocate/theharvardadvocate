/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Grid } from "theme-ui";

const sidebarSx = {
  padding: "2.5em 1.5em 0em 1.5em",
  height: "100vh",
  top: "0px",
  position: "sticky",
  minWidth: "min-content",
  overflow: "auto",
  borderRight: "0.1vh solid #000",
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
  ".linksToShow": {
    display: "grid",
    gridGap: "10px",
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
  ".buttonLink:hover": {
    backgroundColor: "#d41c15",
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
  ".horizontalLine1, horizontalLine2": {
    borderTop: "1px solid #000000 ",
    marginLeft: 0,
    marginRight: 0
  },
  ".advoStyle": {
    display: "flex",
    flexDirection: "column",
    marginTop: "25px",
    fontSize: "40px",
    p: {
      fontSize: "20px",
    },
  },

  "@media (max-width: 767px)": {
    width: "100vw",
    height: "min-content",
    marginLeft: "0",
    marginRight: "0",
    padding: "1em 1em 1em 1em",
    position: "sticky",
    top: "0",
    backgroundColor: "white",
    ".advoStyle": {
      alignItems: "center",
      fontSize: "3vh",
      marginTop: "0vh",
    },
    ".logo": {
      img: {
        display: "none",
      },
    },
    ".horizontalLine1, .horizontalLine2": {
      display: "none",
    },

    ".navbarButton > .line": {
      backgroundColor: "#292929",
      height: "2px",
      display: "block",
      width: "4vw",
    },
    ".navbarButton > .line + .line": {
      marginTop: "3px",
    },
    ".navbarButton::before": {
      cursor: "pointer",
      display: "inline-block",
      transition: "transform 0.3s",
    },
    ".rotated::before": {
      transform: "rotate(90deg)",
    },
    ".headerGrid": {
      display: "grid",
      justifyItems: "stretch",
      gridTemplateColumns: "1fr 8fr 1fr",
      alignItems: "center",
    },
    ".buttonLink": {
      display: "none",
    },
    ".buttonLinkMobile": {
      color: "white",
      backgroundColor: "#e2251e",
      padding: "1vh 1vh",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      borderRadius: "4px",
      fontSize: "1vh",
      width: "100%",
      fontFamily: "sans-serif",
      fontWeight: "600",
    },
    ".buttonLinkMobile:hover": {
      backgroundColor: "#d41c15",
    },
    borderRight: "0px",
    borderBottom: "0.1vh solid #000",
  },
};


export default function Sidebar() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 767;

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
  const [navbarExpanded, setNavbarExpanded] = useState(() =>
    [

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
        {isMobile ? (
          <div className="headerGrid">
            <div className={"navbarButton" + (navbarExpanded ? " rotated" : "")} onClick={() => setNavbarExpanded(!navbarExpanded)}>
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
            <Link className={"link logo"} to={"/"} onClick={() => setNavbarExpanded(false)}>
              <img src={logo} alt="The Advocate Logo" />
              <div className = "advoStyle">
                The Harvard Advocate
              </div>
            </Link>
            <Link className = "buttonLinkMobile" to={"/subscribe"} onClick={() => setNavbarExpanded(false)}>
              Subscribe
            </Link>
          </div>
        ):(<Link className={"link logo"} to={"/"} onClick={() => setNavbarExpanded(false)}>
          <img src={logo} alt="The Advocate Logo" />
          <div className = "advoStyle">
            The Harvard Advocate
          </div>
        </Link>)}

        <div className="horizontalLine1" style={{ borderTop: "1px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div>
        {(navbarExpanded || !isMobile) && (
        <div className="linksToShow">
        <Link className={`link ${highlightLink("/")}`} to={"/"} onClick={() => setNavbarExpanded(false)}>
          Home
        </Link>
        <Link className={`link ${highlightLink("/about")}`} to={"/about"} onClick={() => setNavbarExpanded(false)}>
          About
        </Link>
        <Link className={`link ${highlightLink("/issues")}`} to={"/issues"} onClick={() => setNavbarExpanded(false)}>
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
              onClick={() => setNavbarExpanded(false)}
            >
              Art
            </Link>
            <Link
              className={`link ${highlightLink("/sections/fiction")}`}
              to="/sections/fiction"
              onClick={() => setNavbarExpanded(false)}
            >
              Fiction
            </Link>
            <Link
              className={`link ${highlightLink("/sections/features")}`}
              to="/sections/features"
              onClick={() => setNavbarExpanded(false)}
            >
              Features
            </Link>
            <Link
              className={`link ${highlightLink("/sections/poetry")}`}
              to="/sections/poetry"
              onClick={() => setNavbarExpanded(false)}
            >
              Poetry
            </Link>
            <Link
              className={`link ${highlightLink("/sections/columns")}`}
              to="/sections/columns"
              onClick={() => setNavbarExpanded(false)}
            >
              Columns
            </Link>
            <Link
              className={`link ${highlightLink("/sections/blog")}`}
              to="/sections/blog"
              onClick={() => setNavbarExpanded(false)}
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
              onClick={() => setNavbarExpanded(false)}
            >
              Shop
            </Link>
            <Link
              className={`link ${highlightLink("/donate")}`}
              to="/donate"
              onClick={() => setNavbarExpanded(false)}
            >
              Donate
            </Link>
            <Link
              className={`link ${highlightLink("/advertise")}`}
              to="/advertise"
              onClick={() => setNavbarExpanded(false)}
            >
              Advertise
            </Link>
            <Link
              className={`link ${highlightLink("/comp")}`}
              to="/comp"
              onClick={() => setNavbarExpanded(false)}
            >
              Comp
            </Link>
            <Link
              className={`link ${highlightLink("/masthead")}`}
              to="/masthead"
              onClick={() => setNavbarExpanded(false)}
            >
              Masthead
            </Link>
          </Grid>
        )}
        <div className="horizontalLine1" style={{ borderTop: "1px solid #000000 ", marginTop: "1vh", marginRight: 0 }}></div>
        </div>
      )}

    <div className="horizontalLine2"></div>

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
