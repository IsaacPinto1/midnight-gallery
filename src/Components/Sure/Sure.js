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
            <div onClick = {ContinueClick} id = "sure-window"></div>
        </div>
    )
}

export default Sure