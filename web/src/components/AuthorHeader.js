/** @jsxImportSource theme-ui */
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client.js";
import { Themed } from "theme-ui";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const authorHeaderSx = {
  ".container": {
    marginTop: "2em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    img: {
      borderRadius: "50%",
      width: "200px",
      height: "200px",
      objectFit: "cover",
      marginRight: "2em",
      filter: "grayscale(100%)",
    },

    ".text": {
      display: "flex",
      flexDirection: "column",
      gap: "1em",
      maxWidth: "50%",
    },
  },

  "@media (max-width: 835px)": {
    ".container": {
      flexDirection: "column",
      marginRight: "1em",
      marginLeft: "1em",
      img: {
        width: "150px",
        height: "150px",
        marginRight: "0",
        marginBottom: "1em",
      },
      ".text": {
        maxWidth: "100%",
        textAlign: "center",
      },
    },
  },
};

export default function AuthorHeader(props) {
  return (
    <div sx={authorHeaderSx}>
      <div className="container">
        {props.authorData.image && (
          <img
            src={urlFor(props.authorData.image).width(500).url()}
            alt="Author Headshot"
          />
        )}
        <div className="text">
          <Themed.h2>{props.authorData.name}</Themed.h2>
          <PortableText value={props.authorData.bio} />
        </div>
      </div>
    </div>
  );
}
