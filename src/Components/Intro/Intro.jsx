import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import homeicon from '../../img/home-icon.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png' 
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Intro =()=> {
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="intro">
        <div className="i-left">

            <div className="i-name">
            <span style={{color: darkMode? 'white' : ''}}>Find your Team</span>
            <span>Choosing the Right members to Success</span>
            <span style={{color: darkMode? 'white' : ''}}>
            Lorem ipsum dolor sit amet, consectetur 
            </span>
            </div>
            <button className='button i-button'>
                Try it Out
            </button>
            <div className="i-icons">
                {/* <a href="">
                 <img src={Github} alt="" />
                </a>
               
                <img src={Linkedin} alt="" /> */}
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={homeicon} alt="" />
            {/* <img src={glassesimoji} alt="" /> */}
            <div style={{top:'-4%',left:'68%'}}>
                {/* <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/> */}
            </div>
            <div style= {{top: '18rem', left: '0rem' }}>
              {/* <FloatingDiv image={thumbup} txt1='Best Design' txt="Award"  />   */}
            </div>
            {/* blur */}
            <div className='blur' style={{ background: "rgb(238 210 255)" }}>
            
            </div>
            <div className='blur' style={{background: '#C1F5FF', top: '17rem', width: '21rem',height:'11rem',left:'-9rem'}}>

            </div>
        </div>

    </div>
  )
}

export default Intro