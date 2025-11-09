import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Frame from '../src/components/Frame';

const styleOptions = {
  product: {
    '@media (min-width: 601px)': {
      'max-width': 'calc(25% - 20px)',
      'margin-left': '10px',
      'margin-bottom': '50px',
      'min-height': '375px',
      'margin-right': '10px',
    }
  },
  title: {
    'font-size': '16px',
    'min-height': '2em', // Allow for up to 2 lines of text, adjust as needed
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'display': '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
  },
  button: {
    'background-color': 'white',
    'border-color': 'black',
    'border': '1px solid black',
    'color': 'black',
    ':hover': {
      'background-color': 'black',
      'color': 'white',
    },
    ':focus': {
      'background-color': 'white',
      'color': 'black',
    }
  },
  img: {
    'height': '300px',  // set a fixed height
    'width': 'auto', // make sure it takes up full width
    'object-fit': 'cover',  // cover to make sure it's responsive
    'margin-left': 'auto',
    'margin-right': 'auto',
    'display': 'block',
    'padding-top': '10px',
  },
};


const Shop = () => {
  const shopifyContainer1 = useRef();
  const shopifyContainer2 = useRef();

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const script = document.createElement('script');
    script.src = scriptURL;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.ShopifyBuy) {
        const client = window.ShopifyBuy.buildClient({
          domain: 'the-harvard-advocate.myshopify.com',
          storefrontAccessToken: 'c352e31888e06717ad665e51df596558',
        });

        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: '71491354679',
            node: shopifyContainer1.current,
            options: {
              product: {
                styles: styleOptions
              },
            }
          });
        });
      }
    }
  }, []);

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const script = document.createElement('script');
    script.src = scriptURL;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.ShopifyBuy) {
        const client = window.ShopifyBuy.buildClient({
          domain: 'the-harvard-advocate.myshopify.com',
          storefrontAccessToken: 'c352e31888e06717ad665e51df596558',
        });

        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: '71491190839',
            node: shopifyContainer2.current,
            options: {
              product: {
                buttonDestination: 'modal',
                contents: {
                  options: false
                },
                styles: styleOptions,
              },
            },
          });
        });
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Shop - The Harvard Advocate</title>
      </Head>

      <Frame
        path={[
          {
            name: "Shop",
            slug: "/shop",
          },
        ]}
      >
        <div>
          <div ref={shopifyContainer2} id="collection-component-1685694291099"></div>
          <hr/>
          <div ref={shopifyContainer1} id="collection-component-1685694291098"></div>
        </div>
      </Frame>
    </>
  );
};

export default Shop;
