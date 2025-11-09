/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import ImageListElement from "./ImageListElement";

const imageContentListSx = {};

export default function ImageContentListHorizontal(props) {
  return (
    <div sx={imageContentListSx}>
      <div>
        {props.items &&
          props.items.map((item, index) => (
            <ImageListElement item={item} key={index} />
          ))}
      </div>
    </div>
  );
}
