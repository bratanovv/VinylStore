import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')

    return data
}
export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')

    return data
}

export const createRecord = async (record) => {
    const {data} = await $authHost.post('api/record', record)
    return data
}

export const fetchRecords = async () => {
    const {data} = await $host.get('api/record')
    return data
}
export const fetchOneRecord = async (id) => {
    const {data} = await $host.get('api/record/'+id)

    return data
}
