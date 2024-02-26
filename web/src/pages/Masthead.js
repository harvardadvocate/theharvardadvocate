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
              Maren Wong '26, President
              <br />
              Varya Lyapneva '26, Publisher
              <br />
              <br />
              R. Hreb '26, Dionysus
              <br />
              O. Pasquerella '26, Dionysus
              <br />
              K. Liu '25, Dionysus
              <br />
              K. Leung '27, Hermes
              <br />
              D. Liu '27, Hermes
              <br />
              E. Klibaner-Schiff '26, Pegasus
              <br />
              J. Wang '26, Pegasus
              <br />
              K. Taylor '26, Pegasus
              <br />
              J. Glaser '25, Hestia
              <br />
              T. Wayland '26, Hades
              <br />
              E. Miao '26, Hades
              <br />
              <br />
              L. Jackson '26, Poetry Editor
              <br />
              H. Hinze '26, Art Editor
              <br />
              T. Chung '25, Art Editor
              <br />
              E. Jones '25, Fiction Editor
              <br />
              J. Lemann '26, Fiction Editor
              <br />
              I. Mirza '25, Features Editor
              <br />
              S. Bongwe '26, Features Editor
              <br />
              H. Bennett '26, Design Editor
              <br />
              F. Liu '26, Design Editor
              <br />
              C. Lu '26, Tech Editor
              <br />
              C. Gorczycki '24, Business Manager
              <br />
              S. Kargman '25, Business Manager
              <br />
              A. Shumway '26, Business Manager
              <br />
              J. Yang '26, D&I Chair
              <br />
              V. Kishoiyian '26, D&I Chair
              <br />
              K. Siegel '25, Blog Editor
              <br />
              U. Roven '25, Blog Editor
              <br />
              A. Inampudi '25, Blog Editor
              <br />
              <br />
              H. Pimentel '25, Merch Coordinator
              <br />
              J. Towers '25, Merch Coordinator
              <br />
              P. Wekwejt '26, Finance Coordinator
              <br />
              S. Jung '25, Advocate Cafe Manager
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
