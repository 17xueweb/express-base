const express = require("express")

const app = express()

// 中间件需要注册
// 注意：多个中间件之间，共享一份 req 和 res
app.use((req, res, next) => {
    // 获取请求到达服务器的时间
    const time = Date.now()
    // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = time
    next()
})

app.get('/', (req, res) => {
    res.send('Home page.' + req.startTime)
})

app.post('/user', (req, res) => {
    res.send('User page.' + req.startTime)
})



app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})