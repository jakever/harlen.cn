import Vue from 'vue'
import Router from 'vue-router'
import articles from '@/components/articles'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: articles
    },
    {
      path: '/article/:id',
      name: 'articleDetail',
      component(resolve) {
        // 异步加载路由
        require.ensure([], () => {
          resolve(require('@/components/details.vue'))
        }, 'articleDetail')
        // require(['@/components/article-detail.vue'], 'articleDetail')
      }
    },
    {
      path: '/categories',
      name: 'categories',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('@/components/categories.vue'))
        }, 'categories')
      }
    },
    {
      path: '/articles',
      name: 'articles',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('@/components/articles.vue'))
        }, 'articles')
      }
    },
    {
      path: '/tags',
      name: 'tags',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('@/components/tags.vue'))
        }, 'tags')
      }
    },
    {
      path: '/about',
      name: 'about',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('@/components/about.vue'))
        }, 'about')
      }
    }
  ]
})
