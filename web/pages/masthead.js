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
              A. Sonnad-Joshi, President ‘27
              <br />
              E. Michielsen Jiménez, Publisher ‘28
              <br />
              <br />
              K. Kingsbury-Lee, Art Editor ‘28
              <br />
              M. Miller, Art Editor ‘27
              <br />
              M. Yu, Tech Editor ‘27
              <br />
              D. Sunshine, Business Manager ‘28
              <br />
              A. Du, Design Editor ‘28
              <br />
              S. Connally, Features Editor ‘28
              <br />
              D. Alp, Features Editor ‘27
              <br />
              L. Wood, Fiction Editor ‘27
              <br />
              B. Kimball, Junior Fiction Editor ‘28
              <br />
              W. Renwick, Poetry Editor ‘28
              <br />
              S. Choudhury, Notes Editor ‘28
              <br />
              B. Kimball, Notes Editor ‘28

              <br />
              <br />

              F. Fox, Dionysus ‘29
              <br />
              A. Popnikolova, Dionysus ‘28
              <br />
              H. Dallman, Dionysus ‘28
              <br />
              A. Sha, Pegasus ‘29
              <br />
              C. Xue, Pegasus ‘29
              <br />
              O. Yaffe, Hermes ‘28
              <br />
              K. Chong, Hades ‘29
              <br />
              E. Ferrari, Hestia ‘28

              <br />
              <br />

              E. Igwike, D&I Chair ‘28
              <br />
              N. Sun, Librarian ‘27
              <br />
              J. Liu, Cafe Manager ‘28
              <br />
              S. Vo, Cafe Manager ‘28

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
