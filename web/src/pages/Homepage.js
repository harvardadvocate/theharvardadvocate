/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed, Grid } from "theme-ui";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

const homepageSx = {
  ".featuredIssue": {
    width: "100%",
    backgroundColor: "#D6362F",
  },
  margin: "0em 0em 0em 0em",
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
    marginTop: "20%",
    marginLeft: "15%",
    img: {
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
      maxWidth: "100%",
      maxHeight: "75%"
    }
  },

  ".mainGrid": {
    placeItems: "center",
    display: "grid",
    justifyItems: "start"
  },

  ".featuredArticles": {
    color: "#FFFFFF",
    h5: {
      fontFamily: "sans-serif",
    }
  },

  ".issueTitle": {

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
  }
};

export default function Homepage() {

  const [itemData, setItemData] = useState(null);
  const [featuredItems, setFeaturedItems] = useState(null);
  const [featuredRow1, setFeaturedRow1] = useState(null);
  const [featuredRow2, setFeaturedRow2] = useState(null);

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
          console.log(itemData);
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
    }, []);

    if (!itemData || !featuredItems) return <div>Loading...</div>;
    else {
      console.log(featuredItems.slice(0,2));
      console.log(featuredItems.slice(2,4));
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
              <Link to={itemData.slug.current}>
                <div className="readFullIssue">
                  <span>&#8594;</span>
                  <h6>READ FULL ISSUE</h6>
                </div>
              </Link>
            </div>
          </Grid>
        </div>
      </div>
    </div>
    </div>
  );
}
