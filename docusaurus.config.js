// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  const katex = (await import('rehype-katex')).default;
  const math = (await import('remark-math')).default;

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Pyrsia.io',
    tagline: 'Decentralized Package Network',
    url: 'https://pyrsia.io',
    baseUrl: '/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',
    favicon: '/img/favicon-32x32.png',
    organizationName: 'pyrsia', // Usually your GitHub org/user name.
    projectName: 'pyrsia.github.io', // Usually your repo name.
    trailingSlash: true,
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
        crossorigin: 'anonymous',
      },
    ],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/pyrsia/pyrsia.github.io/edit/main/',
            remarkPlugins: [require('mdx-mermaid')],
          },
          blog: {
            showReadingTime: true,
            remarkPlugins: [require('mdx-mermaid'), math],
            rehypePlugins: [[katex, {strict: false}]],
            postsPerPage: 1,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    plugins: [
      [
        require.resolve('docusaurus-gtm-plugin'),
        {
          id: 'GTM-WZ4WCZ8', // GTM Container ID
        }
      ]
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        metadata: [{ name: 'robots', content: 'all' }],
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
              docId: 'tutorials/quick-installation',
              label: 'Tutorials',
              position: 'left'
            },
            {
              type: 'doc',
              docId: 'community/get_involved/readme',
              label: 'Get Involved',
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
            width: 118,
            height: 183,
          },
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Overview',
                  to: '/docs',
                },
                {
                  label: 'Tutorial',
                  to: '/docs/tutorials',
                },
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'Blog Categories',
                  to: '/blog/tags',
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
                  label: 'CDF Slack',
                  href: 'https://join.slack.com/t/cdeliveryfdn/shared_invite/zt-1eryue9cw-9YpgrfIfsTcDS~hGHchURg',
                },
                {
                  label: 'Youtube',
                  href: 'https://www.youtube.com/channel/UClPQKloIElvJk7EdSST3W5g',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/PyrsiaOSS',
                },
              ],
            },
            {
              title: 'About Us',
              items: [
                {
                  label: 'The Team',
                  to: '/#team',
                },
                {
                  label: 'Technical Charter',
                  to: 'https://drive.google.com/file/d/13nOwuFGMDwC-S6mUkhSopC0sFMTo__uE/view?usp=sharing',
                },
              ]
            },
            {
              title: 'More',
              items: [
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
          copyright: `<br/><br/>
                      Copyright © Pyrsia a Series of LF Projects, LLC. <br/>
                      For website terms of use, trademark policy and other project policies please see <a href="https://lfprojects.org">https://lfprojects.org</a>.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };
  return config;
}

module.exports = createConfig;
