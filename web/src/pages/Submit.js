/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import { Helmet, HelmetProvider, HelmetData } from 'react-helmet-async';

// test firebase push for summer page

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
      "The Harvard Advocate is currently soliciting submissions for our Summer 2025 issue."
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
            <Themed.h2>Summer 2025 Issue</Themed.h2>
            <hr />
            {/* <p align="left">
            This semester The Harvard Advocate is thinking about DIAGNOSIS. Diagnosis is a mode of knowing: to name the unnameable, to recognize what is coursing beneath the skin of suits, screens, and speeches. In Greek, to diagnose is “to know between” [γιγνώσχειν + διά] — between the line that delineates the strong from the weak, the natural from the unnatural, the saved from the suffering. Diagnosis produces frameworks in which we can settle our knowledge; it lays bare what words we think have authority all on their own. Diagnosis is the forced union of the symptomatic into the systematic. 
            </p>
            <br></br>
            <p>The Advocate asks: who has the power to diagnose — is it the nation state, the professional class, or even the artist or author? What, if anything, does a diagnosis on a sheet of paper — magazine reams, doctors’ notes, diary pages — change? What can diagnosis offer: lifeline or life sentence? Can personal pain be articulated by a diagnostic move in the language-game; is its knowledge unsettled by disability? What does diagnosis cost and who can afford to be diagnosed? Is diagnosis the sounding of the alarm or is it the snooze of complacency; does it do anything but give us a new name? Is it always better to know? Who knows best?</p>
            <br></br>
            <p>We may tell ourselves stories in order to live, but we diagnose in order to survive. Proclaim, promulgate, pitch. Diagnose past self-diagnoses, pathologize the pathologizers. Show us the exquisite corpse, the body in pain, the powers of horror. Tell us your national allegory; we will take your sick men. Rewrite history with new testimony and draw us lines in the sand. Give us diagnosis as the bearer of bad news, as chronic blessing, as passing curse: tell it like it is.</p>
             */}
            <i align="center">
            <br /> We are currently accepting submissions for our Summer 2025 issue, hosted online.
            <br /> No deadlines, no due dates.
               {/* <br />Submissions for Fiction are due April 6, 2025. 
              <br /> Submissions for Poetry and Art are due April 12, 2025. */}
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
