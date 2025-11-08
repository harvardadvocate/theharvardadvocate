/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Head from "next/head";
import Frame from "../src/components/Frame";
import { useIsMobile } from "../lib/utils/isMobile.js";

const queerSx = {
  ".queerBody": {
    marginTop: "0.2em",
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
    width: "500px",
    textAlign: "center",
    alignItems: "center",
    figcaption: {
      fontSize: "16px",
    },
  },
  a: {
    color: "#00008B",
    textDecoration: "underline",
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

export default function Queerzine() {

  var isMobile = useIsMobile();
  return (

    <div sx={queerSx}>
      <Head>
        <title>Queer Zine - The Harvard Advocate</title>
      </Head>

      <Frame
        path={[
          {
            name: "Queer Zine",
            slug: "/queerzine",
          },
        ]}
      >


        <div className="queerBody">
        {/* <Themed.p>[insert short blurb here?] </Themed.p> */}

        <i>

        <p>The Queer Zine is a special project that a few members of The Harvard Advocate pursued over the Summer 2024. <br></br>You can find a free hard copy of it in your dining hall or one of the campus cafes.
        </p>

        </i>
        <br></br>

        {isMobile ?



<div>

<iframe src="https://docs.google.com/viewer?url=https://theharvardadvocate.com/queerzine.pdf&embedded=true" toolbar={0} width="400vw" height="600vh"></iframe>
</div>

:
<iframe src="https://docs.google.com/viewer?url=https://theharvardadvocate.com/queerzine.pdf&embedded=true" toolbar={0} width="500vw" height="720vh"></iframe>


        }






        </div>
      </Frame>
    </div>



    );
  }
