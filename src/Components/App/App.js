import React, {useState} from 'react'
import Home from '../Pages/Home/Home'
import Gallery from '../Pages/Gallery/Gallery'
import About from '../Pages/About/About'
import Artists from '../Pages/Artists/Artists'
import Contact from '../Pages/Contact/Contact'
import Navbar from '../Navbar/Navbar'
import './App.css'

const App = () =>{

    const [page, changePage] = useState("home")

    const renderState = () =>{
        switch(page){
            case "home":
                return <Home function = {changePage}/>
                break;
            case "gallery":
                return <Gallery/>
                break;
            case "artists":
                return <Artists/>
                break;
            case "about":
                return <About/>
                break;
            case "contact":
                return <Contact/>
                break;
        }
    }

    return(
        <div>
            <Navbar function = {changePage} page = {page}/>
            {renderState()}
        </div>
    )
}

export default App