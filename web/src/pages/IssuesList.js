/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { theme } from "../theme/theme.js";
import { buildSubarraysOfSize } from "../assets/utils";
import { optimizeImageLoading } from "../utils/image.js";
import FeaturedIssue from "../components/FeaturedIssue.js";
import { useIsMobile } from "../utils/isMobile.js";
import ColorRingLoader from "../components/LoadingRing.js";

const firstColor = theme["colors"]["primary"];
const secondColor = theme["colors"]["secondary"];

const issuesListSx = {
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
      float: "left",
    },
    p: {
      paddingInline: "10px",
      fontFamily: "sans-serif",
      fontSize: "0.6em",
    },
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
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    paddingBottom: "5vh",
    alignItems: "end",
  },

  ".issueCover": {
    display: "flex",
    justifyContent: "center",
    img: {
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
    },
    width: "100%",
  },

  ".bigGridRow:last-child": {
    borderBottom: "none",
    paddingTop: "5vh",
  },

  ".bigIssueDiv": {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    paddingLeft: "11vw",
    paddingRight: "11vw",
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
    paddingBottom: "2vh",
    paddingTop: "2vh",
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
  },

  "@media (max-width: 835px)": {
    ".smallGridRow": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
};

const virtualStyle = {
  position: "absolute",
  height: "200px",
  top: "-500px",
  width: "1px",
  pointerEvent: "none",
};

const issuesToQuery = (start, end) =>
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
      }[${start}...${end}]`;

// // `components` object passed to PortableText
const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
  },
};

export default function IssuesList() {
  var isMobile = useIsMobile();

  const [itemData, setItemData] = useState(null);
  const [featuredItems, setFeaturedItems] = useState(null);
  const [featuredItems2, setFeaturedItems2] = useState(null);

  const loadItems = (num) => {
    var currentIssue = itemData.length;
    sanityClient
      .fetch(issuesToQuery(currentIssue, currentIssue + num)) // query section
      .then((data) => setItemData([...itemData, ...data]))
      .catch(console.error);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `
              {
                "itemData": ${issuesToQuery(0, 10)},
                "featuredItems": *[_type == "contentItem" && "newIssueFeatured" in featuredOptions]  | order(publishedAt desc) {
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
                }
              }
              `
      )
      .then((data) => {
        setItemData(data.itemData);
        setFeaturedItems2(
          data.featuredItems.filter(
            (item) => item.issue.title == data.itemData[1].title
          )
        );
        setFeaturedItems(
          data.featuredItems.filter(
            (item) => item.issue.title == data.itemData[0].title
          )
        );
      })
      .catch(console.error);
  }, []);

  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio === 0) return;
    loadItems(4);
  });

  useEffect(() => {
    const currentElement = document.querySelector(".more");
    if (currentElement) {
      intersectionObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        intersectionObserver.unobserve(currentElement);
      }
    };
  }, [intersectionObserver]);

  if (!itemData || !featuredItems) {
    return <ColorRingLoader />;
  } else {
  }

  var perChunk = 4; // items per row

  if (isMobile) {
    perChunk = 2;
  }

  // map 4 to 6
  // map 2 to 2

  const resultArray = buildSubarraysOfSize(
    itemData.slice(2 * perChunk - 2),
    perChunk
  );

  return (
    <div css={issuesListSx}>
      <div className="horizontalContainer">
        <div className="mainContent">
          <FeaturedIssue
            newest={true}
            issue={itemData[0]}
            featuredItems={featuredItems}
          />
          <FeaturedIssue
            newest={false}
            issue={itemData[1]}
            featuredItems={featuredItems2}
          />
          {!isMobile ? (
            <div className="bigGrid">
              {[itemData.slice(2, 4), itemData.slice(4, 6)].map(
                (issueSlices) => {
                  return (
                    <div className="bigGridRow">
                      {issueSlices.map((bigIssue) => {
                        return (
                          <Link to={"/issues/" + bigIssue.slug.current}>
                            <div className="bigIssueDiv" key={bigIssue.title}>
                              <div className="issueCover">
                                <img
                                  src={optimizeImageLoading(
                                    bigIssue.frontCover.asset.url
                                  )}
                                  loading="lazy"
                                ></img>
                              </div>
                              <div className="lowerInfo">
                                <Themed.h3>{bigIssue.title}</Themed.h3>
                                <Link to={"/issues/" + bigIssue.slug.current}>
                                  <div className="readFullIssueBig">
                                    <span>&#8594;</span>&nbsp;
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  );
                }
              )}
            </div>
          ) : (
            ""
          )}
          <div className="smallGrid">
            {resultArray.map((issueSlices, index) => {
              return (
                <div key={index} className="smallGridRow">
                  {issueSlices.map((smallIssue) => {
                    return (
                      <Link to={"/issues/" + smallIssue.slug.current}>
                        <div className="smallIssueDiv" key={smallIssue.title}>
                          <img
                            src={optimizeImageLoading(
                              smallIssue.frontCover.asset.url
                            )}
                            loading="lazy"
                          ></img>
                          <div className="lowerInfo2">
                            <Themed.h4>{smallIssue.title}</Themed.h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  {resultArray.length - 2 === index ? (
                    <div className="more">
                      <p style={virtualStyle}></p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
