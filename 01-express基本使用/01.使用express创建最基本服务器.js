// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()

// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体内容
app.get('/user', (req, res) => {
    // 调用 express() 提供的 res.send() 方法，向客户端响应一个 JSON 对象
    res.send({
        name: 'zs',
        age: 18,
        gender: '男'
    })
})

app.post('/user', (req, res) => {
    // 调用 express() 提供的 res.send() 方法，向客户端响应一个 文本字符串
    res.send('请求成功')
})

// req.query 获取 url中 携带的参数
app.get('/', (req, res) => {
    // 通过 req.query 可以获取客户端发送过来的 查询参数
    // 注意：默认情况下, req.query 是一个空对象
    console.log(req.query);
    res.send(req.query)
})

// req.params 获取 url 中的动态参数 比如 url为http://127.0.0.1:80/1 -> 获取结果为 { id: 1}
// 接口中通过 ”:变量“ 写法
// 注意写法 '/user/:id' :id前面要有个斜杠
app.get('/user/:id', (req, res) => {
    // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params);
    res.send(req.params)
})

// 3. 启动 web 服务器 
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})