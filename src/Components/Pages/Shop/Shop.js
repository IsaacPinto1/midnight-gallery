import React,{useState, useEffect} from 'react'
import './Shop.css'

const Shop = (props) =>{

    const [render, changeRender] = useState("Empty")

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

    const RenderCart = () =>{
        const render = Object.keys(props.cart).filter(key=>props.cart[key]!=0).map(key=><li>{key}:{props.cart[key]}</li>)
        if(render.length == 0){
            return(changeRender("Empty Cart!"))
        } else{
            return(changeRender(render))
        }
    }

    useEffect(()=>{RenderCart()},[props.cart])

    return(
        <div id = "arbit">
            {render}
            <br/>
            {render == "Empty Cart!" && <button onClick={()=>props.page("gallery")}>Go To Gallery</button>}
            {render != "Empty Cart!" && <button onClick = {HandleClick}>Clear Cart</button>}
            <br/>
            {render != "Empty Cart!" && <button onClick={()=>props.page("checkout")}>Checkout</button>}
        </div>
    )
}

export default Shop