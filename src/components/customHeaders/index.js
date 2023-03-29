import React, { useEffect, useState } from "react";
import "./index.css"

import AddCustomHeader from "../addCustomHeader";

const CustomHeaders = ({headerValues}) => {

    const [checkValue, setCheckValue] = useState(false)
    const [numHeaders, setNumHeaders] = useState(1)
    const [nameValues, setNameValues] = useState({})
    const [valueValues, setValueValues] = useState({})
    

    const handleValueValue = (e) => {
        setValueValues({
            ...valueValues,
            [e.target.name] : e.target.value
        })
    }

    const handleNameValue = (e) => {
        setNameValues({
            ...nameValues,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
      setCheckValue(false)
    }, [])

    useEffect(() => {
        headerValues(nameValues, valueValues)
    },[nameValues, valueValues])

    useEffect(() => {
        if(!checkValue) {
            setNameValues({})
            setValueValues({})
        }
    }, [checkValue])
    const addNewCustomHeader = () => {
        setNumHeaders(numHeaders + 1)
    }    

    const deleteCustomHeader = (index) => {
        if(numHeaders !== 1) {
            setNumHeaders(numHeaders - 1)
            setNameValues(prevNameValues => {
                const newNameValues = {...prevNameValues}
                const keyToDelete = `header_input_${index}`
                delete newNameValues[keyToDelete]
                return newNameValues
            })
            setValueValues(prevValueValues => {
                const newValueValues = {...prevValueValues}
                const keyToDelete = `header_input_${index}`
                delete newValueValues[keyToDelete]
                return newValueValues
            })
        }
    }
    return(
        <div className="custom_headers">
            <div className="check_custom_headers">
                <label className="custom_text" htmlFor="custom_header_select">Custom Headers</label>
                <form>
                    <div className="header_true">
                        <input type="radio" name="radio_check" id="radio_true" checked={checkValue ? true : false}  onChange={() => setCheckValue(true)}/>
                        <label htmlFor="radio_true">Yes</label>
                    </div>
                    <div className="header_false">
                        <input type="radio" name="radio_check" id="radio_false" checked={checkValue ? false : true} onChange={() => setCheckValue(false)}/>
                        <label htmlFor="radio_false">No</label>
                    </div>
                </form>
            </div>
            {checkValue && 
                <ul  >
                    {[...Array(numHeaders)].map((_, index) => {
                        return <li key={index} >
                            <AddCustomHeader 
                                onChange={() => test() }
                                addHeaderInput={addNewCustomHeader} 
                                deleteHeaderInput={() => deleteCustomHeader(index)}
                                valueOnChange={handleValueValue}
                                nameOnChange={handleNameValue}
                                nameValue={nameValues[`header_input_${index}`]}
                                valueValue={valueValues[`header_input_${index}`]}
                                name={`header_input_${index}`}/>
                        </li>
                    })}
                </ul>
            }
            {!checkValue &&
                null
            }
            
        </div>
    )
}

export default CustomHeaders