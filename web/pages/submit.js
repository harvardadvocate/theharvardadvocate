/** @jsxImportSource theme-ui */
import React from "react";
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
    // textAlign: "center"
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
        <meta name='description' property="og:description" content="The Harvard Advocate is currently soliciting submissions for our Fall 2026 issue." />
        <meta name='title' property="og:title" content="Submit" />
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
          <p sx={{ variant: "styles.p" }}>
            The Harvard Advocate accepts submissions of art, fiction, and poetry
            of any form or length created by members of the Harvard community,
            as well as outside contributors at our discretion. All submissions
            are considered anonymously.
            </p>
            <br />
            <br />
            <hr />
            <h2 sx={{ variant: "styles.h2" }}>Spring 2026 Issue</h2>
            <hr />
            <div sx={{ textAlign: "left" }}>
            Come in, come in, is anyone receiving? A SIGNAL coming from outer space or a head space. A disaster prone messaging platform; is anyone virtue signaling anymore? We signal our intent, our interest, our distress, our progress . . . duress?
Blink twice if this guy’s bothering you, Major Tom, three times if you&apos;re lost at sea.
Badges signal status without need of the bearer’s tongue; meanings, covert or explicit, travel below the layer of language across distances too vast to shout. Cues, signs, sighs. Eye contact, body language, radio waves, and flares. In group, out group, in-the-know: are you up to speed, or are you down to clown?
This issue, the Advocate thinks of all things SIGNAL. The air waves are crowded, the columns are packed, and the feeds are endless. What’s getting through, and who’s listening anyway?
            <i sx={{ textAlign: "center", display: "block" }}>
            <br /> We are currently accepting submissions for our Fall 2026 issue.
            <br />
               <br />Submissions for Fiction, Poetry, and Art are due April 12, 2026.
            </i>
            <br />
            <div sx={{ textAlign: "center" }}>
              <a
                className="buttonLink"
                href="mailto:fiction@theharvardadvocate.com"
                target="_blank"
                rel="noreferrer"
              >
                Submit to Fiction
              </a>
            </div>
            <br />
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
            <div sx={{ textAlign: "center" }}>
              <a
                className="buttonLink"
                href="https://forms.gle/SreCuNx4NA4zDVDUA"
                target="_blank"
                rel="noreferrer"
              >
                Submit to Poetry
              </a>
            </div>
            <br />

            <ul>
              <li>We have no minimum or maximum word counts.</li>
              <li>
                If you&apos;d like to, you may include a message to the editor with
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
            <div sx={{ textAlign: "center" }}>
              <a
                className="buttonLink"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdzLqsA__rvkRkBVwszgrA1UWFXcjffGJms7PUTgo5emHTYcQ/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
              >
                Submit to Art
              </a>
            </div>
            <br />
            You can submit your work through the link above, or by emailing
            art@theharvardadvocate.com
          </div>
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
