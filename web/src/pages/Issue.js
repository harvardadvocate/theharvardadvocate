/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import sanityClient from "../client.js";
import { useParams, Link } from "react-router-dom";
import SectionFrame from "../components/SectionFrame";
import MixedGrid from "../components/MixedGrid";
import { unionBy } from "lodash";
import { optimizeImageLoading } from "../utils/image.js";
import TextListElement from "../components/TextListElement";
import TextContentList from "../components/TextContentList";
import ImageContentGrid from "../components/ImageContentGrid";
const issueSx = {
  hr: {
    border: "0.1px solid rgba(0, 0, 0, .2)",
  },
};

const topGridCSS = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyItems: "center",
  alignItems: "center",
  borderBottom: "1px solid rgba(0,0,0,0.2)",
  paddingBottom: "2vh",

  ".articleItem": {
    borderRight: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
  },

  ".articleItem:last-child": {
    borderRight: "none",
  },

  ".featuredIssue": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    overflow: "hidden",
    boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
    img: {
      maxWidth: "100%",
      maxHeight: "100%",
      display: "block",
      margin: "0 auto",
    }
  },
  "mixedGridContainer": {
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  }
}

const topCSSNoGrid = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingInline: "5%",
  paddingBottom: "2%",
  borderBottom: "1px solid rgba(0,0,0,0.2)",

  ".featuredIssue": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    overflow: "hidden",
    backgroundColor: "red",
    boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
    img: {
      maxWidth: "100%",
      maxHeight: "100%",
      display: "block",
      margin: "0 auto",
    }
  },
  "mixedGridContainer": {
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  }
}
export default function Issue() {
  function pop(object, propertyName) {
    let temp = object[propertyName];
    delete object[propertyName];
    return temp;
  }

  function groupContentItemsBySection(contentItems, sections) {
    const groupedItems = {};

    // Iterate through sections and create an empty array for each section title
    sections.forEach((section) => {
      groupedItems[section.title] = [];
    });

    // Iterate through content items and push them to the respective section's array
    contentItems.forEach((item) => {
      item.sections.forEach((section) => {
        if (groupedItems[section.title]) {
          groupedItems[section.title].push(item);
        }
      });
    });
    return groupedItems;
  }

  function findFirstNonArtWithImage(contentItems) {
    for (const item of contentItems) {
      const isInSectionArt = item.sections.some(
        (section) => section.title === "Art"
      );

      if (!isInSectionArt && item.images && item.images.length > 0) {
        const index = contentItems.indexOf(item);
        console.log("before");
        console.log(contentItems);
        if (index > -1) { // only splice array when item is found
          contentItems.splice(index, 1); // 2nd parameter means remove one item only
        }
        console.log("after");
        console.log(contentItems);
        return item;
      }
    }

    // Return null if no content item meets the criteria
    return null;
  }


  const [items, setItems] = useState(null);
  const [issue, setIssue] = useState(null);
  const [sections, setSections] = useState(null);
  const [sectionItems, setSectionItems] = useState(null);
  const { issueSlug } = useParams();

  var contentItemsBySection = null;
  var useMixedGrid = false;
  var articlesToFeature = [null, null, null];
  var useGridTop = false;
  var gridTop1, gridTop2;
  var firstNonArtWithImage;
  var artContent = [];
  var textContent = [];
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "issue" && slug.current == $issueSlug]{
            frontCover{
              asset->{
                _id,
                url
              }
            },
            publishedAt,
            slug,
            title,
            _createdAt,
            _id,
            _rev,
            _type,
            _updatedAt,
          "itemData": *[_type == "contentItem" && ^._id == issue._ref]{title, body, slug, authors[]->{name}, sections[]->{title, slug}, images[]{asset->{_id, url}}, issue->{title, slug}, mainImage{asset->{_id,url}}}}`,
        { issueSlug }
      )
      .then((issueData) => {
        console.log(issueData);
        setIssue(issueData[0]);
        setItems(issueData[0].itemData);
        setSections(
          unionBy(...(issueData[0].itemData).map((item) => item.sections), "title")
        );
      })
      .catch(console.error);
  }, [issueSlug]);


  if (!items || !issue || !sections) {
    return <div>Loading...</div>
  }
  else {
    contentItemsBySection = groupContentItemsBySection(items, sections);
    if (contentItemsBySection["Art"]) {
      if ((contentItemsBySection["Art"].length > 1) && (items.length - contentItemsBySection["Art"].length > 5)) { // use mixed grid implementation
        useMixedGrid = true;
        artContent = pop(contentItemsBySection, "Art")
        textContent = [].concat.apply([], Object.values(contentItemsBySection));
        var remainingArray = textContent;
        if (firstNonArtWithImage && Object.keys(firstNonArtWithImage).length !== 0) {
          var reminingArray = remainingArray.filter(item => item !== firstNonArtWithImage)
        }
        else {
          firstNonArtWithImage = remainingArray.shift();
        }
        // remainingArray: has all textContent except findFirstNonArtWithImage. There are at least 5 of these.
        // firstNonArtWithImage: has text article with image in it, or just the first text article. Exactly one of these.
        // artContent: contains art pieces, there are at least two of these

        // 2 needed for topRow
        // 3 text needed for topGrid

        if (remainingArray.length >= 4) {
          useGridTop = true;
          gridTop1 = remainingArray.shift();
          gridTop2 = remainingArray.shift();
        }
        articlesToFeature.push(firstNonArtWithImage);
        articlesToFeature.push(remainingArray.shift());
        articlesToFeature.push(remainingArray.shift());
        articlesToFeature.push(artContent.shift());
        articlesToFeature.push(artContent.shift());

        contentItemsBySection = groupContentItemsBySection(remainingArray.concat(artContent), sections);
      }
      else {
        useMixedGrid = false;
      }
    }
    if (contentItemsBySection["Art"]) {
      artContent = pop(contentItemsBySection, "Art")
    }
    textContent = [].concat.apply([], Object.values(contentItemsBySection));
  }

  console.log(textContent);
  console.log(artContent);

  return (
    <div css={issueSx}>
      <SectionFrame
        path={[
          { name: issue.title, slug: "/issues" },
          { name: issue.title, slug: "/issues/" + issue.slug.current },
        ]}
      >
      <div className="issueContainer" css={useGridTop ? topGridCSS : topCSSNoGrid}>
        <div className="featuredIssue">
          <img src={optimizeImageLoading(issue.frontCover.asset.url)} loading="lazy" alt="" />
        </div>
        {useGridTop ?
        <>
        <div className="articleItem">
          <TextListElement home={true} padding={true} item={gridTop1}></TextListElement>
        </div>
        <div className="articleItem">
          <TextListElement home={true} padding={true} item={gridTop2}></TextListElement>
        </div>
        </>
        : ""}

      </div>

      {useMixedGrid ?
        <div className="mixedGridContainer"> <MixedGrid home={true} items={articlesToFeature} showFirstList={false}></MixedGrid> <hr/> </div>
        :
        ""
      }

      {textContent.length > 0 ? (<TextContentList items={textContent} home={true} border={true}/>) : ""}
      {artContent.length > 0 ? (<ImageContentGrid items={artContent} home={true} border={true}/>) : ""}

      </SectionFrame>
    </div>

  );
}
