import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function ContentItem() {
  const [itemData, setItemData] = useState(null);
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
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setItemData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!itemData) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h2>{itemData.title}</h2>
        <div>
          {itemData.authorImage && (
            <img
              src={urlFor(itemData.authorImage).width(100).url()}
              alt="Author is Kap"
            />
          )}
          <h4>{itemData.name}</h4>
        </div>
      </div>
      {itemData.mainImage && (
        <img src={urlFor(itemData.mainImage).width(200).url()} alt="" />
      )}
      <div>
        <BlockContent
          blocks={itemData.body}
          projectId={sanityClient.config().projectId}
          dataset={sanityClient.config().dataset}
        />
      </div>
    </div>
  );
}
