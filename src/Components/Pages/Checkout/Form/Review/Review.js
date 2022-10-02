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

    const cardBlur = () =>{
        return("**** **** **** " + props.details[3].slice(-4))
    }

    const prices = {
        "'Purth'":20,
        "'Guppy'":25,
        "'Property of US Govt.'":10,
        "'#WaffleFriday'":10,
        "'Full Pisces'":30,
        "'Serene Lake'":25,
        "'Vikings'":35,
        "'Goodbye from Sun'":30
    }

    const total = () =>{
        let total = 0
        Object.keys(props.cart).forEach((key)=>{
            if(props.cart[key] != 0){
                total += prices[key]*props.cart[key]
            }
        })
        return total
    }

    return(
        <div id = "review-background">
            <h3>Review:</h3>
            <div style={{fontWeight: "bold", textDecoration: "underline"}}>Cart:</div>
            {RenderCart()} <br/>
            {<div><span style={{fontWeight: "bold", textDecoration: "underline"}}>Total:</span> ${total()}</div>}
            <br/>
            <div style={{fontWeight: "bold", textDecoration: "underline"}}>Details:</div>
            Email: {props.details[0]} <br/>
            Phone Number: {props.details[1]} <br/>
            Address: {props.details[2]} <br/>
            Card Number: {cardBlur()} <br/>
            Expiration Date: {props.details[4]} <br/>
            <br/>
            <div>
                <button className="button-28" onClick={()=>{props.next(0)}}>Re-do</button>
                <div id = "space"></div>
                <button className="button-28" onClick={HandleClick}>Confirm</button>
            </div>
        </div>
    )
}

export default Review