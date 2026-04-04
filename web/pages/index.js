/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { NextSeo } from 'next-seo';
import { sanityClient } from "../lib/sanity.js";
import { getResources } from "../lib/queries/homepage.js";
import { optimizeImageLoading } from "../lib/utils/image.js";
import FeaturedIssue from "../src/components/FeaturedIssue.js";
import MixedGrid from "../src/components/MixedGrid.js";
import TextContentList from "../src/components/TextContentList.js";
import { useIsMobile } from "../lib/utils/isMobile.js";
import RandomUpdate from "../src/components/RandomUpdate.js";
import { createOrganizationSchema, createWebSiteSchema } from "../lib/seo/schemas.js";

const MOGU_AD_URL = "https://www.mogu.earth/offerings";
const BPYO_AD_URL = "https://bostonphil.my.salesforce-sites.com/ticket#/instances/a0FPQ00000Tln6E2AR";

const homepageSx = {
  ".fontMod": {
    fontFamily: "Bernhard Gothic Medium, serif",
  },
  hr: {
    border: "0.1px solid rgba(0, 0, 0, .2)",
  },
  margin: "0em 0em 0em 0em",

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

  ".sanctumSessions": {
    padding: "0em",
    hr: {
      color: "rgba(0,0,0,0.2)",
    },
  },

  ".adRow": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1vw",
    padding: "1vw 2vw",
    alignItems: "center",
    justifyItems: "center",
    a: {
      display: "flex",
      justifyContent: "center",
    },
    img: {
      maxHeight: "45vh",
      maxWidth: "100%",
      width: "auto",
      objectFit: "contain",
      display: "block",
    },
  },

  ".adFull": {
    padding: "1vw 2vw",
    textAlign: "center",
    img: {
      maxHeight: "35vh",
      maxWidth: "100%",
      objectFit: "contain",
      display: "block",
      margin: "0 auto",
    },
  },

  ".socialsFeed": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1vw",
    paddingTop: "1vh",
    maxHeight: "70vh",
    overflow: "hidden",
    alignItems: "center",
  },

  ".socialsGrid": {
    overflow: "hidden",
    maxHeight: "70vh",
  },

  ".twitterCol": {
    paddingLeft: "2vw",
    paddingRight: "2vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      maxWidth: "100%",
      width: "auto",
      maxHeight: "50vh",
      objectFit: "contain",
      display: "block",
    },
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

  ".announcement": {
    color: "black",
    a: {
      color: "#00008B",
      textDecoration: "underline",
    },
  },

  ".fromss": {
    gridColumn: "-1 / 2",
    gridRow: "1",
    width: "10vw",
    padding: "1em",
    zIndex: "1",
    position: "relative",
  },

  ".blog": {
    textAlign: "center",
  },

  ".notes": {
    textAlign: "center",
  },

  ".archiveHeader": {
    textAlign: "center",
  },

  "@media (max-width: 835px)": {
    ".mainGrid": {
      gridTemplateColumns: "1fr",
      placeItems: "unset",
    },

    ".socialsFeed": {
      gridTemplateColumns: "1fr",
    },

    ".socialsGrid": {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      gridColumnGap: "0",
      gridRowGap: "0",
      paddingTop: "1vh",
      maxHeight: "90vh",
      overflow: "hidden",
    },

    ".adRow": {
      gridTemplateColumns: "1fr",
    },

    ".blogHeader, .archiveHeader": {
      paddingInline: "5vw",
    },
  },
};

export default function Homepage({
  itemData,
  featuredItems,
  featuredArticle1,
  featuredArticle2,
  featuredArticle3,
  featuredArticle4,
  featuredArticle5,
  featuredArticle6,
  featuredArt1,
  featuredArt2,
  Blog1,
  Blog2,
  Blog3,
  instagramImages,
  fromTheArchivesContent,
}) {
  const isMobile = useIsMobile();

  const [randArray, setRandArray] = useState([0, 1, 2, 3, 4, 5, 6]);

  const handleUpdate = (newNumbers) => {
    setRandArray(newNumbers);
  };

  return (
    <>
      <NextSeo
        title="Home"
        description="America's oldest continuously published college literary magazine. Read the latest poetry, fiction, art, and features from Harvard students and established writers."
        canonical="https://theharvardadvocate.com"
        openGraph={{
          url: 'https://theharvardadvocate.com',
          title: 'The Harvard Advocate',
          description: "America's oldest continuously published college literary magazine",
          images: [
            {
              url: 'https://theharvardadvocate.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'The Harvard Advocate',
            },
          ],
        }}
      />

      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createOrganizationSchema()) }}
      />

      {/* WebSite Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createWebSiteSchema()) }}
      />

      <div css={homepageSx}>
        <h1 style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          The Harvard Advocate - America's Oldest College Literary Magazine
        </h1>
        <RandomUpdate onUpdate={handleUpdate} maxLength={fromTheArchivesContent.length} />

        <div className="horizontalContainer">
          <div className="mainContent">
            <FeaturedIssue
              newest={true}
              issue={itemData}
              featuredItems={featuredItems}
            />
            <div className="archiveHeader">
              <br></br>
              <div className="announcement">
                <h2 sx={{ variant: "styles.h2" }}>
                  <i>
                    &#9654; We mourn the passing of Advocate trustee{" "}
                    <a href="https://theharvardadvocate.com/content/remembering-trustee-charlie-atkinson">
                      Charlie Atkinson
                    </a>
                  </i>
                  .
                </h2>
              </div>
              <hr />
            </div>
            <MixedGrid
              home={true}
              items={[
                featuredArticle1,
                featuredArticle2,
                featuredArticle3,
                featuredArticle4,
                featuredArticle5,
                featuredArticle6,
                featuredArt1,
                featuredArt2,
              ]}
            ></MixedGrid>
            <div className="sanctumSessions">
              {!isMobile ? <hr /> : ""}

              <div className={isMobile ? "" : "adRow"}>
                <a
                  href={MOGU_AD_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/mogu.png"
                    loading="lazy"
                    alt="MOGU — When life gives you lemons, eat mushrooms."
                  />
                </a>
                <a
                  href={BPYO_AD_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/BPYO_3_Flyers+Posters.jpg"
                    loading="lazy"
                    alt="Boston Philharmonic Youth Orchestra — Benjamin Zander, Conductor. Sunday May 3, 7:00 PM, Symphony Hall, Boston. Tickets from $25, Students $12."
                  />
                </a>
              </div>
              <div className="adFull">
                <a
                  href="https://www.youtube.com/watch?v=FQb2eRdA8Xg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/sanctum_sessions.png"
                    loading="lazy"
                    alt="The Harvard Advocate sanctum, with a musician playing to a small crowd."
                  />
                </a>
              </div>
            </div>
            <div className="blog">
              <div className="blogHeader">
                <hr />
                <h2 sx={{ variant: "styles.h2" }}>
                  <div className="fontMod">
                    <a href="sections/notes/">Notes from 21 South Street</a>
                  </div>
                </h2>
                <hr />
                <p sx={{ variant: "styles.p" }}>
                  <i>
                    The fresh online pieces we experiment with outside of our
                    print cycle. Formerly known as Blog.
                  </i>
                </p>
                {isMobile ? <hr /> : ""}
              </div>
              <TextContentList
                items={[Blog1, Blog2, Blog3]}
                border={false}
                home={false}
                noLastBorder={isMobile}
              ></TextContentList>
              {!isMobile ? <hr /> : ""}
            </div>
            {!isMobile ? (
              <div className="socialsFeed">
                <div className="socialsGrid">
                  <a
                    href="https://instagram.com/harvardadvocate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="instaCol">
                      <div className="fromss">
                        <img
                          src="/picsfrom21ss.jpg"
                          loading="lazy"
                          alt="Text: pics from 21 south street"
                        ></img>
                      </div>
                      <div className="insta1">
                        <img
                          src={optimizeImageLoading(
                            instagramImages[2].image.asset.url
                          )}
                          loading="lazy"
                          alt="The Harvard Advocate Instagram post"
                        ></img>
                      </div>
                      <div className="insta2">
                        <img
                          src={optimizeImageLoading(
                            instagramImages[0].image.asset.url
                          )}
                          loading="lazy"
                          alt="The Harvard Advocate Instagram post"
                        ></img>
                      </div>
                      <div className="insta3">
                        <img
                          src={optimizeImageLoading(
                            instagramImages[1].image.asset.url
                          )}
                          loading="lazy"
                          alt="The Harvard Advocate Instagram post"
                        ></img>
                      </div>
                    </div>
                  </a>
                </div>
                  <div className="twitterCol">
                    <a
                      href={BPYO_AD_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/BPYO_3_Flyers+Posters.jpg"
                        loading="lazy"
                        alt="Boston Philharmonic Youth Orchestra — Benjamin Zander, Conductor. Sunday May 3, 7:00 PM, Symphony Hall, Boston."
                      />
                    </a>
                  </div>
              </div>
            ) : (
              ""
            )}
            <div className="fromTheArchives">
              <div className="archiveHeader">
                <hr />
                <h2 sx={{ variant: "styles.h2" }}>
                  <div className="fontMod">From the Archives</div>
                </h2>
                <hr />
              </div>
              <TextContentList
                items={[
                  fromTheArchivesContent[randArray[0]],
                  fromTheArchivesContent[randArray[1]],
                  fromTheArchivesContent[randArray[2]],
                ]}
                border={true}
                home={true}
              ></TextContentList>
              <TextContentList
                items={[
                  fromTheArchivesContent[randArray[3]],
                  fromTheArchivesContent[randArray[4]],
                  fromTheArchivesContent[randArray[5]],
                ]}
                border={false}
                home={true}
                noLastBorder={isMobile}
              ></TextContentList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await sanityClient.fetch(getResources);

  const featuredItems = data.featuredItems.filter(
    (item) => item.issue.title === data.itemData.title
  );

  // Shuffle archived content and take only 12 items for performance
  // This reduces page data from ~11 MB to ~150 KB while maintaining randomness
  const shuffledArchive = [...data.archivedContent]
    .sort(() => Math.random() - 0.5)
    .slice(0, 12);

  return {
    props: {
      itemData: data.itemData,
      featuredItems,
      featuredArticle1: data.featuredArticle1,
      featuredArticle2: data.featuredArticle2,
      featuredArticle3: data.featuredArticle3,
      featuredArticle4: data.featuredArticle4,
      featuredArticle5: data.featuredArticle5,
      featuredArticle6: data.featuredArticle6,
      featuredArt1: data.featuredArt1,
      featuredArt2: data.featuredArt2,
      Blog1: data.blog1,
      Blog2: data.blog2,
      Blog3: data.blog3,
      instagramImages: data.instagram,
      fromTheArchivesContent: shuffledArchive,
    },
    revalidate: 86400, // Revalidate every 24 hours
  };
}
