/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const subscribeSx = {
  ".subscribeBody": {
    marginTop: "0.4em",
    marginLeft: "25%",
    marginRight: "25%"
  },
  i: {
    textAlign: "center",
    display: "block"
  },
};

export default function Subscribe() {
  return (
    <div sx={subscribeSx}>
      <Frame
        path={[
          {
            name: "Subscribe to the Harvard Advocate",
            slug: "/subscribe",
          },
        ]}
      >
        <div className="subscribeBody">
          <Themed.p>
            <i>Thank you for considering a donation to The Harvard Advocate!</i>
            <br/><br/>
            The Harvard Advocate is a completely undergraduate-run magazine who take no salary for our work. Any contribution helps us print the best literature, art, and poetry on Harvard’s campus and around the world.
            <br/><br/>
All gifts to The Harvard Advocate are fully tax deductible according to 501(c)(3) non-profit donation guidelines. Donations can be made online using the form below. We also accept donations by check, which should be made out to "The Trustees of The Harvard Advocate" and sent to 21 South St., Cambridge, MA 02138. Thank you for your support!            <br/><br/>          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
