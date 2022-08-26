/**
 * Created by k186 on 2022/8/22.
 * Name: 主题相关配置涉及国际化配置参考i18n
 * GitHub:
 * Email: k1868548@gmail.com
 */

module.exports = {
    navbar: {
        hideOnScroll: true,
        title: 'CabinX',
        logo: {
            alt: 'CabinX logo',
            src: 'img/logo.svg',
        },
        items: [
            {
                type: 'doc',
                docId: 'design/index',
                position: 'right',
                label: '设计',
            },
            {
                type: 'doc',
                docId: 'developing/index',
                position: 'right',
                label: '研发',
            },
            {
                type: 'doc',
                docId: 'components/intro/index',
                position: 'right',
                label: '组件',
            },
            {
                type: 'doc',
                docId: 'resource/index',
                position: 'right',
                label: '组件',
            },
            {
                type: 'doc',
                docId: 'cli/index',
                position: 'right',
                label: 'CLI',
            },
            {
                type: 'doc',
                docId: 'demo/index',
                position: 'right',
                label: '最佳实践',
            },
            // {
            //     href: 'https://github.com/k186/cabinXDesign',
            //     label: 'GitHub',
            //     position: 'right',
            // },
        ],
    },
    footer: {
        style: 'dark',
        links: [
            {
                title: 'Docs',
                items: [
                    {
                        label: '组件',
                        to: '/docs/components/intro/index',
                    },
                    {
                        label: 'cli',
                        to: '/docs/cli/index',
                    },
                ],
            },
            {
                title: 'Community',
                items: [
                    {
                        label: '飞书',
                        type:'popover',
                        icon:'',
                        href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    },
                    {
                        label: 'issues',
                        icon:'',
                        href: 'https://github.com/k186/cabinXDesign/issues',
                    }
                ],
            }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cabinX Group.`,
    },
    colorMode: {
        disableSwitch: true,
    },
}

