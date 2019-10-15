import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { loadFontsForStorybook } from '../src/utils/index';
import 'storybook-chromatic';

import { GlobalStyle } from '../src/components/shared/global';

import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  brandTitle: 'AlphaUI',
  brandUrl: 'https://alphaui.alphasights.com',
});

// Option defaults:
addParameters({
  options: { theme },
});
addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
  ],
  module
);

loadFontsForStorybook();
