// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'dev-owner\'s blog',
  tagline: 'Data Engineer, Cloud Engineer',
  url: 'https://dev-owner.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dev-owner', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  trailingSlash:false,
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dev-owner의 사는 이야기',
        logo: {
          alt: 'My Site Logo',
          src: 'img/new_logo.png',
        },
        items: [
          {to: '/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/dev-owner',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contacts',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dev-owner',
              },
              {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/jaewoo-sung-588a40114/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dev-owner Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
          {property: 'google-site-verification', content: '3fZBl0qGT1FPNNPKuW8K4zu4I475C4YolT11VHusyTU'},
          {property: 'naver-site-verification', content: 'c8ad085623ce80efef1d7f4ec91c62354442c9c2'}
      ]
    }),
};

module.exports = config;
