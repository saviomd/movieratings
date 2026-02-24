import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../@(app|docs)/**/*.mdx",
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/react-vite",
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
