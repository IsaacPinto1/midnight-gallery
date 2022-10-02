import React, {useState} from 'react'
import './Artists.css'
import Profile from '../../Profile/Profile'
import Popup from '../../Popup/Popup'

const Artists = () =>{


    const [popup, changePopup] = useState("none")

    const renderPopup = () =>{
        switch(popup){
            case "none":
                return;
                break;
            case "Cat.svg":
                return <Popup function = {changePopup} id = "Cat.svg" artist = "1.jpeg" name = "Lowri Washington" desc = "Lowri Washington is a 20-year-old medical student whose life is dominated by solving the murder of her friend, Killian Ford. Killian was poisoned in 2017 and the killer was never brought to justice. She does not let this affect her art."/>
            case "dog.jpeg":
                return <Popup function = {changePopup} id = "dog.jpeg" artist = "2.jpeg" name = "Martin Guest" desc = "Martin Guest is a 34-year-old personal trainer who enjoys upcycling, attending gallaries and photography. He is stable and caring, but can also be very rude and a bit untidy, much like his dog, Guppy."/>
            case "flower.jpeg":
                return <Popup function = {changePopup} id = "flower.jpeg" artist = "3.jpeg" name = "Molly Morgan" desc = "Molly Morgan is a 28-year-old professional sports person who enjoys spreading fake news on Facebook, cookery and binge-watching boxed sets. Her most recent Facebook post is titled 'How the government uses insect drones to spy on you (hint: colorful flowers!)'"/>
            case "food.jpeg":
                return <Popup function = {changePopup} id = "food.jpeg" artist = "4.jpeg" name = "Ria Taylor" desc = "Ria Taylor is a 27-year-old professional 'food influencer' who enjoys relaxing, jigsaw puzzles and upcycling. Ria has commented that her happiness is directly proportional to the amount of likes she receives per post. With this in mind, we hope you enjoy her art."/>
            case "FullMoon.png":
                return <Popup function = {changePopup} id = "FullMoon.png" artist = "5.jpeg" name = "Irene Reynolds" desc = "Irene Reynolds is a 21-year-old 'astrologist' who enjoys palm reading, praying and tarot cards. Irene has said that her interest in superstitious practices started 'ironically' but after quote 'too many coincidences', these superstitions heavily influence her life and art."/>
            case "mountain.jpeg":
                return <Popup function = {changePopup} id = "mountain.jpeg" artist = "6.jpeg" name = "Russel Patel" desc = "Although the cause of death was reported as heart disease, Russel Patel, a 34-year-old government politician, is convinced that his ex-boyfriend, Galen Dudley, was murdered. Russel takes great inspiration from the late Bob Ross."/>
            case "rowing.webp":
                return <Popup function = {changePopup} id = "rowing.webp" artist = "7.jpeg" name = "James Hill" desc = "James hill is a 54-year-old rowing coach. James got involved with rowing due to him confusing kayaking with rowing. James, however, never had the courage to admit to his mistake, so devoted his life to rowing."/>
            case "Sunset.jpeg":
                return <Popup function = {changePopup} id = "Sunset.jpeg" artist = "8.jpeg" name = "Hazel Owen" desc = "Hazel 'hazy' Owen is a 26-year-old local activist who enjoys attending gallaries, listening to music and watching YouTube videos. She claims to have mastered rock skipping. She says it's because she spends so much time at the beach, but many think it might be the other way around"/>   
        }
    }

    return(
        <div>
            <div id = "artists-background"></div>
            {renderPopup()}
            <div id = "artistgrid">
                <div className='row' id = "row1">
                    <Profile function = {changePopup} name = "Cat.svg" artist = "Lowri Washington"/>
                    <Profile function = {changePopup} name = "dog.jpeg" artist = "Martin Guest"/>
                    <Profile function = {changePopup} name = "flower.jpeg" artist = "Molly Morgan"/>
                    <Profile function = {changePopup} name = "food.jpeg" artist = "Ria Taylor"/>
                </div>
                <div className='row' id = "row2">
                    <Profile function = {changePopup} name = "FullMoon.png" artist = "Irene Reynolds"/>
                    <Profile function = {changePopup} name = "mountain.jpeg" artist = "Russel Patel"/>
                    <Profile function = {changePopup} name = "rowing.webp" artist = "James Hill"/>
                    <Profile function = {changePopup} name = "Sunset.jpeg" artist = "Hazel Owen"/>
                </div>
            </div>
        </div>
    )
}

export default Artists