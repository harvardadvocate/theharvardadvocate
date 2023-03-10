const shopSx = {
    ".shopBody": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      alignItems: "flex-end",
      padding: "1em",
      gap: "1em",
      scrollSnapType: "x mandatory",
      scrollBehavior: "smooth",

    },
    ".product": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    "img": {
      verticalAlign: "bottom",
      maxWidth: "100%",
      height: "auto",
    },
    "p": {
      margin: "0",
    },
    ".productButton": {
      width: "40%",
    },
    ".productCard": {
      width: "30%",
      scrollSnapAlign: "start",
      margin: "0 1em",
      textAlign: "center",
    },
  };
  
  export default shopSx;