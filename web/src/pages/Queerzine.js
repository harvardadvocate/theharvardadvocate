/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";

const queerSx = {
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
  return (

    <div sx={queerSx}>
      <Frame
        path={[
          {
            name: "Queer Zine",
            slug: "/queerzine",
          },
        ]}
      >
        
        <div className="donateBody">

          <Themed.p>

                  <div>
        <iframe src="/queerzine.pdf" width="500px" toolbar={1} zoom="200%" height="800px" />
        </div>
          </Themed.p>

        </div>
      </Frame>
    </div>
  
  

    );
  }