import React from "react";
import './Review.css'

const Review = (props) =>{

    const RenderCart = () =>{
        return(Object.keys(props.cart).filter(key=>props.cart[key]!=0)).map(key=><li>{key}:{props.cart[key]}</li>)
    }

    const HandleClick = () =>{
        props.changeCart({
            "'Purth'":0,
            "'Guppy'":0,
            "'Property of US Govt.'":0,
            "'#WaffleFriday'":0,
            "'Full Pisces'":0,
            "'Serene Lake'":0,
            "'Vikings'":0,
            "'Goodbye from Sun'":0    
        })
        props.next(props.stage+1)
    }

    return(
        <div>
            <h3>Review:</h3>
            Cart:{RenderCart()} <br/>
            Email: {props.details[0]} <br/>
            Phone Number: {props.details[1]} <br/>
            Address: {props.details[2]} <br/>
            Card Number: {props.details[3]} <br/>
            Expiration Date: {props.details[4]} <br/>
            CVV: {props.details[5]} <br/>
            <button onClick={HandleClick}>Confirm</button>
        </div>
    )
}

export default Review