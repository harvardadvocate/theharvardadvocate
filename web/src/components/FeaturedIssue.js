/** @jsxImportSource theme-ui */
import React from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import { theme } from "../theme/theme.js";
import { optimizeImageLoading } from "../utils/image.js";
import { useIsMobile } from "../utils/isMobile.js";
const firstColor = theme["colors"]["primary"];
const secondColor = theme["colors"]["secondary"];

const issuesListSx = {
  hr: {
    border: "0.1px solid rgba(0, 0, 0, .2)",
  },

  a: {
    color: "white",
  },
  ".featuredIssue": {
    width: "100%",
    backgroundColor: firstColor,
  },

  ".featuredIssue2": {
    width: "100%",
    backgroundColor: secondColor,
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
    },
    a: {
      justifyContent: "center",
      display: "flex",
    }
  },

  ".mainGrid": {
    placeItems: "center",
    display: "grid",
    justifyItems: "start",
  },

  ".featuredArticles": {
    color: "#FFFFFF",
    paddingTop: "2vh",
    paddingRight: "2vw",
    paddingLeft: "2vw",
    h5: {
      fontFamily: "sans-serif",
    },
    hr: {
      border: "0.1px solid white",
    }
  },

  ".featuredArticles2": {
    color: "#FFFFFF",
    paddingTop: "2vh",
    paddingRight: "2vw",
    paddingLeft: "5vw",
    h5: {
      fontFamily: "sans-serif",
    },
    hr: {
      border: "0.1px solid white",
    }  },


  ".readFullIssue": {
    color: "#FFFFFF",
    span: {
      border: "2px solid #FFFFFF",
      borderRadius: "5px",
      paddingInline: "10px",
      color: firstColor,
      backgroundColor: "#FFFFFF",
      float: "left"
    },


    h6: {
      marginLeft: "3em",
      border: "4px solid " + firstColor,
      paddingInline: "10px",
      borderRadius: "5px",
      fontFamily: "sans-serif"
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
      float: "left"
    },
    h6: {
      marginLeft: "3em",
      border: "4px solid " + secondColor,
      paddingInline: "10px",
      borderRadius: "5px",
      fontFamily: "sans-serif"
    },
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
      }
    },

    ".highlightedArticles": {
      display: "none!important",
    },

    ".mainGrid": {
      gridTemplateColumns: "1fr",
      placeItems: "unset"
    },
  }
};

const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
  },
};

export default function FeaturedIssue(props) {

  // index 0 for newest, 1 for recent
  const i = props.newest ? 0 : 1;
  const issue = props.issue;
  const featuredItems = props.featuredItems;

  var isMobile = useIsMobile();

  return (
    <div css={issuesListSx}>
      <div className= {props.newest ? "featuredIssue" : "featuredIssue2"}>
        <Grid className="mainGrid" columns={props.newest ? "2fr 3fr" : "3fr 2fr"}>
          {(props.newest || isMobile) ?
            <div className="issueCover">
              <Link to={"/issues/" + issue.slug.current}>
                {issue.frontCover && "asset" in issue.frontCover && (
                  <img src={optimizeImageLoading(issue.frontCover.asset.url)} loading="lazy" alt="" />
                )}
              </Link>
          </div> : ""}

          <div className = {props.newest ? "featuredArticles" : "featuredArticles2"}>
            <a href={"issues/" + issue.slug.current}>
            <div className="issueTitle">
              <h5><b>{props.newest ? "NEWEST ISSUE" : "RECENT ISSUE"}</b></h5>
              <Themed.h1>{issue.title}</Themed.h1>
              <hr/>
            </div>
            </a>
            <div className="highlightedArticles">
              <Grid gap={6} columns={[1, null, 2]} className="featuredGrid">
                {(featuredItems.slice(0,2)).map((article) => {
                  return (
                    <div className="featuredArticle" key={article.title}>
                      <Link to={"/content/" + article.slug.current}>
                        <div className="articleLink"><Themed.h3><b>{article.title}</b> <br/> By {article.authors[0].name}</Themed.h3></div>
                      </Link>
                    </div>
                  );
                })}
              </Grid>
              <hr/>
              <Grid gap={6} columns={[1, null, 2]} className="featuredGrid">
                {(featuredItems.slice(2,4)).map((article) => {
                  return (
                    <div className="featuredArticle" key={article.title}>
                      <Link to={"/content/" + article.slug.current}>
                        <div className="articleLink"><Themed.h3><b>{article.title}</b> <br/> By {article.authors[0].name}</Themed.h3></div>
                      </Link>
                    </div>
                  );
                })}
              </Grid>
              <hr/>
            </div>
            <Link to={"/issues/" + issue.slug.current}>
              <div className={props.newest ? "readFullIssue" : "readFullIssue2"}>
                <span>&#8594;</span>
                <h6>READ FULL ISSUE</h6>
              </div>
            </Link>
          </div>

          {!props.newest && !isMobile ?
                <div className="issueCover">
                  <Link to={"/issues/" + issue.slug.current}>
                    {issue.frontCover && "asset" in issue.frontCover && (<img src={optimizeImageLoading(issue.frontCover.asset.url)} loading="lazy" alt="" />) }
                  </Link>
                </div> : ""}
        </Grid>
      </div>
    </div>
  );
}
