import axios from "axios";

export const getRequest = async (url, header) => {
    let headers = {}
    if (header) {
        headers = Object.keys(header.name).reduce((obj, key) => {
            obj[header.name[key]] = header.value[key]
            return obj
        }, {})
    }

    let response = await axios.get(url, {
        headers: headers
    })
    console.log(response)
    return response
}


export const postRequest = async(url, data, header) => {
    let headers = {}
    if (header) {
        headers = Object.keys(header.name).reduce((obj, key) => {
            obj[header.name[key]] = header.value[key]
            return obj
        }, {})
    }
    let response = await axios.post(url, data, {
        headers: headers
    })
    console.log(response)
    return response
}

export const updateRequest = async(url, data, header) => {
    console.log(header)
    let headers = {}
    if (header) {
        headers = Object.keys(header.name).reduce((obj, key) => {
            obj[header.name[key]] = header.value[key]
            return obj
        }, {})
    }
    let response = await axios.put(url, data, {
        headers: headers
    })
    console.log(response)
    return response
}

export const deleteRequest = async(url, header) => {
    let headers = {}
    if (header) {
        headers = Object.keys(header.name).reduce((obj, key) => {
            obj[header.name[key]] = header.value[key]
            return obj
        }, {})
    }
    let response = await axios.delete(url, {
        headers: headers
    })
    console.log(response)
    return response
    
}