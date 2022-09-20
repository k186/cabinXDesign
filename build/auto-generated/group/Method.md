|名称|说明|入参|出参|
|----|----|----|----|
|getData|获取group的value|无|{data//全部数据 , selected//已选择的项}|
|addItem|在指定位置上添加item|index//位置 newData//数据|{}|
|removeItem|删除指定位置的item|index//位置|{}|
|updateItem|更新指定位置的item|index//位置|{}|
|moveItem|移动指定位置的item|from|to|
|sortItem|对item排序|无|sortBy//函数，排序的规则，功能同Array.prototype.sort一样|
|getSubComponents|返回refs实例|无|无|
|getItemInstances|获取每个item中的form 实例，可以调用form 内部的方法 \n(可参考示例 表单提交&&动态添加数据)|无|{key:formInstance}|
|getSubmitData|获取group的value|无|无|
