/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";

const mastheadSx = {
  ".mastheadBody": {
    marginTop: "0.4em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  i: {
    textAlign: "center",
    display: "block",
  },

  "@media (max-width: 835px)": {
    ".mastheadBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
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
              <br />
              Primo Lagaso Goldberg '25, Publisher
              <br />
              <br />
              U. Roven '25, Dionysus
              <br />
              C. Everton '25, Dionysus
              <br />
              A. Wang '23-'24, Dionysus
              <br />
              E. Jones '25, Hermes, Fiction Editor
              <br />
              J. Coe '25, Hermes
              <br />
              H. Hinze '26, Pegasus
              <br />
              V. Lyapneva '26, Pegasus
              <br />
              M. Wong '26, Pegasus
              <br />
              E. Sun '25-'26, Hestia
              <br />
              F. Liu '26, Hades
              <br />
              <br />
              C. Meeks '25, Poetry Editor
              <br />
              E. Parrott '25, Art Editor
              <br />
              Z. Lech '24, Art Editor
              <br />
              M. Alpers '24, Fiction Editor
              <br />
              T. Blatt '23-'24, Fiction Editor
              <br />
              C. Hsu '24, Features Editor
              <br />
              V. Xu '24, Features Editor
              <br />
              I. Specht '24, Design Editor
              <br />
              C. Lu '26, Tech Editor
              <br />
              A. Mark '24, Business Manager
              <br />
              C. Pontifell '24, Business Manager
              <br />
              <br />
              A. Cai '25, Experimental Labs Director
              <br />
              A. Kaushik '24, D&I Chair
              <br />
              J. Yang '26, D&I Chair
              <br />
              K. Mandell '25, Blog Editor
              <br />
              J. Zhang '25, Blog Editor
              <br />
              H. Oreck '22-'23, Librarian
              <br />
              P. S. Reed '25, Sanctum Sessions Director
              <br />
              C. Lu '24, Advocate Cafe Manager
              <br />
              M. K. Lee '24, Advocate Cafe Manager
              <br />
              K. Liu '25, Advocate Cafe Manager
              <br /> <br /> <br />
              <b>Board of Trustees</b>
              <br /><br />
              D.T. Max, President
              <br />
              Douglas McIntyre, Chairman and Treasurer
              <br />
              Charles Atkinson, Secretary
              <br />
              Amelia Atlas, Secretary
              <br />
              Louis Begley, Chairman Emeritus
              <br />
              Peter Brooks
              <br />
              Casey Cep
              <br />
              Emily Chertoff
              <br />
              Jonathan Galassi
              <br />
              Lev Grossman
              <br />
              Leslie Jamison
              <br />
              Julian Lucas
              <br />
              Angela Mariani
              <br />
              Susan Morrison
              <br />
              Celia McGee
              <br />
              Thomas A. Stewart
              <br />
              Jean Strouse
              <br />
            </i>
          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
