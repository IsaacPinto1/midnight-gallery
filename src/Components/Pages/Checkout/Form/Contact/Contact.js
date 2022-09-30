import React from "react";
import './Contact.css'

const Contact = (props) =>{

    return(
        <div>
            Enter your email:
            <br/>
            <input type = "text"></input>
            <br/>
            Enter your Phone Number:
            <input type = "text"></input>
            <br/>
            <button onClick={()=>props.next(props.stage+1)}>Submit</button>
        </div>
    )
}

export default Contact