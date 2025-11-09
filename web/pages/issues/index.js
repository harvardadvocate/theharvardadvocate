/** @jsxImportSource theme-ui */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import sanityClient from "../../lib/sanity.js";
import { buildSubarraysOfSize } from "../../lib/utils/buildSubarrays";
import { optimizeImageLoading } from "../../lib/utils/image.js";
import FeaturedIssue from "../../src/components/FeaturedIssue.js";
import { useIsMobile } from "../../lib/utils/isMobile.js";
import ColorRingLoader from "../../src/components/LoadingRing.js";

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
  a: {
    color: "#000",
    textDecoration: "none",
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

const allIssuesQuery = () =>
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
      }`;

export async function getStaticProps() {
  const data = await sanityClient.fetch(
    `{
      "itemData": ${allIssuesQuery()},
      "featuredItems": *[_type == "contentItem" && "newIssueFeatured" in featuredOptions]  | order(publishedAt desc) {
          title,
          authors[]->{name, slug},
          issue->{title, slug},
          slug,
          mainImage{
            asset->{
            _id,
            url
          }
        }
      }
    }`
  );

  const featuredItems = data.featuredItems.filter(
    (item) => item.issue && item.issue.title === data.itemData[0].title
  );

  const featuredItems2 = data.featuredItems.filter(
    (item) => item.issue && item.issue.title === data.itemData[1].title
  );

  return {
    props: {
      initialItemData: data.itemData,
      initialFeaturedItems: featuredItems,
      initialFeaturedItems2: featuredItems2,
    },
    revalidate: 3600,
  };
}

export default function IssuesList({ initialItemData, initialFeaturedItems, initialFeaturedItems2 }) {
  var isMobile = useIsMobile();

  const itemData = initialItemData;
  const featuredItems = initialFeaturedItems;
  const featuredItems2 = initialFeaturedItems2;

  if (!itemData || !featuredItems) {
    return <ColorRingLoader />;
  }

  var perChunk = 4; // items per row

  if (isMobile) {
    perChunk = 2;
  }

  const resultArray = buildSubarraysOfSize(
    itemData.slice(2 * perChunk - 2),
    perChunk
  );

  return (
    <div css={issuesListSx}>
      <Head>
        <title>Issues - The Harvard Advocate</title>
        <meta name='description' property="og:description" content={
          "Read our current issue, " + itemData[0].title + ", as well as past issues."
        } />
      </Head>

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
                          <Link href={"/issues/" + bigIssue.slug.current}>
                            <div className="bigIssueDiv" key={bigIssue.title}>
                              <div className="issueCover">
                                <img
                                  src={optimizeImageLoading(
                                    bigIssue.frontCover.asset.url
                                  )}
                                  loading="lazy"
                                  alt="Issue cover"
                                ></img>
                              </div>
                              <div className="lowerInfo">
                                <h3 sx={{ variant: "styles.h3" }}>{bigIssue.title}</h3>
                                <Link href={"/issues/" + bigIssue.slug.current}>
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
                      <Link href={"/issues/" + smallIssue.slug.current}>
                        <div className="smallIssueDiv" key={smallIssue.title}>
                          <img
                            src={optimizeImageLoading(
                              smallIssue.frontCover.asset.url
                            )}
                            loading="lazy"
                            alt="Issue cover"
                          ></img>
                          <div className="lowerInfo2">
                            <h4 sx={{ variant: "styles.h4" }}>{smallIssue.title}</h4>
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
