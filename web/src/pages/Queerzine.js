/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import { useIsMobile } from "../utils/isMobile.js";


const queerSx = {
  ".donateBody": {
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
      <Frame
        path={[
          {
            name: "Queer Zine",
            slug: "/queerzine",
          },
        ]}
      >

        
        <div className="donateBody">
        {/* <Themed.p>[insert short blurb here?] </Themed.p> */}

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