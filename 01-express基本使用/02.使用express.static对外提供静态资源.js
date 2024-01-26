const express = require('express')

const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
// 托管多个静态资源目录，如果两个里面都有index.html 谁写在前面 就展示谁
// 通过页面访问的时候，路径中不需要写clock http://127.0.0.1/index.html
app.use(express.static('clock'))
app.use(express.static('files'))

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})