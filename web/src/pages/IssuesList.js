/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { theme } from "../theme/theme.js";
import FeaturedIssue from "../components/FeaturedIssue.js";

const firstColor = theme["colors"]["primary"];
const secondColor = theme["colors"]["secondary"];

const issuesListSx = {
  hr: {
    border: "0.1px solid rgba(0, 0, 0, .2)",
  },
  ".featuredIssue": {
    width: "100%",
    backgroundColor: firstColor,
  },

  ".featuredIssue2": {
    width: "100%",
    backgroundColor: secondColor,
  },

  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    marginTop: "0em",
    marginLeft: "0em",
    marginBottom: "1em",
    minHeight: "100vh",
    ".mainContent": {
      flexGrow: 1,
    },
  },
  ".mainContent": {
    marginLeft: "0px",
  },
  ".issueItem": {
    cursor: "pointer",
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

    ".readFullIssueBig": {
      color: "#000000",
      display: "flex",
      alignItems: "center",
      span: {
        border: "2px solid #000000",
        borderRadius: "5px",
        paddingInline: "10px",
        color: "#FFFFFF",
        backgroundColor: "#000000",
        float: "left"
      },
      p: {
        paddingInline: "10px",
        fontFamily: "sans-serif",
        fontSize: "0.6em",
      },


    },


  ".articleLink": {
    color: "#FFFFFF",
  },
  ".topArticles": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "2fr 2fr 2fr repeat(2, 2fr)",
    gridColumnGap: "0vw",
    paddingLeft: "2vw",
    paddingRight: "2vw",
    paddingTop: "2vh",
    gridRowGap: "0px",
  },


  ".bigGrid": {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr",
    paddingTop: "5vh",

  },

  ".bigGridRow": {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1fr",
    img: {
      maxHeight: "62vh",
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
    },
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    paddingBottom: "5vh",
  },

  ".bigGridRow:last-child": {
    borderBottom: "none",
    paddingTop: "5vh",
  },

  ".bigIssueDiv": {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    paddingLeft: "7vw",
    paddingRight: "7vw",
    flexDirection: "column",
    borderRight: "1px solid rgba(0,0,0,0.2)",
  },

  ".bigIssueDiv:last-child": {
    borderRight: "none",
  },

  ".lowerInfo": {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    height: "100%",
    justifyContent: "space-between",
  },


  ".smallGrid": {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr",
    paddingLeft: "1vw",
    paddingRight: "1vw",

  },

  ".smallGridRow": {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    img: {
      maxHeight: "62vh",
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
    },
    alignItems: "baseline",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    paddingBottom: "5vh",
    paddingTop: "5vh",

  },

  ".smallGridRow:last-child": {
    borderBottom: "none",
  },

  ".smallGridRow:first-child": {
    paddingTop: "none",
    borderTop: "1px solid rgba(0,0,0,0.2)",
  },

  ".lowerInfo2": {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "100%",
  },

  ".smallIssueDiv": {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    paddingLeft: "2vw",
    paddingRight: "2vw",
    flexDirection: "column",
    borderRight: "1px solid rgba(0,0,0,0.2)",
  },

  ".smallIssueDiv:last-child": {
    borderRight: "none",
  },

  img: {
    marginBottom: "1vh",
  }
};
// // `components` object passed to PortableText
const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
  },
};

export default function IssuesList() {

    const [itemData, setItemData] = useState(null);
    const [featuredItems, setFeaturedItems] = useState(null);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "issue"] | order(publishedAt desc) {
          title,
          slug,
          description,
          frontCover{
            asset->{
              _id,
              url
            }
          }
        }`
          )
          .then((data) => {
            setItemData(data);
          })
          .catch(console.error);

        sanityClient
          .fetch(
            `*[_type == "contentItem" && "Featured Article" in sections[]->title]  | order(publishedAt desc) {
                title,
                authors[]->{name},
                issue->{title, slug},
                slug,
                mainImage{
                  asset->{
                  _id,
                  url
                }
              }
            }[0...4]`
          )
          .then((data) => setFeaturedItems(data))
          .catch(console.error);
      }, []);

      if (!itemData || !featuredItems) {
        return <div>Loading...</div>;
      }
      else {
        console.log("Welcome to the Harvard Advocate.");
        console.log(itemData);
      }

    return (
      <div css={issuesListSx}>
      <div className="horizontalContainer">
        <div className="mainContent">

        <FeaturedIssue newest={true} ></FeaturedIssue>
        <FeaturedIssue newest={false} ></FeaturedIssue>
          
          <div className = "bigGrid">
          {([itemData.slice(2,4), itemData.slice(4,6)]).map((issueSlices) => {
            return (
              <div className="bigGridRow">
              {(issueSlices).map((bigIssue) => {
                return (
                  <Link to={"/issues/" + bigIssue.slug.current}>
                  <div className="bigIssueDiv" key={bigIssue.title}>
                    <img src={bigIssue.frontCover.asset.url}></img>
                    <div className="lowerInfo">
                      <Themed.h3>{bigIssue.title} Issue</Themed.h3>
                      <Link to={"/issues/" + bigIssue.slug.current}>
                      <div className="readFullIssueBig">
                        <span>&#8594;</span>&nbsp;
                        <p><b>READ FULL ISSUE</b></p>
                      </div>
                      </Link>
                    </div>
                  </div>
                  </Link>
                );
              })}
              </div>
            );
          })}
          </div>
          <div className="smallGrid">
            {([itemData.slice(6,10), itemData.slice(10,14), itemData.slice(14,18)]).map((issueSlices) => {
              return (
                <div className="smallGridRow">
                {(issueSlices).map((smallIssue) => {
                  return (
                    <Link to={"/issues/" + smallIssue.slug.current}>
                    <div className="smallIssueDiv" key={smallIssue.title}>
                      <img src={smallIssue.frontCover.asset.url}></img>
                      <div className="lowerInfo2">
                        <Themed.h4>{smallIssue.title} Issue</Themed.h4>
                      </div>
                    </div>
                    </Link>
                  );
                })}
                </div>
              );
            })}

          </div>
        </div>
      </div>
      </div>
    );
  }
