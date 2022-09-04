/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const aboutSx = {
  ".aboutHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  ".aboutBody": {
    marginTop: "0.4em",
  },
};

export default function About() {
  return (
    <div sx={aboutSx}>
      <Frame
        path={[
          {
            name: "About",
            slug: "/about",
          },
        ]}
      >
        <div className="aboutHeader">
          <Themed.h2>About Us</Themed.h2>
          <img src={rightArrow} alt="right-arrow" />
        </div>
        <div className="aboutBody">
          <Themed.p>
            The Harvard Advocate, founded in 1866, is the oldest continuously
            published collegiate literary magazine in the country. Over its long
            history, it can count T.S. Eliot, Conrad Aiken, and Norman Mailer
            among its members and e.e. cummings, Jack Kerouac, and Tom Wolfe as
            contributors to its pages. A quarterly magazine, The Advocate's
            mission is to publish the best art, fiction, poetry, and prose that
            the Harvard undergraduate community offers.
          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
