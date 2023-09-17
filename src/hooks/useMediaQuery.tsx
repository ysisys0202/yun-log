import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const mediaChangeHandler = (event: any) => setMatches(event.matches);
    mediaQuery.addEventListener("change", mediaChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", mediaChangeHandler);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
