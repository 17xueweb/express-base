const express = require('express')

const router = express.Router()

// 在这里挂载对应的路由
router.get('/get', (req, res) => {
    const query = req.query 
    res.send({
        status: 0, // 0 - 表示处理陈工， 1 - 表示处理失败
        msg: 'GET 请求成功！', // 状态描述
        data: query // 需要响应给客户端的数据 
    })
})

// 定义 POST 接口
router.post('/post', (req, res) => {
    // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据 
    const body = req.body
    // 调用 res.send() 向客户端响应结果
    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body
    })
})

module.exports = router