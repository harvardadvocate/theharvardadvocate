/** @jsxImportSource theme-ui */
import Head from "next/head";
import Frame from "../src/components/Frame";

const aboutSx = {
  ".aboutBody": {
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
    marginTop: "0px",
    textAlign: "center",
    alignItems: "center",
    figcaption: {
      fontSize: "16px",
    },
    width: "450px",
  },

  "@media (max-width: 835px)": {
    ".aboutBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
    ".image": {
      width: "100%",
    },
  },
};

export default function About() {
  return (
    <div sx={aboutSx}>
      <Head>
        <title>About Us - The Harvard Advocate</title>
        <meta name='description' property="og:description" content={
          "The Harvard Advocate, founded in 1866, is the oldest continuously published collegiate literary magazine in the country."
        } />
      </Head>

      <Frame
        path={[
          {
            name: "About Us",
            slug: "/about",
          },
        ]}
      >
        <div className="aboutBody">
          <p sx={{ variant: "styles.p" }}>
            The Harvard Advocate, founded in 1866, is the oldest continuously
            published collegiate literary magazine in the country. Over its long
            history, it can count T.S. Eliot, Conrad Aiken, and Norman Mailer
            among its members and e.e. cummings, Jack Kerouac, and Tom Wolfe as
            contributors to its pages. A quarterly magazine, The Advocate's
            mission is to publish the best art, fiction, poetry, and prose that
            the Harvard undergraduate community offers.
            <br />
            <br />
            When the Advocate was founded, it adopted the motto Dulce est
            Periculum (Danger is Sweet) which had been used by an earlier
            Harvard newspaper, the Collegian. The magazine originally avoided
            controversial topics, lest it be shut down by university
            authorities; by the time the editors were making the then-radical
            demand for coeducation at Harvard, the magazine had attracted the
            support of James Russell Lowell and Oliver Wendell Holmes, and its
            life was less precarious.
            <br />
            <br />
            The founding in 1873 of The Harvard Crimson newspaper (originally
            the Magenta), and in 1876, of the Harvard Lampoon humor magazine,
            led the Advocate by the 1880s to devote itself to essays, fiction,
            and poetry.
            <br />
            <br />
            Over the years, the undergraduate editors of and contributors to the
            Advocate have gone on to later fame, literary and otherwise.
            Theodore Roosevelt edited the magazine in 1880. Edwin Arlington
            Robinson, Wallace Stevens, E. E. Cummings, and T. S. Eliot all
            published their undergraduate poetry in the Advocate. Before World
            War II, undergraduates who worked on the Advocate included Malcolm
            Cowley, James Agee, Robert Fitzgerald, Leonard Bernstein, James
            Laughlin (who got into trouble with local police for publishing a
            racy story by Henry Miller) and Norman Mailer.
            <br />
            <br />
            The Harvard Advocate can be reached at 21 South Street, Cambridge,
            and at president@theharvardadvocate.com
          </p>
          <div className="image">
            <img src="/about.jpg" loading="lazy" alt="Advocate House Drawing" />
            <figcaption>
              Illustration by <em>Tosca Langbert '24</em>
            </figcaption>
          </div>
        </div>
      </Frame>
    </div>
  );
}
