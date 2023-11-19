"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isLibraryActive, setIsLibraryActive] = useState(false);
  const [isPlanActive, setIsPlanActive] = useState(false);
  const [isToolsActive, setIsToolsActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsLibraryActive(false);
    setIsPlanActive(false);
    setIsToolsActive(false);

    switch (pathname) {
      case "/":
        setIsHomeActive(true);
        break;
      case "/library":
        setIsLibraryActive(true);
        break;
      case "/article":
        setIsPlanActive(true);
        break;
      case "/":
        setIsToolsActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isLibraryActive,
    isPlanActive,
    isToolsActive,
  };
};

export default useNavigation;
