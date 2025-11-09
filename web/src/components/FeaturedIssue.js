/** @jsxImportSource theme-ui */
import React from "react";
import { Grid } from "theme-ui";
import Link from "next/link";
import { theme } from "../theme/theme.js";
import { optimizeImageLoading } from "../utils/image.js";
import { useIsMobile } from "../utils/isMobile.js";
const firstColor = theme["colors"]["primary"];
const secondColor = theme["colors"]["secondary"];

const issuesListSx = {

  ".fontMod": {
    fontFamily: "Bernhard Gothic Medium, serif",
  },

  hr: {
    border: "0.1px solid rgba(0, 0, 0, .2)",
  },

  ".featuredIssue, .featuredIssue2": {
    a: {
      color: "white",
    },
    width: "100%",
    paddingInline: "3vw",
    paddingTop: "2vh",
  },

  ".featuredIssue": {
    backgroundColor: firstColor,
  },

  ".featuredIssue2": {
    backgroundColor: secondColor,
  },

  "*:hover": {
    color: "#fffaf1",
  },

  ".issueCover": {
    height: "max-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
    marginBottom: "8%",
    img: {
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
      maxWidth: "69%",
      maxHeight: "75%",
      // new styles for hover
      transition: "transform 0.2s ease-in-out",
      ":hover": {
        transform: "scale(1.01)",
      },
    },
    a: {
      justifyContent: "center",
      display: "flex",
    },
  },

  ".mainGrid": {
    placeItems: "center",
    display: "grid",
    justifyItems: "start",
  },

  ".featuredArticles": {
    color: "blue",
    paddingTop: "2vh",
    paddingRight: "2vw",
    paddingLeft: "2vw",
    h5: {
      // fontFamily: "sans-serif",
    },
    hr: {
      border: "0.1px solid white",
    },
  },

  ".buyIssueButton": {
    backgroundColor: "white", 
    color: "black",
    padding: "8px 16px",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "12px",
    margin: "10px 0",
    transition: "background-color 0.3s",
    cursor: "pointer",

    ":hover": {
      backgroundColor: "white", 
    },
  },

  ".featuredArticles2": {
    color: "blue",
    paddingTop: "2vh",
    paddingRight: "2vw",
    paddingLeft: "5vw",
    h5: {
      // fontFamily: "sans-serif",
    },
    hr: {
      border: "0.1px solid white",
    },
  },

  ".readFullIssue": {
    color: "#FFFFFF",
    span: {
      border: "2px solid #FFFFFF",
      borderRadius: "5px",
      paddingInline: "10px",
      color: firstColor,
      backgroundColor: "#FFFFFF",
      float: "left",
    },

    h6: {
      marginLeft: "3em",
      border: "4px solid " + firstColor,
      paddingInline: "10px",
      borderRadius: "5px",
      // fontFamily: "sans-serif",
    },
  },

  ".readFullIssue2": {
    color: "#FFFFFF",
    span: {
      border: "2px solid #FFFFFF",
      borderRadius: "5px",
      paddingInline: "10px",
      color: secondColor,
      backgroundColor: "#FFFFFF",
      float: "left",
    },
    h6: {
      marginLeft: "3em",
      border: "4px solid " + secondColor,
      paddingInline: "10px",
      borderRadius: "5px",
      // fontFamily: "sans-serif",
    },
  },

  ".buttonContainer": {
    display: "flex",
    alignItems: "center",
    gap: "130px", // Adjust the gap as needed
  },

  ".readFullIssue, .readFullIssue2, .buyIssueButton": {
    margin: "0", // Remove default margin to ensure alignment
  },

  ".articleLink": {
    color: "#FFFFFF",
  },

  img: {
    marginBottom: "1vh",
  },

  "@media (max-width: 835px)": {
    ".issueCover": {
      marginBottom: "0",
    },
    ".featuredArticles, .featuredArticles2": {
      paddingTop: "0vh",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      hr: {
        display: "none",
      },
    },

    ".featuredIssue, .featuredIssue2": {
      a: {
        textAlign: "center",
      },
    },

    ".highlightedArticles": {
      display: "none!important",
    },

    ".mainGrid": {
      gridTemplateColumns: "1fr",
      placeItems: "unset",
    },
  },
};

export default function FeaturedIssue(props) {
  const issue = props.issue;
  const featuredItems = props.featuredItems;

  var isMobile = useIsMobile();

  return (
    <div css={issuesListSx}>
      <div className={props.newest ? "featuredIssue" : "featuredIssue2"}>
        <Grid
          className="mainGrid"
          columns={props.newest ? "2fr 3fr" : "3fr 2fr"}
        >
          {props.newest || isMobile ? (
            <div className="issueCover">
              <Link href={"/issues/" + issue.slug.current}>
                {issue.frontCover && "asset" in issue.frontCover && (
                  <img
                    src={optimizeImageLoading(issue.frontCover.asset.url)}
                    loading="lazy"
                    alt={`Cover of ${issue.title} Issue`}
                  />
                )}
              </Link>
            </div>
          ) : (
            ""
          )}

          <div
            className={props.newest ? "featuredArticles" : "featuredArticles2"}
          >
            <a href={"issues/" + issue.slug.current}>
              <div className="issueTitle">
                <h5 sx={{ variant: "styles.h5" }}>
                  <div className="fontMod">
                  <b>{props.newest ? "NEWEST ISSUE" : "RECENT ISSUE"}</b>
                  </div>
                </h5>
                <h1 sx={{ variant: "styles.h1" }}>{issue.title}</h1>
                {featuredItems.length > 0 ? <hr /> : <></>}
              </div>
            </a>
            <div className="highlightedArticles">
              <Grid gap={6} columns={[1, null, 2]} className="featuredGrid">
                {featuredItems.slice(0, 2).map((article) => {
                  return (
                    <div className="featuredArticle" key={article.title}>
                      <Link href={"/content/" + article.slug.current}>
                        <div className="articleLink">
                          {/* <div className="fontMod"> */}
                          <b>{article.title}</b> <br />
                          {/* </div> */}
                          <h3 sx={{ variant: "styles.h3" }}>
                            By{" "}{article.authors[0].name}
                            {article.authors.length > 1 ? ", ..." : ""}
                          </h3>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Grid>
              {featuredItems.length > 2 ? <hr /> : <></>}
              <Grid gap={6} columns={[1, null, 2]} className="featuredGrid">
                {featuredItems.slice(2, 4).map((article) => {
                  return (
                    <div className="featuredArticle" key={article.title}>
                      <div className="articleLink">
                        <h3 sx={{ variant: "styles.h3" }}>
                          <Link href={"/content/" + article.slug.current}>
                            <b>{article.title}</b>
                          </Link>
                          <br />
                          By{" "}
                          {article.authors.map((author, i) => (
                            <span key={author._id || author.slug?.current || i}>
                              {i !== 0 && ", "}
                              <Link href={"/authors/" + author.slug.current}>
                                {author.name}
                              </Link>{" "}
                            </span>
                          ))}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </Grid>
              {featuredItems.length > 0 ? <hr /> : <></>}
            </div>
            <div className="buttonContainer">
            <Link href={"/issues/" + issue.slug.current}>
              <div
                className={props.newest ? "readFullIssue" : "readFullIssue2"}
              >
                <span>&#8594;</span>
                <h6 sx={{ variant: "styles.h6" }}><div className="fontMod">READ FULL ISSUE</div></h6>
              </div>
            </Link>
             <Link href={"/shop"}>
              <div className="buyIssueButton">
                <div className="fontMod">
                BUY ISSUE
                </div>
              </div>
            </Link>
          </div>
          </div>

          {!props.newest && !isMobile ? (
            <div className="issueCover">
              <Link href={"/issues/" + issue.slug.current}>
                {issue.frontCover && "asset" in issue.frontCover && (
                  <img
                    src={optimizeImageLoading(issue.frontCover.asset.url)}
                    loading="lazy"
                    alt={`Cover of ${issue.title} Issue`}
                  />
                )}
              </Link>
            </div>
          ) : (
            ""
          )}
        </Grid>
      </div>
    </div>
  );
}
