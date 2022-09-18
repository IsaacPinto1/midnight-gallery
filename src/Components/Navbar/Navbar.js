import React from 'react'
import './Navbar.css'

const Navbar = () =>{

    return(
        <div id = "fixedlist">
            <div id = "fixedlistcontent">
                <div className = 'NavBar imgcontainer'>
                    <img id = "moon" className="NavBar" src={require('../../Images/Moon.png')}/>
                </div>
                <div className = 'NavBar imgcontainer'>
                    <img id = "search" className="NavBar" src={require('../../Images/Search.png')}/>
                </div>
                <div className='NavBar'>
                    <span className='NavBarText'>Gallery</span>
                </div>
                <div className='NavBar'>
                    <span className='NavBarText'>Artists</span>
                </div>
                <div className='NavBar'>
                    <span className='NavBarText'>About Us</span>
                </div>
                <div className='NavBar'>
                    <span className='NavBarText'>Contact Us</span>
                </div>
                <div className = 'NavBar imgcontainer'>
                    <img id = "bag" className="NavBar" src={require('../../Images/Bag.png')}/>
                </div>
            </div>
        </div>
    )
}
export default Navbar