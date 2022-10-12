/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { unionBy } from "lodash";
import TextContentList from "../components/TextContentList.js";

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

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// TODO: include list of author's pieces

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
           bio
         }`,
        { authorSlug }
      )
      .then((data) => {
        setAuthorData(data[0]);
        sanityClient
          .fetch(
            `*[_type == "contentItem" && $authorId in authors[]->_id]{
            title,
            slug,
            authors[]->{name},
            issue->{title},
            sections[]->{title}
          }`,
            { authorId: data[0]["_id"] }
          )
          .then((itemData) => {
            setAuthoredItems(itemData);
            setSections(
              unionBy(...itemData.map((item) => item.sections), "title")
            );
          })
          .catch(console.error);
      })
      .catch(console.error);
  }, [authorSlug]);

  if (!authorData) return <div>Loading...</div>;

  return (
    <div sx={authorSx}>
      <Frame
        path={[
          {
            name: "Authors",
          },
          {
            name: authorData.name,
            slug: authorData.slug,
          },
        ]}
      >
        <div className="authorHeader">
          <Themed.h2>{authorData.name}</Themed.h2>
        </div>
        <div className="authorBio">
          {authorData.image && (
            <img src={urlFor(authorData.image).width(200).url()} alt="" />
          )}
          <Themed.p>{authorData.bio}</Themed.p>
        </div>
        {
          // TODO: do we want to differentiate between textual and art pieces?
          sections &&
            sections.map((section) => {
              const sectionItems = authoredItems.filter(
                (i) => i.sections[0].title === section.title
              );
              return (
                <div key={section.title}>
                  <div className="sectionHeader">
                    <Themed.h2>{section.title}</Themed.h2>
                    <img src={rightArrow} alt="right-arrow" />
                  </div>
                  <TextContentList items={sectionItems} />
                </div>
              );
            })
        }
      </Frame>
    </div>
  );
}
