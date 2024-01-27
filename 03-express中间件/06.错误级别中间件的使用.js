const express = require('express')

const app = express()

// 1. 定义路由
app.get('/', (req, res) => {
    // 1.1 人为的制造错误
    throw new Error('服务器内部发生了错误！')
    res.send('Home page.')
})

/**
 * 注意：
 *   (1) 错误级别中间件 必须放在所有路由之后，如 果放在路由之前，就不能正常工作了。
 *          因为请求路由之后有报错，代码需要往后执行，如果放在前面就没办法执行错误中间件了
 *   (2) 一般中间件，放在路由之前
 */


// 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err, req, res, next) => {
    // 路由报错-> 转发到 错误级别的中间件
    console.log('发生了错误！' + err.message);
    // 向客户端响应了一段错误的消息
    res.send('Error:' + err.message)
})


app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})