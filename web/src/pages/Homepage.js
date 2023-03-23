/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { PortableText } from "@portabletext/react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { theme } from "../theme/theme";
import { getResources } from "../queries/homepage.js";
import { optimizeImageLoading } from "../utils/image.js";
import FeaturedIssue from "../components/FeaturedIssue.js";
import MixedGrid from "../components/MixedGrid.js";
import TextContentList from "../components/TextContentList";


const mainColor = theme["colors"]["primary"];
const headerColor = theme["colors"]["headerColor"];

const homepageSx = {
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


  ".blog": {
    textAlign: "center",
  },

  ".archiveHeader": {
    textAlign: "center",
  },

  "@media (max-width: 767px)": {
    "hr": {
      display: "none",
    },
    ".mainGrid": {
      gridTemplateColumns: "1fr",
      placeItems: "unset"
    },
  }
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
      .fetch(getResources)
      .then((data) => {
        setItemData(data.itemData);
        setFeaturedItems(data.featuredItems);
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
      })
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
        <FeaturedIssue newest={true} issue={itemData} featuredItems={featuredItems}/>
        <MixedGrid home={true}
          items={[featuredArticle1, featuredArticle2,
          featuredArticle3, featuredArticle4, featuredArticle5,
          featuredArticle6, featuredArt1, featuredArt2]}>
        </MixedGrid>
        <div className="sanctumSessions">
          <hr/>
          <img src="/sanctum_sessions.png" loading="lazy"/>
        </div>
        <div className="blog">
          <hr/>
          <Themed.h2><a href="sections/blog/">Blog</a></Themed.h2>
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
                  <img src="/picsfrom21ss.jpg" loading = "lazy"></img>
                </div>
                <div className="insta1">
                  <img src={optimizeImageLoading(instagramImages[2].image.asset.url)} loading="lazy"></img>
                </div>
                <div className="insta2">
                  <img src={optimizeImageLoading(instagramImages[0].image.asset.url)} loading="lazy"></img>
                </div>
                <div className="insta3">
                  <img src={optimizeImageLoading(instagramImages[1].image.asset.url)} loading="lazy"></img>
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
            <TextContentList items={fromTheArchivesContent.slice(0, 3)} border={true} home={true}></TextContentList>
            <TextContentList items={fromTheArchivesContent.slice(8, 11)} border={false} home={true}></TextContentList>
        </div>
      </div>
    </div>
    </div>
  );
}
