<template>
    <div class="wraper">
         文章详情
    </div>
</template>
<script>
import articleApi from '../services/articles'

export default {
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
    async created() {
        const data = await articleApi.getDetail(this.$route.params.id)
        console.log(data);
    }
}
</script>
<style lang="scss">
.wraper{

}
</style>