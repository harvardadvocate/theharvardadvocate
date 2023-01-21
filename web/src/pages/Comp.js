/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const compSx = {
  ".compHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  ".compBody": {
    marginTop: "0.4em",
    marginLeft: "25%",
    marginRight: "25%"
  },
  i: {
    textAlign: "center",
    display: "block"
  },
};

export default function Comp() {
  return (
    <div sx={compSx}>
      <Frame
        path={[
          {
            name: "Comp",
            slug: "/comp",
          },
        ]}
      >
        <div className="compBody">
          <Themed.p>
            <i>Our Spring 2023 comp will soon be underway. Intro comp meetings will be taking place on the 1st and 2nd of February, at 21 South St.</i>
            <br/><br/>
            The Harvard Advocate has been a home for arts and literature at Harvard since 1866, and we're always looking forward to meeting new members through our comp process! Across its seven boards, The Advocate welcomes critics, artists, writers, designers, programmers, and dealmakers alike. No previous experience is necessary. You don’t have to be a writer or an artist—as long as you’re interested in what we do, Advo has a place for you. The Advocate holds comps for all seven boards: Art, Features, Fiction, Poetry, Design, Business, and Tech. To learn more about the organization, our boards, and the comp process, visit our Instagram, Facebook, or Twitter.
            <br/><br/>
            Intro Comp meetings are happening Wednesday February 1 and Thursday February 2 at 9pm at 21 South St, and Saturday February 4 at 3pm on Zoom. Visit here to sign up. For any questions, comments or concerns, contact dionysi@theharvardadvocate.com.
            <br/><br/>
            The Harvard Advocate can be reached at 21 South Street, Cambridge, and at publisher@theharvardadvocate.com
          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
