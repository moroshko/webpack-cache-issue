import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { theme } from "./theme.css";

const properties = defineProperties({
  conditions: {
    default: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
  },
  defaultCondition: "default",
  properties: {
    backgroundColor: theme.color,
    paddingTop: theme.space,
    paddingRight: theme.space,
    paddingBottom: theme.space,
    paddingLeft: theme.space,
    marginTop: theme.space,
    marginRight: theme.space,
    marginBottom: theme.space,
    marginLeft: theme.space,
  },
});

export const sprinkles = createSprinkles(properties);
