import React from "react";
import './Navbar.css'
import '../Toggle/Toggle'
import Toggle from "../Toggle/Toggle";

const Navbar= () =>{
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="name">Main</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>
                            home
                        </li>
                        <li>
                            login
                        </li>
                        <li>
                            Register
                        </li>

                       
                    </ul>
                </div>
                {/* <button className="button n-button">
                    contact
                </button> */}
            </div>
        </div>
    )
}

export default Navbar