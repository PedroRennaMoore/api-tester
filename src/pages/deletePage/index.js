import React, {useState} from "react";
import "./index.css"

import RequestUrl from "../../components/requestURL";
import RequestExecuteButton from "../../components/requestExecuteButton";
import RequestResult from "../../components/requestResult";
import CustomHeaders from "../../components/customHeaders";

import { deleteRequest } from "../../services/API";

const DeletePage = () => {

    const [url, setUrl] = useState("")
    const [deleteResponse, setDeleteResponse] = useState(null)
    const [deleteError, setDeleteError] = useState(null)
    const [axiosTimer, setAxiosTimer] = useState(null)
    const [loading, setLoading] = useState(false)
    const [header, setHeader] = useState(null)
    
    const attHeaderValues = (headerName, headerValue) => {
        setHeader({
            name: headerName,
            value: headerValue
        })
    }

    const executeDelete = async () => {
        try {
            setLoading(true)
            if(!url || url.trim().length === 0) {
                throw new Error("Invalid URL")
            }
            let startTime = Date.now()
            let response = await deleteRequest(url, header)
            axiosTimerFunc(startTime)
            setDeleteResponse(response)
            setDeleteError(null)
            setLoading(false)
        } catch (error) {
            setDeleteError(error)
            setDeleteResponse(null)
            setLoading(false)
        }
    }

    const axiosTimerFunc = (startTime) => {
        let now = Date.now();
        let milliseconds = Math.floor(((now - startTime)%1000).toFixed(2))
        setAxiosTimer(`${milliseconds} ms`);    
      }

    return(
        <div className="delete_page">
            <RequestUrl name="delete_url_request" id="delete_url_request" value={url} handleOnChange={(e) => setUrl(e.target.value)}/>
            <CustomHeaders headerValues={attHeaderValues}/>
            <RequestExecuteButton handleOnClick={executeDelete}/>
            <RequestResult responseTime={axiosTimer? axiosTimer : null} loading={loading} response={deleteResponse? deleteResponse: null} responseError={deleteError? deleteError: null}/>
        </div>
    )
}

export default DeletePage;