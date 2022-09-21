import React from 'react'
import './Gallery.css'
import Art from '../../Art/Art'

const Gallery = () =>{

    return(
        <div id = "gallerycontainer">
            <div id = "grid">
                <Art id = "img1" image = "Cat.svg" text = "This is an image of a blue cat wrapped around the Earth. It shows the south pole under the cat's paw, with Australia in the bottom right of the globe."/>
                <Art id = "img2" image = "dog.jpeg"/>
                <Art id = "img3" image = "flower.jpeg"/>
                <Art id = "img4" image = "food.jpeg"/>
                <Art id = "img5" image = "FullMoon.png"/>
                <Art id = "img6" image = "mountain.jpeg"/>
                <Art id = "img7" image = "rowing.webp"/>
                <Art id = "img8" image = "Sunset.jpeg"/>
            </div>
        </div>
    )
}

export default Gallery