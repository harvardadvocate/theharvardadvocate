export const theme = {
  fonts: {
    body: "EB Garamond, serif",
    // heading: "EB Garamond, serif",
    heading: "Bernhard Gothic Medium, serif",
    monospace: "monospace",
  },
  // used to be 24
  fontSizes: [18, 20, 26, 36, 48],
  fontWeights: {
    body: 400,
    medium: 500,
    bold: 600,
    heading: 500,
  },
  lineHeights: {
    body: 1.25,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    headerColor: "#D34C21",
    primary: "#000000", // primary color of the website + background color of the first highlighted issue in the issues page + homepage
    secondary: "#b56353", // this controls the background color of the second highlighted issue in the issues page
    lightGrey: "#9F9F9F",
    buttonColor: "#e2251e",
    buttonColorHover: "#d41c15",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      overflowWrap: "break-word",
      fontSize: 0,
    },
    h1: {
      variant: "text.heading",
      fontSize: 3,
    },
    h2: {
      variant: "text.body",
      fontSize: 2,
    },
    h3: {
      variant: "text.body",
      fontSize: 1,
    },
    h4: {
      variant: "text.body",
      fontSize: 0,
    },
    h5: {
      //fontFamily: "Bernhard Gothic Medium",
      variant: "text.body",
      fontSize: 0,
    },
    p: {
      variant: "text.body",
      fontSize: 0,
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
  },
};
