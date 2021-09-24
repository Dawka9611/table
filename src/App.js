import React, { useEffect, useState } from "react";
import Add from './component/add'
import Edit from './component/edit'
import axios from 'axios';

function App() {
  const [isData , setIsData] = useState([])
  const [ isOpenAdd, setIsOpenAdd] = useState(false)
  const [ isOpenEdit , setIsOpenEdit] = useState(false)

  const Data = () => {
    const Response = async () => {
      const res = await axios.get('https://infosystems.mn/api/insert-notifications')
      setIsData(res.data)
    }
    Response()
    
  }

  useEffect(() => {
    Data()
  } , [])
  console.log(isData);
  return (
    <div className="App">
      <button onClick={()=>{setIsOpenAdd(!isOpenAdd)}}>Add Btn</button>
      <button onClick={()=>{setIsOpenEdit(!isOpenEdit)}}>Edit Btn</button>
      {isOpenAdd ? <Add setIsOpenAdd={setIsOpenAdd}/> : null}
      {isOpenEdit ? <Edit isOpenEdit={isOpenEdit} setIsOpenEdit={setIsOpenEdit}/> : null}
    </div>
  );
}

export default App;