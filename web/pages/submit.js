/** @jsxImportSource theme-ui */
import React from "react";
import Head from "next/head";
import Frame from "../src/components/Frame";

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
  p: {},
  ".issueCopy": {
    width: "100%",
    maxWidth: "760px",
    margin: "0 auto",
    lineHeight: 1.7,
    p: {
      margin: "0 0 18px 0",
    },
  },
  ".submissionNotice": {
    maxWidth: "680px",
    margin: "0 auto 18px",
    textAlign: "center",
    lineHeight: 1.6,
    p: {
      margin: "0 0 6px",
    },
  },
  ".fictionGuidelines": {
    width: "100%",
    maxWidth: "760px",
    ul: {
      margin: "16px 0",
      lineHeight: 1.55,
    },
    p: {
      margin: "12px 0 28px",
      textAlign: "center",
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
    minWidth: "300px",
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
      minWidth: "0px",
    },
  },
};

export default function Submit() {
  return (
    <div sx={submitSx}>
      <Head>
        <title>Submit - The Harvard Advocate</title>
        <meta
          name="description"
          property="og:description"
          content="The Harvard Advocate is currently accepting rolling submissions for our digital-only Spring 2026 issue."
        />
        <meta name="title" property="og:title" content="Submit" />
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
          <br />

          <div className="issueCopy">
            <p sx={{ variant: "styles.p" }}>
              The trouble with the truth is that everyone has one.
            </p>

            <p sx={{ variant: "styles.p" }}>
              Memory is an unreliable witness, and every narrator has something to hide. Yet nothing reveals quite as much as a disguise. The truth is rarely pure and never simple.<br />
              The inside is out; the outside is in. And this is certainly not a pipe.
            </p>

            <p sx={{ variant: "styles.p" }}>
              The more the self is externalized the less certain we become of its substance.<br />
              Are we revealing, or constructing?<br />
              Do you know it when you see it, or see it when you know it?<br />
              Nothing is, but what is not?
            </p>

            <p sx={{ variant: "styles.p" }}>
              This issue, the Advocate welcomes all that is TRUE and FALSE.<br />
              We ask what can be known, what can be shown, what remains beyond the frame, in the margins, between the lines. The question is not simply which is true, but whether the difference matters.
            </p>

            <p sx={{ variant: "styles.p" }}>
              From the counterfeit to the confessional we consider what happens when the real and unreal trade places. After all, the truth, like any good story, depends on its telling alone.
            </p>

            <p sx={{ variant: "styles.p" }}>
              TRUE/FALSE does not seek to close the rift. It demands that we sit in multiplicity and simultaneity.<br />
              This issue asks not for answers but entanglements. Linger in contradiction. Fracture the binaries.<br />
              Give us your staged confession, your unreliable narrator, your digital double, your performative utterance. Contradict yourself, contain multitudes.
            </p>
          </div>

          <div className="submissionNotice">
            <p>We are currently accepting digital-only submissions for our Spring 2026 issue.</p>
            <p><strong>Submissions for Fiction, Poetry, and Art are rolling.</strong></p>
          </div>

          <div className="fictionGuidelines">

          <div sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <a
              className="buttonLink"
              href="mailto:fiction@harvardadvocate.org"
            >
              Submit to Fiction
            </a>
          </div>

          <ul>
            <li>
              We have no minimum or maximum word counts, but the work we publish
              tends to be between 700 and 7000 words.
            </li>
            <li>
              Please include a cover letter and brief third-person biographical
              statement with your submission.
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

          <p>You can submit your work through <a href="mailto:fiction@harvardadvocate.org">fiction@harvardadvocate.org</a>.</p>
          </div>

          <hr />

          <div sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
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
              If you&apos;d like to, you may include a message to the editor
              with your submission. In this message you can describe your work,
              if you like, or give any background necessary to understand it.
            </li>
            <li>
              Attach your work as a Microsoft Word file or PDF file. Word files
              are the preferred format, but either is acceptable.
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

          <p>
            You can submit your work through the link above. Email questions to
            poetry@harvardadvocate.org
          </p>

          <br />
          <br />
          <hr />
          <br />

          <div sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
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

          <p>
            You can submit your work through the link above, or by emailing
            art@harvardadvocate.org
          </p>

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
