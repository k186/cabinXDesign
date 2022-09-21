|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|name|名称|string|--|--|
|value|绑定值|string / number / array|--|--|
|data|选项|array<{label, value}>|--|--|
|ajax|请求相关|string/object<{url, params, initData}>|--|--|
|remote-searchable|远程搜索|boolean|--|false|
|branch-selectable|枝干可选|boolean|--|false|
|multiple|多选|boolean|--|false|
|disabled|禁用|boolean|--|false|
|placeholder|占位符|string|--|--|
|collapse-tags|是否合并多选 效果|Boolean|--|false|
|loaded|请求处理完成后的回调|function|--|--|
|lazyLoad|加载动态数据的方法|function(node, resolve)|--|--|
|before-change|改变前钩子函数|function(newValue: any, oldValue: any): boolean/Promise|--||
