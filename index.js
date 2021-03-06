const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db    

app.get('/',(req, res)=>{
    res.send('Hello word!!!')
})

app.listen(3003,()=>{
    console.log('Backend iniciando...')
})