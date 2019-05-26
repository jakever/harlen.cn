"use strict"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * 定义一个模式(相当于传统意义的表结构)
 * 每个模式映射mongoDB的一个集合，
 * 它定义（只是定义，不是实现）这个集合里面文档的结构，就是定义这个文档有什么字段，字段类型是什么，字段默认值是什么等。
 * 除了定义结构外，还定义文档的实例方法，静态模型方法，复合索引，中间件等
 * @type {mongoose}
 */
const articleSchema = new Schema({
    title: String, // 文章标题
    excerpt: String, // 文章摘要
    content: String, //文章内容
    visits: { // 访问量
        type: Number,
        default: 0
    },
    comment_count: { // 评论数
        type: Number,
        default: 0
    },
    created_time: Date // 创建时间
})

/**
 * 定义模型User
 * 模型用来实现我们定义的模式，调用mongoose.model来编译Schema得到Model
 * @type {[type]}
 */
// 参数articles 数据库中的集合名称, 不存在会创建.
const articles = mongoose.model('articles', articleSchema)
module.exports = articles