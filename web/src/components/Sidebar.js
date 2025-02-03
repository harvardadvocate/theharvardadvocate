/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/logo2.jpg";
import title from "../assets/images/wordmark.png";
import search from "../assets/images/search.svg";
import { Grid } from "theme-ui";
import { theme } from "../theme/theme.js";
import { useIsMobile } from "../utils/isMobile.js";
import { Navigate, useNavigate } from "react-router-dom";

const buttonColor = theme["colors"]["buttonColor"];
const buttonColorHover = theme["colors"]["buttonColorHover"];

const sidebarSx = {

  ".fontMod": {
    fontFamily: "Bernhard Gothic Medium, serif",
  },
  ".fontButtonMod": {
    fontFamily: "Helvetica, sans serif",
  },
  padding: "2.5em 1.6em 0em 1.5em",
  //padding: "7vh 2vw 0 2vw",
  height: "100vh",
  top: "0px",
  position: "sticky",
  minWidth: "min-content",
  overflow: "auto",
  borderRight: "0.01vw solid #000",
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
    backgroundColor: buttonColor,
    padding: "10px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
    // fontFamily: "Bernhard Gothic Medium, serif",
    // fontFamily: "sans-serif",
    fontWeight: "600",
  },
  ".buttonLink:hover": {
    backgroundColor: buttonColorHover,
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
    marginRight: 0,
  },
  ".advoStyle": {
    // 
    display: "flex",
    flexDirection: "column",
    marginTop: "25px",
    fontSize: "40px",

    p: {
      fontSize: "20px",
    },
  },

  ".search-bar": {
    background: "white",
    display: "flex",
    borderRadius: "4px",
    fontFamily: "sans-serif",
    alignItems: "center",
    border: "solid black 1px",
    padding: "5px",
    marginTop: "10px"
  },

  ".search-bar input": {
    background: "transparent",
    flex: "1",
    border: "0",
    width: "20px",
    outline: "none",
    fontSize: "16px",
    color: "#000000"
  },

  ".search-bar img": {
    background: "transparent",
    border: "0",
    width: "25px",
    outline: "none"
  },

  ".search-bar button": {
    background: "transparent",
    border: "0",
    outline: "none",
    padding: "0px"
  },

  ".search-bar img:hover": {
    cursor: "grab"
  },

  "@media (max-width: 835px)": {
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
      fontSize: "2.5vh",
      marginTop: "0vh",
    },

    ".logo": {
      img: {
        display: "inline",
        maxWidth: "80px"
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
      backgroundColor: buttonColor,
      padding: "1vh",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      borderRadius: "4px",
      fontSize: "1.2vh",
      width: "100%",
      fontFamily: "sans-serif",
      fontWeight: "600",
    },
    ".buttonLinkMobile:hover": {
      backgroundColor: buttonColorHover,
    },
    borderRight: "0px",
    borderBottom: "0.1vh solid #000",
  },
};

export default function Sidebar() {


  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const toSearch = () => {
    setNavbarExpanded(false);
    // e.preventDefault();
    navigate('/search', { state: { query: searchQuery } });
  }


  const isMobile = useIsMobile();

  const location = useLocation();
  const [sectionsExpanded, setSectionsExpanded] = useState(() =>
    [
      "/sections/art",
      "/sections/fiction",
      "/sections/features",
      "/sections/poetry",
      // "/sections/columns",
      "/sections/notes",
    ].includes(location.pathname)
      ? true
      : false
  );
  const [moreExpanded, setMoreExpanded] = useState(() =>
    ["/shop", "/donate", "/advertise", "/comp", "/masthead", "/contact"].includes(
      location.pathname
    )
      ? true
      : false
  );
  const [navbarExpanded, setNavbarExpanded] = useState(() =>
    [].includes(location.pathname) ? true : false
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

          // mobile display
          <div className="headerGrid">
            <div
              className={"navbarButton" + (navbarExpanded ? " rotated" : "")}
              onClick={() => setNavbarExpanded(!navbarExpanded)}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <Link
              className={"link logo"}
              to={"/"}
              onClick={() => setNavbarExpanded(false)}
            >
              {/* <img src={logo} alt="The Advocate Logo" /> */}
              <div className="advoStyle">


                <div className="fontMod">
                <img src={title} alt="The Advocate Title" />

                {/* THE HARVARD ADVOCATE */}
                  </div>
                </div>
            </Link>
          </div>
        ) : (

          // web display
          <Link
            className={"link logo"}
            to={"/"}
            onClick={() => setNavbarExpanded(false)}
          >
            <img src={logo} alt="The Advocate Logo" />
            <img src={title} alt="The Advocate Title" />

          </Link>
        )}

        <div
          className="horizontalLine1"
          style={{
            borderTop: "1px solid #000000 ",
            marginLeft: 0,
            marginRight: 0,
          }}
        ></div>
        {(navbarExpanded || !isMobile) && (
          <div className="linksToShow">
            <Link
              className={`link ${highlightLink("/")}`}
              to={"/"}
              onClick={() => setNavbarExpanded(false)}
            >
              Home
            </Link>
            <Link
              className={`link ${highlightLink("/about")}`}
              to={"/about"}
              onClick={() => setNavbarExpanded(false)}
            >
              About
            </Link>
            <Link
              className={`link ${highlightLink("/issues")}`}
              to={"/issues"}
              onClick={() => setNavbarExpanded(false)}
            >
              Issues
            </Link>


            {isMobile ? (
              <Link
                className={`link ${highlightLink("/submit")}`}
                to="/submit"
                onClick={() => setNavbarExpanded(false)}
              >
                Submit
              </Link>



            ) : (
              ""
            )}
            <div className="sectionsLink">
              <Link
                className={`link ${highlightLink("/sections")}`}
                sx={{
                  fontStyle: sectionsExpanded ? "italic" : "none",
                }}
                onClick={() => {
                  setSectionsExpanded(!sectionsExpanded);
                  setMoreExpanded(false);
                  setNavbarExpanded(false);
                }}
                to={"/sections"}
              >
                Sections
              </Link>
              <div
                className={
                  "dropdownButton" + (sectionsExpanded ? " rotated" : "")
                }
                onClick={() => {
                  setSectionsExpanded(!sectionsExpanded);
                  setMoreExpanded(false);
                }}
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
                {/* <Link
                  className={`link ${highlightLink("/sections/columns")}`}
                  to="/sections/columns"
                  onClick={() => setNavbarExpanded(false)}
                >
                  Columns
                </Link> */}
                <Link
                  className={`link ${highlightLink("/sections/notes")}`}
                  to="/sections/notes"
                  onClick={() => setNavbarExpanded(false)}
                >
                  Notes
                </Link>
              </Grid>
            )}
            <div className="sectionsLink">
              <div
                sx={{
                  fontStyle: moreExpanded ? "italic" : "none",
                  fontSize: "24px",
                }}
                className={moreExpanded ? " rotated" : ""}
                onClick={() => {
                  setMoreExpanded(!moreExpanded);
                  setSectionsExpanded(false);
                }}
              >
                More
              </div>
              <div
                className={"dropdownButton" + (moreExpanded ? " rotated" : "")}
                onClick={() => {
                  setMoreExpanded(!moreExpanded);
                  setSectionsExpanded(false);
                }}
              ></div>
            </div>



            {moreExpanded && (
              <Grid className="sublinks" columns={1} gap={3}>
                <a href="/shop" 
                  className={`link ${highlightLink("/shop")}`} 
                  onClick={()=> setNavbarExpanded(false)}>
                    Shop
                </a>

                <a href="/donate" 
                  className={`link ${highlightLink("/donate")}`} 
                  onClick={()=> setNavbarExpanded(false)}>
                    Donate
                </a>
                <a href="/advertise" 
                  className={`link ${highlightLink("/advertise")}`} 
                  onClick={()=> setNavbarExpanded(false)}>
                  Advertise
                </a>
                <a href="/comp" 
                  className={`link ${highlightLink("/comp")}`} 
                  onClick={()=> setNavbarExpanded(false)}>
                    Comp
                </a>
                <a href="/masthead" 
                  className={`link ${highlightLink("/masthead")}`} 
                  onClick={()=> setNavbarExpanded(false)}>
                    Masthead
                </a>

                {isMobile ? (
                <a
                  className={`link`}
                  href="https://alumni.theharvardadvocate.com"
                >
                  Alumni
                </a>



            ) : (
              ""
            )}
            

              </Grid>
            )}

            <div
              className="horizontalLine1"
              style={{
                borderTop: "1px solid #000000 ",
                marginTop: "1vh",
                marginRight: 0,
              }}
            ></div>

            <div className="search-bar">
              <input type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    toSearch();
                }
            }}
              style={{}}></input>

              <button onClick={() => toSearch()}>
                <img src={search} alt="search" />
              </button>
            </div>




          </div>
        )}


        <Link className="buttonLink" to={"/submit"}>
        <div className="fontButtonMod">
          SUBMIT
        </div>
        </Link>

        <Link className="buttonLink" to={"/subscribe"}>
        <div className="fontButtonMod">
          SUBSCRIBE
        </div>
        </Link>
        
      </Grid>
    </div>
  );
}
