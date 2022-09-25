import React from "react";
import './Profile.css'

const Profile = (props) =>{

    return (
        <div className="cont grow" onClick={()=>props.function(props.name)}>
            <img id = "artistimage" src={require(`../../Images/Art/${props.name}`)}></img>
            <p id = "caption">
                {props.artist}
            </p>
        </div>
    )
}

export default Profile