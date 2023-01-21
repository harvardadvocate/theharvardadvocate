/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextListElement from "./TextListElement";

const textContentListSx = {
  marginTop: "0.4em",
};

export default function TextContentList(props) {
  return (
    <div sx={textContentListSx}>
      <div>
        {props.items &&
          props.items.map((item, index) => (
            <TextListElement item={item} key={index} />
          ))}
      </div>
    </div>
  );
}
