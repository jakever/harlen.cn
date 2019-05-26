"use strict";

const config = require('./config/dev')

const path = require('path')
const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const app = new Koa()
const router = require('./router/index')()

/**
 * mongoose连接数据库
 * @type {[type]}
 */
mongoose.connect(config.mogonConfig.url, config.mogonConfig.opts).then(res => {
    console.log('mongoose connected...');
}).catch(error => {
    console.log(error);
})

app.use(bodyParser())
app.use(cors({
  origin: 'http://localhost:8082',
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET','PUT','POST','PATCH','DELETE','HEAD','OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001)
console.log('Koa server is running on port http://localhost:3001')