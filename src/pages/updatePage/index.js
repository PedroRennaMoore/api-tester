import React, {useState} from "react";
import "./index.css"

import RequestUrl from "../../components/requestURL";
import DataSend from "../../components/dataSend";
import RequestExecuteButton from "../../components/requestExecuteButton";
import RequestResult from "../../components/requestResult";

import { updateRequest } from "../../services/API";

const UpdatePage = () => {

    const [url, setUrl] = useState(null)
    const [sendData, setSendData] = useState(null)
    const [updateResponse, setUpdateResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [updateError, setUpdateError] = useState(null)
    const [axiosTimer, setAxiosTimer] = useState(null)

    const executeUpdate = async() => {
        try {
            setLoading(true)
            if(!url || url.trim().length === 0) {
                throw new Error("Invalid URL")
            }
            let startTime = Date.now()
            let response = await updateRequest(url, JSON.parse(sendData))
            setUpdateResponse(response)
            axiosTimerFunc(startTime)
            setUpdateError(null)
            setLoading(false)
        } catch (error) {
            setUpdateError(error)
            setUpdateResponse(null)
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
        <div className="update_page">
            <RequestUrl name="update_url_request" id="update_url_request" value={url} handleOnChange={(e) => setUrl(e.target.value)}/>
            <DataSend name="update_data" id="update_data" handleOnChange={(e) => setSendData(e.target.value)} value={sendData} />
            <RequestExecuteButton handleOnClick={executeUpdate}/>
            <RequestResult responseTime={axiosTimer? axiosTimer : null} loading={loading} response={updateResponse? updateResponse: null} responseError={updateError? updateError: null} />
        </div>
    )
}

export default UpdatePage;