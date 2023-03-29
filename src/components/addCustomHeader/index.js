import React, { useState } from "react";
import "./index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddCustomHeader = ({name, valueOnChange, nameOnChange, addHeaderInput, deleteHeaderInput, nameValue, valueValue}) => {

    return(
        <div className="custom_header">
            <div className="header_input">
                <input type="text" placeholder="Name" name={name} value={nameValue} onChange={nameOnChange} />
                <input type="text" placeholder="Value" name={name} value={valueValue} onChange={valueOnChange} />
            </div>
            <div className="header_button">
                <button onClick={addHeaderInput}><FontAwesomeIcon icon={faPlus} color="white"/></button>
                <button onClick={deleteHeaderInput}><FontAwesomeIcon icon={faTrash}color="white"/></button>
            </div>
        </div>
    )
}

export default AddCustomHeader