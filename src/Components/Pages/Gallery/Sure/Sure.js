import React from "react";
import './Sure.css'

const Sure = (props) =>{

    const ContinueClick = () =>{
        props.function("confirm")
        const newCart = props.cart;
        newCart[props.lastClicked] += 1;
        props.changeCart(newCart)
    }

    const ReturnClick = () =>{
        props.function("none")
        props.clicked("none")
    }

    return (
        <div>
            <div onClick = {ReturnClick} id = "sure-background"></div>
            <div id = "sure-centering">
                <div id = "sure-window">
                    <div id = "add-to-cart">Add to Cart?</div>
                    <br/>
                    <br/>
                    <div>
                        <button className="button-28" onClick = {ContinueClick}>Yes</button>
                        <div id = "space"></div>
                        <button className="button-28" onClick = {ReturnClick}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sure