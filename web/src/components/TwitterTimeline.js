// TwitterContainer.js
import React, { useEffect } from "react";

const TwitterContainer = ({ height }) => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "light");
    anchor.setAttribute("data-height", height);

    anchor.setAttribute("href", "https://twitter.com/harvardadvocate");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed"></div>
    </section>
  );
};

export default TwitterContainer;
