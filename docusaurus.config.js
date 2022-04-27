// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pyrsia',
  tagline: 'Zero-trust decentralized package network',
  url: 'https://pyrsia.io/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon-32x32.png',
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
      metadata: [{name: 'robots', content: 'noindex, nofollow'}],
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
          // {
          //   type: 'doc',
          //   docId: 'developer/index',
          //   label: 'Developers Hub',
          //   position: 'left'
          // },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
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
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Google',
                href: 'https://groups.google.com/g/pyrsia',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PyrsiaOSS',
              },
              {
                label: 'OpenSSF Slack',
                href: 'https://openssf.slack.com/archives/C0302CVKPA5',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UClPQKloIElvJk7EdSST3W5g',
              },
            ],
          },
          {
            title: 'About Us',
            items: [
              {
                label: 'The Team',
                to: '/',
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pyrsia',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/pyrsia',
              },
            ],
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
