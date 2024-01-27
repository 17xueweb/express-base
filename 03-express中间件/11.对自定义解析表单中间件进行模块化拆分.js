const express = require('express')

const app = express()

const customBodyParse = require('./12.custom-body-parse')


// 这是解析表单数据的中间件
app.use(customBodyParse)

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})