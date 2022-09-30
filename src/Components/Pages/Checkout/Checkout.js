import React, {useState} from "react";
import Contact from "./Form/Contact/Contact";
import Address from "./Form/Address/Address";
import Payment from "./Form/Payment/Payment";
import Review from "./Form/Review/Review";
import Confirm from "./Form/Confirm/Confirm";
import './Checkout.css'

const Checkout = (props) =>{

    const [formStage, changeFormStage] = useState(0)
    const [details, changeDetails] = useState(["","","","","",""])

    const renderForm = () =>{
        switch (formStage){
            case 0:
                return <Contact update={changeDetails} stage = {formStage} next={changeFormStage}/>
            case 1:
                return <Address update={changeDetails} stage = {formStage} next = {changeFormStage}/>
            case 2:
                return <Payment update={changeDetails} stage = {formStage} next = {changeFormStage}/>
            case 3:
                return <Review cart = {props.cart} stage = {formStage} next = {changeFormStage}/>
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