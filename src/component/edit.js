import React, { useState  } from "react";
import {FaRegWindowMinimize ,FaExpand ,FaTimes ,FaPlus} from 'react-icons/fa'
import axios from 'axios';
import styled, { keyframes } from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const GetDataURL = 'https://infosystems.mn/api/insert-notifications'
const AddModal = ({showModal, setShowModal}) => {
    const [ cName, setCName ] = useState('');
    const [ text, setText] = useState('')
    const [ fileName , setFileName ] = useState('')
    const [ file , setFile ] = useState(false)
    const [ isActive , setIsActive ] = useState(false)
    const [isMaxSize, setIsMaxSize] = useState(false);
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
        file_url  :'',
        news_text:  '',
    })
    
    const ToggleMaxSize = () => {
        setIsMaxSize(!isMaxSize);
    }

    const changeHandler = e => {
        setAllValues({...allValues , [e.target.name]: e.target.value})
     }
/*      const uploadHandle = (e) =>{
        let data =  new FormData();
        data.append( "files", e.target.files[0])

        axios.post('https://infosystems.mn/api/upload' , data, { headers:{ Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjMyNzM5MDI1LCJleHAiOjE2MzUzMzEwMjV9.vLNcPqMXq1vCWTuLodWZa_s9zV2DHWWJtF5aP0gJtj4` } }).then((response) =>{
                setFileName (response.data[0])
                setAllValues(prev => ({ ...prev , file_url : response.data[0].url }))
                setFile(false)
            }).catch((error) => {
                console.log(error);
            })
    } */
    
     const Submit = (e) => {
        e.preventDefault()

        let inp = document.querySelectorAll('.setValue');
        let arr = Array.from(inp);
        let final = {}
         arr.forEach(elem=>{
            if(elem.name === "macsversion" || elem.name === "to_customer" || elem.name === "acount" || elem.name === "apptype" ||  elem.name === "is_active" || elem.name === "filetype" )  {
                final[elem.name] = parseInt(elem.value)
            }else if( elem.name === 'is_active' && isActive === false ) {
                final[elem.name] = 0
            } else if (elem.name === 'is_active' && isActive === true) {
                final[elem.name] = 1
            }
            else {
                final[elem.name] = elem.value
            }
        })
        setAllValues({ ...allValues , ...final , file_url : fileName.url})

/*          axios.post(`${GetDataURL}` , allValues).then((resp) => {
             setShowModal(false)
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        })  */
     }

    const HandleClose = () =>{
        setCName('container2');
        setTimeout(() => {
            setShowModal(false);
        }, 600);
    } 

    console.log(allValues)

    const HandleAddFile = (e) =>{
        e.preventDefault()
        setFile(true)
    }
    return(
        <>
            <Container>
                <div className={`container ${cName}`} style={ isMaxSize ? { height : "100%" , width : "100%" } : null}>
                    <div className="header">
                        <div className="inputTitle">Шинэ мэдэгдэл add</div>
                        <div className="icons">
                            <FaRegWindowMinimize/>
                            <FaExpand onClick={() => {ToggleMaxSize()}}/>
                            <FaTimes onClick={HandleClose}/>
                        </div>
                    </div>
                    <form onSubmit={Submit}>
                        <div className="content" >
                            <div className="inputTitle">Гарчиг</div>
                            <input required className="input setValue" type="text" name="description" onChange={changeHandler}/>
                            <div className="items">
                                <div className="item"  style={{marginRight : '20px'}}>
                                    <div className="inputTitle">Хувилбар</div>
                                    <select  className="setValue" name='macsversion' onChange={changeHandler}>
                                        <option selected disabled defaultValue="">Сонгоно уу</option>
                                        <option value={0}>Бүгд</option>
                                        <option value={1}>MacsXE3-Макс аж ахуй нэгж</option>
                                        <option value={2}>MacsF - Эмийн худалдаа</option>
                                    </select>
                                    <div className="inputTitle">Хэнрүү</div>
                                    <select name="to_customer" className="setValue" defaultValue={-1} onChange={changeHandler}>
                                        <option disabled selected value={-1}>Сонгоно уу</option>
                                        <option value={0}>Бүх харилцагч руу</option>
                                        <option value={1}>Сонгосон харилцагч руу</option>
                                    </select>
                                    <div className="time">
                                        <div className="date">
                                            <div className="inputTitle">Хэдийг хүртэл</div>
                                            <input name='expire_date' className="setValue" onChange={changeHandler} type="date"/>
                                        </div>
                                        <div>
                                            <div className="inputTitle">Хэдэн удаа</div>
                                            <input name="acount"className="setValue" onChange={changeHandler} type="number"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="inputTitle">Программ</div>
                                    <select name='apptype' className="setValue" defaultValue={-1} onChange={changeHandler}>
                                        <option disabled selected value={-1}>Сонгоно уу</option>
                                        <option value={0}>Бүгд</option>
                                        <option value={1}>Macs санхүү</option>
                                        <option value={2}>Посын програм</option>
                                    </select>
                                    <div className="inputTitle">Харилцагчийн регистрийн дугаар</div>
                                    <input type="text" disabled={allValues.to_customer === '1' ? false : true } required  className="setValue" name="customer_id" onChange={changeHandler}/>
                                    <div className="selectType">
                                        <div className="typeTitle">Төрөл</div>
                                        <input
                                        required
                                        type="radio" 
                                        name="filetype" 
                                        className="setValue fileType"
                                        onChange={changeHandler}
                                        value={1}/>
                                        <div>PDF файлаар</div>
                                        <input
                                        required
                                        type="radio" 
                                        className="setValue fileType" 
                                        name="filetype"
                                        onChange={changeHandler}
                                        value={2}/>
                                        <div className="inputTitle">HTML форматаар</div>
                                    </div>
                                </div>
                            </div>
                            <div className="statusSelect">
                                    <input  name='is_active' onChange={changeHandler} type="checkbox" className="active setValue" value={isActive ? 0 : 1} />
                                    <div className="inputTitle">Идэвхтэй</div>
                            </div>
                            <div className="inputTitle">Хэрэглэгчийн дэлгэцэнд харуулах PDF файл</div>
                            <div className="display" >
                                <input type="text" disabled={allValues.filetype === '2' ? true : false} className="setValue" name="name" value={fileName.name}/>
                                <button disabled={allValues.filetype === '2' ? true : false} className="ownButton" onClick={HandleAddFile}><FaPlus/></button>
                                <div className="fileContainer" style={file ? {display : 'flex' } : {display : 'none'}}>
                                    <div className="uploadFile">
                                        <div className="upHeader">Upload</div>
                                        <div className="fileUp">
                                            <input value="" /* onChange={uploadHandle} */ type="file" name="file_url" className="setValue" id="id" /* accept=".pdf" */ />
                                            <label className="file" htmlFor="id">
                                                Choose File
                                            </label>
                                            <div className="upButtonCon">
                                                <button className="uploadButton" onClick={() => {setFile(false)}}>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="status">
                                <div className="save">
                                    <button type="submit" className="ownButton">Хадгалах</button>
                                    <button onClick={()=>{setShowModal(false)}} className="ownButton">Болих</button>
                                </div>
                            </div>
                            <CKEditor
                            editor={ClassicEditor}
                            data={text}
                            disabled={allValues.filetype === '1' ? true : false}
                            name="news_text" className="setValue"
                            onChange={(event , editor) => {
                                const data =editor.getData()
                                setText(data)
                                setAllValues( state => ({ ...state , news_text : text}))
                            }}
                            />
                        </div>
                    </form>
                </div>
            </Container>
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
    z-index:1;
    display : flex ;
    justify-content : center;
    align-items : center;
    .inputTitle {
        margin-bottom: 10px;
    }
    .container{
        margin : 0 auto;
        background:#fff;
        animation: ${animate} 0.7s ease;
    }
    .container2{
        animation: ${animate2} 0.7s ease;
    }
    input {
        outline: none;
        margin-bottom : 20px;
    }
    input[type="file"] {
        display: none;
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
                margin : 0 ;
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
        .ownButton{
            padding: 10px;
            padding-left : 20px;
            padding-right : 20px;
            background-color : #5fa2dd;
            color : #fff;
            border : none ;
            outline :none;
            margin-left : 10px
        }
        .statusSelect{
                display : flex ;
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
                height: 30px ;
            }
            .fileContainer {
                position: fixed;
                width:100%;
                height: 100%;
                top:0 ;
                left : 0 ;
                border: solid 1px black;
                z-index: 5;
                background-color:rgba(0,0,0,0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                .uploadFile {
                    width: 300px;
                    height: 150px;
                    background-color: #fff;
                    .upHeader {
                            width: 100%;
                            height: 35px;
                            background-color: #5fa2dd;
                            text-align: center;
                            color: #fff;
                            padding-top: 5px;
                        }
                    .fileUp {
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            height: 70%;
                            .file {
                                width: 100px;
                                height: 30px;
                                padding-top : 5px;
                                padding-left: 10px;
                                outline: none;
                                border: none;
                                color: #fff;
                                background-color: #5fa2dd;
                                margin: 5px;
                            }
                        }
                    .upButtonCon{
                        display: flex;
                        justify-content: space-between;
                        .uploadButton {
                        width: 80px;
                        height: 30px;
                        background-color: #5fa2dd;
                        outline: none;
                        border: none;
                        padding: 5px;
                        color: #fff;
                    }
                    }
                    
                }
            }
            
        }
        .status {
            display : flex ;
            flex: 1;
            .save {
                display: flex;
                flex:  1;
                flex-direction: row-reverse;
                margin-bottom: 20px;
            }            
        }
}
`