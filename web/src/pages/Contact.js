/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const contactSx = {
  ".contactBody": {
    marginTop: "0.4em",
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    margin: "0em 21vw 0vh 21vw",
  },
  i: {
    textAlign: "center",
    display: "block"
  },

  "@media (max-width: 767px)": {
    ".contactBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
  },

};

export default function Contact() {
  return (
    <div sx={contactSx}>
      <Frame
        path={[
          {
            name: "Contact Us",
            slug: "/contact",
          },
        ]}
      >
        <div className="contactBody">
          <Themed.p>
          You can reach the content board heads at the following emails:
          <br/><br/>
          <b>Art: </b>art@theharvardadvocate.com <br/>
          <b>Features: </b>features@theharvardadvocate.com <br/>
          <b>Fiction: </b>fiction@theharvardadvocate.com <br/>
          <b>Poetry: </b>poetry@theharvardadvocate.com <br/>
          <br/>

          To arrange a subscription, visit the <a href="/subscribe">subscribe page</a> or email us at hermes@theharvardadvocate.com.
          <br/><br/>
          <b>See an error?</b>
          <br/>
          To contact the webmaster or report a technical issue, email tech@theharvardadvocate.com.
          <br/><br/>
          <b>Donate</b>
          <br/>
          Thank you for considering your donation to The Harvard Advocate. We would love to hear more from you if you are arranging a donation – visit our Donate page or contact us at president@theharvardadvocate.com to let us know more details.
          <br/><br/>
          <b>Location</b>
          <br/>
          We are located at 21 South Street, Cambridge, Massachusetts 02138. We are in the building most weekdays in the afternoon. Alumni members are always welcome to stop by.
          <br/><br/>
          All other inquiries can be sent to president@theharvardadvocate.com.
          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
