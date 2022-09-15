// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path =require('path')
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const themeConfig =require('./theme.config.js')
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CabinX',
  tagline: 'write once run everywhere',
  url: 'https://k186.github.io',
  //baseUrl: '/kayak-project/cabinxdesign/build/',
  baseUrl: '/cabinXDesign/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'k186', // Usually your GitHub org/user name.
  projectName: 'cabinXDesign', // Usually your repo name.
  deploymentBranch:'gh-pages',

  // 国际化配置
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          sidebarCollapsed: true,
          sidebarCollapsible: true,

          admonitions: {
            tag: ':::',
            keywords: ['note', 'tip', 'info', 'caution', 'danger','cabinx'],
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog:false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
     ...themeConfig,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins:[
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ]
      /*@docusaurus/plugin-ideal-image 不要用这个插件 安装依赖有问题*/
  ]
};

module.exports = config;
