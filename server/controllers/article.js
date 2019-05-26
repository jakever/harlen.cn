"use strict";

const Articles = require('../models/article')
/**
 * 文章列表
 */
const getList = async (ctx, next) => {
    const articles = await Articles.find()
    ctx.body = {
        data: {
            articles,
            total: 1
        },
        msg: '',
        errormsg: '',
        resultcode: 200
    }
}
/**
 * 
 * 文章详情
 * @param {文章id} id 
 */
const getDetail = async (ctx, next) => {
    const article_id = ctx.params.id
    const rs = await Articles.findById(article_id)
    ctx.body = {
        data: rs,
        msg: '',
        errormsg: '',
        resultcode: 200
    } 
}
/**
 * 
 * 创建新文章 
 * @param {文章属性} options 
 */
const createNew = async (ctx, next) => {
    const {
        title,
        content,
        excerpt
    } = ctx.request.body
    const created_time = new Date()
    let article = new Articles({ // 由Model创建的实体
        title,
        content,
        excerpt,
        created_time
    })
    article = await article.save()
    ctx.body = {
        data: {
            success: true
        },
        msg: '创建成功',
        errormsg: '',
        resultcode: 200
    }
}
/**
 * 
 * 删除文章
 * @param {文章id} id 
 */
const deleteOne = async (ctx, next) => {
    const article_id = ctx.params.id
    await Articles.deleteOne({
        _id: article_id
    })
    ctx.body = {
        data: {
            success: true,
            id: article_id
        },
        msg: '删除成功',
        errormsg: '',
        resultcode: 200
    }
}

module.exports = {
    getList,
    getDetail,
    createNew,
    deleteOne
}