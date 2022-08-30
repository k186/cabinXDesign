/**
 * Created by k186 on 2022/8/29.
 * Name:
 * GitHub:
 * Email: k1868548@gmail.com
 */
const MarkdownIt = require("markdown-it");
const fs = require('fs');
const path = require('path');
const md = new MarkdownIt();


let template = '';


const docPath = path.resolve('./gen-markdown/src/components');
const version = '0.6.0';
const fileName = 'readme.md'


fs.readdir(docPath, (error, data) => {
  if (!error) {
    const componentArray = [];
    data.forEach((componentName) => {
      const dirFile = path.resolve(docPath, componentName, version, fileName)
      //fs.lstatSync(dirFile)
      let component = {
        name: componentName,
        children: []
      };
      let child = {}
      if (fs.lstatSync(dirFile).isFile()) {
        const mdContent = fs.readFileSync(dirFile, "utf-8");
        const mdArray = md.parse(mdContent);
        for ( let i = 0; i < mdArray.length; i++ ) {
          let token = mdArray[ i ];
          //标题
          if (token.type === "heading_open") {
            child.name = mdArray[ i + 1 ].content;
            i += 2
          }
          //table
          if (token.type === 'table_open') {
            const {index, table} = gentTable(i, mdArray)
            child.children = table;
            component.children.push(child)
            child = {}
            i = index;
          }
        }
      }
      componentArray.push(component)
      //fs.readFileSync()
    });
    template = JSON.stringify(componentArray)
    const dir = `./cabinXCore`;
    const filePath = `${dir}/cabinXAPI@core.json`;
    fs.mkdirSync(dir, {recursive: true});
    fs.writeFileSync(filePath, template)
    console.log(`生成api JSON 成功,地址 ${filePath}`)
  }
})

function gentTable(startIndex, array) {
  let result = {index: startIndex, table: {keyList: [], children: []}}
  let currentType = 'thead';
  let trOpen = false;
  let tableKeyList = [];
  let children = [];
  let child = [];
  for ( let i = startIndex + 1; i < array.length; i++ ) {
    let token = array[ i ];
    //先赋值
    if (currentType === 'thead' && token.type === 'inline') {
      tableKeyList.push({name: token.content, attrs: token.attrs})
    }
    if (currentType === 'tbody' && token.type === 'inline' && trOpen) {
      child.push(token.content)
    }
    
    //处理类型
    if (token.type === 'thead_open') {
      currentType = token.tag;
      tableKeyList = []
    }
    
    if (token.type === 'tbody_open') {
      currentType = token.tag;
    }
    
    if (token.type === 'tr_open') {
      trOpen = true;
    }
    // 处理完毕
    if (token.type === 'thead_close') {
      result.table.keyList = tableKeyList;
    }
    
    if (token.type === 'tbody_close') {
      result.table.children = children
    }
    
    if (token.type === 'tr_close' && currentType === 'tbody') {
      trOpen = false;
      children.push(child);
      child = [];
    }
    
    if (token.type === 'table_close') {
      result.index = i;
      break;
    }
  }
  
  return result
}
