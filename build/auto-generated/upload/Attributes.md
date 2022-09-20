|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|name|名称|string|--|--|
|value|绑定值|array<{查看返回的值}>|--|--|
|type|类型|string|file/image|file|
|action|上传请求相关参数，如果不传的话，组件只是一个文件选择器，而没上传功能,|string/{url, params, withCredentials, timeout}/null|--|--|
|maxlength|最大长度|number|--|1|
|accept|同原生属性（.txt,.dll）（[参考](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)）|string|--|--|
|text|按钮文本|string|--|上传文件/上传图片|
|hide-thumbnail|隐藏缩略列表|boolean|--|false|
|sortable|是否可拖动调整顺序|boolean|--|false|
|disabled|禁用|boolean|--|false|
|loaded|请求处理完成后的回调|function|--|--|
|beforeRequest|在组件发送请求前触发，用户可以在此修改请求的参数，如果返回false，则阻止请求发送|function|||
|beforeRender|如果指定了action属性，可以在此更改请求返回的数据，注意:接口需要返回{code:0000,data:response}的格式，如果接口不是这个格式，可以使用该属性转换||||
|beforeRemove|删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。|function(file, fileList)|||
|not-cabinx-tag|如果需要用原生标签，可以<br/>使用这个参数，编译器将不会对 upload 转成 x-upload 。注意，<br/>这个标签只在命令行编译阶段生效，而不是运行阶段，<br/>所以，赋值对他是没有用的||||
