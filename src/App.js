import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works"
import Footer from "./Components/Footer/Footer"
import { themeContext } from "./Context";
import { useContext } from "react";
import React,{Component} from "react";
class App extends Component{
// function App() {
//   const theme=useContext(themeContext);
//   const darkMode= theme.state.darkMode;
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
render(){
  return (
    <div className="App"
    // style={{
    //   background: darkMode? '#24292f':'',
    //   color: darkMode? 'white': ''
    // }}
    >
        <p className="App-logo">{this.state.apiResponse}</p>
    <Navbar/>
    <Intro/>
    <Services/>
    <Works/>
    <Footer/>
     
    </div>
    
  );
}
}
export default App;
