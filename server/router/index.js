"use strict"

const Router = require('koa-router');
const Article = require('../controllers/article')

module.exports = function() {
    const router = new Router({
        prefix: '/api'
    })

    // router.all('*', (ctx, next) => {
    //     ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
    //     ctx.set('Access-Control-Allow-Headers', 'content-type');
    //     ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
    //     next()
    // })

    // article
    router.get('/article/list', Article.getList)
    router.get('/article/:id', Article.getDetail)
    router.post('/article/create', Article.createNew)
    router.delete('/article/:id', Article.deleteOne)
    
    return router
}