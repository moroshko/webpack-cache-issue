import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  color: {
    primary: "cyan",
  },
  space: {
    x0: "0",
    x1: "0.25rem",
    x2: "0.5rem",
    x3: "0.75rem",
    x4: "1rem",
    x5: "1.25rem",
    x6: "1.5rem",
    x7: "1.75rem",
    x8: "2rem",
    x9: "2.25rem",
    x10: "2.5rem",
  },
});
