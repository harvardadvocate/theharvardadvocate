/** @jsxImportSource theme-ui */
import React, { useEffect, useState, useRef } from "react";
import { Themed } from "theme-ui";
import sanityClient from "../client.js";
import { getResources } from "../queries/homepage.js";
import { optimizeImageLoading } from "../utils/image.js";
import FeaturedIssue from "../components/FeaturedIssue.js";
import MixedGrid from "../components/MixedGrid.js";
import TextContentList from "../components/TextContentList.js";
import TwitterTimeline from "../components/TwitterTimeline.js";
import { useIsMobile } from "../utils/isMobile.js";
import ColorRingLoader from "../components/LoadingRing.js";
import RandomUpdate from "../components/RandomUpdate.js";


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
    img: {
      padding: "5vw",
    },
  },

  ".socialsGrid": {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gridTemplateRows: "1fr",
    gridColumnGap: "10px",
    gridRowGap: "0px",
    paddingTop: "1vh",
    maxHeight: "90vh",
    overflow: "hidden",
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

  ".archiveHeader": {
    textAlign: "center",
  },

  "@media (max-width: 835px)": {
    ".mainGrid": {
      gridTemplateColumns: "1fr",
      placeItems: "unset",
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

    ".blogHeader, .archiveHeader": {
      paddingInline: "5vw",
    },
  },
};

export default function Homepage() {
  var isMobile = useIsMobile();

  const [itemData, setItemData] = useState(null);
  const [featuredItems, setFeaturedItems] = useState(null);

  const [featuredArticle1, setFeaturedArticle1] = useState(null);
  const [featuredArticle2, setFeaturedArticle2] = useState(null);
  const [featuredArticle3, setFeaturedArticle3] = useState(null);
  const [featuredArticle4, setFeaturedArticle4] = useState(null);
  const [featuredArticle5, setFeaturedArticle5] = useState(null);
  const [featuredArticle6, setFeaturedArticle6] = useState(null);
  const [featuredArt1, setFeaturedArt1] = useState(null);
  const [featuredArt2, setFeaturedArt2] = useState(null);
  const [Blog1, setBlog1] = useState(null);
  const [Blog2, setBlog2] = useState(null);
  const [Blog3, setBlog3] = useState(null);

  const [instagramImages, setInstagramImages] = useState(null);

  const [fromTheArchivesContent, setFromTheArchivesContent] = useState(null);

  const [randArray, setRandArray] = useState([0,1,2,3,4,5,6]);

  const handleUpdate = (newNumbers) => {
    setRandArray(newNumbers);
  };

  useEffect(() => {
    document.title = "The Harvard Advocate";
    console.log("Hiiiiii");
    sanityClient
      .fetch(getResources)
      .then((data) => {
        setItemData(data.itemData);
        setFeaturedItems(data.featuredItems.filter(
                          (item) => item.issue.title === data.itemData.title
                        ));
        setFeaturedArticle1(data.featuredArticle1);
        setFeaturedArticle2(data.featuredArticle2);
        setFeaturedArticle3(data.featuredArticle3);
        setFeaturedArticle4(data.featuredArticle4);
        setFeaturedArticle5(data.featuredArticle5);
        setFeaturedArticle6(data.featuredArticle6);
        setFeaturedArt1(data.featuredArt1);
        setFeaturedArt2(data.featuredArt2);
        setInstagramImages(data.instagram);
        setFromTheArchivesContent(data.archivedContent);
        setBlog1(data.blog1);
        setBlog2(data.blog2);
        setBlog3(data.blog3);

      })
      .catch(console.error);
  }, []);

  if (
    !itemData ||
    !featuredItems ||
    !featuredArticle1 ||
    !featuredArticle2 ||
    !featuredArticle3 ||
    !featuredArticle4 ||
    !featuredArticle5 ||
    !featuredArticle6 ||
    !Blog1 ||
    !Blog2 ||
    !Blog3 ||
    !featuredArt1 ||
    !featuredArt2 ||
    !instagramImages ||
    !fromTheArchivesContent
  ) {
    return <ColorRingLoader />;
  } else {
  }

  return (
    <div css={homepageSx}>
      <RandomUpdate onUpdate={handleUpdate} />

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
              <Themed.h2><i>&#9654; Read our Queer Zine <a href="/queerzine">here</a></i>.</Themed.h2>
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

            {/* Hardcoded potential ad space.*/}

            {/* <a
              href="https://qrco.de/be9Mh6"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/aerie_ad_1.png"
                loading="lazy"
                alt="Advertisement for Aerie"
              />
            </a> */}

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
          <div className="blog">
            <div className="blogHeader">
              <hr />
              <Themed.h2>
                <div className="fontMod">
                <a href="sections/blog/">Blog</a>
                </div>
              </Themed.h2>
              <hr />
              <Themed.p>
                <i>
                  The fresh online pieces we experiment with outside of our
                  print cycle. Or just a blog.
                </i>
              </Themed.p>
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
                        alt=""
                      ></img>
                    </div>
                    <div className="insta2">
                      <img
                        src={optimizeImageLoading(
                          instagramImages[0].image.asset.url
                        )}
                        loading="lazy"
                        alt=""
                      ></img>
                    </div>
                    <div className="insta3">
                      <img
                        src={optimizeImageLoading(
                          instagramImages[1].image.asset.url
                        )}
                        loading="lazy"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </a>
                <div className="twitterCol">
                  {/* <TwitterTimeline height={(window.innerHeight / 100) * 80} /> */}
                  <a
              href="https://heritageclubthc.com/?utm_campaign=harvardfall24&utm_source=online"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/heritage_ad.png"
                loading="lazy"
                alt="The Harvard Advocate sanctum, with a musician playing to a small crowd."
              />
            </a>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="fromTheArchives">

            
            <div className="archiveHeader">
              <hr />
              <Themed.h2>
                <div className="fontMod">
                  From the Archives
                </div>
              </Themed.h2>
              <hr />
            </div>
            <TextContentList
              items={[fromTheArchivesContent[randArray[0]], fromTheArchivesContent[randArray[1]], fromTheArchivesContent[randArray[2]]]}
              border={true}
              home={true}
            ></TextContentList>
            <TextContentList
            items={[fromTheArchivesContent[randArray[3]], fromTheArchivesContent[randArray[4]], fromTheArchivesContent[randArray[5]]]}              border={false}
              home={true}
              noLastBorder={isMobile}
            ></TextContentList>
          </div>
        </div>
      </div>
    </div>
  );
}
