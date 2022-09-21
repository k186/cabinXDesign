|参数|说明|类型|可选值|默认值|适用平台|
|----|----|----|----|----|----|
|name|名称|string|--|--|pc|
|value|绑定值|string / number|--|--|pc|
|data|选项|array<{label, value, disabled}>|--|--|pc|
|disabled|禁用|boolean|--|false|pc|
|display-type|显示的样式|string|normal/button/card|normal|pc|
|layout|排列方式(横竖)|string|horizontal/vertical|horizontal|pc|
|item-width|选项的宽度|string|S(108px)/M(144px)/L(216px)/auto(选项宽度)|S|pc|
|before-change|改变前钩子函数|function(newValue: any, oldValue: any): boolean/Promise|--|pc||
