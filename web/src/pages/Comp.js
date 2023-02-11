/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const compSx = {
  ".compBody": {
    marginTop: "0.4em",
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
    ".compBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
    ".image": {
      width: "100%",
    }
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

          <div className="image">
            <img src="/comp.jpeg" width="261" height="364"/>
            <figcaption>Illustration from <em>Survival</em></figcaption>
          </div>

        </div>


      </Frame>
    </div>
  );
}
