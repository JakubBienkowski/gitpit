import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'
function Services() {
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="services">
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>Nasze własne</span>
            <span>
                Interaktywne testy
            </span>
            <span>blablabalbal</span>
            <a href="">
            
            <button className="button s-button"> Wypróbuj Teraz</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>

            </div>

        </div>
        <div className="cards">
            <div style={{left:"22rem"}}>
              <Card
              emoji={HeartEmoji}
              heading= {'Interaktywne Testy'}
              detail= {"Rozwiązuj niestandardowe testy"}

              
              />  
            </div>
            <div style={{top:"12rem",left:"4rem"}}>
              <Card
              emoji={Glasses}
              heading= {'Test BigFive'}
              detail= {"Pomóż nam lepiej się pozanać poprzez wykonanie testy bigfive"}

              
              />  
            </div>
            <div style={{top:"19rem",left:"20rem"}}>
              <Card
              emoji={Humble}
              heading= {'Pasek zapełnienia'}
              detail= {"Poprzez wykonywanie testów zapełniasz swój pasek znajomości"}

              
              />  
            </div>
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
    </div>
  )
}

export default Services