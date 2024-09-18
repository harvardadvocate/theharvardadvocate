/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import { Helmet, HelmetProvider, HelmetData } from 'react-helmet-async';


const submitSx = {
  ".submitBody": {
    margin: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
  },
  i: {
    textAlign: "center",
    display: "block",
  },
  p: {
    //textAlign: "center"
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
  h2: {
    textAlign: "center",
  },

  "@media (max-width: 835px)": {
    ".submitBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
    ".image": {
      width: "100%",
    },
    ".buttonLink": {
      width: "60%",
    },
  },
};

const helmetData = new HelmetData({});


export default function Submit() {
  return (
    <div sx={submitSx}>


    <Helmet helmetData={helmetData}>
    {/* <title>{itemData.title}</title> */}
    <meta name='description' property="og:description" content={
      "The Harvard Advocate is currently soliciting submissions for our Fall 2024 issue."
      }  />
    <meta name='title' property="og:title" content={"Submit"} />

    </Helmet>

      <Frame
        path={[
          {
            name: "Submit to the Harvard Advocate",
            slug: "/submit",
          },
        ]}
      >
        <div className="submitBody">
          <Themed.p>
            The Harvard Advocate accepts submissions of art, fiction, and poetry
            of any form or length created by members of the Harvard community,
            as well as outside contributors at our discretion. All submissions
            are considered anonymously.
            <br />
            <br />
            <hr />
            <Themed.h2>Fall 2024 Issue</Themed.h2>
            <hr />
            <p align="left">
            This semester, The Harvard Advocate is asking about LAND. 
            What lies underneath our digital renderings of roadmaps, county-lines, nation-states? 
            Is it the twin forces of heat & pressure endlessly chasing the other’s tail? Is it geological– land as the tectonic temperaments of an indecisive planet? 
            Or political – the shifting allegiances of disputed borders, jingoistic statesmen, international entanglements? We are wondering about the trees, who, like us, 
            cannot help but tell stories, or the rivers, who, unlike us, love to leave things behind. We are wondering about land as an anchor, land which roots out memories, 
            holds our loved ones— the keeper of fossil history and the grower of new leaves. We want to know about land as the locus of indigeneity – what happens when land gets 
            forcibly occupied? How do we take land back? Has land been appropriated by the economic? Is land property, ownership, entitlement? Show us setting, landscape, mise en scène; 
            boast about the home for which you are sick. Give us land as reclamation, liberation, celebration; land as the cupping of your hands & the soil that falls, gently, through the 
            gaps of your fingers. 
            </p>
            <br></br>
            <p>The land issue asks: <em>What is the ground upon which we stand?</em></p>
            <i align="center">
            <br /> We are currently accepting submissions for our Fall 2024 issue.
               <br />Submissions for Fiction are due October 16, 2024. 
              <br /> Submissions for Poetry and Art are due October 27, 2024.
            </i>
            <br />
            <div align="center">
              <a
                className="buttonLink"
                href={
                  "mailto:fiction@theharvardadvocate.com"
                }
                target="_blank"
                rel="noreferrer"
              >
                Submit to Fiction
              </a>
            </div>
            <br></br>
            <ul>
              <li>
              We have no minimum or maximum word counts, but the work we
                publish tends to be between 700 and 7000 words.
              </li>
              <li>
              Please include a cover letter and brief third-person
                biographical statement with your submission.
              </li>
              <li>
              Attach your work as a Microsoft Word file. (Please consider
                double-spacing and using 12-point Times New Roman font with
                standard margins.)
              </li>
              <li>
              Because submissions are considered anonymously, please make sure
                your name is not anywhere in the document.
              </li>
              <li>
              Simultaneous submissions are accepted, but please let us know
                immediately if your work is accepted elsewhere.
              </li>
            </ul>
            You can submit your work by emailing
            fiction@theharvardadvocate.com
            <br />
            <br />
            <hr />
            <br />
            <div align="center">
              <a
                className="buttonLink"
                href={
                  "https://forms.gle/SreCuNx4NA4zDVDUA"
                }
                target="_blank"
                rel="noreferrer"
              >
                Submit to Poetry
              </a>
            </div>
            <br></br>

            <ul>
              <li>We have no minimum or maximum word counts.</li>
              <li>
                If you’d like to, you may include a message to the editor with
                your submission. In this message you can describe your work, if
                you like, or give any background necessary to understand it.
              </li>
              <li>
                Attach your work as a Microsoft Word file or PDF file. Word
                files are the preferred format, but either is acceptable.
              </li>
              <li>
                Because submissions are considered anonymously, please make sure
                your name is not anywhere in the document.
              </li>
              <li>
                Simultaneous submissions are accepted, but please let us know
                immediately if your work is accepted elsewhere.
              </li>
              <li>
                We primarily read and publish various styles of written poetry,
                but illustrated forms of poetry (like poetry comics)—along with
                other nontraditional poetic formats—can be submitted as well.
              </li>
            </ul>
            You can submit your work through the link above, or by emailing
            poetry@theharvardadvocate.com
            <br />
            <br />
            <hr />
            <br />
            <div align="center">
              <a
                className="buttonLink"
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSdzLqsA__rvkRkBVwszgrA1UWFXcjffGJms7PUTgo5emHTYcQ/viewform?usp=sf_link"
                }
                target="_blank"
                rel="noreferrer"
              >
                Submit to Art
              </a>
            </div>
            <br />
            You can submit your work through the link above, or by emailing
            art@theharvardadvocate.com
          </Themed.p>
          <div className="image">
            <img
              src="/submit.jpeg"
              width="400"
              height="400"
              loading="lazy"
              alt="submit graphic"
            />
            <figcaption>
              Illustration from <em>The Leaving</em>
            </figcaption>
          </div>
        </div>
      </Frame>
    </div>
  );
}
