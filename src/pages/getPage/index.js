import React, {useEffect, useState} from "react";
import "./index.css"

import RequestUrl from "../../components/requestURL";
import RequestExecuteButton from "../../components/requestExecuteButton";
import RequestResult from "../../components/requestResult";
import CustomHeaders from "../../components/customHeaders";

import { getRequest } from "../../services/API";


const GetPage = () => {

    const [url, setUrl] = useState("")
    const [getResponse, setGetResponse] = useState(null)
    const [getError, setGetError] = useState(null)
    const [axiosTimer, setAxiosTimer] = useState(null)
    const [loading, setLoading] = useState(false)
    const [header, setHeader] = useState(null)
    
    const attHeaderValues = (headerName, headerValue) => {
        setHeader({
            name: headerName,
            value: headerValue
        })
    }

    const executeRequest = async () => {
        try {
            setLoading(true)
            if(!url || url.trim().length === 0) {
                throw new Error("Invalid URL")
            }
            let startTime = Date.now()
            let response = await getRequest(url, header)
            axiosTimerFunc(startTime)
            setGetResponse(response)
            setGetError(null)
            setLoading(false)
        } catch (error) {
            setGetError(error)
            setGetResponse(null)
            setLoading(false)
        }
    }
    const axiosTimerFunc = (startTime) => {
        let now = Date.now();
        let milliseconds = Math.floor(((now - startTime)%1000).toFixed(2))
        setAxiosTimer(`${milliseconds} ms`);    
      }
      console.log(header)
    return(
        <div className="get_page">
            <RequestUrl name="get_url_request" id="get_url_request" value={url} handleOnChange={(e) => setUrl(e.target.value)}/>
            <CustomHeaders headerValues={attHeaderValues}/>
            <RequestExecuteButton handleOnClick={executeRequest}/>
            <RequestResult responseTime={axiosTimer? axiosTimer : null} loading={loading} response={getResponse? getResponse: null} responseError={getError? getError: null}/>
        </div>
    )
}

export default GetPage;