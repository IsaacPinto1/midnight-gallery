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
            <div id = "confirm-centering">
                <div id = "confirm-window">
                    <div id = "added-to-cart">Added to cart.</div>
                    <br/>
                    <br/>
                    <div id = "add-to-cart">Continue shopping?</div>
                    <br/>
                    <div>
                        <button className="button-28" onClick = {ContinueClick}>Yes</button>
                        <div id = "space"></div>
                        <button className="button-28" onClick = {CheckoutClick}>No, checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm