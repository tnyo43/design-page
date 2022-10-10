const react = require('@vitejs/plugin-react');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) =>
        !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react'))
    );

    config.plugins.push(
      react({
        exclude: [/node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin']
        }
      })
    );

    config.esbuild = {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src/')
    };

    return {
      ...config,
      define: {
        ...config.define,
        global: 'window'
      }
    };
  }
};
