import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: "app",
      values: [
        { name: "app", value: "#f0f3f9" },
        { name: "surface", value: "#ffffff" },
      ],
    },
    options: {
      storySort: {
        order: [
          "Foundations",
          ["Introduction", "Colors", "Typography", "Spacing", "Radius", "Icons"],
          "Components",
          "Charts",
          "Pages",
        ],
      },
    },
  },
};

export default preview;
