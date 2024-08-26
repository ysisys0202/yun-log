import { isClient } from "@/services/common";
import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(() => {
    if (isClient) {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (!isClient) return;
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => {
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
