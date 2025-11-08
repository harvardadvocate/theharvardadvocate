/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Head from "next/head";
import Frame from "../src/components/Frame";

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

export default function Submit() {
  return (
    <div sx={submitSx}>

      <Head>
        <title>Submit - The Harvard Advocate</title>
        <meta name='description' property="og:description" content={
          "The Harvard Advocate is currently soliciting submissions for our Summer 2025 issue."
        } />
        <meta name='title' property="og:title" content={"Submit"} />
      </Head>

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
            <p align="left">
            FEAR has an odd directionality. At times it emerges from within, a frenzy of unease that clings
desperately to the world around us: the unseen corners of the bed that breed monsters; waves
against the hull making known the presence of some great beast stirring underneath; darkness that
acquires weight, tapping insistently at the shoulder. At other times, fear is pressed upon us and a
sudden realization makes known that we should indeed be afraid, forged by threat. Today this is our
shared experience. As the world turns in ways that are nothing if not terrifying, fear becomes the
texture of our condition.
            </p>
            <br></br>
            <p>
            On The Harvard Advocate's 160th anniversary we hear the word coming from the Old English fǣr —
calamity, danger. We contemplate our motto, Dulce Est Periculum — danger is sweet. Who are we to
be lovers of danger in an age of fear? The Advocate, too, is trembling, and so it speaks.
            </p>
            <br></br>
            {/* <p>We may tell ourselves stories in order to live, but we diagnose in order to survive. Proclaim, promulgate, pitch. Diagnose past self-diagnoses, pathologize the pathologizers. Show us the exquisite corpse, the body in pain, the powers of horror. Tell us your national allegory; we will take your sick men. Rewrite history with new testimony and draw us lines in the sand. Give us diagnosis as the bearer of bad news, as chronic blessing, as passing curse: tell it like it is.</p>
             */}
            <i align="center">
            <br /> We are currently accepting submissions for our Spring 2026 issue.
            <br />
               <br />Submissions for Fiction, Poetry, and Art are due November 14, 2025.
              {/* <br /> Submissions for Poetry and Art are due April 12, 2025. */}
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
                If you'd like to, you may include a message to the editor with
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
