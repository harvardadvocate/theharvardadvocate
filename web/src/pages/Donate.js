/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const donateSx = {
  ".donateBody": {
    marginTop: "0.4em",
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    margin: "0em 21vw 5vh 21vw",
  },
  i: {
    textAlign: "center",
    display: "block"
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

  "@media (max-width: 767px)": {
    ".donateBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
    ".image": {
      width: "100%",
    }
  },

};

export default function Donate() {
  return (
    <div sx={donateSx}>
      <Frame
        path={[
          {
            name: "Donate to the Harvard Advocate",
            slug: "/donate",
          },
        ]}
      >
        <div className="donateBody">
          <Themed.p>
            <i>Thank you for considering a donation to The Harvard Advocate!</i>
            <br/><br/>
            The Harvard Advocate is a completely undergraduate-run magazine who take no salary for our work. Any contribution helps us print the best literature, art, and poetry on Harvard’s campus and around the world.
            <br/><br/>
            All gifts to The Harvard Advocate are fully tax deductible according to 501(c)(3) non-profit donation guidelines. Donations can be made online using the form below. We also accept donations by check, which should be made out to "The Trustees of The Harvard Advocate" and sent to 21 South St., Cambridge, MA 02138. Thank you for your support!
            <br/><br/>
            </Themed.p>
            <div className="image">
              <img src="/donate.jpeg" width="381" height="271"/>
              <figcaption>Illustration from <em>Land of Tomorrow, Dark and Bloody Ground</em></figcaption>
            </div>
        </div>
      </Frame>
    </div>
  );
}
