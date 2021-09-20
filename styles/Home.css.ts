import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "./sprinkles.css";

export const buttonRecipe = recipe({
  variants: {
    variant: {
      primary: sprinkles({
        backgroundColor: "primary",
      }),
    },
  },
});
