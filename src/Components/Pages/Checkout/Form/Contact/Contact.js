import React, {useState} from "react";
import './Contact.css'

const Contact = (props) =>{

    const [email, changeEmail] = useState("")

    const [number, changeNumber] = useState("")

    const HandleClick = () =>{
        if(email.length > 0 && number.length > 0){
            const newDetails = props.details 
            newDetails[0] = email;
            newDetails[1] = number;
            props.update(newDetails)
            props.next(props.stage+1)
        }
    }



    return(
        <div id = "contact-background1">
            Enter your email:
            <br/>
            <input onChange={(event)=>changeEmail(event.target.value)} type = "text"></input>
            <br/>
            Enter your Phone Number:
            <input onChange={(event)=>changeNumber(event.target.value)} type = "text"></input>
            <br/>
            <button className="button-28" onClick={HandleClick}>Submit</button>
        </div>
    )
}

export default Contact