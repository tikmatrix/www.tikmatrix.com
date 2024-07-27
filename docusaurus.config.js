// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TikMatrix',
  tagline: 'TikMatrix is a Tiktok android phonefarm batch control tool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.tikmatrix.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tikmatrix', // Usually your GitHub org/user name.
  projectName: 'tiktok-matrix', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-60Y51L6N5Y',
          anonymizeIP: true,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'TikMatrix',
        logo: {
          alt: 'TikMatrix Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/ProductList', label: 'Buy hardware', position: 'right' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            href: '/#pricing',
            position: 'right',
            label: 'Pricing',
          },
          {
            href: '/#contact',
            position: 'right',
            label: 'Contact',
          },
          {
            href: '/#faq',
            position: 'right',
            label: 'FAQ',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/tikmatrix/tiktok-matrix',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Youtube',
                href: 'https://youtube.com/@tikmatrix',
              },
            ],
          },
          {
            title: 'Community',
            items: [

              {
                label: 'Telegram',
                href: 'https://t.me/+iGhozoBfAbI5YmE1',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/niostack',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/tikmatrix/tiktok-matrix',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TikMatrix, Inc. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'keywords', content: 'TikMatrix, Tiktok Matrix, Tiktok Phonefarm, Tiktok Autopost, Tiktok Autopublish, Tiktok 矩阵, Tiktok 自动养号, Tiktok 自动发布' },
        { name: 'description', content: 'TikMatrix is a Tiktok android phonefarm batch control tool' },
        { name: 'author', content: 'TikMatrix' },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

    }),
  headTags: [
    // Declare a <link> preconnect tag
    // {
    //   tagName: 'link',
    //   attributes: {
    //     rel: 'preconnect',
    //     href: 'https://example.com',
    //   },
    // },
    // // Declare some json-ld structured data
    // {
    //   tagName: 'script',
    //   attributes: {
    //     type: 'application/ld+json',
    //   },
    //   innerHTML: JSON.stringify({
    //     '@context': 'https://schema.org/',
    //     '@type': 'Organization',
    //     name: 'Meta Open Source',
    //     url: 'https://opensource.fb.com/',
    //     logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
    //   }),
    // },
  ],
  // scripts: [
  //   {
  //     src: 'https://embed.tawk.to/665309c6981b6c564774cafe/1huq5scl7',
  //     async: true,
  //     crossorigin: 'anonymous'
  //   },
  // ],
};

export default config;
