/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListElement from "./ListElement";

const contentItemListSx = {};

// TODO: this is only for textual content - make separate component for art

export default function ContentItemList(props) {
  return (
    <div sx={contentItemListSx}>
      <div>
        {props.items &&
          props.items.map((item, index) => (
            <ListElement item={item} key={index} />
          ))}
      </div>
    </div>
  );
}
