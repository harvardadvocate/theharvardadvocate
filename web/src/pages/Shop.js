/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import ShopifyBuy from 'shopify-buy';
import React, { useEffect, useState } from "react";
import { ClientError } from "@sanity/client";

const shopSx = {
  ".shopContainer": {
    height: "400px", // set a fixed height for the container
    overflowX: "scroll", // enable horizontal scrolling
  },
  ".shopBody": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    alignItems: "flex-end",
    padding: "1em",
    gap: "1em",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    height: "100%", // set height to 100% to ensure that the scrolling occurs within the container
  },
  ".product": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  "img": {
    verticalAlign: "bottom",
    maxWidth: "100%",
    height: "auto",
  },
  "p": {
    margin: "0",
    align: "center",
  },
  ".productButton": {
    width: "40%",
  },
  ".productCard": {
    width: "30%",
    scrollSnapAlign: "start",
    margin: "0 1em",
    textAlign: "center",
  },
};

export default function Shop() {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const client = ShopifyBuy.buildClient({
      domain: 'the-harvard-advocate.myshopify.com',
      storefrontAccessToken: '005d55feb024fc1214eaf8b8dd90aad0'
    });

    client.product.fetchAll().then((products) => {
      setProducts(products);
      console.log(products)
    }).catch((error) => {
      console.log(error);
    });
    console.log(products)

    client.collection.fetchAllWithProducts().then((collections) => {
      // Do something with the collections
      console.log(collections);
      console.log(collections[0].products);
    });
  }, []);

    

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
        <div className="shopContainer">
          <div className="shopBody">
            {products.map((product) => (
              <div key={product.id} className="product">
                <Themed.p>{product.title}</Themed.p>
                <img src={product.images[0].src} alt={product.title} width="100%" />
                <Themed.p>${parseFloat(product.variants[0].price.amount).toFixed(2)}</Themed.p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </Frame>
    </div>
  );
}