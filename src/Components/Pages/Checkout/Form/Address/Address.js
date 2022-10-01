import React, {useState} from "react";
import './Address.css'

const Address = (props) =>{

    const [address, changeAddress] = useState("")

    const HandleClick = () =>{
        if(address.length > 0){
            const newDetails = props.details 
            newDetails[2] = address;
            props.update(newDetails)
            props.next(props.stage+1)
        }
    }

    return(
        <div id = "address-background">
            Enter your Address:
            <br/>
            <input onChange={(event)=>changeAddress(event.target.value)} type = "text"></input>
            <br/>
            <button className="button-28" onClick={HandleClick}>Submit</button>
        </div>
    )
}

export default Address