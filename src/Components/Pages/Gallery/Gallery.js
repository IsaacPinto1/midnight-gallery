import React from 'react'
import './Gallery.css'
import Art from '../../Art/Art'

const Gallery = () =>{

    return(
        <div id = "gallerycontainer">
            <div id = "grid">
                <Art id = "img1" image = "Cat.svg" text = "This is a digital image of a blue cat wrapped around the Earth. It shows the south pole under the cat's paw, with Australia in the bottom right of the globe."/>
                <Art id = "img2" image = "dog.jpeg" text = "This image shows the artist's dog, 'Guppy', smiling in his backyard."/>
                <Art id = "img3" image = "flower.jpeg" text = "This image shows a colorful flower, the main subject of the artist's latest misinformation campaign"/>
                <Art id = "img4" image = "food.jpeg" text = "This image shows a strawberry waffle covered in maple syrup. The artist wanted audiences to make note of the deliberate positioning of fruit around the waffle, a 'key aspect' of the image."/>
                <Art id = "img5" image = "FullMoon.png" text = "This image is a clear photo of the moon. According to the artist, this is a 'pisces' full moon, which is a time for 'great healing and release'"/>
                <Art id = "img6" image = "mountain.jpeg" text = "This is a painting of a mountain range, inspired by the artstyle of Bob Ross. Ross on his artistic process: “We don't make mistakes, just happy little accidents.”"/>
                <Art id = "img7" image = "rowing.webp" text = "This is an action shot of one of the crews the artist coached in 2017. The artist fondly remembers this as the session where they 'mastered the catch'."/>
                <Art id = "img8" image = "Sunset.jpeg" text = "This image is a beautiful sunrise over some rocks. The artist described this as a place they go to 'unwind'"/>
            </div>
        </div>
    )
}

export default Gallery