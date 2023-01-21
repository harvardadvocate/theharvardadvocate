/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageListElement from "./ImageListElement";
import { Grid } from "theme-ui";

const imageContentGrid = {};

export default function ImageContentGrid(props) {
  return (
    <div sx={imageContentGrid}>
      <Grid columns={2} gap={1}>
        {props.items &&
          props.items.map((item, index) => (
            <ImageListElement item={item} key={index} />
          ))}
      </Grid>
    </div>
  );
}
