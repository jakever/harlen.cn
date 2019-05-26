import axios from '../plugins/axios'

const api = {
    async getList () {
        const data = await axios.get('/article/list')
        return data.data.data
    },
    async getDetail (id) {
        const data = await axios.get(`/article/${id}`)
        return data.data.data
    },
    async createNew (params) {
        const data = await axios.post('/article/create', params)
        return data.data.data
    },
    async deleteOne (id) {
        const data = await axios.delete(`/article/${id}`)
        return data.data.data
    }
}

export default api