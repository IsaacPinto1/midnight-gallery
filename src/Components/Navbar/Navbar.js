import React from 'react'
import './Navbar.css'

const Navbar = (props) =>{

    const PageClick = (page) =>{
        props.function(page)
    }


    return(
        <div>
            <div id = "topPadding"></div>
            <div id = "fixedlist">
                <div id = "fixedlistcontent">
                    <div className = 'NavBar imgcontainer'>
                        <img id = "moon" className="NavBar" onClick = {()=>PageClick("home")} src={require('../../Images/Moon.png')}/>
                    </div>
                    <div className = 'NavBar imgcontainer'>
                        <img id = "search" className="NavBar" src={require('../../Images/Search.png')}/>
                    </div>
                    <div className='NavBar'>
                        <span className='NavBarText' onClick = {()=>PageClick("gallery")}>Gallery</span>
                    </div>
                    <div className='NavBar'>
                        <span className='NavBarText' onClick = {()=>PageClick("artists")}>Artists</span>
                    </div>
                    <div className='NavBar'>
                        <span className='NavBarText' onClick = {()=>PageClick("about")}>About Us</span>
                    </div>
                    <div className='NavBar'>
                        <span className='NavBarText' onClick = {()=>PageClick("contact")}>Contact Us</span>
                    </div>
                    <div className = 'NavBar imgcontainer'>
                        <img id = "bag" className="NavBar" src={require('../../Images/Bag.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar