import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import ShopifyBuy from 'shopify-buy';
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"
import shopSx from "../components/shopStyles.js"

export default function Shop() {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = useState(null);

  const addToCart = (variantId, quantity) => {
    const lineItemsToAdd = [{ variantId, quantity }];
    const client = ShopifyBuy.buildClient({
      domain: 'the-harvard-advocate.myshopify.com',
      storefrontAccessToken: '005d55feb024fc1214eaf8b8dd90aad0'
    });
    client.checkout.create().then((checkout) => {
      setCart(checkout);
      return client.checkout.addLineItems(checkout.id, lineItemsToAdd);
    }).then((checkout) => {
      setCart(checkout);
      window.location.href = checkout.webUrl;
    }).catch((error) => {
      console.log(error);
    });
  };

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
        <div className="shopBody">
          {products.map((product) => (
            <div key={product.id} className="product">
              <Themed.p>{product.title}</Themed.p>
              <img src={product.images[0].src} alt={product.title} width="100%" />
              <Themed.p>${parseFloat(product.variants[0].price.amount).toFixed(2)}</Themed.p>
              <button
                className="productButton"
                onClick={() => addToCart(product.variants[0].id, 1)}
              >
                Add to Cart
              </button>
              <hr />
            </div>
          ))}
        </div>
      </Frame>
    </div>
  );
}