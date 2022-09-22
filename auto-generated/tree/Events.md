|事件名称|说明|参数类型|回调参数|
|----|----|----|----|
|getData|根据 leafOnly 获取选中项，返回数组。在调用getData方法时带有true参数的时候会返回每个节点所有信息（eg:tree.getData(true)）|Function|[]|
|@node-click|节点被点击时的回调|Function|共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。|
|@node-expand|节点被展开时触发的事件|Function|共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。|
|@check|当复选框被点击的时候触发|Function|共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性|
