/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sideBarDoc = [
    {
        type: 'autogenerated',
        dirName: 'intro'
    },
    {
        type: 'category',
        label: 'Component',
        items: [
            {
                type: 'doc',
                id: 'components/index/index',
                label: 'About '
            },
            /*from*/
            {
                type: 'category',
                label: 'From',
                items: [
                    {
                        type: 'doc',
                        label: 'About',
                        id: 'components/form/use',
                    },
                    {
                        type: 'doc',
                        label: 'About',
                        id: 'components/form/style',
                    },
                    {
                        type: 'doc',
                        label: 'About',
                        id: 'components/form/props',

                    },
                    {
                        type: 'category',
                        label: 'Components',
                        items: [
                            {
                                type: 'doc',
                                label: 'Link',
                                id: 'components/link/use',
                            },
                            {
                                type: 'doc',
                                label: 'Link',
                                id: 'components/link/style',
                            },
                            {
                                type: 'doc',
                                label: 'Link',
                                id: 'components/link/props',
                            },
                            /*---------*/
                            {
                                type: 'doc',
                                label: 'ImageView',
                                id: 'components/imageView/use',
                            },
                            {
                                type: 'doc',
                                label: 'ImageView',
                                id: 'components/imageView/style',
                            },
                            {
                                type: 'doc',
                                label: 'ImageView',
                                id: 'components/imageView/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Text',
                                id: 'components/text/use',
                            },
                            {
                                type: 'doc',
                                label: 'Text',
                                id: 'components/text/style',
                            },
                            {
                                type: 'doc',
                                label: 'Text',
                                id: 'components/text/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Input',
                                id: 'components/input/use'
                            },
                            {
                                type: 'doc',
                                label: 'Input',
                                id: 'components/input/style',
                            },
                            {
                                type: 'doc',
                                label: 'Input',
                                id: 'components/input/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Textarea',
                                id: 'components/textarea/use',
                            },
                            {
                                type: 'doc',
                                label: 'Textarea',
                                id: 'components/textarea/style',
                            },
                            {
                                type: 'doc',
                                label: 'Textarea',
                                id: 'components/textarea/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Upload',
                                id: 'components/upload/use',
                            },
                            {
                                type: 'doc',
                                label: 'Upload',
                                id: 'components/upload/style',
                            },
                            {
                                type: 'doc',
                                label: 'Upload',
                                id: 'components/upload/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Group',
                                id: 'components/group/use',
                            },
                            {
                                type: 'doc',
                                label: 'Group',
                                id: 'components/group/style',
                            },
                            {
                                type: 'doc',
                                label: 'Group',
                                id: 'components/group/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'AutoComplete',
                                id: 'components/auto-complete/use',
                            },
                            {
                                type: 'doc',
                                label: 'AutoComplete',
                                id: 'components/auto-complete/style',
                            },
                            {
                                type: 'doc',
                                label: 'AutoComplete',
                                id: 'components/auto-complete/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Checkbox',
                                id: 'components/checkbox/use',
                            },
                            {
                                type: 'doc',
                                label: 'Checkbox',
                                id: 'components/checkbox/style',
                            },
                            {
                                type: 'doc',
                                label: 'Checkbox',
                                id: 'components/checkbox/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Radio',
                                id: 'components/radio/use',
                            },
                            {
                                type: 'doc',
                                label: 'Radio',
                                id: 'components/radio/style',
                            },
                            {
                                type: 'doc',
                                label: 'Radio',
                                id: 'components/radio/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Switch',
                                id: 'components/switch/use',
                            },
                            {
                                type: 'doc',
                                label: 'Switch',
                                id: 'components/switch/style',
                            },
                            {
                                type: 'doc',
                                label: 'Switch',
                                id: 'components/switch/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'DatePicker',
                                id: 'components/datepicker/use',
                            },
                            {
                                type: 'doc',
                                label: 'DatePicker',
                                id: 'components/datepicker/style',
                            },
                            {
                                type: 'doc',
                                label: 'DatePicker',
                                id: 'components/datepicker/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'TimePicker',
                                id: 'components/timepicker/use',
                            },
                            {
                                type: 'doc',
                                label: 'TimePicker',
                                id: 'components/timepicker/style',
                            },
                            {
                                type: 'doc',
                                label: 'TimePicker',
                                id: 'components/timepicker/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Cascader',
                                id: 'components/cascader/use',
                            },
                            {
                                type: 'doc',
                                label: 'Cascader',
                                id: 'components/cascader/style',
                            },
                            {
                                type: 'doc',
                                label: 'Cascader',
                                id: 'components/cascader/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'Select',
                                id: 'components/select/use',
                            },
                            {
                                type: 'doc',
                                label: 'Select',
                                id: 'components/select/style',
                            },
                            {
                                type: 'doc',
                                label: 'Select',
                                id: 'components/select/props'
                            },
                            /*-----*/
                            {
                                type: 'doc',
                                label: 'DailyPicker',
                                id: 'components/daily-picker/use',
                            },
                            {
                                type: 'doc',
                                label: 'DailyPicker',
                                id: 'components/daily-picker/style',
                            },
                            {
                                type: 'doc',
                                label: 'DailyPicker',
                                id: 'components/daily-picker/props'
                            },
                        ]
                    }
                ]
            },
            /*basic*/
            {
                type: 'category',
                label: 'basic',
                items: [
                    {
                        type: 'doc',
                        label: 'Icon',
                        id: 'components/icon/use',
                    },
                    {
                        type: 'doc',
                        label: 'Icon',
                        id: 'components/icon/style',
                    },
                    {
                        type: 'doc',
                        label: 'Icon',
                        id: 'components/icon/props'
                    },
                    /*---*/
                    {
                        type: 'doc',
                        label: 'Tag',
                        id: 'components/tag/use',
                    },
                    {
                        type: 'doc',
                        label: 'Tag',
                        id: 'components/tag/style',
                    },
                    {
                        type: 'doc',
                        label: 'Tag',
                        id: 'components/tag/props'
                    },
                    /*---*/
                    {
                        type: 'doc',
                        label: 'Button',
                        id: 'components/button/use',
                    },
                    {
                        type: 'doc',
                        label: 'Button',
                        id: 'components/button/style',
                    },
                    {
                        type: 'doc',
                        label: 'Button',
                        id: 'components/button/props'
                    },
                    /*---*/
                    {
                        type: 'doc',
                        label: 'Image',
                        id: 'components/image/use',
                    },
                    {
                        type: 'doc',
                        label: 'Image',
                        id: 'components/image/style',
                    },
                    {
                        type: 'doc',
                        label: 'Image',
                        id: 'components/image/props'
                    },
                    /*---*/
                    {
                        type: 'doc',
                        label: 'Dropdown',
                        id: 'components/dropdown/use',
                    },
                    {
                        type: 'doc',
                        label: 'Dropdown',
                        id: 'components/dropdown/style',
                    },
                    {
                        type: 'doc',
                        label: 'Dropdown',
                        id: 'components/dropdown/props'
                    },
                    /*---*/
                    {
                        type: 'doc',
                        label: 'Popover',
                        id: 'components/popover/use',
                    },
                    {
                        type: 'doc',
                        label: 'Popover',
                        id: 'components/popover/style',
                    },
                    {
                        type: 'doc',
                        label: 'Popover',
                        id: 'components/popover/props'
                    },
                    /*---*/
                    {
                        type: 'doc',
                        label: 'Card',
                        id: 'components/card/use',
                    },
                    {
                        type: 'doc',
                        label: 'Card',
                        id: 'components/card/style',
                    },
                    {
                        type: 'doc',
                        label: 'Card',
                        id: 'components/card/props'
                    },
                    /*---*/
                    {
                        type: 'doc',
                        label: 'Transfer',
                        id: 'components/transfer/use',
                    },
                    {
                        type: 'doc',
                        label: 'Transfer',
                        id: 'components/transfer/style',
                    },
                    {
                        type: 'doc',
                        label: 'Transfer',
                        id: 'components/transfer/props'
                    },
                    /*---*/
                    {
                        type: 'doc',
                        label: 'Tree',
                        id: 'components/tree/use',
                    },
                    {
                        type: 'doc',
                        label: 'Tree',
                        id: 'components/tree/style'
                    },
                    {
                        type: 'doc',
                        label: 'Tree',
                        id: 'components/tree/props'
                    },
                    /*---*/
                    {
                        type: 'doc',
                        label: 'Steps',
                        id: 'components/steps/use',
                    }, {
                        type: 'doc',
                        label: 'Steps',
                        id: 'components/steps/style',
                    }, {
                        type: 'doc',
                        label: 'Steps',
                        id: 'components/steps/props'
                    },
                ]
            },
            /*table*/
            {
                type: 'category',
                label: 'Table',
                items: [
                    {
                        type: 'doc',
                        label: 'Data',
                        id: 'components/table/data/use',
                    }, {
                        type: 'doc',
                        label: 'Data',
                        id: 'components/table/data/style',
                    }, {
                        type: 'doc',
                        label: 'Data',
                        id: 'components/table/data/props'
                    },
                    {
                        type: 'doc',
                        label: 'Editor',
                        id: 'components/table/editor/use',
                    },
                    {
                        type: 'doc',
                        label: 'Editor',
                        id: 'components/table/editor/style',
                    },
                    {
                        type: 'doc',
                        label: 'Editor',
                        id: 'components/table/editor/props'
                    },
                    {
                        type: 'doc',
                        label: 'Super',
                        id: 'components/table/super/use',
                    },
                    {
                        type: 'doc',
                        label: 'Super',
                        id: 'components/table/super/style',
                    },
                    {
                        type: 'doc',
                        label: 'Super',
                        id: 'components/table/super/props'
                    },
                ]
            },
            /*反馈API*/
            {
                type: 'category',
                label: 'Feedback',
                items: [
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/use',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/style',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/props'
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/use',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/style',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/props'
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/use',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/style',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/props',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/use'
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/style',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/banner/props'
                    },
                    {
                        type: 'doc',
                        label: 'Tips',
                        id: 'components/tips/use',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/tips/style',
                    },
                    {
                        type: 'doc',
                        label: 'Banner',
                        id: 'components/tips/props'
                    },
                    {
                        type: 'doc',
                        label: 'Toast',
                        id: 'components/toast/use',
                    },
                    {
                        type: 'doc',
                        label: 'Toast',
                        id: 'components/toast/style',
                    },
                    {
                        type: 'doc',
                        label: 'Toast',
                        id: 'components/toast/props'
                    },
                ]
            },
            /*chart*/
            {
                type: 'category',
                label: 'Chart',
                items: [
                    {
                        type: 'doc',
                        label: 'Scene',
                        id:'components/chart/scene/use',
                    },
                    {
                        type: 'doc',
                        label: 'Scene',
                        id:'components/chart/scene/style',
                    },
                    {
                        type: 'doc',
                        label: 'Scene',
                        id:'components/chart/scene/props'
                    },
                    {
                        type: 'doc',
                        label: 'Type',
                        id: 'components/chart/type/use'
                    },
                    {
                        type: 'doc',
                        label: 'Type',
                        id: 'components/chart/type/style',
                    },
                    {
                        type: 'doc',
                        label: 'Type',
                        id:'components/chart/type/props'
                    },
                ]
            },
        ]
    },
    /*{
      type: 'category',
      label: 'auto-complete',
      items: ['components/auto-complete/use', 'components/auto-complete/style', 'components/auto-complete/props']
    },
    {
      type: 'category',
      label: 'input',
      items: ['components/input/use', 'components/input/style', 'components/input/props']
    }*/

]
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    docs: sideBarDoc,
    cli: [
        {
            type: 'category',
            label: 'Getting Started',
            items: ['cli/index']
        }

    ]
};

module.exports = sidebars;
