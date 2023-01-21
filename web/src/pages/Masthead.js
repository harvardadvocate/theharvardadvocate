/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const mastheadSx = {
  ".mastheadBody": {
    marginTop: "0.4em",
    marginLeft: "22%",
    marginRight: "25%"
  },
  i: {
    textAlign: "center",
    display: "block"
  },
};

export default function Masthead() {
  return (
    <div sx={mastheadSx}>
      <Frame
        path={[
          {
            name: "Masthead",
            slug: "/masthead",
          },
        ]}
      >
        <div className="mastheadBody">
          <Themed.p>
          <i align="center">
            Annika Inampudi '25, President
            <br/>
            Primo Lagaso Goldberg '25, Editor In Chief
            <br/><br/>
            U. Roven '25, Dionysus
            <br/>
            C. Everton '25, Dionysus
            <br/>
            A. Wang '23-'24, Dionysus
            <br/>
            E. Jones '25, Hermes, Fiction Editor
            <br/>
            J. Coe '25, Pegasus
            <br/>
            H. Hinze '26, Pegasus
            <br/>
            V. Lyapvena '26, Pegasus
            <br/>
            M. Wong '26, Pegasus
            <br/>
            E. Sun '25-'26, Hestia
            <br/>
            F. Liu '26, Hades
            <br/><br/>
            C. Meeks '25, Poetry Editor
            <br/>
            E. Parrott '25, Art Editor
            <br/>
            Z. Lech '24, Art Editor
            <br/>
            M. Alpers '24, Fiction Editor
            <br/>
            T. Blatt '23-'24, Fiction Editor
            <br/>
            C. Hsu '24, Features Editor
            <br/>
            V. Xu '24, Features Editor
            <br/>
            I. Specht '24, Design Editor
            <br/>
            A. Lordos '25, Tech Editor
            <br/>
            A. Mark '24, Business Manager
            <br/>
            C. Pontifell '24, Business Manager
            <br/><br/>
            Alice Cai '25, Experimental Labs Director
            <br/>
            A. Kaushik '24, D&I Chair
            <br/>
            J. Yang '24, D&I Chair
            <br/>
            K. Mandell '25, Blog Editor
            <br/>
            J. Zhang '25, Blog Editor
            <br/>
            H. Oreck '22-'23, Librarian
            <br/>
            P. S. Reed '25, Sanctum Sessions Director
            <br/>
            C. Lu '24, Advocate Cafe Manager
            <br/>
            M. K. Lee '24, Advocate Cafe Manager
            <br/>
            K. Liu '25, Advocate Cafe Manager

<br/><br/>
            <b>Poetry</b>

            <br/><br/>

            <b>Fiction</b>

            <br/><br/>

            <b>Features</b>

            <br/><br/>

            <b>Art</b>

            <br/><br/>

            <b>Design</b>

            <br/><br/>

            <b>Tech</b>

            <br/><br/>
          </i>
          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
