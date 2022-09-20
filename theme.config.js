/**
 * Created by k186 on 2022/8/22.
 * Name: 主题相关配置涉及国际化配置参考i18n
 * GitHub:
 * Email: k1868548@gmail.com
 */

module.exports = {
  docs: {
    sidebar: {
      hideable: true
    }
  },
  navbar: {
    hideOnScroll: false,
    title: 'CabinX',
    logo: {
      alt: 'CabinX logo',
      src: 'img/logo.svg'
    },
    items: [
      {
        type: 'doc',
        docId: 'design/introduction',
        position: 'right',
        label: 'Design'
      },
      {
        type: 'doc',
        docId: 'developing/introduction',
        position: 'right',
        label: 'Developing'
      },
      {
        type: 'doc',
        docId: 'components/introduction',
        position: 'right',
        label: 'Components'
      },
      {
        type: 'doc',
        docId: 'resource/index',
        position: 'right',
        label: 'Resource'
      },
      {
        
        position: 'right',
        label: 'CLI',
        href: 'https://testcabinx.dmall.com/cliv2.html#index/cabinxcli_doc/v2/start/hello'
      },
      {
        position: 'right',
        label: 'Demo',
        href: 'https://testcabinx.dmall.com/cross.html#index/cabinxdoc/cabinx/demo/form/baseform'
      }
      // {
      //     type: 'docsVersionDropdown',
      //     position: 'left',
      //     dropdownItemsAfter: [{to: '/versions', label: '所有版本'}],
      //     dropdownActiveClassDisabled: true,
      // },
      // {
      //     href: 'https://github.com/k186/cabinXDesign',
      //     label: 'GitHub',
      //     position: 'right',
      // },
    ]
  },
  footer: {
    style: 'light',
    links: [
      {
        items: [
          {
            label: 'Feishu',
            icon: 'img/logo.svg',
            href: 'https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=820gaac4-63bb-456d-9afe-75a382eb308b&qr_code=true'
          },
          {
            label: 'Gitlab',
            icon: 'img/logo.svg',
            href: 'http://gitlab.dmall.com/kayak-project/cabinx'
          }
        ]
      }
    
    ],
    copyright: `Copyright © ${new Date().getFullYear()} cabinX Group.`
  },
  colorMode: {
    disableSwitch: true//暗模式切换
  }
  // algolia: {
  //     // The application ID provided by Algolia
  //     appId: 'YOUR_APP_ID',
  //
  //     // Public API key: it is safe to commit it
  //     apiKey: 'YOUR_SEARCH_API_KEY',
  //
  //     indexName: 'docs/components/index/',
  //
  //     // Optional: see doc section below
  //     contextualSearch: true,
  //
  //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
  //     externalUrlRegex: 'external\\.com|domain\\.com',
  //
  //     // Optional: Algolia search parameters
  //     searchParameters: {},
  //
  //     // Optional: path for search page that enabled by default (`false` to disable it)
  //     searchPagePath: 'search',
  //
  //     //... other Algolia params
  // },
}

