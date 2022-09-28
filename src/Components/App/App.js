import React, {useState} from 'react'
import Home from '../Pages/Home/Home'
import Gallery from '../Pages/Gallery/Gallery'
import About from '../Pages/About/About'
import Artists from '../Pages/Artists/Artists'
import Contact from '../Pages/Contact/Contact'
import Navbar from '../Navbar/Navbar'
import Shop from '../Pages/Shop/Shop'
import './App.css'

const App = () =>{

    const [page, changePage] = useState("home")

    const [cart, changeCart] = useState({
        "1":0,
        "2":0,
        "3":0,
        "4":0,
        "5":0,
        "6":0,
        "7":0,
        "8":0    
    })

    const renderState = () =>{
        switch(page){
            case "home":
                return <Home function = {changePage}/>
                break;
            case "gallery":
                return <Gallery function = {changeCart}/>
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
            case "shop":
                return <Shop cart = {cart}/>;
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