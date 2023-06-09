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

export const adToB = async (id) => {
    const {data} = await $authHost.get('api/record/b/'+id)
    return data
}
export const getFrB = async () => {
    const {data} = await $authHost.get('api/record/b/b/b')
    return data
}



export const fetchRecords = async (typeId,brandId,page,limit=5) => {
    const {data} = await $host.get('api/record',{params:{
            typeId,brandId,page,limit
        }})
    return data
}
export const fetchOneRecord = async (id) => {
    const {data} = await $host.get('api/record/'+id)

    return data
}



export const deleteRecord = async (id) => {
    const {data} = await $host.get('api/record/delete/'+id)

    return data
}

export const fetchOneRecordByName = async (name) => {
    const {data} = await $host.get('api/record/find/'+name)

    return data
}


