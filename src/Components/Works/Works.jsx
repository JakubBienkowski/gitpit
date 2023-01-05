import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context'
import { useContext } from 'react'
function Works() {
    const theme=useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
  return (
    <div className="works">
             <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>Speedating</span>
            <span>
                Moduł do spotkan

            </span>
            <span style={{color: darkMode? 'white' : ''}}>blablabalbal</span>
            <a href="">
            
            <button className="button s-button"> Wypróbuj Teraz</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>

            </div>

        </div>
        {/* prawa strona */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                     
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                     
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                     
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                     
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                     
                </div>
            </div>
            <div className="w-backCircle blueCircle">
            
            </div>
            <div className="w-backCircle yellowCircle">
            
            </div>
        </div>
      
    </div>
  )
}

export default Works