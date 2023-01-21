/** @jsxImportSource theme-ui */
import { Themed, Grid } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";
import { useLocation, Link } from "react-router-dom";

const submitSx = {
  ".submitBody": {
    marginTop: "0.4em",
    marginLeft: "22%",
    marginRight: "25%"
  },
  i: {
    textAlign: "center",
    display: "block"
  },
  ".buttonLink": {
    color: "#000000",
    backgroundColor: "#ffffff",
    padding: "10px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
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
  }
};

export default function Submit() {
  return (
    <div sx={submitSx}>
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
          The Harvard Advocate accepts submissions of art, fiction, and poetry of any form or length created by members of the Harvard community, as well as outside contributors at our discretion. All submissions are considered anonymously.
          <br/><br/>
          <hr/>
          <h2 align="center">Spring 2023 Issue</h2>
          <hr/>
          <i align="center">Our winter 2023 Review Period ends on Friday, October 14th, 2022.</i>
          <br/>
          <div  align="center">
              <Link className = "buttonLink" to={"/submit"}>
                Submit to Fiction
              </Link>
          </div>
          <ul>
            <li>We have no minimum or maximum word counts, but the work we publish tends to be between 700 and 7000 words.</li>
            <li>Please include a cover letter and brief third-person biographical statement with your submission.</li>
            <li>Attach your work as a Microsoft Word file. (Please consider double-spacing and using 12-point Times New Roman font with standard margins.)</li>
            <li>Because submissions are considered anonymously, please make sure your name is not anywhere in the document.</li>
            <li>Simultaneous submissions are accepted, but please let us know immediately if your work is accepted elsewhere.</li>
          </ul>
           You can submit you work through the link above, or by emailing fiction@theharvardadvocate.com
           <br/><br/>
           <hr/>
           <br/>
           <div  align="center">
               <Link className = "buttonLink" to={"/submit"}>
                 Submit to Poetry
               </Link>
           </div>
           <ul>
           <li>We have no minimum or maximum word counts.</li>
           <li>If you’d like to, you may include a message to the editor with your submission. In this message you can describe your work, if you like, or give any background necessary to understand it.</li>
           <li>Attach your work as a Microsoft Word file or PDF file. Word files are the preferred format, but either is acceptable.</li>
           <li>Because submissions are considered anonymously, please make sure your name is not anywhere in the document.</li>
           <li>Simultaneous submissions are accepted, but please let us know immediately if your work is accepted elsewhere.</li>
           <li>We primarily read and publish various styles of written poetry, but illustrated forms of poetry (like poetry comics)—along with other nontraditional poetic formats—can be submitted as well.</li>
           </ul>
            You can submit your work through the link above, or by emailing poetry@theharvardadvocate.com
            <br/><br/>
            <hr/>
            <br/>
            <div  align="center">
                <Link className = "buttonLink" to={"/submit"}>
                  Submit to Art
                </Link>
            </div>
            <br/>
            You can submit your work through the link above, or by emailing art@theharvardadvocate.com
          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
