export const theme = {
  fonts: {
    body: "EB Garamond, serif",
    heading: "EB Garamond, serif",
    monospace: "monospace",
  },
  fontSizes: [17, 18, 24, 36, 48],
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
    primary: "#D13434",
    lightGrey: "#9F9F9F",
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
      fontSize: 2,
    },
    h1: {
      variant: "text.heading",
      fontSize: 4,
    },
    h2: {
      variant: "text.body",
      fontSize: 3,
    },
    h3: {
      variant: "text.body",
      fontSize: 2,
    },
    h4: {
      variant: "text.body",
      fontSize: 0,
    },
    h5: {
      variant: "text.body",
      fontSize: 0,
      fontStyle: "italic",
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
  },
};
