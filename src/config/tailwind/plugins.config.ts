import plugin from "tailwindcss/plugin";

export const plugins = [
  // require("@tailwindcss/forms"),
  // require("@tailwindcss/aspect-ratio"),
  plugin(({ addComponents, theme, addUtilities }) => {
    addUtilities({
      ".primary-gradient": {
        background: `linear-gradient(to top, ${theme(
          "colors.yellow.700",
        )}, ${theme("colors.yellow.300")})`,
      },
      ".secondary-gradient": {
        background: `linear-gradient(to top, ${theme(
          "colors.brown.700",
        )}, ${theme("colors.brown.300")})`,
      },
      ".gray-gradient": {
        background: `linear-gradient(to top, ${theme(
          "colors.gray.500",
        )}, ${theme("colors.gray.300")})`,
      },
    }),
      addComponents({});
  }),
];
