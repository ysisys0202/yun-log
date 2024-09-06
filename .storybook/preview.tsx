import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyles from "../src/styles/GlobalStyles" 
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) =>( 
      <>
        <GlobalStyles />
        <Story />
      </>),
  ],
};
 
export default preview;