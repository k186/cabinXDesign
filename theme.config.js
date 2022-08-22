/**
 * Created by k186 on 2022/8/22.
 * Name: 主题相关配置
 * GitHub:
 * Email: k1868548@gmail.com
 */

module.exports={
  navbar: {
    title: 'My Site',
    logo: {
      alt: 'My Site Logo',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: 'Tutorial',
      },
      {to: '/blog', label: 'Blog', position: 'left'},
      {
        href: 'https://github.com/facebook/docusaurus',
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
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          },
          {
            label: 'Discord',
            href: 'https://discordapp.com/invite/docusaurus',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/docusaurus',
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
            href: 'https://github.com/facebook/docusaurus',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  },
}

