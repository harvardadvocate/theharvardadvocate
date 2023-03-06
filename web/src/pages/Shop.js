/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";
import ShopifyBuy from 'shopify-buy';
import React, { useEffect, useState } from "react";

const shopSx = {
  ".shopBody": {
    marginTop: "0.4em",
    marginLeft: "22%",
    marginRight: "25%"
  },
  i: {
    textAlign: "center",
    display: "block"
  },

  "@media (max-width: 767px)": {
    ".shopBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
  },

};

export default function Shop() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const client = ShopifyBuy.buildClient({
      domain: 'the-harvard-advocate.myshopify.com',
      storefrontAccessToken: '005d55feb024fc1214eaf8b8dd90aad0'
    });

    //PAT: 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

    client.product.fetchAll().then((products) => {
      setProducts(products);
    }).catch((error) => {
      console.error(error);
    });
  },
    []);

  return (
    <div sx={shopSx}>
      <Frame
        path={[
          {
            name: "Shop",
            slug: "/shop",
          },
        ]}
      >
        <div className="shopBody">
          {products.map((product) => (
            <div key={product.id}>
              <Themed.p>{product.title}</Themed.p>
              <img src={product.images[0].src} alt={product.title} />
            </div>
          ))}
        </div>
      </Frame>
    </div>
  );
}