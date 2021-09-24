import React from "react";
import styled from 'styled-components'

const Table = ({  information }) =>{
console.log("tttttttttt", information)

 return(
     <TableStyle>
            <table className="table">
                 <tbody className="tbody">

                <tr className="thead">
                    {TableHeading.map((el, i)=>{
                        return(
                            <th key={i}>
                                {el.heading}
                            </th>
                        )
                    })}
                </tr>
                {information.map((el, i) =>{
                     return(
                        <tr key={i} className="tableRow" >
                            <td> {el.description} </td>
                            <td>{`${el.macsversion===0 ? "бүгд" : el.macsversion===1 ? "MacsXE3 - Макс аж ахуй нэгж" : "MacsF - Эмийн худалдаа"}`}</td >
                            <td>{el.apptype===0 ?"бүгд" : el.apptype===1 ? "Macs санхүү" : "Посын програм"}</td>
                            <td>{el.to_customer === 0 ? "Бүх харилцагч руу" : "Сонгосон харилцагч руу"}</td>
                            <td>{el.customer_id}</td>
                            <td>{el.pdf_file}</td>
                            <td> {el.expire_date}</td>
                        </tr>
                    )
                })}

                </tbody>
        </table>
      
     </TableStyle>
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
       
       .thead{
        background: linear-gradient(to right, #4682B4,#87CEFA,  #4682B4, #87CEFA);
       }
       th, td{
            border:1px solid rgba(0,0,0,0.2);
            padding: 6px;
       }
       th{
           font-weight: 600;
       }
       tr{
        &:hover{
            background-color: rgba(173, 216, 230, 0.4);
            }
        }
    }
`
const TableHeading = [
    {heading:  "Тайлбар"},
    {heading:  "Макс хувилбар"},
    {heading:  "Апп"},
    {heading:  "Хэнд"},
    {heading:  "Харилцагч"},
    {heading:  "Файл"},
    {heading:  "Дуусах огноо"}
]