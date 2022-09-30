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
            <div id = "sure-window">
                Are you sure!
                <br/>
                <button onClick = {ContinueClick}>Yes</button>
                <br/>
                <button onClick = {ReturnClick}>No</button>
            </div>
        </div>
    )
}

export default Sure