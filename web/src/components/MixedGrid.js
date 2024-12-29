/** @jsxImportSource theme-ui */
import React from "react";
import TextListElement from "../components/TextListElement.js";
import TextContentList from "../components/TextContentList.js";
import ImageListElement from "../components/ImageListElement.js";
import ImageContentGrid from "../components/ImageContentGrid.js";
import { useIsMobile } from "../utils/isMobile";

// MixedGrid: takes 8 items in as props, sorts them as irregular grid
// indices: 0-2 text, 3 text+art, 4-5 text, 6-7 art

const gridSx = {
  margin: "0em 0em 0em 0em",

  ".topArticles": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr repeat(2, 0.5fr)",
    gridColumnGap: "0px",
    gridRowGap: "0px",
    paddingInline: "2vw",
  },

  ".div4, .div5, .div6, .div7, .div8, .blogArticle, .archiveArticle": {
    h3: {
      color: "headerColor",
    },
    h4: {
      fontFamily: "Poppins",
    },
    padding: "1em",
  },

  ".div4": {
    gridArea: "1 / 1 / 2 / 3",
    borderTop: "0px solid rgba(0, 0, 0, .2)",
    marginTop: "0em",
    display: "flex",
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    alignItems: "center",
  },

  ".div4image": {
    display: "flex",
    verticalAlign: "middle",
    minWidth: "50%",
    maxWidth: "51%",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
  },

  ".div4content": {
    display: "inline-block",
    verticalAlign: "middle",
  },

  ".div5": {
    gridArea: "2 / 1  / 3 / 3",
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    paddingBottom: "1em",
  },

  ".div6": {
    gridArea: "3 / 1 / 4 / 3",
  },

  ".div7": {
    gridArea: "1 / 3 / 4 / 4",
    display: "flex",
    flexDirection: "column",
    marginTop: "0em",
    alignItems: "left",
    marginLeft: "1em",
    height: "100%",
  },

  ".div7image, .div7content": {
    minWidth: "100%",
  },
};

export default function MixedGrid(props) {
  var showFirstList;
  if (props.showFirstList || props.showFirstList === false) {
    showFirstList = props.showFirstList;
  } else {
    showFirstList = true;
  }

  var isMobile = useIsMobile();

  return (
    <div css={gridSx}>
      {/* first three text articles */}
      {showFirstList ? (
        <TextContentList
          items={[props.items[0], props.items[1], props.items[2]]}
          border={true}
          home={props.home}
          vertical={isMobile}
          hideAuthor={false}
        ></TextContentList>
      ) : (
        ""
      )}
      {isMobile ? (
        <ImageContentGrid
          items={[props.items[6], props.items[7]]}
          home={props.home}
          border={true}
          vertical={true}
        />
      ) : (
        <div className="topArticles">
          {/* text article + accompanying art */}
          <div className="div4">
            <div className="div4image">
              {props.items[3].mainImage ? (
                <a href={"content/" + props.items[3].slug.current}>
                  <img
                    src={props.items[3].mainImage.asset.url}
                    alt="Illustration"
                  ></img>
                </a>
              ) : (

                // Currently harcoded ad space

                  <a href="https://heritageclubthc.com/?utm_campaign=harvardfall24&utm_source=online"
                  target="_blank"
                  rel="noreferrer">
                  <img src="/heritage_ad.png" width="300" alt="Ad for the Heritage Club"></img>
                </a>
              )}
            </div>
            <div className="div4content">
              <TextListElement
                item={props.items[3]}
                home={true}
              ></TextListElement>
            </div>
          </div>

          {/* two text articles */}

          <div className="div5">
            <TextListElement
              item={props.items[4]}
              home={props.home}
              padding={false}
            ></TextListElement>
          </div>

          <div className="div6">
            <TextListElement
              item={props.items[5]}
              home={props.home}
              padding={false}
            ></TextListElement>
          </div>

          {/* two art articles */}

          <div className="div7">
            <ImageListElement
              item={props.items[6]}
              home={props.home}
            ></ImageListElement>
            <hr />
            <ImageListElement
              item={props.items[7]}
              home={props.home}
            ></ImageListElement>
          </div>
        </div>
      )}
    </div>
  );
}
