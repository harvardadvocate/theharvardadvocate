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
  ".issueCopy": {
    width: "100%",
    maxWidth: "760px",
    margin: "0 auto",
    lineHeight: 1.7,
    p: { margin: "0 0 18px 0" },
  },
  ".submissionNotice": {
    maxWidth: "680px",
    margin: "24px auto 32px",
    textAlign: "center",
    lineHeight: 1.6,
  },
  ".boardSubmission": {
    width: "100%",
    maxWidth: "760px",
    padding: "28px 0",
    borderTop: "1px solid rgba(0, 0, 0, 0.2)",
    ".submissionPrompt": {
      margin: "16px 0 0",
      textAlign: "center",
      fontSize: "0.95rem",
      lineHeight: 1.5,
    },
  },
  ".fictionGuidelines": {
    ul: {
      listStyle: "none",
      padding: 0,
      margin: "16px 0 24px",
      lineHeight: 1.55,
    },
    li: {
      padding: "12px 16px",
      borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    },
    ".guidelinesHeading": {
      margin: "20px 0 0",
      fontSize: "0.9rem",
      fontWeight: "bold",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    p: {
      margin: "12px 0 28px",
      textAlign: "center",
    },
    details: {
      marginTop: "22px",
    },
    summary: {
      listStyle: "none",
      textAlign: "center",
      cursor: "pointer",
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
          <div>
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
            <div className="issueCopy">
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
            </div>
            <div className="submissionNotice">
              <p>We are currently accepting submissions for our Spring 2026 issue.</p>
              <p><strong>Submissions for Fiction, Poetry, and Art are rolling.</strong></p>
            </div>
            <div className="boardSubmission">
              <div align="center">
                <a
                  className="buttonLink"
                  href="https://theharvardadvocate.submittable.com/submit"
                  target="_blank"
                  rel="noreferrer"
                >
                  Submit to Poetry
                </a>
              </div>
              <p className="submissionPrompt">
                You can submit your work through the link above.
              </p>
            </div>

            <div className="boardSubmission fictionGuidelines">
              <div align="center">
                <a
                  className="buttonLink"
                  href="mailto:fiction@harvardadvocate.org"
                >
                  Submit to Fiction
                </a>
              </div>
              <br />
              <details>
                <summary className="submissionPrompt">
                  View Fiction submission guidelines
                </summary>
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
                    Because submissions are considered anonymously, please make
                    sure your name is not anywhere in the document.
                  </li>
                  <li>
                    Simultaneous submissions are accepted, but please let us
                    know immediately if your work is accepted elsewhere.
                  </li>
                </ul>
                <p className="submissionPrompt">
                  You can submit your work through the link above, or by
                  emailing{" "}
                  <a href="mailto:fiction@harvardadvocate.org">
                    fiction@harvardadvocate.org
                  </a>
                  .
                </p>
              </details>
            </div>

            <div className="boardSubmission">
              <div align="center">
                <a
                  className="buttonLink"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdzLqsA__rvkRkBVwszgrA1UWFXcjffGJms7PUTgo5emHTYcQ/viewform?usp=sf_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Submit to Art
                </a>
              </div>
              <p className="submissionPrompt">
                You can submit your work through the link above, or by emailing
                art@harvardadvocate.com
              </p>
            </div>
          </Themed.p>
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
