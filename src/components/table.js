import React, { useRef, useState ,useEffect } from "react";
import styled from 'styled-components'
import Add from "../component/add";
import Edit from "../component/edit";
import axios from "axios";


const Table = () => {
    const [data, setData] = useState([]);
    const [ showModal, setShowModal] = useState(false)
    const [ showModalEdit, setShowModalEdit] = useState(false)
    // const disabled = [null, undefined].includes(id)
    const [selectedRow, setSelectedRow] = useState({})


    const toggleRowSelect = (element) => {
        setSelectedRow(element)
    }

    const tableRef = useRef()

    // const handleClick = (e) => {
    //     !tableRef.current.contains(e.target) && setSelectedRow({})
    // }

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClick)
    //     return () => document.removeEventListener('mousedown', handleClick)
    // })

    useEffect(() => {
        axios.get(`https://infosystems.mn/api/insert-notifications`).then(res => {
          setData(res.data);
        })
    }, [showModal, showModalEdit])


    console.log('selectedRow :>> ', selectedRow);

    const handleEdit = () =>{
        if(selectedRow.id){
            setShowModalEdit(true)
        }
    }

    return (
        <>
            {/* <Buttons id={selectedRow.id} /> */}

            <ButtonStyle >
                {showModal&&<Add showModal={showModal} setShowModal={setShowModal} />}

                {showModalEdit&&<Edit selectedRow={selectedRow} showModal={showModalEdit} setShowModal={setShowModalEdit} />}

                <button className="btn button1" onClick={()=>setShowModal(true)} >Add</button>
                {selectedRow.id&&<button className="btn button2" onClick={handleEdit}>Edit</button>}
                <button className="btn button3">Customers</button>
                {selectedRow.id&&<button className="btn button4" >Delete</button>}
            </ButtonStyle>

            <TableStyle>
                <table className="table" ref={tableRef}>
                    <tbody className="tbody">
                        <tr className="thead">
                            {TableHeading.map((el, i) => {
                                return (
                                    <th key={i}>
                                        {el.heading}
                                    </th>
                                )
                            })}
                        </tr>
                        {data.map((el, i) => {
                            return (
                                <tr key={i} className="tableRow" onClick={() => toggleRowSelect(el)} style={el.id === selectedRow.id ? { backgroundColor: " rgba(173, 216, 230, 0.4)" } : null}>
                                    <td> {el.description} </td>
                                    <td>{`${el.macsversion === 0 ? "бүгд" : el.macsversion === 1 ? "MacsXE3 - Макс аж ахуй нэгж" : "MacsF - Эмийн худалдаа"}`}</td >
                                    <td>{`${el.apptype === 0 ? "бүгд" : el.apptype === 1 ? "Macs санхүү" : "Посын програм"}`}</td>
                                    <td>{`${el.to_customer === 0 ? "Бүх харилцагч руу" : "Сонгосон харилцагч руу"}`}</td>
                                    <td>{el.customer_id}</td>
                                    <td>{el.filetype === 1 ? el.pdf_file : "rich text"}</td>
                                    <td>{el.expire_date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </TableStyle>
        </>
    )
}

export default Table;

const ButtonStyle = styled.div`
    display: 'flex';
    padding: 20px 40px 0 40px;
    .btn{  
        padding: 9px 20px;
        min-width: 120px;
        border: 1px solid #2980B9 ;
        border-radius: 3px;
        background-color: #5B96C9;
        font-weight: 600;
        font-size: 13px;
        color: white;
        &:hover, &:active{
            background: #2471A3;
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


const TableStyle = styled.div`
    padding: 20px 40px;
    font-size: 14px;
    border-radius: 5px;
    .table{
       width: 100%;
       border-collapse: collapse;
       .tbody{
            .thead{
            background: #5B96C9;
            color: white;
            th{
                padding: 6px;
            }
                &:hover{
                    cursor: default;
                }
           
             }
         }
       }
    
       th, td{
            border:1px solid rgba(0,0,0,0.1);
            padding: 3px;
       }
       th{
           font-weight: 600;
       }
       .tableRow{
        &:hover, &:focus{
            background-color: rgba(173, 216, 230, 0.4);
            cursor: pointer;       
            }
           &:nth-child(odd) {
            background-color: #F8F9F9 ;
            border: none;
            }
        }
`
const TableHeading = [
    { heading: "Тайлбар" },
    { heading: "Макс хувилбар" },
    { heading: "Апп" },
    { heading: "Хэнд" },
    { heading: "Харилцагч" },
    { heading: "Файл" },
    { heading: "Дуусах огноо" }
]