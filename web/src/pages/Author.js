/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import { Link } from "react-router-dom";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import { unionBy } from "lodash";
import TextContentList from "../components/TextContentList.js";
import ImageContentGrid from "../components/ImageContentGrid.js";
import ColorRingLoader from "../components/LoadingRing.js";
import AuthorHeader from "../components/AuthorHeader.js";

const authorSx = {
  ".authorHeader": {
    marginBottom: "0.5em",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  ".sectionHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
};

export default function Author() {
  const [authorData, setAuthorData] = useState(null);
  const [authoredItems, setAuthoredItems] = useState(null);
  const [sections, setSections] = useState(null);
  const { authorSlug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author" && slug.current == $authorSlug]{
           _id,
           name,
           slug,
           image,
           bio,
          "itemData": *[_type == "contentItem" && ^._id in authors[]._ref]{title, body, slug, authors[]->{name, slug}, issue->{title, slug}, sections[]->{title, slug}, images[]{asset->{_id, url}}, mainImage{asset->{_id,url}}}}`,
        { authorSlug }
      )
      .then((data) => {
        data = data[0];
        setAuthorData({
          _id: data._id,
          name: data.name,
          slug: data.slug,
          bio: data.bio,
          image: data.image,
        });
        const authoredItems = data.itemData;
        setAuthoredItems(authoredItems);
        setSections(
          unionBy(...authoredItems.map((item) => item.sections), "title")
        );
      })
      .catch(console.error);
  }, [authorSlug]);

  if (!authorData) return <ColorRingLoader />;

  const showDetailedAuthor = authorData.image && authorData.bio;

  return (
    <div sx={authorSx}>
      {showDetailedAuthor && <AuthorHeader authorData={authorData} />}
      <Frame
        path={[
          {
            name: !showDetailedAuthor ? authorData.name : "",
          },
          {
            name: authorData.name,
            slug: authorData.slug,
          },
        ]}
        showDivider={!showDetailedAuthor}
      >
        {sections &&
          sections.map((section) => {
            const sectionItems = authoredItems.filter(
              (i) => i.sections[0].title === section.title
            );
            return (
              <div key={section.title}>
                <div className="sectionHeader">
                  <Link to={"/sections/" + section.slug.current}>
                    <Themed.h2> {section.title} </Themed.h2>
                  </Link>
                  <img src={rightArrow} alt="right-arrow" />
                </div>
                {section.title !== "Art" ? (
                  <TextContentList
                    items={sectionItems}
                    vertical={true}
                    border={true}
                    home={false}
                    hideAuthor={true}
                    padding={false}
                  />
                ) : (
                  <ImageContentGrid
                    items={sectionItems}
                    vertical={true}
                    border={true}
                    home={false}
                    hideAuthor={true}
                    padding={false}
                  />
                )}
              </div>
            );
          })}
      </Frame>
    </div>
  );
}
