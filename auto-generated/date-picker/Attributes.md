|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|type|类型|string|date / week / year / month / datetime / daterange / datetimerange / halfyear / quarter|date|
|name|名称|string|--|--|
|value|绑定值|date / array|--|--|
|value-format|绑定值格式|string|--|--|
|format|显示格式|string|--|--|
|disabled|禁用|boolean|--|false|
|placeholder|占位符|string|--|--|
|end-placeholder|结束日期占位|string|--|--|
|shortcuts|快捷操作|array<(function({text, onClick}))>|--|--|
|before-render|设置禁用状态|function|--|--|
|default-time|时刻的默认值|array<(string)>|--|['00:00:00', '00:00:00']|
|unlink-panels|取消两个日期面板间联动|boolean|--|false|
|step|时分秒间隔|String|小时步长(1-23)：分钟步长(1-59)：秒步长(1-59)|'01:01:01'|
|maxDate|最大日期 (仅移动端生效)|Date|移动端渲染时间跨度,默认为当前时间前后2年|-|
|minDate|最小日期(仅移动端生效)|Date|移动端渲染时间跨度,默认为当前时间前后2年|-|
|rangeLimitDay|可选范围最大跨度长度限制|Number|仅在type为 **-range生效|-|
