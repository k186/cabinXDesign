|参数名|说明|参数类型|默认值|
|----|----|----|----|
|value|绑定值|Array|[]|
|data|全部数据|Array|[]|
|valueType|值类型|String|normal|
|filterable|是否可搜索|Boolean|false|
|disabled|是否禁用|Boolean|false|
|remoteSearchable|是否远程搜索|Boolean|false|
|height|中间部分的高度|String|288px|
|nodeKey|每个树节点用来作为唯一标识的属性，整棵树应该是唯一的|String|id|
|nodeLabel|展示字段的key|String|label|
|checkStrictly|父子节点完全不关联|Boolean|false|
|father2Son|当checkStrictly为 true 时，支持父节点关联子节点，子节点不关联父节点|Boolean|false|
|moveAsync|当穿梭款左右移动时，是否是异步由用户自己操作|Boolean|false|
|title|左右面板的标题|Object|{left:'全部'， right:'全部'}|
|placeholder|左右面板搜索框提示|Object|{left:'输入关键字进行搜索', right:'输入关键字进行搜索'}|
|renderContent|树节点内容渲染函数,返回节点|Function(h, { node, data, store }||
|lazy|是否懒加载子节点，需与 load 方法结合使用|boolean|false|
|load|当lazy为true时，获取子节点的方法|Function|function(node, resolve)|
|hasDuplicateId|子节点是否存在重复nodekey（如果为true，组件会重新处理nodekey的值，使nodekey唯一，不影响返回数据）|boolean|false|
|sortNodeMethod|排序方法|Function(data)||
