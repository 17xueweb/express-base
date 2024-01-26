// 这是路由模块
// 1. 导入 express
const express = require('express')
// 2. 创建路由对象
const router = express.Router()

// 3. 挂载具体的路由
router.get('/user/list', (req, res) => {
    res.send('Get user list.')
})

router.post('/user/add', (req, res) => {
    res.send('Add new user.')
})

// 4. 向外导出路由对象
// 这里现在直接赋值给 exports了，外界通过require导入的时候 得到的就是 router
module.exports = router