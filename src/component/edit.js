import React, { useState  } from "react";
/* import styled from "styled-components"; */
import {FaRegWindowMinimize ,FaExpand ,FaTimes ,FaPlus} from 'react-icons/fa'
import Modal from 'react-modal';
import '../style/style.css'
Modal.setAppElement("#root");
const AddModal = ({isOpenEdit , setIsOpenEdit}) => {
    const [isMax, setIsMax] = useState(false);

    const ToggleMaxSize = () => {
        setIsMax(!isMax);
    }

    return(
        <>
            <Modal isOpen={isOpenEdit} className="modal" onRequestClose={() => {setIsOpenEdit(false)}}>
                 <div className="main">
                 <div className="container" style={ isMax ? { height : "100%" , width : "100%" } : null}>
                    <div className="header">
                        <div>Шинэ мэдэгдэл add</div>
                        <div className="icons">
                            <FaRegWindowMinimize/>
                            <FaExpand onClick={() => {ToggleMaxSize()}}/>
                            <FaTimes onClick={()=>{setIsOpenEdit(false)}}/>
                        </div>
                    </div>
                    
                    <div className="content" >
                        <div className="title">Гарчиг</div>
                        <input className="input" type="text"/>
                        <div className="items">
                            <div className="item"  style={{marginRight : '20px'}}>
                                <div>Хувилбар</div>
                                <select>
                                    <option value="Бүгд">Бүгд</option>
                                    <option value="MacsXE3-Макс аж ахуй нэгж">MacsXE3-Макс аж ахуй нэгж</option>
                                    <option value="MacsF - Эмийн худалдаа">MacsF - Эмийн худалдаа</option>
                                </select>
                                <div>Хэнрүү</div>
                                <select>
                                    <option value="Бүх харилцагч руу">Бүх харилцагч руу</option>
                                    <option value="Сонгосон харилцагч руу">Сонгосон харилцагч руу</option>
                                </select>
                                <div className="time">
                                    <div className="date">
                                        <div>Хэдийг хүртэл</div>
                                        <input placeholder="" type="date"/>
                                    </div>
                                    <div>
                                        <div>Хэдэн удаа</div>
                                        <input type="number"/>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div>Программ</div>
                                <select>
                                    <option value="Бүгд">Бүгд</option>
                                    <option value="Macs санхүү">Macs санхүү</option>
                                    <option value="Посын програм">Посын програм</option>
                                </select>
                                <div>Харилцагчийн регистрийн дугаар</div>
                                <input type="text"/>
                                <div className="selectType">
                                    <div className="typeTitle">Төрөл</div>
                                    <input type="checkbox"/>
                                    <div>PDF файлаар</div>
                                    <input type="checkbox"/>
                                    <div>HTML форматаар</div>
                                </div>
                            </div>
                        </div>
                        <div>Хэрэглэгчийн дэлгэсэнд харуулах PDF файл</div>
                        <div className="display">
                            <input type="text"/>
                            <button><FaPlus/></button>
                        </div>
                        <div className="status">
                            <div className="statusSelect">
                                <input type="checkbox"/>
                                <div>Идэвхтэй</div>
                            </div>
                            <div className="save">
                                <button>Болих</button>
                                <button>Хадгалах</button>
                            </div>
                        </div>
                        <input/>
                    </div>
                </div>
                 </div>
                 </Modal>
        </>
    )

}

export default AddModal;
/* 
const Container = styled.div`
    display : flex; 
    justify-content : center ;
    align-items : center ;
    input {
        outline: none;
        margin-bottom : 20px;
    }
    .container{
        border: solid 2px #5fa2dd ;
        z-index : 1;
        .header{
            padding : 10px;
            background-color : #5fa2dd;
            color: white ; 
            display : flex;
            justify-content : space-between ;
            .icons {
                margin : 0!important;
            }
        }
        .content{
            padding : 30px;
        }
        .input{
            width : 100%;
        }
        select {
            outline : none ;
            height : 30px;
            margin-bottom : 20px;
        }
        
        button {
            padding: 10px;
            padding-left : 20px;
            padding-right : 20px;
            background-color : #5fa2dd;
            color : #fff;
            border : none ;
            outloine :none;
            margin-left : 10px
        }
        .items{
            display : flex ;
            .item{
                flex : 1 ;
                justify-content : space-between ;
                select {
                    width : 100%;
                }
                .time{
                    display : flex ;
                    input{
                        flex : 1;
                        outline : none;
                    }
                }
                .selectType{
                    display : flex ; 
                    background-color : #f6f6f6;
                    padding : 5px ;
                    padding-top : 10px;
                    position : relative;
                    border : solid 1px grey;
                    .typeTitle {
                        position : absolute ;
                        top : -12px ;
                        color :grey;
                        font-size : 14px;
                        background-color : white;
                    }
                }
            }
        }
        .display {
            display: flex ;
            input {
                width:100%;
            }
            button {
                height:30px;
            }
        }
        .status {
            display : flex ;
            justify-content : space-between;
            .statusSelect{
                display : flex;
            }
        }
    }
`;
 */