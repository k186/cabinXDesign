|参数名|说明|参数类型|默认值|
|----|----|----|----|
|data|全部数据|Array|[]|
|disabled|是否禁用|Boolean|false|
|filterable|是否可搜索|Boolean|false|
|defaultCheckedList|选中的值|Array|[]|
|defaultExpandedList|默认展开的列|Array|[]|
|nodeKey|每个树节点用来作为唯一标识的属性，整棵树应该是唯一的|String|'id'|
|defaultProps|指定节点的映射关系|Object{ children,label,disabled }||
|leafOnly|true 仅返回叶子节点 false 包含父級节点|Boolean|true|
|checkStrictly|在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false|Boolean|false|
|showCheckbox|节点是否可被选择|Boolean|true|
|expandOnClickNode|点击节点手展开/收缩|Boolean|true|
|highlightCurrent|是否高亮当前选中节点|Boolean|false|
|defaultExpandAll|是否默认展开所有节点|Boolean|false|
|renderContent|树节点的内容区的渲染 Function|Function||
|lazy|是否懒加载子节点，需与 load 方法结合使用|Boolean|false|
|load|加载子树数据的方法，仅当 lazy 属性为true 时生效|Function(node, resolve)||
|checkAllJustParentValue|当子节点全部选中时，父节点也是选中，仅返回父级value|Boolean|false|
