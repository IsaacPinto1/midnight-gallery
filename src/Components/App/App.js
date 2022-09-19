import React, {useState} from 'react'
import Home from '../Pages/Home/Home'
import Gallery from '../Pages/Gallery/Gallery'
import About from '../Pages/About/About'
import Artists from '../Pages/Artists/Artists'
import Contact from '../Pages/Contact/Contact'
import Navbar from '../Navbar/Navbar'

const App = () =>{

    const [page, changePage] = useState("contact")

    const renderState = () =>{
        switch(page){
            case "home":
                return <Home/>
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
            <Navbar function = {changePage}/>
            {renderState()}
        </div>
    )
}

export default App