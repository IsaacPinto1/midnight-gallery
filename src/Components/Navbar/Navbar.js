import React, {useEffect} from 'react'
import './Navbar.css'

const Navbar = (props) =>{

    const PageClick = (page) =>{
        props.function(page)
    }

    const pages = ["gallery", "artists", "about", "contact"]

    useEffect((()=>{
        pages.forEach((page)=>document.getElementById(page).style.textDecoration = "none")
        //pages.forEach((page)=>document.getElementById(page).style.color = "white")
        if(props.page != "home"){
            document.getElementById(props.page).style.textDecoration = 'underline';
            //document.getElementById(props.page).style.color = 'rgb(0,150,255)';
        }
    }),
    [props.page])


    return(
        <div id = "container">
            <div id = "fixedlist">
                <div id = "fixedlistcontent">
                    <div className = 'NavBar imgcontainer'>
                        <div id = "greymoon">
                            <img id = "moon" className="NavBar" onClick = {()=>PageClick("home")} src={require('../../Images/Moon.png')}/>
                        </div>
                    </div>

                    <div className = 'NavBar imgcontainer'>
                        <div id = "greysearch">
                            <img id = "search" className="NavBar" src={require('../../Images/Search.png')}/>
                        </div>
                    </div>

                    <div className='NavBar'>
                        <span className='NavBarText' id = "gallery" onClick = {()=>PageClick("gallery")}>Gallery</span>
                    </div>

                    <div className='NavBar'>
                        <span className='NavBarText' id = "artists" onClick = {()=>PageClick("artists")}>Artists</span>
                    </div>

                    <div className='NavBar'>
                        <span className='NavBarText' id = "about" onClick = {()=>PageClick("about")}>About Us</span>
                    </div>

                    <div className='NavBar'>
                        <span className='NavBarText' id = "contact" onClick = {()=>PageClick("contact")}>Contact Us</span>
                    </div>

                    <div className = 'NavBar imgcontainer'>
                        <div>
                            <img id = "bag" className="NavBar" src={require('../../Images/Bag.png')}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Navbar