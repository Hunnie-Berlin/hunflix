import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const {
    innerWidth: width,
    innerHeight: height,
    screen: { height: screenHeight, width: screenWidth },
  } = window;
  return {
    width,
    height,
    screenHeight,
    screenWidth,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
