import React from "react";
import './Address.css'

const Address = (props) =>{

    return(
        <div>
            Enter your Address:
            <br/>
            <input type = "text"></input>
            <br/>
            <button onClick={()=>props.next(props.stage+1)}>Submit</button>
        </div>
    )
}

export default Address