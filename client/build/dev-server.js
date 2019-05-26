
var path = require('path')
var Koa = require('koa')
const { say } = require('cfonts')
var express = require('express')
var serve = require('koa-static')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var config = require('../config')
// 如果 Node 的环境无法判断当前是 dev / product 环境
// 使用 config.dev.env.NODE_ENV 作为当前的环境
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
  }

var webpackConfig = require('./webpack.dev.conf')
var port = process.env.port || config.dev.env.port

// 配置文件中 http代理配置
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

// var app = new Koa()
var app = express()
var compiler = webpack(webpackConfig)

// 可以将编译后的文件暂存到内存中的插件
// https://github.com/webpack/webpack-dev-middleware
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// hot reload (https://github.com/glenjamin/webpack-hot-middleware)
var hotMiddleware = require('webpack-hot-middleware')(compiler)
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// 将 proxyTable 中的请求配置挂在到启动的 express 服务上
Object.keys(proxyTable).forEach(function (ctx) {
    var options = proxyTable[ctx]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(ctx, options))
})

// 使用 connect-history-api-fallback 匹配资源
// 如果不匹配就可以重定向到指定地址
// https://github.com/bripkens/connect-history-api-fallback
app.use(require('connect-history-api-fallback')())

// 将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上
app.use(devMiddleware)

app.use(hotMiddleware)

// 拼接 static 文件夹的静态资源路径
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
// app.use(serve(staticPath))
app.use(express.static(staticPath))

devMiddleware.waitUntilValid(() => {
    say('Compiler successfully.', {
        font: 'simple',
        align: 'center',
        colors: ['blueBright']
    })
})
app.listen(port, function(err) {
    if (err) {
        return console.error(err)
    }
    var uri = 'http://' + config.dev.env.host + ':' + port + '\n'
    console.log('Client is running on ' + uri);
})