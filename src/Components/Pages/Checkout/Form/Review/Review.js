import React from "react";
import './Review.css'

const Review = (props) =>{

    return(
        <div>
            Review:
            <br/>
            <button onClick={() => props.next(props.stage+1)}>Confirm</button>
        </div>
    )
}

export default Review