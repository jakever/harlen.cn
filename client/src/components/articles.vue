<template>
    <section class="article-main">
        <div class="post-title">POSTS</div>
        <div class="post-list">
            <article class="article-item" v-for="item in articles" :key="item._id">
                <header>
                    <router-link :to="{name: 'articleDetail', params: {id: item._id}}">{{item.title}}</router-link>
                </header>
                <main>
                    <p class="article-excerpt" v-html="item.excerpt"></p>
                </main>
                <footer>
                    <span class="comments">{{item.comment_count}}条评论</span>
                    <span class="visits">{{item.visits}}人访问</span>
                </footer>
                <!-- <button @click="del(item._id)">删除</button> -->
            </article>
        </div>
        <div class="post-pagination"></div>
        <!-- <button @click="add">创建</button> -->
    </section>
</template>
<script>
import articleApi from '../services/articles'
export default {
    components: {
    },
    data() {
        return {
            articles: []
        }
    },
    computed: {
    },
    methods: {
        async add() {
            await articleApi.createNew({
                title: '',
                excerpt: ``,
                content: ``
            })
        },
        async del(id) {
            await articleApi.deleteOne(id)
        }
    },
    async created() {
        const data = await articleApi.getList()
        this.articles = data.articles
    }
}
</script>
<style lang="scss">
.article-main {
    max-width: 800px;
    margin: 0 auto;
    width: 90%;
    padding: 50px;

    .post-title {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1px;
        padding-bottom: 2px;
        text-transform: uppercase;
    }
    .post-list{
        .article-item {
            font-size: 14px;
            padding: 30px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            &:last-child {
                border: 0;
            }
            header {
                font-size: 23px;
                &:hover {
                    color: #8CC152;
                }
            }
            .article-excerpt {
                font-size: 16px;
                margin: 24px 0;
            }
        }
        footer span{
            color: #AAB2BD;
            margin-right: 16px;
        }
    }
}

@media (min-width: 1400px) {
  .article-main {
    margin-left: 150px;
  }
}
</style>