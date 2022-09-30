import React from 'react'
import './Shop.css'

const Shop = (props) =>{

    const HandleClick = () =>{
        props.changeCart(
            {"'Purth'":0,
        "'Guppy'":0,
        "'Property of US Govt.'":0,
        "'#WaffleFriday'":0,
        "'Full Pisces'":0,
        "'Serene Lake'":0,
        "'Vikings'":0,
        "'Goodbye from Sun'":0} )
    }

    return(
        <div id = "arbit">
            {Object.keys(props.cart).map((key)=><li>{key}:{props.cart[key]}</li>)}
            <button onClick = {HandleClick}>Clear Cart</button>
        </div>
    )
}

export default Shop