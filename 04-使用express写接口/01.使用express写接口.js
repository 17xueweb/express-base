// 导入 express
const express = require('express')
// 创建服务器实例
const app = express()

app.use(express.urlencoded({ extended: false }))

// 导入路由模块
const router = require('./02.apiRouter')
// 把路由模块，注册到 app 上
app.use('/api', router)

// 启动服务器
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})