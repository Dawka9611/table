import React, { useState } from "react";
import styled from "styled-components";
import Add from "../component/add";

<<<<<<< HEAD
export default function Buttons() {
    const [ showModal, setShowModal] = useState(false)
    
    return(
        <ButtonStyle>
                {showModal&&<Add showModal={showModal} setShowModal={setShowModal} />}
                <button className="btn button1" onClick={()=>{setShowModal(prev=>!prev)}}>225252</button>
                <button className="btn button2">Edit</button>
                <button className=" btn button3">Харилцагчид</button>
                <button className="btn button4">Delete</button>
=======
const Buttons = ({ id }) => {
    const disabled = [null, undefined].includes(id)

    return (
        <ButtonStyle>
            <button className="btn button1" >Add</button>
            <button className="btn button2" style={disabled ? { backgroundColor: " rgba(173, 216, 230, 0.4)",transform: "none", cursor: "not-allowed"} : null}>Edit</button>
            <button className="btn button3">Харилцагчид</button>
            <button className="btn button4" style={disabled ? { backgroundColor: " rgba(173, 216, 230, 0.4)",transform: "none", cursor: "not-allowed"} : null}>Delete</button>
>>>>>>> 599be82a0f0cd90acc435386ebe8f6b329da0f71
        </ButtonStyle>
    )
}

export default Buttons
const ButtonStyle = styled.div`
    display: flex;
    padding: 20px 30px 0 30px;
    .btn{  
        padding: 5px 10px;
        width: 100px;
        border: none;
        border-radius: 3px;
        font-weight: bolder;
        background: #87CEFA;
        margin-bottom: 30px;
        &:hover, &:active{
            background: #4682B4;
            transform: scale(1.02);
            transform: none;
            cursor: pointer;
        }
    }
    .button2{
        margin-left: 5%;
    }
    .button3{
        width: 120px;
        margin-left: 5%;
        
    }
    .button4{
        margin-left:60%;
    }
    
`
