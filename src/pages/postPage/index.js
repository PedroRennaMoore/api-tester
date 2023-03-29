import React, { useState } from "react";
import "./index.css"

import RequestUrl from "../../components/requestURL";
import RequestExecuteButton from "../../components/requestExecuteButton";
import CustomHeaders from "../../components/customHeaders";
import DataSend from "../../components/dataSend";
import RequestResult from "../../components/requestResult";

import { postRequest } from "../../services/API";



const PostPage = () => {

    const [url, setUrl] = useState(null)
    const [sendData, setSendData] = useState(null)
    const [postResponse, setPostResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [postError, setPostError] = useState(null)
    const [axiosTimer, setAxiosTimer] = useState(null)
    const [header, setHeader] = useState(null)
    
    const attHeaderValues = (headerName, headerValue) => {
        setHeader({
            name: headerName,
            value: headerValue
        })
    }

    const executePost = async() => {
        try {
            setLoading(true)
            if(!url || url.trim().length === 0) {
                throw new Error("Invalid URL")
            }
            let startTime = Date.now()
            let response = await postRequest(url, JSON.parse(sendData), header)
            setPostResponse(response)
            axiosTimerFunc(startTime)
            setPostError(null)
            setLoading(false)
        } catch (error) {
            setPostError(error)
            setPostResponse(null)
            console.log(error)
            setLoading(false)
        }
    }
    
    const axiosTimerFunc = (startTime) => {
        let now = Date.now();
        let milliseconds = Math.floor(((now - startTime)%1000).toFixed(2))
        setAxiosTimer(`${milliseconds} ms`);    
      }

    return(
        <div className="post_page">
            <RequestUrl name="post_url_request" id="post_url_request" value={url} handleOnChange={(e) => setUrl(e.target.value)}/>
            <DataSend name="post_data" id="post_data" handleOnChange={(e) => setSendData(e.target.value)} value={sendData} />
            <CustomHeaders headerValues={attHeaderValues}/>
            <RequestExecuteButton handleOnClick={executePost}/>
            <RequestResult responseTime={axiosTimer? axiosTimer : null} loading={loading} response={postResponse? postResponse: null} responseError={postError? postError: null} />
        </div>
    )
}

export default PostPage;