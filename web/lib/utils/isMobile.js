import { useState, useEffect } from "react";

export function useIsMobile() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);

    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width === null) return false;
  return width <= 835;
}
