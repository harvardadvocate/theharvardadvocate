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
              Frank Y.C. Liu '26, President
              <br />
              Aran Sonnad-Joshi '27, Publisher
              <br />
              <br />
              D. Liu '27, Art Editor
              <br />
              A. Ojukwu '26, Notes Editor
              <br />
              E. Klibaner-Schiff '26, Notes Editor
              <br />
              K. Taylor '26, Notes Editor
              <br />
              P. Wekwejt '26, Business Manager
              <br />
              A. Chen '27, Design Editor
              <br />
              T. Wayland '26, Features Editor
              <br />
              G. Nitz '26, Senior Fiction Editor
              <br />
              L. Wood '27, Junior Fiction Editor
              <br />
              A. Hatzius '26, Poetry Editor
              <br />
              M. Yu '26, Technology Editor

              <br />
              <br />

              O. Yaffe '28, Demeter and Dionysus
              <br />
              J. Lemann '26, Dionysus
              <br />
              R. Mamam Nbiba '27, Dionysus
              <br />
              K. Gu '26, Hades
              <br />
              E. Ferrari '28, Hermes
              <br />
              W. Renwick '28, Hermes
              <br />
              S. Mikulasek '27, Hestia
              <br />
              L. Jackson '26, Pegasus
              <br />
              A. Ma '27, Pegasus
              <br />
              A. Popnikolova '28, Pegasus
              <br />
              E. Miao '26, Hades
              <br />
              L. Pasquerella '26, Apollo
              <br />
              S. Yu '27, Apollo
              <br />
              E. Zhang '26, Arachne
              <br />
              B. Kimball '28, Demeter
              <br />
              L. Pasquerella '26, Apollo
              <br />
              S. Yu '27, Apollo
              <br />
              E. Zhang '26, Arachne
              <br />
              B. Kimball '28, Demeter
              <br />
              N. Chagantipati '26, Diversity & Inclusion Chair
              <br />
              M. Wong '26, Librarian

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
