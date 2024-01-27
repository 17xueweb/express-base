const express = require("express")

const app = express()

const mw = (req, res, next) => {
    console.log('调用了局部生效的中间件');
    next()
}

// 局部生效的中间件 不需要使用 app.use来注册

// 定义路由
app.get('/', mw, (req, res) => {
    res.send('Home page.')
})

app.get('/user', (req, res) => {
    res.send('User page.')
})

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})