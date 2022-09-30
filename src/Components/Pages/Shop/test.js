const RenderCart = (object) =>{
    return(Object.keys(object).filter(key=>object[key]!=0)).map(key=>[key,object[key]])
}

const object = {
    1:0,
    2:0,
    3:0
}

console.log(RenderCart(object))