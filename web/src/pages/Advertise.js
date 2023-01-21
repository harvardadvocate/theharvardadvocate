/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const advertiseSx = {
  ".advertiseHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  ".advertiseBody": {
    marginTop: "0.4em",
    marginLeft: "25%",
    marginRight: "25%"
  },
  i: {
    textAlign: "center",
    display: "block"
  },
};

export default function Advertise() {
  return (
    <div sx={advertiseSx}>
      <Frame
        path={[
          {
            name: "Advertise",
            slug: "/advertise",
          },
        ]}
      >
        <div className="advertiseBody">
          <Themed.p>
            <i>Advertise with the oldest publication at Harvard University.</i>
            <br/><br/>
            The Harvard Advocate is Harvard's oldest publication. Literary luminaries like T.S. Eliot, Wallace Stevens, e.e. cummings, Conrad Aiken, John Ashbery, James Agee, and many more were first published in The Advocate. Our issues are mailed worldwide to our subscriber and alumni network, along with distribution to every dorm room, academic reception, and library at Harvard, bringing our readership to over 10,000.
            <br/><br/>
            In our issues, we print on high quality paper with heavy stock binding, ensuring the magazine's longevity. The Advocate remains a centerpiece on coffee tables for months. We advertise online, where our website receives thousands of monthly visits.
            <br/><br/>
            For inquiries, contact our Business Manager at business@theharvardadvocate.com.
          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
