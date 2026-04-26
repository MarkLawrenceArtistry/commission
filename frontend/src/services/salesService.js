import api from './api'

export const createSale = async (data, user_id) => {
    const response = await api.post(`/sales/${user_id}`, data)
    return response.data
}

export const updateSale = async (data, user_id) => {
    const response = await api.put(`/sales/${user_id}`, data)
    return response.data
}

export const getAllSales = async (user_id) => {
    const response = await api.get(`/sales/${user_id}`)
    return response.data
}

export const deleteSale = async (sale_id) => {
    const response = await api.delete(`/sales/${sale_id}`)
    return response.data
}

export const getDashboardKpi = async () => {
    const response = await api.get(`/sales/dashboard/kpi`)
    return response.data
}