|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|type|类型|string|text/textarea/number/stepper/scan(仅手机可用)/amount|text|
|name|名称|string|--|--|
|value|绑定值|string/number|--|--|
|maxlength|允许输入的字符长度限制|string|--|--|
|show-word-limit|是否显示输入字数统计|boolean|--|false|
|prefix|前缀|string|--|--|
|suffix|后缀|string|--|--|
|placeholder|输入框占位文本|string|--|--|
|disabled|禁用|boolean|--|false|
|icon|头部图标|string|--|--|
|rows|textarea展示的行数/高度|Number||5|
|categories|类别，下拉框变化后，变化会体现在input的placeholder上边|array<{ label, value }>|--|--|
|default-category|默认类别|any|--|--|
|not-cabinx-tag|如果需要用原生标签，可以<br/>使用这个参数，编译器将不会对 select 转成 x-select 。注意，<br/>这个标签只在命令行编译阶段生效，而不是运行阶段，<br/>所以，赋值对他是没有用的||||
|max|当type=number时 通过步长器可以控制的最大值|number|||
|min|当type=number时 通过步长器可以控制的最小值|number|||
|step|当type=number时 通过步长器可以控制的步长|number|||
|precision|当type=stepper时 控制数值精度|number|||
|formatter 格式化类型，未配置format时会默认获取全局配置中对应类型的formatter。目前仅type为amount时有效。|string|amount/quantity|||
|format|格式化配置，目前仅type为amount时支持，主要针对数字进行展示的格式化|object||{ prefix: '', separator: ',', decimal: '.', precision: 2, min: undefined, max: undefined }|
