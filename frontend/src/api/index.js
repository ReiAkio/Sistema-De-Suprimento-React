import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000',
})

export const inserirSuprimento = payload => api.post(`/suprimentos`, payload)
export const getTodosSuprimentos = () => api.get(`/suprimentos`)
export const updateSuprimentoPorId = (id, payload) => api.put(`/suprimentos/${id}`, payload)
export const deletarSuprimentoPorId = id => api.delete(`/suprimentos/${id}`)
export const getSuprimentoPorId = id => api.get(`/suprimentos/${id}`)

const apis = {
    inserirSuprimento,
    getTodosSuprimentos,
    updateSuprimentoPorId,
    deletarSuprimentoPorId,
    getSuprimentoPorId,
}

export default apis