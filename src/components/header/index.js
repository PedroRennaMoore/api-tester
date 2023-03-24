import React, {useState} from "react";
import { Link } from "react-router-dom";

import "./index.css"

const menuNav = [
    {id: "get", url: "/"},
    {id: "post", url: "/post"},
    {id: "update", url: "/update"},
    {id: "delete", url: "/delete"},
    
]

const Header = ({children}) => {
    const [activeLink, setActiveLink] = useState(menuNav[0].id)

    return(
        <>
        <div className="header">
            <div className="logo">REST API Tester</div>
            <div className="nav">
                <ul>
                    {menuNav.map(navItem => {
                        return <li key={navItem.id}>
                                <Link className={activeLink === navItem.id ? "active" : ""} onClick={() => setActiveLink(navItem.id)} to={navItem.url}>{navItem.id}</Link>  
                               </li>
                    })}
                </ul>
            </div>
        </div>
        {children}
        </>
    )
}
export default Header