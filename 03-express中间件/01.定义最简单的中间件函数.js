const express = require('express')

const app = express()

// 定义一个最简单的中间件函数
const mw = function(req, res, next) {
    console.log('这是最简单的中间件函数');
    next()
}

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})