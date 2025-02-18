import React, { createContext, useContext, useState } from "react";

const colorPalette = {
  main: "#009963", // 초록
  mainLight: "#c0d3cc", // 연초록
  sub: "#A1824A", // 진베이지
  subLight: "#f4e2d083", // 연베이지
};

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [colors] = useState(colorPalette);

  return (
    <ColorContext.Provider value={colors}>{children}</ColorContext.Provider>
  );
};

export const useColors = () => useContext(ColorContext);
