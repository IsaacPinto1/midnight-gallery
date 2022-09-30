import React from "react";
import './Review.css'

const Review = (props) =>{

    const RenderCart = () =>{
        return(Object.keys(props.cart).filter(key=>props.cart[key]!=0)).map(key=><li>{key}:{props.cart[key]}</li>)
    }

    return(
        <div>
            Review:
            <br/>
            {RenderCart()}
            <button onClick={() => props.next(props.stage+1)}>Confirm</button>
        </div>
    )
}

export default Review