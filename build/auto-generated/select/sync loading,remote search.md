|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|ajax|请求相关|string/object<{url, method(默认get，可选：get、post), params}>|--|--|
|remote-searchable|远程搜索|boolean|--|false|
|loaded|请求处理完成后的回调|function|--|--|
|before-request|在请求之前对参数进行操作，如果返回 false ，则阻止请求发送(可用于校验和控制请求频率)|false/Object|||
|before-render|渲染前数据过滤，须返回对应数据|function|--|--|
