/** @jsxImportSource theme-ui */
import React from "react";
import Head from "next/head";
import Frame from "../src/components/Frame";

const mastheadSx = {
  ".mastheadBody": {
    marginTop: "0.4em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  i: {
    textAlign: "center",
    display: "block",
  },

  "@media (max-width: 835px)": {
    ".mastheadBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
  },
};

export default function Masthead() {
  return (
    <div sx={mastheadSx}>
      <Head>
        <title>Masthead - The Harvard Advocate</title>
      </Head>

      <Frame
        path={[
          {
            name: "Masthead",
            slug: "/masthead",
          },
        ]}
      >
        <div className="mastheadBody">
          <p sx={{ variant: "styles.p" }}>
            <i>
              A. Sonnad-Joshi, President
              <br />
              E. Michielsen Jiménez, Publisher
              <br />
              <br />
              K. Kingsbury-Lee, Art Editor
              <br />
              M. Miller, Art Editor
              <br />
              M. Yu, Tech Editor
              <br />
              D. Sunshine, Business Manager
              <br />
              A. Du, Design Editor
              <br />
              S. Connally, Features Editor
              <br />
              D. Alp, Features Editor
              <br />
              L. Wood, Fiction Editor
              <br />
              B. Kimball, Junior Fiction Editor
              <br />
              W. Renwick, Poetry Editor
              <br />
              S. Choudhury, Notes Editor
              <br />
              B. Kimball, Notes Editor

              <br />
              <br />

              Y. Ma, Dionysus
              <br />
              A. Popnikolova, Dionysus
              <br />
              H. Dallman, Dionysus
              <br />
              A. Sha, Pegasus
              <br />
              C. Xue, Pegasus
              <br />
              O. Yaffe, Hermes
              <br />
              K. Chong, Hades
              <br />
              E. Ferrari, Hestia

              <br />
              <br />

              E. Igwike, D&I Chair
              <br />
              N. Sun, Librarian
              <br />
              J. Liu, Cafe Manager
              <br />
              S. Vo, Cafe Manager

              <br /> <br /> <br />
              <b>Board of Trustees</b>
              <br /><br />
              D.T. Max, President
              <br />
              Douglas McIntyre, Chairman and Treasurer
              <br />
              Charles Atkinson, Secretary
              <br />
              Amelia Atlas, Secretary
              <br />
              Louis Begley, Chairman Emeritus
              <br />
              Peter Brooks
              <br />
              Casey Cep
              <br />
              Emily Chertoff
              <br />
              Jonathan Galassi
              <br />
              Lev Grossman
              <br />
              Leslie Jamison
              <br />
              Julian Lucas
              <br />
              Angela Mariani
              <br />
              Susan Morrison
              <br />
              Celia McGee
              <br />
              Thomas A. Stewart
              <br />
              Jean Strouse
              <br />
            </i>
          </p>
        </div>
      </Frame>
    </div>
  );
}
