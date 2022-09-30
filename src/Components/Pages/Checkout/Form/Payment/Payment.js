import React from "react";
import './Payment.css'

const Payment = (props) =>{

    return(
        <div>
            Enter your card Number:
            <br/>
            <input type = "text"></input>
            <br/>
            Enter the Expiration Date:
            <br/>
            <input type = "text"></input>
            <br/>
            Enter the CVV:
            <br/>
            <input type = "text"></input>
            <br/>
            <button onClick={()=>props.next(props.stage+1)}>Submit</button>
        </div>
    )
}

export default Payment