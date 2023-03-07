/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";
import ShopifyBuy from 'shopify-buy';
import React, { useEffect, useState } from "react";


const shopSx = {
  ".shopBody": {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "0 em",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
    alignItems: "center",
    figcaption: {
      fontSize: "16px",
    },
  },
  i: {
    textAlign: "center",
    display: "block"
  },

  ".productContainer": {
    width: "60%",
    marginBottom: "1em",
  },

  ".productImage": {
    width: "100%",
    marginBottom: "0.5em",
  },

  ".productButton": {
    width: "100%",
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
  const [cart, setCart] = useState(null);

  const addToCart = (variantId, quantity) => {
    const lineItemsToAdd = [{ variantId, quantity }];
    const checkoutId = cart.id;
    const client = ShopifyBuy.buildClient({
      domain: 'the-harvard-advocate.myshopify.com',
      storefrontAccessToken: '005d55feb024fc1214eaf8b8dd90aad0'
    });
    client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
      setCart(checkout);
      window.location.href = checkout.webUrl;
    });
  };

  const openCart = () => {
    const client = ShopifyBuy.buildClient({
      domain: 'the-harvard-advocate.myshopify.com',
      storefrontAccessToken: '005d55feb024fc1214eaf8b8dd90aad0'
    });
    client.checkout.create().then((checkout) => {
      window.open(checkout.webUrl);
    });
  };

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
        <div className="shopBody" sx={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => (
            <div key={product.id} sx={{ width: "calc(33%)", margin: "0.5em" }}>
              <Themed.p>{product.title}</Themed.p>
              <img src={product.images[0].src} alt={product.title} />
              <Themed.p>{product.price}</Themed.p>
              <div data-element="product.buttonWrapper">
                <button data-element="product.button" onClick={() => addToCart(product.variants[0].id, 1)}>ADD TO CART</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </Frame>
    </div>
  );
}