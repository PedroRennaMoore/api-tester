import axios from "axios";

export const getRequest = async (url) => {
    let response = await axios.get(url)
    console.log(response)
    return response
}

export const postRequest = async(url, data) => {
    let response = await axios.post(url, data)
    console.log(response)
    return response
}

export const updateRequest = async(url, data) => {
    let response = await axios.put(url, data)
    console.log(response)
    return response
}

export const deleteRequest = async(url) => {
    let response = await axios.delete(url)
    console.log(response)
    return response
    
}