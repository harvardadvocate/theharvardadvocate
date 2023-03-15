/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Frame from "../components/Frame";
import { theme } from "../theme/theme.js";
import { PortableText } from "@portabletext/react";

const mainColor = theme["colors"]["primary"];
const headerColor = theme["colors"]["headerColor"];


// Migrated CSS from Homepage.js with minor alterations
const issueSx = {
  hr: {
    border: "0.1px solid rgba(0, 0, 0, .2)",
  },
  margin: "0em 0em 0em 0em",

  ".featuredIssue": {
    width: "100%",
    backgroundColor: "white",
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
    paddingRight: "2vw",
    paddingTop: "2vh",
    marginTop: "8%",
    marginBottom: "8%",
    h5: {
      fontFamily: "sans-serif",
    },
    hr: {
      border: "0.1px solid white",
    }
  },
  ".sanctumSessions": {
    padding: "0em",
    hr: {
      color: "rgba(0,0,0,0.2)",
    },
    img: {
      padding: "5vw",
    }
  },

  ".socialsGrid": {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gridTemplateRows: "1fr",
    gridColumnGap: "10px",
    gridRowGap: "0px",
    paddingTop: "1vh",
  },

  ".twitterCol": {
    paddingLeft: "3vw",
    paddingRight: "3vw",
  },

  ".instaCol": {
    paddingLeft: "3vw",
    paddingRight: "3vw",
    borderRight: "1px solid rgba(0, 0, 0, .2)",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    position: "relative",
    alignItems: "start",
    alignContent: "space-between",
  },

  ".insta1": {
    scale: "70%",
    position: "relative",
    gridColumn: "1 / span 8",
    gridRow: "1",
    paddingTop: "20%",
    zIndex: "1",
    transform: "rotate(3deg)",

  },

  ".insta2": {
    scale: "70%",
    gridColumn: "4 / -1",
    gridRow: "1",
    transform: "rotate(-3deg)",
    position: "relative",
  },

  ".insta3": {
    scale: "60%",
    gridColumn: "2 / -3",
    gridRow: "1",
    zIndex: "0",
    paddingTop: "100%",
    marginRight: "-30%",
    marginLeft: "30%",
    transform: "rotate(3deg)",
    position: "relative",
  },

  ".fromss": {
    gridColumn: "-1 / 2",
    gridRow: "1",
    width: "10vw",
    zIndex: "0",
    padding: "1em",
    zIndex: "1",
    position: "relative",
  },

  ".readFullIssue": {
    color: "#FFFFFF",
    span: {
      border: "2px solid #FFFFFF",
      borderRadius: "5px",
      paddingInline: "10px",
      color: mainColor,
      backgroundColor: "#FFFFFF",
      float: "left"
    },
    h6: {
      marginLeft: "3em",
      border: "4px solid " + mainColor,
      paddingInline: "10px",
      borderRadius: "5px",
      fontFamily: "sans-serif"
    },
  },

  ".articleLink": {
    color: "#FFFFFF",
  },
  ".topArticles": {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridColumnGap: "0vw",
    paddingLeft: "2vw",
    paddingRight: "2vw",
    paddingTop: "2vh",
    gridRowGap: "0px",
  },

  ".blog": {
    textAlign: "center",
  },

  ".blogGrid": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    gridColumnGap: "10px",
    gridRowGap: "0px",
    paddingTop: "2vh",
    paddingBottom: "2vh",
  },

  ".blogArticle": {
    borderRight: "1px solid rgba(0,0,0,0.20)",
  },

  ".blogArticle:last-child": {
    borderRight: "none",
  },

  ".textPreview1, .textPreview2, .textPreview3, .textPreview4, .textPreview5, .textPreview6, .textPreview": {
    br: {
      display: "none",
    },
    p: {
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
    }
  },

  ".textPreview1, .textPreview2, .textPreview3, .textPreview": {
    p: {
      WebkitLineClamp: "3",
    }
  },

  ".textPreview4": {
    p: {
      WebkitLineClamp: "6",
    }
  },

  ".textPreview5, .textPreview6": {
    p: {
      WebkitLineClamp: "3",
    },
  },

  ".div1": {
    gridArea: "1 / 1 / 2 / 2",
    borderRight: "1px solid black",
  },

  ".div2": {
    gridArea: "1 / 2 / 2 / 3",
    borderRight: "1px solid rgba(0, 0, 0, .2)",
  },

  ".div3": {
    gridArea: "1 / 3 / 2 / 4"
  },

  ".div1, .div2, .div3, .div4, .div5, .div6, .div7, .div8, .blogArticle, .archiveArticle": {
    h3: {
      color: mainColor,
    },
    h4: {
      "fontFamily": "Poppins",
    },
    padding: "1em",
  },

  ".div1, .div2, .div3, .blogArticle": {
    textAlign: "left",
    paddingLeft: "2em",
    paddingRight: "2em",
  },

  ".div4": {
    gridArea: "2 / 1 / 4 / 3",
    borderTop: "1px solid rgba(0, 0, 0, .2)",
    marginTop: "2em",
    display: "flex",
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    alignItems: "center",
  },

  ".div4image": {
    display: "inline-block",
    verticalAlign: "middle",
    minWidth: "50%",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    display: "flex",
  },

  ".div4content": {
    display: "inline-block",
    verticalAlign: "middle",
  },


  ".div5": {
    gridArea: "4 / 1 / 5 / 3",
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    paddingBottom: "1em",

  },

  ".div6": {
    gridArea: "5 / 1 / 6 / 3",
  },

  ".div7": {
    gridArea: "2 / 3 / 5 / 4",
    display: "flex",
    flexDirection: "column",
    marginTop: "2em",
    alignItems: "left",
    marginLeft: "1em",
    borderLeft: "1px solid rgba(0, 0, 0, .2)",
    height: "min-content",
  },

  ".div7image, .div7content": {
    minWidth: "100%",
  },

  ".div8": {
    gridArea: "5 / 3 / 6 / 4",
    borderLeft: "1px solid rgba(0, 0, 0, .2)",
    marginLeft: "1em",
  },

  ".div8image, .div8content": {
    minWidth: "100%",
  },

  ".archiveHeader": {
    textAlign: "center",
  },

  ".archivesMainGrid": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    paddingLeft: "2vw",
    paddingRight: "2vw",
    paddingTop: "2vh",
  },

  ".archivesCol": {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    paddingLeft: "3vw",
    paddingRight: "3vw",
    gridGap: "3vh",
    borderRight: "1px solid rgba(0,0,0,0.2)",
  },

  ".archivesCol:last-child": {
    borderRight: "none",
  },

  ".archiveArticle": {
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    paddingBottom: "5vh",
    padding: "1em",
  },

  ".archiveArticle:last-child": {
    borderBottom: "none",
    paddingBottom: "none",
  },

  ".articleHeader": {
    color: mainColor,
    a: {
      color: mainColor,
    },
  },


  "@media (max-width: 767px)": {
    ".issueCover": {
      marginTop: "0%",
      padding: "5%",
      alignItems: "flex-start"
    },
    ".featuredArticles": {
      padding: "0px",
    },
    ".featuredGrid": {
      display: "none",
      height: "0",
    },
    "hr": {
      display: "none",
    },
    ".mainGrid": {
      gridTemplateColumns: "1fr",
      placeItems: "unset"
    },
    ".issueTitle": {
      textAlign: "center",
    },
    ".readFullIssue": {
      textAlign: "center",
      span: {
        display: "none",
      },
      h6: {
        marginLeft: "0em",
        textDecoration: "underline",
      },
    },
  },
};

const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
  },
};

export default function Issue() {
  const [items, setItems] = useState(null);
  const [issue, setIssue] = useState(null);
  const { issueSlug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "issue" && slug.current == $issueSlug]{
        title,
        slug,
        _id,
        frontCover{
          asset->{
            _id,
            url
          }
        }
      }`, {
        issueSlug,
      })
      .then((issueData) => {
        setIssue(issueData[0]);
        // See what data is set to issue: console.log(issueData[0])
        sanityClient
          .fetch(`*[_type == "contentItem" && $issueId == issue->_id]{
              title,
              authors[]->{name},
              issue->{title, slug},
              slug,
              body,
              sections[]->{title, slug},
              mainImage{
                asset->{
                _id,
                url
              }
            }
          }`,
            { issueId: issueData[0]["_id"] }
          )
          .then((data) => setItems(data))
          .catch(console.error);
      })
      .catch(console.error);
  }, [issueSlug]);

  if (!items || !issue) return <div>Loading...</div>;

  // console.log("Content Items:", items)
  return (
    <div css={issueSx}>
      <Frame
        path={[
          { name: "Issues", slug: "/issues" },
          { name: issue.title, slug: "/issues/" + issue.slug.current },
          { name: issue.frontCover, slug: "/issues/" + issue.slug.current },
        ]}
      >

        <div className="horizontalContainer">
          <div className="mainContent">
            <div className="featuredIssue">
              <Grid className="mainGrid" columns={"1fr 1fr 1fr"}>
                <div className="issueCover">
                  <img src={issue.frontCover.asset.url} alt="Front Cover" />
                </div>


                {items.slice(0, 2).map((article) => {
                  return (
                    <div className="topArticles">
                      <div className="div1">
                        <div className="articleHeader">
                          <Themed.h3><i><a href={"/sections/" + article.sections[0].slug.current}>{article.sections[0].title}</a> • {issue.title}</i></Themed.h3>
                        </div>
                        <a href={"/" + article.slug.current}><Themed.h2>{article.title}</Themed.h2></a>
                        <br />
                        <Link to={"/" + article.slug.current}>
                          <div className="textPreview1">
                            {article.body && (
                              <PortableText
                                value={article.body}
                                hardBreak={false}
                                components={customComponents}
                              />
                            )}
                          </div>
                        </Link>

                        <br />
                        <Themed.h4>By {article.authors[0].name}</Themed.h4>
                      </div>
                    </div>
                  );
                })}
              </Grid>

              {items.slice(2).map((adtlarticle) => {
                // console.log("AdtlArticles: ", adtlarticle)
                return (

                  <div className="div4">
                    <div className="div4content">
                      <div className="articleHeader">
                        <Themed.h3><i><a href={"/sections/" + adtlarticle.sections[0].slug.current}>{adtlarticle.sections[0].title}</a> • {adtlarticle.issue.title}</i></Themed.h3>
                      </div>
                      <a href={"/" + adtlarticle.slug.current}><Themed.h2>{adtlarticle.title}</Themed.h2></a>
                      <br />
                      <Link to={"/" + adtlarticle.slug.current}>
                        <div className="textPreview4">
                          {adtlarticle.body && (
                            <PortableText
                              value={adtlarticle.body}
                              hardBreak={false}
                              components={customComponents}
                            />
                          )}
                        </div>
                      </Link>
                      <br />
                      <Themed.h4>By {adtlarticle.authors[0].name}</Themed.h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
