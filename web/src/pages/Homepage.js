/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { PortableText } from "@portabletext/react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import FeaturedIssue from "../components/FeaturedIssue.js";
import TextContentList from "../components/TextContentList.js";
import TextListElement from "../components/TextListElement.js";
import MixedGrid from "../components/MixedGrid.js";
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

    if (!featuredItems || !featuredArticle1 || !featuredArticle2 || !featuredArticle3 || !featuredArticle4 || !featuredArticle5 || !featuredArticle6 || !featuredArt1 || !featuredArt2 || !instagramImages || !fromTheArchivesContent) {
      return <div>Loading...</div>;
    }
    else {
      console.log("Welcome to the Harvard Advocate.");
      console.log(fromTheArchivesContent);
      // console.log(featuredArticle5.authors[0]);
    }

  return (
    <div css={homepageSx}>
    <div className="horizontalContainer">
      <div className="mainContent">
        
      
      <FeaturedIssue newest={true} ></FeaturedIssue>
      <MixedGrid home={true} 
      
      items={[featuredArticle1, featuredArticle2, 
        featuredArticle3, featuredArticle4, featuredArticle5, 
        featuredArticle6, featuredArt1, featuredArt2]}>
        
      </MixedGrid>
        
        
        <div className="sanctumSessions">
          <hr/>
          <img src="/sanctum_sessions.png"/>
        </div>



        <div className="blog">
          <hr/>
          <Themed.h2><a href="sections/blog/">Blog</a></Themed.h2>
          {/* early draft for an improved "Blog" scribble */}
          {/* <svg width="100%" height="100%">
            <rect width="100%" height="100%" fill="white" />
          <polyline points="300,80 380,70 380,100 440,90" fill="none" stroke="black" />

            <text x="300" y="100" font-family="Garamond" font-size="55"
                  fill="black" stroke="black" stroke-width="1">
                    Blog
            </text>
          </svg> */}

          <hr/>
          <Themed.p><i>The fresh online pieces we experiment with outside of our print cycle. Or just a blog.</i></Themed.p>
          <TextContentList items={[featuredArticle1, featuredArticle2, featuredArticle3]} border={false} home={false}></TextContentList>
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


          {/* originally planned to be 0,2 9, 11 4, 6 */}

          <TextContentList items={fromTheArchivesContent.slice(0, 3)} border={true} home={true}></TextContentList>
          <TextContentList items={fromTheArchivesContent.slice(8, 11)} border={false} home={true}></TextContentList>

        </div>
      </div>
    </div>
    </div>
  );
}
