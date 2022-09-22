import React from 'react'
import './Artists.css'
import Profile from '../../Profile/Profile'

const Artists = () =>{

    return(
        <div id = "artistcont">
            <div id = "artistgrid">
                <div className='row' id = "row1">
                    <Profile/>
                    <Profile/>
                    <Profile/>
                    <Profile/>
                </div>
                <div className='row' id = "row2">
                    <Profile/>
                    <Profile/>
                    <Profile/>
                    <Profile/>
                </div>
            </div>
        </div>
    )
}

export default Artists