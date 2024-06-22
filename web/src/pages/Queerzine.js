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
            name: "Submit to the Queer Zine",
            slug: "/queerzine",
          },
        ]}
      >
        
        <div className="donateBody">

          <Themed.p>
          Hi! Thank you for your interest in the Queer Zine project.
            <br />
            <br />
            This time, we are working on a zine — a format that has historically served as a space for critiquing authorities, subverting expectations, and operating in the political realm as well as the artistic. 
            Zines have been playing a significant role in queer liberation movements for over 40 years now — so much so that there exists an <a href="https://www.queerzinelibrary.com/">online library</a> full of queer zines alone. 
            <br />
            <br />
            In keeping with the grassroots origins and social nature of zines, this is not a typical Advocate issue: not in format, not in intent, not in volume. 
            We are focusing not only on uplifting skillful artists and writers but also more particularly on utilizing the power of all art to spotlight political and systemic issues. 
            <br />
            <br />
            We are asking all authors who are considering a submission to think globally and not be confined by any boundaries. We are looking for work that bridges together concepts and crosses the borders of thinking about queerness(es). 
            As such, we particularly welcome submissions from artists working across non-Western contexts and spaces.
            <br />
            <br />
            As you submit your piece, we encourage you to think about how your work relates to the following topics/concepts:
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;Global and Transnational <br /> &nbsp;&nbsp;&nbsp;Crossing (any) Borders <br /> &nbsp;&nbsp;&nbsp;Queer Place, Time, and History <br /> &nbsp;&nbsp;&nbsp;Utopia of Queer Liberation <br /> &nbsp;&nbsp;&nbsp;Personal is Political
            <br />
            <br />
            These keywords don’t have to be the centerpiece of your art, nor are these concepts criteria for submission or publication. We want to welcome all queer work — any expressions and ruminations on queerness that you want to share. 
            These are merely suggestions that could help you better understand what kind of approach we are taking to this project and our topic. 
            <br />
            <br />
            Think about your art freely:
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&#8594; We don’t care about medium unless it is physically unprintable (audio/video) <br /> 
            &nbsp;&nbsp;&nbsp;&#8594; Stage directions for a performance art piece <br /> 
            &nbsp;&nbsp;&nbsp;&#8594; Games <br /> 
            &nbsp;&nbsp;&nbsp;&#8594; Critical essay <br /> 
            &nbsp;&nbsp;&nbsp;&#8594; Review of a news article <br />
            &nbsp;&nbsp;&nbsp;&#8594; Letter <br />
            &nbsp;&nbsp;&nbsp;&#8594; Manifesto <br />
            &nbsp;&nbsp;&nbsp;&#8594; Song with notes and lyrics <br />
            &nbsp;&nbsp;&nbsp;&#8594; Collage <br />
            &nbsp;&nbsp;&nbsp;&#8594; Quote collection <br />
            &nbsp;&nbsp;&nbsp;&#8594; Mirror selfie <br />
            &nbsp;&nbsp;&nbsp;&#8594; Sticker <br />
            &nbsp;&nbsp;&nbsp;&#8594; Tapestry <br />
            &nbsp;&nbsp;&nbsp;&#8594; As well as our traditional formats: poetry, fiction, features! <br />
            <br />
            We are looking for a shorter genre selection for this project. We are very unlikely to publish anything over 3 pages in length. If you are interested in publishing longer work, please, submit to our regular issues!
            <br />
            <br />
            To submit your work, please, fill out the form below and do not hesitate to reach out with any questions to <a href="mailto:publisher@theharvardadvocate.com">publisher@theharvardadvocate.com</a>.
            <br />
            <br />
            {/* <p style="text-indent: 15px;">Only first line</p> */}
            <div align="center">
              <a
                className="buttonLink"
                href={"https://forms.gle/ZUydmrRLPoUosKxR7"}
                target="_blank"
                rel="noreferrer"
              >
                Submit here
              </a>
            </div>
          </Themed.p>

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