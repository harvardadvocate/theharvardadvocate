/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { PortableText } from "@portabletext/react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { theme } from "../theme/theme";

const mainColor = theme["colors"]["primary"];
const headerColor = theme["colors"]["headerColor"];

const homepageSx = {
  hr: {
    border: "0.1px solid rgba(0, 0, 0, .2)",
  },
  margin: "0em 0em 0em 0em",

  ".featuredIssue": {
    width: "100%",
    backgroundColor: mainColor,
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
    padding:"0em",
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
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "2fr 2fr 2fr repeat(2, 2fr)",
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
    borderRight: "1px solid rgba(0, 0, 0, .2)",
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
      color: headerColor,
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
    color: headerColor,
    a: {
      color: headerColor,
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

  const [instagramImages, setInstagramImages] = useState(null);

  const [fromTheArchivesContent, setFromTheArchivesContent] = useState(null);


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
          `*[_type == "contentItem" && "newIssueFeatured" in featuredOptions]  | order(publishedAt desc) {
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

      sanityClient
        .fetch(
          `*[_type == "contentItem" && "featuresFeaturedTop" in featuredOptions] | order(publishedAt desc)[0] {
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
          }`
        )
        .then((data) => setFeaturedArticle1(data))
        .catch(console.error);

        sanityClient
          .fetch(
            `*[_type == "contentItem" && "poetryFeaturedTop" in featuredOptions] | order(publishedAt desc)[0] {
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
            }`
          )
          .then((data) => setFeaturedArticle2(data))
          .catch(console.error);

        sanityClient
          .fetch(
            `*[_type == "contentItem" && "fictionFeaturedTop" in featuredOptions] | order(publishedAt desc)[0] {
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
            }`
          )
          .then((data) => setFeaturedArticle3(data))
          .catch(console.error);


          sanityClient
            .fetch(
              `*[_type == "contentItem" && "featuresFeaturedMiddle" in featuredOptions] | order(publishedAt desc)[0] {
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
              }`
            )
            .then((data) => setFeaturedArticle4(data))
            .catch(console.error);

            sanityClient
              .fetch(
                `*[_type == "contentItem" && "poetryFeaturedBottom" in featuredOptions] | order(publishedAt desc)[0] {
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
                }`
              )
              .then((data) => setFeaturedArticle5(data))
              .catch(console.error);


              sanityClient
                .fetch(
                  `*[_type == "contentItem" && "fictionFeaturedBottom" in featuredOptions] | order(publishedAt desc)[0] {
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
                  }`
                )
                .then((data) => setFeaturedArticle6(data))
                .catch(console.error);

              sanityClient
                .fetch(
                  `*[_type == "contentItem" && "artFeaturedMiddleRight" in featuredOptions] | order(publishedAt desc)[0] {
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
                  }`
                )
                .then((data) => setFeaturedArt1(data))
                .catch(console.error);

              sanityClient
                .fetch(
                  `*[_type == "contentItem" && "artFeaturedBottomRight" in featuredOptions] | order(publishedAt desc)[0] {
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
                  }`
                )
                .then((data) => setFeaturedArt2(data))
                .catch(console.error);

              sanityClient
                .fetch(
                  `*[_type == "imageAsset" && picsFrom21SouthStreet == true]  | order(publishedAt desc) {
                      title,
                      slug,
                      image{
                        asset->{
                        _id,
                        url
                      }
                    }
                  }[0...3]`
                )
                .then((data) => setInstagramImages(data))
                .catch(console.error);


              sanityClient
                .fetch(
                  `*[_type == "imageAsset" && picsFrom21SouthStreet == true]  | order(publishedAt desc) {
                      title,
                      slug,
                      image{
                        asset->{
                        _id,
                        url
                      }
                    }
                  }[0...3]`
                )
                .then((data) => setInstagramImages(data))
                .catch(console.error);

              sanityClient
                .fetch(
                  `*[_type == "contentItem" && issue->title == "Winter 2009" && ("Fiction" in sections[]->title || "Poetry" in sections[]->title || "Features" in sections[]->title)]  | order(publishedAt desc) {
                      title,
                      authors[]->{name},
                      issue->{title, slug},
                      slug,
                      body,
                      sections[]->{title, slug},
                  }`
                )
                .then((data) => setFromTheArchivesContent(data))
                .catch(console.error);
    }, []);

    if (!itemData || !featuredItems || !featuredArticle1 || !featuredArticle2 || !featuredArticle3 || !featuredArticle4 || !featuredArticle5 || !featuredArticle6 || !featuredArt1 || !featuredArt2 || !instagramImages || !fromTheArchivesContent) {
      return <div>Loading...</div>;
    }
    else {
      console.log("Welcome to the Harvard Advocate.");
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
          <div className="div1">
            <div className="articleHeader">
              <Themed.h3><i><a href={"sections/" + featuredArticle1.sections[0].slug.current}>{featuredArticle1.sections[0].title}</a> • <a href={"issues/" + featuredArticle1.issue.slug.current}>{featuredArticle1.issue.title}</a></i></Themed.h3>
            </div>
            <a href={featuredArticle1.slug.current}><Themed.h2>{featuredArticle1.title}</Themed.h2></a>
            <br/>
            <Link to={featuredArticle1.slug.current}>
            <div className = "textPreview1">
              {featuredArticle1.body && (
                <PortableText
                  value={featuredArticle1.body}
                  hardBreak={false}
                  components={customComponents}
                />
              )}
            </div>
            </Link>

            <br/>
            <Themed.h4>By {featuredArticle1.authors[0].name}</Themed.h4>
          </div>
          <div className="div2">
            <div className="articleHeader">
              <Themed.h3><i><a href={"sections/" + featuredArticle2.sections[0].slug.current}>{featuredArticle2.sections[0].title}</a> • <a href={"issues/" + featuredArticle2.issue.slug.current}>{featuredArticle2.issue.title}</a></i></Themed.h3>
            </div>
            <a href={featuredArticle2.slug.current}><Themed.h2>{featuredArticle2.title}</Themed.h2></a>
            <br/>
            <Link to={featuredArticle2.slug.current}>
            <div className = "textPreview1">
              {featuredArticle2.body && (
                <PortableText
                  value={featuredArticle2.body}
                  hardBreak={false}
                  components={customComponents}
                />
              )}
            </div>
            </Link>
          <br/>
          <Themed.h4>By {featuredArticle2.authors[0].name}</Themed.h4>
          </div>
          <div className="div3">
            <div className="articleHeader">
              <Themed.h3><i><a href={"sections/" + featuredArticle3.sections[0].slug.current}>{featuredArticle3.sections[0].title}</a> • <a href={"issues/" + featuredArticle3.issue.slug.current}>{featuredArticle3.issue.title}</a></i></Themed.h3>
            </div>
            <a href={featuredArticle3.slug.current}><Themed.h2>{featuredArticle3.title}</Themed.h2></a>
            <br/>
            <Link to={featuredArticle3.slug.current}>
            <div className = "textPreview3">
              {featuredArticle3.body && (
                <PortableText
                  value={featuredArticle3.body}
                  hardBreak={false}
                  components={customComponents}
                />
              )}
            </div>
            </Link>
            <br/>
            <Themed.h4>By {featuredArticle3.authors[0].name}</Themed.h4>
          </div>
          <div className="div4">
            <div className="div4image">
              <a href={featuredArticle4.slug.current}><img src={featuredArticle4.mainImage.asset.url} alt="Illustration"></img></a>
            </div>
            <div className="div4content">
              <div className="articleHeader">
                <Themed.h3><i><a href={"sections/" + featuredArticle4.sections[0].slug.current}>{featuredArticle4.sections[0].title}</a> • <a href={"issues/" + featuredArticle4.issue.slug.current}>{featuredArticle4.issue.title}</a></i></Themed.h3>
              </div>
              <a href={featuredArticle4.slug.current}><Themed.h2>{featuredArticle4.title}</Themed.h2></a>
              <br/>
              <Link to={featuredArticle4.slug.current}>
              <div className = "textPreview4">
                {featuredArticle4.body && (
                  <PortableText
                    value={featuredArticle4.body}
                    hardBreak={false}
                    components={customComponents}
                  />
                )}
              </div>
              </Link>
              <br/>
              <Themed.h4>By {featuredArticle4.authors[0].name}</Themed.h4>
            </div>
          </div>
          <div className="div5">

            <div className="articleHeader">
              <Themed.h3><i><a href={"sections/" + featuredArticle5.sections[0].slug.current}>{featuredArticle5.sections[0].title}</a> • <a href={"issues/" + featuredArticle5.issue.slug.current}>{featuredArticle5.issue.title}</a></i></Themed.h3>
            </div>

            <a href={featuredArticle5.slug.current}><Themed.h2>{featuredArticle5.title}</Themed.h2></a>
            <br/>
            <Link to={featuredArticle5.slug.current}>
            <div className = "textPreview5">
              {featuredArticle5.body && (
                <PortableText
                  value={featuredArticle5.body}
                  hardBreak={false}
                  components={customComponents}
                />
              )}
            </div>
            </Link>
            <br/>
            <Themed.h4>By {featuredArticle5.authors[0].name}</Themed.h4>
          </div>
          <div className="div6">
            <div className="articleHeader">
              <Themed.h3><i><a href={"sections/" + featuredArticle6.sections[0].slug.current}>{featuredArticle6.sections[0].title}</a> • <a href={"issues/" + featuredArticle6.issue.slug.current}>{featuredArticle6.issue.title}</a></i></Themed.h3>
            </div>
            <a href={featuredArticle6.slug.current}><Themed.h2>{featuredArticle6.title}</Themed.h2></a>
            <br/>
            <Link to={featuredArticle6.slug.current}>
            <div className = "textPreview6">
              {featuredArticle6.body && (
                <PortableText
                  value={featuredArticle6.body}
                  hardBreak={false}
                  components={customComponents}
                />
              )}
            </div>
            </Link>
            <br/>
            <Themed.h4>By {featuredArticle6.authors[0].name}</Themed.h4>
          </div>
          <div className="div7">
            <div className="div7image">
              <a href={featuredArt1.slug.current}><img src={featuredArt1.mainImage.asset.url} alt="Art image"></img></a>
            </div>
            <div className="div7content">
              <div className="articleHeader">
                <Themed.h3><i><a href={"sections/" + featuredArt1.sections[0].slug.current}>{featuredArt1.sections[0].title}</a> • <a href={"issues/" + featuredArt1.issue.slug.current}>{featuredArt1.issue.title}</a></i></Themed.h3>
              </div>
              <a href={featuredArt1.slug.current}><Themed.h2>{featuredArt1.title}</Themed.h2></a>
              <Themed.h4>By {featuredArt1.authors[0].name}</Themed.h4>
            </div>
          </div>
          <div className="div8">
            <div className="div8image">
              <a href={featuredArt2.slug.current}><img src={featuredArt2.mainImage.asset.url} alt="Art image"></img></a>
            </div>
            <div className="div8content">
              <div className="articleHeader">
                <Themed.h3><i><a href={"sections/" + featuredArt2.sections[0].slug.current}>{featuredArt2.sections[0].title}</a> • <a href={"issues/" + featuredArt2.issue.slug.current}>{featuredArt2.issue.title}</a></i></Themed.h3>
              </div>
              <a href={featuredArt2.slug.current}><Themed.h2>{featuredArt2.title}</Themed.h2></a>
              <Themed.h4>By {featuredArt2.authors[0].name}</Themed.h4>
            </div>

          </div>
        </div>
        <div className="sanctumSessions">
          <hr/>
          <img src="/sanctum_sessions.png"/>
        </div>
        <div className="blog">
          <hr/>
          <Themed.h2><a href="sections/blog/">Blog</a></Themed.h2>
          <hr/>
          <Themed.p><i>The fresh online pieces we experiment with outside of our print cycle. Or just a blog.</i></Themed.p>
          <div className="blogGrid">
            {([featuredArticle1, featuredArticle2, featuredArticle3]).map((article) => {
              return (
                <div className="blogArticle" key={article.title}>
                  <div className="articleHeader">
                    <Themed.h3><i><a href={"sections/"+article.sections[0].slug.current}>{article.sections[0].title}</a> • <a href={"issues/"+article.issue.slug.current}>{article.issue.title}</a></i></Themed.h3>
                  </div>
                  <a href={article.slug.current}><Themed.h2>{article.title}</Themed.h2></a>
                  <br/>
                  <Link to={article.slug.current}>
                    <div className = "textPreview">
                      {article.body && (
                        <PortableText
                          value={article.body}
                          hardBreak={false}
                          components={customComponents}
                        />
                      )}
                    </div>
                  </Link>
                  <br/>
                  <Themed.h4>By {article.authors[0].name}</Themed.h4>
                </div>
              );
            })}
          </div>
          <hr/>
        </div>
        <div className="socialsFeed">
          <div className="socialsGrid">
            <a href="https://instagram.com/harvardadvocate" target="_blank">
              <div className="instaCol">
                <div className="fromss">
                  <img src="/picsfrom21ss.jpg"></img>
                </div>
                <div className="insta1">
                  <img src={instagramImages[2].image.asset.url}></img>
                </div>
                <div className="insta2">
                  <img src={instagramImages[0].image.asset.url}></img>
                </div>
                <div className="insta3">
                  <img src={instagramImages[1].image.asset.url}></img>
                </div>
              </div>
            </a>
            <div className="twitterCol">
              {/*
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="harvardadvocate"
                options={{height: 600}}
              />
              */}
            </div>
          </div>
        </div>
        <div className="fromTheArchives">
          <div className = "archiveHeader">
            <hr/>
            <Themed.h2>From The Archives</Themed.h2>
            <hr/>
          </div>
          <div className="archivesMainGrid">
          {([fromTheArchivesContent.slice(0,2), fromTheArchivesContent.slice(9,11), fromTheArchivesContent.slice(4,6)]).map((archiveSlices) => {
            return (
              <div className="archivesCol">
              {(archiveSlices).map((archiveArticle) => {
                return (
                  <div className="archiveArticle" key={archiveArticle.title}>
                    <div className="articleHeader">
                      <Themed.h3><i><a href={"sections/"+archiveArticle.sections[0].slug.current}>{archiveArticle.sections[0].title}</a> • <a href={"issues/"+archiveArticle.issue.slug.current}>{archiveArticle.issue.title}</a></i></Themed.h3>
                    </div>
                    <a href={archiveArticle.slug.current}><Themed.h2>{archiveArticle.title}</Themed.h2></a>
                    <br/>
                    <Link to={archiveArticle.slug.current}>
                      <div className = "textPreview">
                        {archiveArticle.body && (
                          <PortableText
                            value={archiveArticle.body}
                            hardBreak={false}
                            components={customComponents}
                          />
                        )}
                      </div>
                    </Link>
                    <br/>
                    <Themed.h4>By {archiveArticle.authors[0].name}</Themed.h4>
                  </div>
                );
              })}
              </div>

            );
          })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
