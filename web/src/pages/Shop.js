/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const shopSx = {
  ".shopHeader": {
    fontStyle: "italic",
    borderBottom: "1px solid #000",
    h2: { display: "inline-block", marginRight: "0.4em" },
    img: { height: "0.6em", display: "inline-block" },
  },
  ".shopBody": {
    marginTop: "0.4em",
    marginLeft: "25%",
    marginRight: "25%"
  },
  i: {
    textAlign: "center",
    display: "block"
  },
};

export default function Shop() {
  return (
    <div sx={shopSx}>
      <Frame
        path={[
          {
            name: "Shop",
            slug: "/shop",
          },
        ]}
      >
        <div className="shopBody">
          <Themed.p>
          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
