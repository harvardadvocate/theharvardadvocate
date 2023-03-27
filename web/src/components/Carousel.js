import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { Themed } from "theme-ui";
import ShopifyBuy from 'shopify-buy';
import { useIsMobile } from "../utils/isMobile.js";
import ColorRingLoader from "./LoadingRing.js";

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

    });
  });
};



function createCarouselOptions(numToShow) {
  const toReturn = {
    autoCycle: true,
    cycleInterval: 3000,
    dots: false,
    showSides: true,
    sidesOpacity: 0.5,
    sideSize: 0.1,
    slidesToScroll: numToShow,
    slidesToShow: numToShow,
    scrollOnDevice: true,
  };
  return toReturn;
}

const carouselSx = {

};



export default function MyCarousel(props) {
  var isMobile = useIsMobile();
  var modifier = 3;
  if (isMobile) {
    modifier = 1;
  }
  const carouselOptions = createCarouselOptions(modifier);
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
        <ColorRingLoader/>
      )}
    </>
  );
}
