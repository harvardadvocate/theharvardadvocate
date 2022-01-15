import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function ContentItemList() {
  const [contentItemsData, setContentItems] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contentItem"]{
        title,
        author,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setContentItems(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Content Items</h2>
      <div>
        {contentItemsData &&
          contentItemsData.map((item, index) => (
            <Link to={"/" + item.slug.current} key={item.slug.current}>
              <div key={index}>
                {item.mainImage && (
                  <img src={item.mainImage.asset.url} alt="" />
                )}
                <span>
                  <h2>{item.title}</h2>
                  <h3>{item.author}</h3>
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
