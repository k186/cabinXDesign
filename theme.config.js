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
                label: 'Design',
            },
            {
                type: 'doc',
                docId: 'developing/index',
                position: 'right',
                label: 'Developing',
            },
            {
                type: 'doc',
                docId: 'components/index/index',
                position: 'right',
                label: 'Components',
            },
            {
                type: 'doc',
                docId: 'resource/index',
                position: 'right',
                label: 'Resource',
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
                label: 'Demo',
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
                        label: 'component',
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
                        label: 'feishu',
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

