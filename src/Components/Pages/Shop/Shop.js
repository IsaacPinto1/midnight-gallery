import React from 'react'
import './Shop.css'

const Shop = (props) =>{

    return(
        <div id = "arbit">
            {Object.keys(props.cart).map((key)=><li>{key}:{props.cart[key]}</li>)}
        </div>
    )
}

export default Shop