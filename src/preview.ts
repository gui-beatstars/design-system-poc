import type { Preview } from '@storybook/react';
import '../styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'light',
          value: '#f5f5f5',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
