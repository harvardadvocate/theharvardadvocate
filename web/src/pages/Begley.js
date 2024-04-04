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
  a: {
    color: "#00008B",
    textDecoration: "underline",
  },
  i: {
    textAlign: "center",
    display: "block",
  },

    // Style anchor elements within Themed.p
    "Themed.p a": {
      color: "blue", // Set link color to blue
      textDecoration: "underline", // Underline links for better visibility
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
            The 2024 Louis Begley Prize will be judged by R. F. Kuang, author of <em>Yellowface</em>, <em>Babel</em>, <em>The Poppy War</em>, and more! Submissions of short stories
            from 700-7,000 words written by current Harvard College students are due on April 19 at midnight. Please submit from your @college.harvard.edu email.
            <br />
            <br />
            This prize was created in 1999 to honor the contribution of Louis Begley, Class of 1954, 
            to the general health and prosperity of the Harvard Advocate, which he served for many years
             as Treasurer of the Board of Trustees and Chairman of the Board. During that time, Begley, 
             both a distinguished lawyer with the firm of Debevoise & Plimpton and a novelist of increasing 
             renown, labored to ensure that the nation’s oldest college literary journal was both solvent and 
             an object worthy of aesthetic pride. The prize will be awarded annually to the best work of fiction 
             submitted by an undergraduate to the magazine; the judge will be an established writer of fiction.
             <br />
             <br />
            Some recent winners include “<a href="https://theharvardadvocate.com/content/wild-things">Wild Things</a>” by Cindy Phan, “<a href="https:/
            /theharvardadvocate.com/content/shaking-trembling-quaking-rending">Shaking, Trembling, Quaking, Rending</a>” by Yash Kumbhat, “<a href="htt
            ps://theharvardadvocate.com/content/footprint-a-makeshift-legend">Footprint (A Makeshift Legend)</a>” by Kelsey Chen, and “<a href="https:/
            /theharvardadvocate.com/content/apple">Inside the Apple</a>” by Eva Rosenfeld. Recent guest judges include Ottessa Moshfegh, 
            Laura van den Berg, Bret Anthony Johnson, Rebecca Panovka and Kiara Barrow, Louis Menand, Claire Messud, Jia Tolentino, and Leslie Jamison.
            <br />
            <br />
            All submissions to the <em>Advocate's</em> fiction section made by Harvard undergraduates within the calendar year of the prize round 
            are automatically considered for the Begley prize. If you would like to be considered for the Begley Prize without first submitting 
            to the magazine, please send your short story from your college.harvard.edu email to <a href="mailto:fiction@theharvardadvocate.com">
            fiction@theharvardadvocate.com</a> with the subject line, “Begley prize submission.”
            <br />
            <br />
            The Louis Begley Prize is judged each year in late Spring. 
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
