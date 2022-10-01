import React, {useState} from "react";
import './Payment.css'

const Payment = (props) =>{

    const [cNumb, changeCNumb] = useState("")
    const [exp, changeExp] = useState("")
    const [cvv, changeCVV] = useState("")

    const HandleClick = () =>{
        if(cNumb.length > 0 && exp.length > 0 && cvv.length>0){
            const newDetails = props.details 
            newDetails[3] = cNumb;
            newDetails[4] = exp;
            newDetails[5] = cvv;
            props.update(newDetails)
            props.next(props.stage+1)
        }
    }

    return(
        <div>
            Enter your card Number:
            <br/>
            <input onChange={(event) => changeCNumb(event.target.value)} type = "text"></input>
            <br/>
            Enter the Expiration Date:
            <br/>
            <input onChange={(event) => changeExp(event.target.value)} type = "text"></input>
            <br/>
            Enter the CVV:
            <br/>
            <input onChange={(event) => changeCVV(event.target.value)} type = "text"></input>
            <br/>
            <button onClick={HandleClick}>Submit</button>
        </div>
    )
}

export default Payment