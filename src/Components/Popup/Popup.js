import React from 'react'
import './Popup.css'

const Popup = (props) =>{

    return (
        <div>
            <div onClick={() =>props.function("none")} id = "black"></div>
            <div id = "window">
                <div id = "window-content">
                    <div id = "cross" onClick = {()=>props.function("none")}>X</div>
                    <p id = "artistdesc">
                        <div id = "snapshot">
                            <img id = "headshot" src={require(`../../Images/Artists/${props.artist}`)}></img>
                            <div id = "name">{props.name}</div>
                        </div>
                    </p>
                    <p id = "artistdesc">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Popup