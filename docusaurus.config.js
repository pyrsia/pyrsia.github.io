// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pyrsia',
  tagline: 'Zero-trust decentralized package network',
  url: 'https://markus-jf.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.png',
  organizationName: 'markus-jf', // Usually your GitHub org/user name.
  projectName: 'website-pyrsia', // Usually your repo name.
  trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // remove light dark switch
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Pyrsia logo',
          src: 'img/logo-pyrsia.svg',
        },
        items: [
          {
            to: 'vision',
            label: 'Vision',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'technology/overview',
            label: 'Technology',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'developer/index',
            label: 'Developers Hub',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/pyrsia',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Pyrsia Logo',
          src: 'img/icon-pyrsia-torch-175.svg',
          // href: 'https://opensource.facebook.com',
          width: 118,
          height: 183,
        },
        links: [
          {
            html: `
            <a href="#" target="_blank" rel="noreferrer noopener" class="footer__link-item">
            Privacy Policy
            </a>
          `,
          },
          {
            html: `
            | <a href="#" target="_blank" rel="noreferrer noopener" class="footer__link-item">
            Cookies Policy
            </a>
          `,
          },
          {
            html: `
            | <a href="#" target="_blank" rel="noreferrer noopener" class="footer__link-item">
            CCPA Employee & Application Privacy Notice
            </a>
          `,
          },
          {
            html: `
            | <a href="#" target="_blank" rel="noreferrer noopener" class="footer__link-item">
            Cookies Settings
            </a>
          `,
          },
          {
            html: `
            | <a href="#" target="_blank" rel="noreferrer noopener" class="footer__link-item">
            Accessibility Mode
            </a>
          `,
          },
        ],
        copyright: ` © ${new Date().getFullYear()} JFrog Ltd All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
