/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { PortableText } from "@portabletext/react";

const homepageSx = {
  margin: "0em 0em 0em 0em",
  ".featuredIssue": {
    width: "100%",
    backgroundColor: "#D6362F",
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    marginTop: "0em",
    marginLeft: "0em",
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
    height: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20%",
    img: {
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
      maxWidth: "100%",
      maxHeight: "75%"
    }
  },

  ".mainGrid": {
    placeItems: "center",
    display: "grid",
    justifyItems: "start",
  },

  ".featuredArticles": {
    color: "#FFFFFF",
    paddingTop: "30px",
    paddingRight: "20px",
    h5: {
      fontFamily: "sans-serif",
    },
  },
  ".readFullIssue": {
    color: "#FFFFFF",
    span: {
      border: "2px solid #FFFFFF",
      borderRadius: "5px",
      paddingInline: "10px",
      color: "#D6362F",
      backgroundColor: "#FFFFFF",
      float: "left"
    },
    h6: {
      marginLeft: "3em",
      border: "4px solid #D6362F",
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
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "4fr 2fr 4fr repeat(2, 2.5fr)",
    gridColumnGap: "0vw",
    paddingLeft: "2vw",
    paddingRight: "2vw",
    paddingTop: "2vh",
    gridRowGap: "0px",
  },

  ".textPreview1, .textPreview2, .textPreview3": {
    p: {
      WebkitLineClamp: "3",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
    },
    br: {
      display: "none",
    }
  },

  ".div1": {
    gridArea: "1 / 1 / 2 / 2",
    borderRight: "1px solid rgba(0, 0, 0, .2)",
  },

  ".div2": {
    gridArea: "1 / 2 / 2 / 3",
    borderRight: "1px solid rgba(0, 0, 0, .2)",
  },

  ".div3": {
    gridArea: "1 / 3 / 2 / 4"
  },

  ".div1, .div2, .div3": {
    padding: "1em",
    textAlign: "left",
    paddingLeft: "2em",
    paddingRight: "2em",
    h3: {
      color: "#d34c21",
    },
    h4: {
      "fontFamily": "Poppins",
    }
  },

  ".div4": {
    gridArea: "2 / 1 / 4 / 3"
  },

  ".div5": {
    gridArea: "4 / 1 / 5 / 3"
  },

  ".div6": {
    gridArea: "5 / 1 / 6 / 3"
  },

  ".div7": {
    gridArea: "2 / 3 / 5 / 4"
  },

  ".div8": {
    gridArea: "5 / 3 / 6 / 4"
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

// // `components` object passed to PortableText
const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
  },
};

export default function Homepage() {

  const [itemData, setItemData] = useState(null);
  const [featuredItems, setFeaturedItems] = useState(null);
  const [featuredRow1, setFeaturedRow1] = useState(null);
  const [featuredRow2, setFeaturedRow2] = useState(null);

  const [featuredArticle1, setFeaturedArticle1] = useState(null);
  const [featuredArticle2, setFeaturedArticle2] = useState(null);
  const [featuredArticle3, setFeaturedArticle3] = useState(null);
  const [featuredArticle4, setFeaturedArticle4] = useState(null);
  const [featuredArticle5, setFeaturedArticle5] = useState(null);
  const [featuredArticle6, setFeaturedArticle6] = useState(null);
  const [featuredArt1, setFeaturedArt1] = useState(null);
  const [featuredArt2, setFeaturedArt2] = useState(null);



  useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "issue"] | order(publishedAt desc)[0] {
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
              issue->{title},
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

      sanityClient
        .fetch(
          `*[_type == "contentItem" && "featuresFeaturedTop" in featuredOptions] | order(publishedAt desc)[0] {
              title,
              authors[]->{name},
              issue->{title},
              slug,
              body,
              sections[]->{title, slug},
              mainImage{
                asset->{
                _id,
                url
              }
            }
          }`
        )
        .then((data) => setFeaturedArticle1(data))
        .catch(console.error);

        sanityClient
          .fetch(
            `*[_type == "contentItem" && "poetryFeaturedTop" in featuredOptions] | order(publishedAt desc)[0] {
                title,
                authors[]->{name},
                issue->{title},
                slug,
                body,
                sections[]->{title, slug},
                mainImage{
                  asset->{
                  _id,
                  url
                }
              }
            }`
          )
          .then((data) => setFeaturedArticle2(data))
          .catch(console.error);

        sanityClient
          .fetch(
            `*[_type == "contentItem" && "fictionFeaturedTop" in featuredOptions] | order(publishedAt desc)[0] {
                title,
                authors[]->{name},
                issue->{title},
                slug,
                body,
                sections[]->{title, slug},
                mainImage{
                  asset->{
                  _id,
                  url
                }
              }
            }`
          )
          .then((data) => setFeaturedArticle3(data))
          .catch(console.error);


          sanityClient
            .fetch(
              `*[_type == "contentItem" && "featuresFeaturedMiddle" in featuredOptions] | order(publishedAt desc)[0] {
                  title,
                  authors[]->{name},
                  issue->{title},
                  slug,
                  body,
                  sections[]->{title, slug},
                  mainImage{
                    asset->{
                    _id,
                    url
                  }
                }
              }`
            )
            .then((data) => setFeaturedArticle4(data))
            .catch(console.error);

            sanityClient
              .fetch(
                `*[_type == "contentItem" && "poetryFeaturedBottom" in featuredOptions] | order(publishedAt desc)[0] {
                    title,
                    authors[]->{name},
                    issue->{title},
                    slug,
                    body,
                    sections[]->{title, slug},
                    mainImage{
                      asset->{
                      _id,
                      url
                    }
                  }
                }`
              )
              .then((data) => setFeaturedArticle5(data))
              .catch(console.error);


              sanityClient
                .fetch(
                  `*[_type == "contentItem" && "fictionFeaturedBottom" in featuredOptions] | order(publishedAt desc)[0] {
                      title,
                      authors[]->{name},
                      issue->{title},
                      slug,
                      body,
                      sections[]->{title, slug},
                      mainImage{
                        asset->{
                        _id,
                        url
                      }
                    }
                  }`
                )
                .then((data) => setFeaturedArticle6(data))
                .catch(console.error);
    }, []);

    if (!itemData || !featuredItems || !featuredArticle1 || !featuredArticle2 || !featuredArticle3 || !featuredArticle4 || !featuredArticle5) {
      return <div>Loading...</div>;
    }
    else {
      console.log("Welcome to the Harvard Advocate.");
      console.log(featuredArticle1.sections[0].title);
      console.log(featuredArticle1.issue.title);
    }

  return (
    <div css={homepageSx}>
    <div className="horizontalContainer">
      <div className="mainContent">
        <div className="featuredIssue">
          <Grid className="mainGrid" columns={"2fr 3fr"}>

            <div className="issueCover">
              <Link to={"/issues/" + itemData.slug.current}>
                {itemData.frontCover && "asset" in itemData.frontCover && (
                  <img src={itemData.frontCover.asset.url} alt="" />
                )}
              </Link>
            </div>

            <div className="featuredArticles">
              <div className="issueTitle">
                <h5><b>NEWEST ISSUE</b></h5>
                <Themed.h1>{itemData.title}</Themed.h1>
                <hr/>
              </div>
              <div className="highlightedArticles">
                <Grid gap={6} columns={[1, null, 2]} className="featuredGrid">
                  {(featuredItems.slice(0,2)).map((article) => {
                    return (
                      <div className="featuredArticle" key={article.title}>
                        <Link to={article.slug.current}>
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
                        <Link to={article.slug.current}>
                          <div className="articleLink"><Themed.h3><b>{article.title}</b> <br/> By {article.authors[0].name}</Themed.h3></div>
                        </Link>
                      </div>
                    );
                  })}
                </Grid>
                <hr/>
              </div>
              <Link to={"/issues/" + itemData.slug.current}>
                <div className="readFullIssue">
                  <span>&#8594;</span>
                  <h6>READ FULL ISSUE</h6>
                </div>
              </Link>
            </div>
          </Grid>
        </div>
        <div className="topArticles">
          <div class="div1">
            <Themed.h3><i>{featuredArticle1.sections[0].title} • {featuredArticle1.issue.title}</i></Themed.h3>
            <Themed.h2>{featuredArticle1.title}</Themed.h2>
            <br/>
            <div className = "textPreview1">
              {featuredArticle1.body && (
                <PortableText
                  value={featuredArticle1.body}
                  hardBreak={false}
                  components={customComponents}
                />
              )}
            </div>
            <br/>
            <Themed.h4>By {featuredArticle1.authors[0].name}</Themed.h4>
          </div>
          <div class="div2">
            <Themed.h3><i>{featuredArticle2.sections[0].title} • {featuredArticle2.issue.title}</i></Themed.h3>
            <Themed.h2>{featuredArticle2.title}</Themed.h2>
            <br/>
            <div className = "textPreview1">
              {featuredArticle2.body && (
                <PortableText
                  value={featuredArticle2.body}
                  hardBreak={false}
                  components={customComponents}
                />
              )}
            </div>
          <br/>
          <Themed.h4>By {featuredArticle2.authors[0].name}</Themed.h4>
          </div>
          <div class="div3">
            <Themed.h3><i>{featuredArticle3.sections[0].title} • {featuredArticle3.issue.title}</i></Themed.h3>
            <Themed.h2>{featuredArticle3.title}</Themed.h2>
            <br/>
            <div className = "textPreview3">
              {featuredArticle3.body && (
                <PortableText
                  value={featuredArticle3.body}
                  hardBreak={false}
                  components={customComponents}
                />
              )}
            </div>
            <br/>
            <Themed.h4>By {featuredArticle3.authors[0].name}</Themed.h4>
          </div>
          <div class="div4">
          </div>
          <div class="div5">
          </div>
          <div class="div6">
          </div>
          <div class="div7">
          </div>
          <div class="div8">
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
