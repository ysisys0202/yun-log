import { isClient } from "@/services/common";
import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => {
      if (mediaQuery.matches === matches) {
        return;
      }
      setMatches(mediaQuery.matches);
    };
    updateMatches();
    mediaQuery.addEventListener("change", updateMatches);
    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
