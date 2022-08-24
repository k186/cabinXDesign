/*
*
* module.exports = [

    {
        type: 'category',
        label: '介绍',
        items: ['components/index']
    },
    {
        type: 'category',
        label: '组件',
        items: ['components/button/use', 'components/button/style', 'components/button/props'],//todo sidebar doc切换情况下保持存在
    },
]
* */

const a = {
    type: 'autogenerated',
    dir: ''
}

const fs = require('fs');
const path = require('path');

const docPath = path.resolve('./docs/components');

const excluded = ['intro']

let template = '';

fs.readdir(docPath, (error, data) => {
    if (!error) {
        data.forEach((el) => {
            const dirFile = path.resolve(docPath, el)
            if (excluded.indexOf(el) > -1) {
                template += `
    {
       type:'autogenerated',
       dirName:'components/${el}'
    },`
            } else if (fs.lstatSync(dirFile).isDirectory()) {
                template += `
    {
        type:'category',
        label:'${el}',
        items:['components/${el}/use', 'components/${el}/style', 'components/${el}/props']
    },`
            }
        })

        const result = `module.exports = [
        ${template}
]`

        fs.writeFileSync('./script/generated/docSidebar.js', result)
    }
})

