/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import ShopifyBuy from 'shopify-buy';
import React, { useEffect, useState } from "react";

const issueSx = {
  ".shopContainer": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
  },
  ".shopBody": {
    display: "flex",
    scrollSnapType: "y mandatory",
    scrollBehavior: "smooth",
    overflowX: "auto",
    overflowY: "hidden",
    img: {
      boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
      ":hover": {
        border: "1px solid black",
      },
    },
    borderRight: "1px solid rgba(0,0,0,1)",
    borderTop: "1px solid rgba(0,0,0,1)",
    borderLeft: "1px solid rgba(0,0,0,0)",
    width: "800px",
    height: "30%",
    borderBottom: "1px solid rgba(0,0,0,1)",
    paddingBottom: "5vh",
  },

  "p": {
    fontSize: "0.55em",
    color: "#333",
  },
  ".productCard": {
    margin: "0em 2em",
    textAlign: "center",
    flex: "0 0 18%", // adjust flex to make product cards wider
  },

  ".scrollTitle": {
    writingMode: "vertical-lr",
    textOrientation: "upright",
    fontWeight: "bold",
    fontSize: "129.4%",
    marginRight: "0em",
    whiteSpace: "nowrap",
    alignSelf: "flex-start",
    border: "1px solid #000000",
    textAlign: "center",
  },
};

export default function Shop() {
  const [products, setProducts] = React.useState([]);
  const [issues, setIssues] = React.useState([])
  const [merch, setMerch] = React.useState([])
  const [cart, setCart] = useState(null);

  const addToCart = (variantId, quantity) => {
    const lineItemsToAdd = [{ variantId, quantity }];
    const client = ShopifyBuy.buildClient({
      domain: 'the-harvard-advocate.myshopify.com',
      storefrontAccessToken: '005d55feb024fc1214eaf8b8dd90aad0'
    });
    client.checkout.create().then((checkout) => {
      client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
        window.open(checkout.webUrl);
      }).catch((error) => {
        console.log(error);
      });
    });
  };

  useEffect(() => {
    const client = ShopifyBuy.buildClient({
      domain: 'the-harvard-advocate.myshopify.com',
      storefrontAccessToken: '005d55feb024fc1214eaf8b8dd90aad0'
    });

    //fetching all products
    client.product.fetchAll().then((products) => {
      setProducts(products);
      console.log(products)
    }).catch((error) => {
      console.log(error);
    });

    //fetching merch (once merch collection exists)
    //const merchCollectionId = 'gid://shopify/Collection/INSERT-COLLECTION-ID-HERE';
    // Set a parameter for first x products, defaults to 20 if you don't provide a param

    // client.collection.fetchWithProducts(merchCollectionId).then((collections) => {
    //   // Do something with the collection
    //   setMerch(collections.products);
    //   console.log(collections.products);

    // fetching just issues
    const issueCollectionId = 'gid://shopify/Collection/71491354679';
    // Set a parameter for first x products, defaults to 20 if you don't provide a param

    client.collection.fetchWithProducts(issueCollectionId).then((collections) => {
      // Do something with the collection
      setIssues(collections.products);
      console.log(collections.products);
    });
  }, []);

  return (
    <div sx={issueSx}>
      <Frame
        path={[
          {
            name: "Shop",
            slug: "/shop",
          },
        ]}
      >
        {/* ISSUES STYLING */}
        <div className="shopContainer">
          <div className="scrollTitle">
            ISSUES
          </div>
          <div className="scrollContainer">
            <div className="shopBody" >
              {issues.map((issue) => (
                <div key={issue.id} className="productCard" onClick={() => {
                  addToCart(issue.variants[0].id, 1)
                }}>
                  <Themed.h2 sx={{ fontSize: 1, border: 1 }}>
                    {issue.title}
                  </Themed.h2>
                  <img src={issue.images[0].src} alt={issue.title} width="100%" />
                  <Themed.p>
                    <i>
                      ${parseFloat(issue.variants[0].price.amount).toFixed(2)}
                    </i>
                  </Themed.p>
                </div>
              ))}
              {/* Repeated map function to make it seem like more issues exist */}
              {issues.map((issue) => (
                <div key={issue.id} className="productCard" onClick={() => {
                  addToCart(issue.variants[0].id, 1)
                }}>
                  <Themed.h2 sx={{ fontSize: 1, border: 1 }}>{issue.title}</Themed.h2>
                  <img src={issue.images[0].src} alt={issue.title} width="100%" />
                  <Themed.p sx={{ color: "red" }}>
                    <i>
                      ${parseFloat(issue.variants[0].price.amount).toFixed(2)}
                    </i>
                  </Themed.p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* MERCH STYLING */}
        {/* {merch.map((merch) => (
                <div key={merch.id} onClick={() => {
                  addToCart(merch.variants[0].id, 1)
                }}>
                  <Themed.h2>{merch.title}</Themed.h2>
                  <img src={merch.images[0].src} alt={issue.title} width="100%" />
                  <Themed.p>
                      ${parseFloat(merch.variants[0].price.amount).toFixed(2)}
                  </Themed.p>
                </div>
              ))} */}
      </Frame>
    </div>
  );
}