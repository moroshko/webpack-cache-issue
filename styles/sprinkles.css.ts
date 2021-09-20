import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { theme } from "./theme.css";

const properties = defineProperties({
  properties: {
    backgroundColor: theme.color,
  },
});

export const sprinkles = createSprinkles(properties);
