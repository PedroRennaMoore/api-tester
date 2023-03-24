import React from "react";
import "./index.css"


const RequestUrl = ({name, id, value, handleOnChange}) => {

    return(
        <div className="url_input">
                <input type="text" name={name} id={id} placeholder="type your API URL here" value={value} onChange={handleOnChange}/>
        </div>
    )
}

export default RequestUrl