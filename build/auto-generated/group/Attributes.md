|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|data|列表数据|Array|{disabled:false/*控制单行删除按钮*/,...otherNames}||
|selectable|是否显示选择器|Boolean/Object|true/false/{multiple:true}|false|
|editable|是否展示编辑器（添加/删除）|Boolean/Object|true/false/{参考editable配置}|false|
|beforeAdd|添加项之前触发，获取添加项的数据|Function|||
|beforeRemove|删除项之前触发，确认是否删除|Function, data{index, data}|||
