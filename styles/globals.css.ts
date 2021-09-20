import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
  fontFamily: `"Helvetica", "Arial", sans-serif`,
  fontSize: "16px",
});

globalStyle("*", {
  boxSizing: "border-box",
});
