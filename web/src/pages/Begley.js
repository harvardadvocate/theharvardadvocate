/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";

const begleySx = {
  ".begleyBody": {
    marginTop: "0.4em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  i: {
    textAlign: "center",
    display: "block",
  },

  "@media (max-width: 835px)": {
    ".begleyBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
    ".image": {
      width: "100%",
    },
  },
};

export default function Begley() {
  return (
    <div sx={begleySx}>
      <Frame
        path={[
          {
            name: "Louis Begley Prize",
            slug: "/begley",
          },
        ]}
      >
        <div className="begleyBody">
          <Themed.p>
            This prize was created in 1999 to honor the contribution of Louis Begley, Class of 1954, 
            to the general health and prosperity of the Harvard Advocate, which he served for many years
             as Treasurer of the Board of Trustees and Chairman of the Board. During that time, Begley, 
             both a distinguished lawyer with the firm of Debevoise & Plimpton and a novelist of increasing 
             renown, labored to ensure that the nation’s oldest college literary journal was both solvent and 
             an object worthy of aesthetic pride. The prize will be awarded annually to the best work of fiction 
             submitted by an undergraduate to the magazine; the judge will be an established writer of fiction.
          </Themed.p>
          <div className="image">
            <img
              src="/advertise.jpeg"
              width="309"
              height="414"
              loading="lazy"
              alt="advertising graphic"
            />
            <figcaption>
              Illustration from <em>Azazel Anonymous</em>
            </figcaption>
          </div>
        </div>
      </Frame>
    </div>
  );
}
