import React from "react";
import "./index.css"

const RequestExecuteButton = ({handleOnClick}) => {
    return(
        <div className="execute_button">
            <button onClick={handleOnClick}>Execute</button>
        </div>
    )
}

export default RequestExecuteButton;