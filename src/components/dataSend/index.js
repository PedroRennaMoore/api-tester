import React from "react";
import "./index.css"
const DataSend = ({name, id, dataValue, handleOnChange}) => {
    return(
        <div className="data_send">
            <textarea name={name} id={id} cols="30" rows="10" onChange={handleOnChange} value={dataValue} placeholder={'JSON DATA to post, exemple: { "name": "John Doe" }'}></textarea>
        </div>
    )
}

export default DataSend