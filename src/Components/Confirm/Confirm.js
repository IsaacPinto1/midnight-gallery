import React from "react";
import './Confirm.css'

const Confirm = (props) =>{

    const ContinueClick = () =>{
        props.function("none");
        props.clicked("none");
    }

    const CheckoutClick = () =>{
        props.function("none")
        props.clicked("none")
        props.page("shop")
    }

    return (
        <div>
            <div onClick = {ContinueClick} id = "confirm-background"></div>
            <div id = "confirm-window">
                Added to cart
                <br/>
                Continue shopping?
                <br/>
                <button onClick = {ContinueClick}>Yes</button>
                <button onClick = {CheckoutClick}>No, checkout</button>
            </div>
        </div>
    )
}

export default Confirm