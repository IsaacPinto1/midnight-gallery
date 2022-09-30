import React, {useState} from 'react'
import Home from '../Pages/Home/Home'
import Gallery from '../Pages/Gallery/Gallery'
import About from '../Pages/About/About'
import Artists from '../Pages/Artists/Artists'
import Contact from '../Pages/Contact/Contact'
import Navbar from '../Navbar/Navbar'
import Shop from '../Pages/Shop/Shop'
import Checkout from '../Pages/Checkout/Checkout'
import './App.css'

const App = () =>{

    const [page, changePage] = useState("home")

    const [cart, changeCart] = useState({
        "'Purth'":0,
        "'Guppy'":0,
        "'Property of US Govt.'":0,
        "'#WaffleFriday'":0,
        "'Full Pisces'":0,
        "'Serene Lake'":0,
        "'Vikings'":0,
        "'Goodbye from Sun'":0    
    })

    const renderState = () =>{
        switch(page){
            case "home":
                return <Home function = {changePage}/>
                break;
            case "gallery":
                return <Gallery page = {changePage} cart = {cart} changeCart = {changeCart} function = {changeCart}/>
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
                return <Shop page = {changePage} changeCart = {changeCart} cart = {cart}/>;
                break;
            case "checkout":
                return <Checkout/>
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