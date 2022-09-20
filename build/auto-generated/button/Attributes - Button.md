|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|type|类型|string|button/link|button|
|not-cabinx-tag|如果需要用原生标签，可以<br/>使用这个参数，编译器将不会对 button 转成 x-button 。注意，<br/>这个标签只在命令行编译阶段生效，而不是运行阶段，<br/>所以，赋值对他是没有用的||||
|text|名称|string|--|--|
|disabled|禁用|boolean|--|false|
|target|同步某组件中的按钮|string|--|--|
|status|状态|string|primary/secondary/tertiary/ghost (danger 废弃)|secondary|
|icon|左侧图标|string|--|--|
|icon-right|右侧图标|string|--|--|
|danger|危险按钮(danger，将变为一个属性，所有按钮类型都支持)|boolean|--|false|
|loading|按钮loading效果0.6.0版本以上支持，0.5版本请参考API 里面loading使用|boolean|--|false|
