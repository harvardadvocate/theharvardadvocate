/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import TextContentList from "../components/TextContentList.js";
import ImageContentGrid from "../components/ImageContentGrid.js";
import sanityClient from "../client.js";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";
import SectionFrame from "../components/SectionFrame";
import Frame from "../components/Frame";
import ColorRingLoader from "../components/LoadingRing.js";
import { useLocation } from "react-router-dom";


const sectionFrameSx = {
  // marginBottom: "1vh",

  ".header": {
    marginTop: "1em",
    marginBottom: "1em",
    height: "2.5em",
    display: "flex",
    paddingInline: "10em",
    ".headerNormal": {
      borderBottom: "1px solid #000",
      width: "100%",
      textAlign: "center",
    },
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    minHeight: "55vh",
    flexDirection: "column",
    marginTop: "0em",
    ".mainContent": {
      flexGrow: 1,
    },
  },


  ".image": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    marginTop: "10px",
    width: "400px",
    textAlign: "center",
    alignItems: "center",
    figcaption: {
      fontSize: "16px",
    },
  },

};

const sectionsOverviewSx = {
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    marginBottom: "1vh",
    h2: { display: "inline-block", marginRight: "0.4em" },
    input: { display: "flex", 
  },
    img: { height: "0.6em", display: "inline-block" },
  },
  ".sectionContainer": {
    paddingBottom: "2em",
    paddingInline: "2vw",
  },
  ".searchBarContainer": {
    margin: "10px auto",
    // marginLeft: "5.8em",
    // marginRight: "5.8em",
    verticalAlign: "middle",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ".horizontalContainer": {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    marginTop: "0em",
    ".mainContent": {
      flexGrow: 1,
    },
  },
};


const sectionToQueryBySearch = (searchQuery) => {

  return `*[_type == "contentItem" && (title match "${searchQuery}" || authors[] match "${searchQuery}")] | order(publishedAt desc) {
    title,
    authors[]->{name},
    issue->{title, slug},
    sections[]->{title, slug},
    slug,
    body,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  }`;
};

const sectionToQuery = (section) =>
  section !== "Art"
    ? `*[_type == "contentItem" && "${section}" in sections[]->title]  | order(publishedAt desc) {
        title,
        authors[]->{name, slug},
        issue->{title,slug},
        sections[]->{title,slug},
        slug,
        body,
        mainImage{
        asset->{
        _id,
        url
        }
    }
  }[0...3]`
    : `*[_type == "contentItem" && "${section}" in sections[]->title]  | order(publishedAt desc) {
        title,
        authors[]->{name, slug},
        issue->{title,slug},
        slug,
        sections[]->{title,slug},
        mainImage{
            asset->{
            _id,
            url
        }
        },
        images[]{asset->{_id, url}}
      }[0...3]`;

const sectionToUrl = (section) => {
  const sectionMap = {
    Art: "/sections/art",
    Fiction: "/sections/fiction",
    Features: "/sections/features",
    Poetry: "/sections/poetry",
  };
  return sectionMap[section];
};

export default function Search(props) {

  const [filteredItems, setFilteredItems] = useState(null);

  const location = useLocation();
  const searchQuery = location.state.query;
  const titleText = "Search results for \"" + searchQuery + "\"";





  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const result = await sanityClient.fetch(sectionToQueryBySearch(searchQuery));
        setFilteredItems(result);

        if (searchQuery.length == 0)
        {
          setFilteredItems(null);
        }

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchQuery]);


  return (

    <div sx={sectionsOverviewSx}>



    <Frame
        path={[
          {
            name: titleText,
            slug: "/search",
          },
        ]}
      >


        <div className="sectionContainer">
          {filteredItems && filteredItems.length > 0 ? (
              <ImageContentGrid items={filteredItems} />
            ) : 
            <div>
              </div>
          }
        </div>

      </Frame> 


    </div> 


    
  );
}
