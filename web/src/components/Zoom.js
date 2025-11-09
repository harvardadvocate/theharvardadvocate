import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Zoom (props) {
  return (
    <TransformWrapper
    defaultScale={1}
    defaultPositionX={1}
    defaultPositionY={1}
>
      <TransformComponent>
        <img src={props.src} alt={props.alt || ""} />
      </TransformComponent>
    </TransformWrapper>
  );
};