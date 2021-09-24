import React, { useEffect, useState  } from "react";
/* import styled from "styled-components"; */
import {FaRegWindowMinimize ,FaExpand ,FaTimes ,FaPlus} from 'react-icons/fa'
import Modal from 'react-modal';
import axios from 'axios';
import '../style/style.css'
import styled, { keyframes } from "styled-components";
Modal.setAppElement("#root");

const GetDataURL = 'https://infosystems.mn/api/insert-notification'
const AddModal = ({isOpenAdd , setIsOpenAdd}) => {
    const [ cName, setCName ] = useState('');

    const [isMax, setIsMax] = useState(false);
    const [ allValues , setAllValues ] = useState({
        description : '',
        customer_id : '',
        macsversion : '', 
        apptype : '' ,
        to_customer :'',
        expire_date : '',
        acount :'',
        is_active : '',
        filetype : '' ,
    })

    const ToggleMaxSize = () => {
        setIsMax(!isMax);
    }

    const changeHandler = e => {
        setAllValues({...allValues, macsversion: parseInt(allValues.macsversion), [e.target.name]: e.target.value})


     }
    
     const Submit = (e) => {
         e.preventDefault();
         console.log(allValues);
        let inp = document.querySelectorAll('.getInp'); 
        let arr = Array.from(inp);
        let final = {}

        arr.forEach(elem=>{
            if(elem.name==="macsversion"){
                final[elem.name] = parseInt(elem.value);
            }else{
                final[elem.name] = elem.value;
            }
        })
        
        console.log('final :>> ', final);
     }

    /* const Request = async () => {
        const Data = await axios.put('https://infosystems.mn/api/insert-notifications' ,  )
    } */

    const HandleClose = () =>{
        setCName('container2');
        setTimeout(() => {
            setIsOpenAdd(false);
        }, 600);
    }

    return(
        <>
        {/* <Modal isOpen={isOpenAdd} className="modal" onRequestClose={() => {setIsOpenAdd(false)}}> */}
            <Container className="main">
                <div className={`container ${cName}`} style={ isMax ? { height : "100%" , width : "100%" } : null}>
                    <div className="header">
                        <div>Шинэ мэдэгдэл add</div>
                        <div className="icons">
                            <FaRegWindowMinimize/>
                            <FaExpand onClick={() => {ToggleMaxSize()}}/>
                            <FaTimes onClick={HandleClose}/>
                        </div>
                    </div>
                    <form onSubmit={Submit}>
                        <div className="content" >
                            <div className="title">Гарчиг</div>
                            <input required className="input getInp" type="text" name="description" onChange={changeHandler}/>
                            <div className="items">
                                <div className="item"  style={{marginRight : '20px'}}>
                                    <div>Хувилбар</div>
                                    <select required className="getInp" name='macsversion' onChange={changeHandler}>
                                        <option value={0}>Бүгд</option>
                                        <option value={1}>MacsXE3-Макс аж ахуй нэгж</option>
                                        <option value={2}>MacsF - Эмийн худалдаа</option>
                                    </select>
                                    <div>Хэнрүү</div>
                                    <select name="to_customer" onChange={changeHandler}>
                                        <option value={0}>Бүх харилцагч руу</option>
                                        <option value={1}>Сонгосон харилцагч руу</option>
                                    </select>
                                    <div className="time">
                                        <div className="date">
                                            <div>Хэдийг хүртэл</div>
                                            <input name='expire_date' onChange={changeHandler} placeholder="" type="date"/>
                                        </div>
                                        <div>
                                            <div>Хэдэн удаа</div>
                                            <input name="acount" onChange={changeHandler} type="number"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>Программ</div>
                                    <select name='apptype' onChange={changeHandler}>
                                        <option value={0}>Бүгд</option>
                                        <option value={1}>Macs санхүү</option>
                                        <option value={2}>Посын програм</option>
                                    </select>
                                    <div>Харилцагчийн регистрийн дугаар</div>
                                    <input type="text" name="customer_id" onChange={changeHandler}/>
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
                                    <input name='is_active' onChange={changeHandler} type="checkbox" className="active" value={0}/>
                                    <div>Идэвхтэй</div>
                                </div>
                                <div className="save">
                                    <button>Болих</button>
                                    <button type="submit">Хадгалах</button>
                                </div>
                            </div>
                            <input/>
                        </div>
                    </form>
                    
                </div>
            </Container>
        {/* </Modal> */}
        </>
    )

}

export default AddModal;

const animate = keyframes`
    0%{ transform:translateY(100px); opacity:0; }
    100%{ transform:translateY(0px); opacity:1; }
`
const animate2 = keyframes`
    0%{ transform:translateY(0px); opacity:1; }
    100%{ transform:translateY(100px); opacity:0; }
`

const Container = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    z-index:1000;
    .container{
        background:#fff;
        animation: ${animate} 0.7s ease;
    }
    .container2{
        animation: ${animate2} 0.7s ease;
    }
`

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