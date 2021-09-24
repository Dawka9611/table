import React from "react";
import styled from "styled-components";

export default function Buttons() {
    const AddData= ()=> {
        return(
            <div>

            </div>
        )
    }
    return(
        <ButtonStyle>
         
                <button className="btn button1" onClick={AddData}>Add</button>
                <button className="btn button2">Edit</button>
                <button className=" btn button3">Харилцагчид</button>
                <button className="btn button4">Delete</button>
        
        </ButtonStyle>
    )

}

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
        :hover{
            background: #4682B4;
            transform: scale(1.02);
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
