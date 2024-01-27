const express = require('express')

const app = express()

// 通过 express.urlencoded() 这个中间件，来解析表单的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false}))


app.post('/book', (req, res) => {
    // 在服务端可以通过 req.body 来获取 JSON 格式表单数据和 url-encoded 格式的数据
    console.log(req.body);
    res.send('ok')
})

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})