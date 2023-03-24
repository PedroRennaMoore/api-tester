import React from "react";
import "./index.css"

const RequestResult = ({response, responseTime, responseError, loading}) => {

    if(loading) {
        return(
            <div className="loading">Loading...</div>
        )
    }
    
    if(responseError){
        return(
            <>
            <div className="errors"><p><b>ERROR:</b> {responseError?.message} <spam>( {responseError?.response?.statusText})</spam></p></div>
            {responseError?.request?.response &&
            <div className="error_name"><p><b>RESPONSE MESSAGE:</b> {responseError?.request?.response}</p></div>
            }
            
            <div className="note"><p><b>NOTE</b>: You can see the entire REQUEST RESPONSE in CONSOLE.</p></div>
            </>
        )
    }
    
    if(response) {
        return(
            <div className="response_section">
                <div className="response_container">
                    <div className="response_info">
                        <h4>Response Info</h4>
                        <div className="content_type">
                            <p>Content Type: <span style={{fontWeight: "400"}}>{response.headers["content-type"]}</span></p>
                        </div>
                        <div className="response_status">
                            <p>Status: <span style={response.status === 200 ? {color: "green", fontWeight: "400"} : {color: "orange", fontWeight: "400"}}>{response.status}</span></p>
                        </div>
                        <div className="response_time">
                            <p>Response Time: <span style={+responseTime.split(" ")[0] < 450 ? {color: "green", fontWeight: "400"} : {color: "orange", fontWeight: "400"}} >{responseTime}</span></p>
                        </div>
                    </div>
                    <div className="response_body">
                        <div className="response_body_header">
                            <h4>Response Body</h4>
                        </div>
                        <div className="response_body_container">
                            <xmp>{JSON.stringify(response.data, undefined,4)}</xmp>
                            <xmp>{JSON.stringify(responseError?.request?.response, undefined,4)}</xmp>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequestResult