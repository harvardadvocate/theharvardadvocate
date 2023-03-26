import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { Themed } from "theme-ui";
import ShopifyBuy from 'shopify-buy';



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


const carouselOptions = {
  breakpoints: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
  autoCycle: true,
  cycleInterval: 5000,
  dots: false,
  showSides: true,
  sidesOpacity: 0.5,
  sideSize: 0.4,
  slidesToScroll: 3,
  slidesToShow: 3,
  scrollOnDevice: true,
};

const carouselSx = {

};


export default function MyCarousel(props) {
  console.log(props.prod);
  return (
    <>
      {props.prod.length > 0 ? (
        <div sx={carouselSx}>
          <InfiniteCarousel {...carouselOptions}>
            {props.prod.map((issue, index) => {
              return (
                <div className="carousel-item" key={index} onClick={() => {addToCart(issue.variants[0].id, 1)}}>
                <img src={issue.images[0].src} alt={issue.title} width="100%" />
                <Themed.p>
                <i>
                  <br/>
                  {issue.title} <br/>
                  ${parseFloat(issue.variants[0].price.amount).toFixed(2)}
                </i>
                </Themed.p>


                </div>
              );
            })}
          </InfiniteCarousel>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
