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
      "The Harvard Advocate is currently soliciting submissions for our Spring 2026 issue."
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
            <Themed.h2>Spring 2026 Issue</Themed.h2>
            <hr />
            <p align="left">The trouble with the truth is that everyone has one.</p>
            <p align="left">
              Memory is an unreliable witness, and every narrator has something to hide. Yet nothing reveals quite as much as a disguise. The truth is rarely pure and never simple.<br />
              The inside is out; the outside is in. And this is certainly not a pipe.
            </p>
            <p align="left">
              The more the self is externalized the less certain we become of its substance.<br />
              Are we revealing, or constructing?<br />
              Do you know it when you see it, or see it when you know it?<br />
              Nothing is, but what is not?
            </p>
            <p align="left">
              This issue, the Advocate welcomes all that is TRUE and FALSE.<br />
              We ask what can be known, what can be shown, what remains beyond the frame, in the margins, between the lines. The question is not simply which is true, but whether the difference matters.
            </p>
            <p align="left">
              From the counterfeit to the confessional we consider what happens when the real and unreal trade places. After all, the truth, like any good story, depends on its telling alone.
            </p>
            <p align="left">
              TRUE/FALSE does not seek to close the rift. It demands that we sit in multiplicity and simultaneity.<br />
              This issue asks not for answers but entanglements. Linger in contradiction. Fracture the binaries.<br />
              Give us your staged confession, your unreliable narrator, your digital double, your performative utterance. Contradict yourself, contain multitudes.
            </p>
            <Themed.h2 align="center">Graveyard</Themed.h2>
            <i align="center">
              <p>What we call the beginning is often the end. - TSE</p>
              <p>Do I contradict myself? Very well then I contradict myself, I am large, I contain multitudes. - WW</p>
              <p>Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn&apos;t. - Twain</p>
              <p>
                To be seen is to be verified. To have your own existence confirmed back to you.<br />
                But what is left behind, within? Remains unsaid, unsayable?<br />
                The Advocate asks: when anything can be fabricated, what still counts as true?
              </p>
            </i>
            <i align="center">
            <br /> We are currently accepting digital-only submissions for our Spring 2026 issue.
            <br />
               <br />Submissions for Fiction, Poetry, and Art are rolling. 
              {/* <br /> Submissions for Poetry and Art are due April 12, 2025. */}
            </i>
            <br />
            <div align="center">
              <a
                className="buttonLink"
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSesr2KYYnip9xs3MfOMm1aoaWQVFcIsKCKBguvMdbMaO6_ryg/viewform"
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
            Submit your fiction through the Google Form above.
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
            You can submit your work through the link above. Email questions to poetry@theharvardadvocate.com
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
