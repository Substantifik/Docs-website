import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Substantifik',
  tagline: 'The assistant you need',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.substantifik.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  trailingSlash: false, // for github pages

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'substantifik', // Usually your GitHub org/user name.
  projectName: 'Docs-website', // Usually your repo name.

    // Site-Building strictness behavior
    onDuplicateRoutes: 'warn',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
//    locales: ['en', 'fr', 'de', 'it', 'es'],
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_partials/**'],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
//        blog: {
 //         showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
  //        editUrl:
  //          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
   //     },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
   // Declare some <meta> tags
   metadata: [
    {name: 'keywords', content: 'ai, llm, inference, governed, quality, enterprise'},
    {name: 'twitter:card', content: 'summary_large_image'},
  ],
  blog: null, // Explicitly disable the default blog plugin
    navbar: {
      title: 'Substantifik',
      logo: {
        alt: 'Substantifik Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
     //   {to: '/blog', label: 'Blog', position: 'left'},
     /*
     {
          href: 'https://github.com/Substantifik',
          label: 'GitHub',
          position: 'right',
        },
        */
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
          ],
        },
        {
          title: 'Community',
          items: [
         //   {
         //     label: 'Stack Overflow',
         //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
         //   },
        //    {
        //      label: 'Discord',
        //      href: 'https://discordapp.com/invite/docusaurus',
        //    },
            {
              label: 'Twitter',
              href: 'hhttps://x.com/substantifik',
            },
          ],
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
              href: 'https://github.com/Substantifik',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Documentation - Substantifik`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  /*
  plugins: [
    // TailwindCSS processor plugin
    async function tailwindProcessor(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
*/
  headTags: [
    // Declare some json-ld structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'Substantifik',
        url: 'https://substantifik.com/',
        logo: 'https://substantifik.com/img/logos/substantifik.svg',
      }),
    }
  ]
};

export default config;
