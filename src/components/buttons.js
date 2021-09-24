import React from "react";
import styled from "styled-components";

export default function Buttons() {
    return(
        <ButtonStyle>
         
                <button className="btn button1">Add</button>
                <button className="btn button2">Edit</button>
                <button className=" btn button3">Харилцагчид</button>
                <button className="btn button4">Delete</button>
        
        </ButtonStyle>
    )

}

const ButtonStyle = styled.div`
display: flex;
margin: 20px 30px;
    .btn{
        background-color:#ffdead	;
        padding: 5px 10px;
        width: 100px;
        border: none;
        border-radius: 4px;
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
