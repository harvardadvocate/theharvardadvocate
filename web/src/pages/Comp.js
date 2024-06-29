/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";

const compSx = {
  ".compBody": {
    marginTop: "0.4em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  i: {
    textAlign: "center",
    display: "block",
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
  a: {
    color: "#00008B",
    textDecoration: "underline",
  },

  "@media (max-width: 835px)": {
    ".compBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
    ".image": {
      width: "100%",
    },
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
            <i>Interested in Spring 2024 Comp?</i>
            <br />
            <br />
            The Harvard Advocate has been a home for arts and literature at
            Harvard since 1866, and we're always looking forward to meeting new
            members through our comp process! Across its seven boards, The
            Advocate welcomes critics, artists, writers, designers, programmers,
            and dealmakers alike. No previous experience is necessary. You don’t
            have to be a writer or an artist—as long as you’re interested in
            what we do, Advo has a place for you. The Advocate holds comps for
            all seven boards: Art, Features, Fiction, Poetry, Design, Business,
            and Tech. To learn more about the organization, our boards, and the
            comp process, visit our{" "}
            <a
              href="https://www.instagram.com/harvardadvocate/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{" "}
            and{" "}
            <a
              href="https://www.twitter.com/harvardadvocate/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            .
            <br />
            <br />
            Intro Comp meetings are happening Wednesday January 31 and Thursday
            February 1 at 9pm at 21 South St, and Sunday February 4 at 2pm on
            {" "}
            <a
              href="https://zoom.us/j/8548381344?pwd=OHJMMEtVcHZUSGFVRzJucUhJZ1dtQT09&omn=96554720282"
              target="_blank"
              rel="noreferrer"
            >
              Zoom
            </a>{". "}
            For any questions or concerns, contact hermes@theharvardadvocate.com.
            <br />
            <br />
            The Harvard Advocate can be reached at 21 South Street, Cambridge,
            and at publisher@theharvardadvocate.com
          </Themed.p>

          <div className="image">
            <img
              src="/comp.jpeg"
              width="261"
              height="364"
              loading="lazy"
              alt="comp graphic"
            />
            <figcaption>
              Illustration from <em>Survival</em>
            </figcaption>
          </div>
        </div>
      </Frame>
    </div>
  );
}
