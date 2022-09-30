import React, {useState} from "react";
import Contact from "./Form/Contact/Contact";
import Address from "./Form/Address/Address";
import Payment from "./Form/Payment/Payment";
import Review from "./Form/Review/Review";
import Confirm from "./Form/Confirm/Confirm";
import './Checkout.css'

const Checkout = () =>{

    const [formStage, changeFormStage] = useState(0)

    const renderForm = () =>{
        switch (formStage){
            case 0:
                return <Contact stage = {formStage} next={changeFormStage}/>
            case 1:
                return <Address stage = {formStage} next = {changeFormStage}/>
            case 2:
                return <Payment stage = {formStage} next = {changeFormStage}/>
            case 3:
                return <Review stage = {formStage} next = {changeFormStage}/>
            case 4:
                return <Confirm/>
        }
    }

    return(
        <div>
            <p id = "test">
                {renderForm()}
            </p>
        </div>
    )
}

export default Checkout