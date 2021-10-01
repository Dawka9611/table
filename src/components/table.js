import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components'
import Buttons from "./buttons";

const Table = ({ information }) => {

    const [selectedRow, setSelectedRow] = useState({})

    const toggleRowSelect = (element) => {
        setSelectedRow(element)
    }

    const tableRef = useRef()

    const handleClick = (e) => {
        !tableRef.current.contains(e.target) && setSelectedRow({})
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    })

    return (
        <>
            <Buttons id={selectedRow.id} />
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
                        {information.map((el, i) => {
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

const TableStyle = styled.div`
    padding: 20px 30px;
    font-size: 13px;
    border-radius: 5px;
    .table{
       width: 100%;
       border-collapse: collapse;
       .tbody{
            .thead{
            background: linear-gradient(to right, #4682B4,#87CEFA,  #4682B4, #87CEFA);
                .columnResizer{
                background-color: blue;
                width: 2px;
                &:hover{
                    cursor: default;
                }
           
             }
         }
       }
    
       th, td{
            border:1px solid rgba(0,0,0,0.2);
            padding: 6px;
       }
       th{
           font-weight: 600;
       }
       .tableRow{
        &:hover, &:focus{
            background-color: rgba(173, 216, 230, 0.4);
            cursor: pointer;       
            }
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