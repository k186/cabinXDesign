|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|name|名称|string|--|--|
|value|绑定值|string/number/array|--|--|
|data|选项|array<{label, value, disabled}>|--|--|
|multiple|多选|boolean|--|false|
|disabled|禁用|boolean|--|false|
|clearable|显示清除icon|boolean|--|true|
|filter|自定义搜索方法|function(searchValue: string, item: { label: string, value: any }): boolean|--||
|placeholder|占位符|string|--|--|
|cancel-by-click|取消|boolean|--|false|
|virtual-scroll|是否开启虚拟滚动|boolean|--|false|
|use-filter-option-size|当大于设置值时，开启过滤搜索|Number|--|14|
|allow-create|是否允许创建新的项目，如果输入的值不在可选值中，则创建一个新的tag，但是并不会修改可选值。<br/>注意：这并不允许设置value时，设置一个不存在于可选值的值|boolean|true/false|false|
|input-props|搜索输入框自定义属性|object|--||
|collapse-tags-length|多选情况下超过设置值 展示合并标签|number|--|1|
|collapse-tags|是否合并多选 效果|boolean|--|false|
|token-separators|分词的分隔符|array/String|在允许创建新项（allow-create=true）和多选(multiple=true)模式下的分词分隔符|--|
|select-btn|是否开启全选|boolean|--|false|
|before-change|改变前钩子函数|function(newValue: any, oldValue: any): boolean/Promise|--||
