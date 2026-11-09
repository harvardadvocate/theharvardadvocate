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
    margin: "24px auto 12px",
    textAlign: "center",
    lineHeight: 1.6,
    p: {
      margin: "0 0 6px",
    },
  },
  ".boardSubmission": {
    width: "100%",
    maxWidth: "760px",
    padding: "12px 0 16px",
    ".submissionPrompt": {
      margin: "14px 0 0",
      textAlign: "center",
      fontSize: "0.95rem",
      lineHeight: 1.5,
    },
    details: {
      marginTop: "22px",
    },
    summary: {
      listStyle: "none",
      textAlign: "center",
      cursor: "pointer",
    },
    ".guidelinesCopy": {
      maxWidth: "620px",
      margin: "20px auto 0",
      lineHeight: 1.65,
      p: {
        margin: "0 0 14px",
      },
      "p:last-child": {
        marginBottom: 0,
      },
    },
  },
  ".buttonLink": {
    color: "#000000",
    backgroundColor: "#ffffff",
    padding: "14px 28px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "17px",
    width: "auto",
    minWidth: "240px",
    fontFamily: "sans-serif",
    fontWeight: "500",
    justifyContent: "center",
    display: "flex",
    border: "2px solid black",
    borderRadius: "10px",
    transition: "color 0.2s ease, background-color 0.2s ease",
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
    marginTop: 0,
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
      width: "100%",
      maxWidth: "360px",
      minWidth: "0",
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
          content="The Harvard Advocate is currently accepting rolling submissions for our Spring 2026 issue."
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
            <p>We are currently accepting submissions for our Spring 2026 issue.</p>
            <p><strong>Submissions for Fiction, Poetry, and Art are rolling.</strong></p>
          </div>

          <div className="boardSubmission">
            <div sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <a
                className="buttonLink"
                href="https://theharvardadvocate.submittable.com/submit"
                target="_blank"
                rel="noreferrer"
              >
                Submit Your Work
              </a>
            </div>
            <p className="submissionPrompt">
              Use this Submittable form for all art, fiction, and poetry
              submissions.
            </p>

            <details>
              <summary className="submissionPrompt">
                View Fiction submission guidelines
              </summary>
              <div className="guidelinesCopy">
                <p>
                  We have no minimum or maximum word counts, but the work we
                  publish tends to be between 700 and 7,000 words. Please include
                  a cover letter and brief third-person biographical statement
                  with your submission.
                </p>
                <p>
                  Attach your work as a Microsoft Word file. Double-spacing and
                  12-point Times New Roman font with standard margins are
                  appreciated. Because submissions are considered anonymously,
                  please make sure your name does not appear anywhere in the
                  document.
                </p>
                <p>
                  Simultaneous submissions are accepted; please let us know
                  immediately if your work is accepted elsewhere.
                </p>
              </div>
            </details>
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
