// src/styles/theme.js
export const lightTheme = {
    mode: "light",
    colors: {
        background: "#ffffff",
        text: "#000000",
    },
    fonts: {
        body: "'Poppins', sans-serif",
        heading: "'Poppins', sans-serif",
    },
  fontSizes: {
    small: "0.875rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xxl: "2rem",
  },
  spacing: (factor) => `${factor * 8}px`,
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
};

export const darkTheme = {
   mode: "dark",
  colors: {
    background: "#121212",
    // text: "#ffffff",
  },
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  fontSizes: {
    small: "0.875rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xxl: "2rem",
  },
  spacing: (factor) => `${factor * 8}px`,
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
};
