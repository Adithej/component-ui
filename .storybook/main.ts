import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../component/**/*.mdx", "../component/**/*.stories.@(js|jsx|ts|tsx)"],     //"../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules",
    'storybook-addon-pseudo-states'
    // 'storybook-addon-next',
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
