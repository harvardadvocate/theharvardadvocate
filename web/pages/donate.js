/** @jsxImportSource theme-ui */
import React from "react";
import Head from "next/head";
import Frame from "../src/components/Frame";

const donateSx = {
  ".donateBody": {
    marginTop: "0.4em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  i: {
    textAlign: "center",
    display: "block",
  },
  ".image": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    marginTop: "10px",
    width: "400px",
    textAlign: "center",
    alignItems: "center",
    figcaption: {
      fontSize: "16px",
    },
  },

  ".buttonLink": {
    color: "#000000",
    backgroundColor: "#ffffff",
    padding: "10px 10px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "18px",
    width: "35%",
    fontFamily: "sans-serif",
    fontWeight: "500",
    justifyContent: "center",
    display: "flex",
    border: "2px solid black",
    borderRadius: "10px",
  },
  ".buttonLink:hover": {
    color: "#ffffff",
    backgroundColor: "#000000",
  },

  "@media (max-width: 835px)": {
    ".donateBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
    ".image": {
      width: "100%",
    },
    ".buttonLink": {
      width: "50%",
    },
  },
};

export default function Donate() {
  return (

    <div sx={donateSx}>
      <Head>
        <title>Donate to the Harvard Advocate - The Harvard Advocate</title>
      </Head>

      <Frame
        path={[
          {
            name: "Donate to the Harvard Advocate",
            slug: "/donate",
          },
        ]}
      >







        <div className="donateBody">



          <p sx={{ variant: "styles.p" }}>
            <i>Thank you for considering a donation to The Harvard Advocate!</i>
            <br />
            <br />
            The Harvard Advocate is a completely undergraduate-run magazine who
            take no salary for our work. Any contribution helps us print the
            best literature, art, and poetry on Harvard's campus and around the
            world.
            <br />
            <br />
            To donate to us directly, please click the link below. All donations to Harvard Advocate Trustees Inc are fully tax deductible according to 501c(3) and should be made out by check to "The Trustees of The Harvard Advocate" and sent to 21 South St., Cambridge, MA 02138. If a different payment is preferred, please contact president@theharvardadvocate.com directly. Thank you for your support!
            <br />
            <br />
            <div align="center">
              <a
                className="buttonLink"
                href={"https://donate.stripe.com/6oE00W6lc7xQeVW144"}
                target="_blank"
                rel="noreferrer"
              >
                Click here to donate
              </a>
            </div>
          </p>

          <div className="image">
            <img
              src="/donate.jpeg"
              width="381"
              height="271"
              loading="lazy"
              alt="donate graphic"
            />
            <figcaption>
              Illustration from{" "}
              <em>Land of Tomorrow, Dark and Bloody Ground</em>
            </figcaption>
          </div>
        </div>
      </Frame>
    </div>



    );
  }
