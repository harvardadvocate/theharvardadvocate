/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { Themed } from "theme-ui";
import moment from "moment";
import ContentFrame from "../components/ContentFrame";
import Frame from "../components/Frame";
import ColorRingLoader from "../components/LoadingRing.js";

const contentItemSx = {
  ".contentHeader": {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    borderBottom: "1px solid #000",
    paddingBottom: "0.5em",
    marginBottom: "1em",
    ".dateShareContainer": {
      marginTop: "1.5em",
      display: "flex",
      justifyContent: "space-between",
      h5: { fontStyle: "normal" },
    },
    ".share": {
      cursor: "pointer", // add cursor property to change cursor pointer
    },

  },
  p: {
    marginBottom: "1.5em",
  },
};
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// // `components` object passed to PortableText
const customComponents = {
  block: {
    normal: ({ children }) => <Themed.p>{children}</Themed.p>,
  },
};

export default function ContentItem() {
  const [itemData, setItemData] = useState(null);
  const [isLinkCopied, setIsLinkCopied] = useState(false); // new state variable
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
         publishedAt,
         issue->{title, slug},
         authors[]->{name, slug},
         sections[]->{title, slug},
       }`,
        { slug }
      )
      .then((data) => setItemData(data[0]))
      .catch(console.error);
  }, [slug]);


  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsLinkCopied(true);
  };

  if (!itemData) return <ColorRingLoader/>;

  return (
    <div sx={contentItemSx}>
      <ContentFrame
        path={[
          {
            name: "Sections",
            slug: "/sections",
          },
          {
            name: itemData.sections[0].title,
            slug: "/sections/" + itemData.sections[0].slug.current,
          },
          { name: itemData.title, slug: "/content/" + itemData.slug.current },
        ]}
      >
        <div className="contentHeader">
          <div className="topLine">
            <Themed.h5>
              <Link to={"/sections/" + itemData.sections[0].slug.current}>{itemData.sections[0].title}</Link> • <Link to={"/issues/" + itemData.issue.slug.current}>{itemData.issue.title} Issue </Link>
            </Themed.h5>
          </div>
          <div className="title">
            <Themed.h1>{itemData.title}</Themed.h1>
          </div>
          <div className="authors">
            <Themed.h3>
              By{" "}
              {itemData.authors.map((author, i) => (
                <>
                  {i !== 0 && ", "}
                  <Link to={"/authors/" + author.slug.current}>
                    {author.name}
                  </Link>{" "}
                </>
              ))}
            </Themed.h3>
          </div>
          <div className="dateShareContainer">
            <div className="date">
              <Themed.h5>
                {/*{moment(itemData.publishedAt).format("MMMM Do YYYY")}*/}
              </Themed.h5>
            </div>
            <div className="share">
              {isLinkCopied ? (
                <Themed.h5><i>Link Copied</i></Themed.h5> // change button text to "Link Copied" when the link is copied
              ) : (
                <Themed.h5 onClick={handleShareClick}>Share</Themed.h5> // add onClick event handler to the "Share" button
              )}
            </div>
          </div>
        </div>
        {
          // TODO: figure out multiple image display
          itemData.mainImage && (
            <img src={urlFor(itemData.mainImage).width(200).url()} alt="" />
          )
        }
        <div>
          {itemData.body && (
            <PortableText
              value={itemData.body}
              hardBreak={false}
              components={customComponents}
            />
          )}
        </div>
      </ContentFrame>
    </div>
  );
}
