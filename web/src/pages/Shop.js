/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";
import ShopifyBuy from "shopify-buy";
import React, { useEffect, useState } from "react";
import MyCarousel from "../components/Carousel";
import ColorRingLoader from "../components/LoadingRing.js";

const shopSx = {
  i: {
    textAlign: "center",
    display: "block",
  },

  paddingInline: "10vw",
  paddingTop: "5vh",

  ".header": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  img: {
    boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
    height: "auto",
    width: "auto",
    maxHeight: "25vh",
    maxWidth: "10vw",
    cursor: "pointer",
  },

  ".carousel-item": {
    height: "30vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
  },

  ".merch": {
    height: "25vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "@media (max-width: 835px)": {
    ".shopBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
    img: {
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
      maxHeight: "100%",
      maxWidth: "100%",
    },
    ".carousel-item": {
      height: "100%",
    },
    ".InfiniteCarouselSlide": {
      width: "auto",
    },
  },
};

export default function Shop() {
  const [products, setProducts] = React.useState([]);
  const [issues, setIssues] = React.useState([]);
  const [merch, setMerch] = React.useState([]);
  const [cart, setCart] = useState(null);

  const addToCart = (variantId, quantity) => {
    const lineItemsToAdd = [{ variantId, quantity }];
    const client = ShopifyBuy.buildClient({
      domain: "the-harvard-advocate.myshopify.com",
      storefrontAccessToken: "005d55feb024fc1214eaf8b8dd90aad0",
    });
    client.checkout.create().then((checkout) => {
      client.checkout
        .addLineItems(checkout.id, lineItemsToAdd)
        .then((checkout) => {
          window.open(checkout.webUrl);
        })
        .catch((error) => {});
    });
  };

  useEffect(() => {
    const client = ShopifyBuy.buildClient({
      domain: "the-harvard-advocate.myshopify.com",
      storefrontAccessToken: "005d55feb024fc1214eaf8b8dd90aad0",
    });

    //fetching all products
    client.product
      .fetchAll()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {});

    //fetching merch (once merch collection exists)
    //const merchCollectionId = 'gid://shopify/Collection/INSERT-COLLECTION-ID-HERE';
    // Set a parameter for first x products, defaults to 20 if you don't provide a param

    // client.collection.fetchWithProducts(merchCollectionId).then((collections) => {
    //   // Do something with the collection
    //   setMerch(collections.products);
    //

    // fetching just issues
    const issueCollectionId = "gid://shopify/Collection/71491354679";
    // Set a parameter for first x products, defaults to 20 if you don't provide a param

    client.collection
      .fetchWithProducts(issueCollectionId)
      .then((collections) => {
        // Do something with the collection
        setIssues(collections.products);
      });
  }, []);

  if (!products) {
    return <ColorRingLoader />;
  } else {
  }
  return (
    <div sx={shopSx}>
      <div className="header">
        <Themed.h2>Shop</Themed.h2>
      </div>
      <div className="c">
        <hr />
        <MyCarousel prod={issues}></MyCarousel>
        <hr />
      </div>
      <div className="merch">
        <Themed.h2>merch coming soon!</Themed.h2>
      </div>
    </div>
  );
}
