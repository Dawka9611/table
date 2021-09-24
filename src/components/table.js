import React from "react";
import styled from 'styled-components'

const Table = ({data}) => {
 return(
     <TableStyle>
            <table className="table">
                <thead className="thead">
                    <tr className="tableRow" >
                        <td className="tableCol">
                            Тайлбар
                        </td>
                        <td className="tableCol">
                            Макс хувилбар
                        </td>
                        <td className="tableCol">
                            Апп
                        </td>
                        <td className="tableCol">
                            Хэнд
                        </td>
                        <td className="tableCol">
                            Харилцагч
                        </td>
                        <td className="tableCol">
                            Файл
                        </td>
                        <td className="tableCol">
                                Дуусах огноо
                        </td>
                        </tr>
                </thead>
                <tbody className="tbody">
                <tr className="tableRow" >
                        <td className="tableCol">
                            AZaz
                        </td>
                    <td className="tableCol">
                        ZXЧччччччч
                    </td >
                    <td className="tableCol">
                        
                    </td>
                    <td className="tableCol">
                        
                    </td>
                    <td className="tableCol">
                        
                        </td>
                        <td className="tableCol">
                        
                        </td>
                        <td className="tableCol">
                        
                        </td>
                </tr>
                </tbody>
        </table>
      
     </TableStyle>
 )
}
export default Table;

const TableStyle = styled.div`
    border: 1px solid black;
    overflow: hidden;
    .table{
        /* display: flex; */
        border: 1px solid black;
       width: 100%;
       border-collapse: separate;
       table-layout: auto;
       border-spacing: 0;
       overflow: auto;
       display: grid;
       grid-template-columns: repeat(7, 1fr);
       
        .thead{
            background-color: #ffe4b5;
            display: contents;
            .tableRow{
                border: 1px solid black;
                display: contents;
                .tableCol{
                    border: 1px solid black;
                    text-align: center;
                }
            }
        }
        .tbody{
            display: contents;
            .tableRow{
                border: 1px solid black;
                display: contents;
                &:hover{
                    background-color: rgba(173,216,230, 0.8);
                }
                .tableCol{
                    border: 1px solid black;
                    text-overflow: ellipsis;
                }
            }
        }
    }
`