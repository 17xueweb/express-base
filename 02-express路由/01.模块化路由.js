const express = require('express')

const app = express()

// 1. 导入路由模块
const router = require('./02.router')
// 2. 注册路由模块 
// 为路由模块添加统一前缀, 客户端访问路径 http://127.0.0.1:80/api/user/add 
app.use('/api', router)

// 注意：app.use() 函数的作用，就是来注册全局中间件

app.listen(80, () => {
    console.log('server runnging at http://127.0.0.1');
})
