import axios from "axios";
import React, { useState, useEffect } from "react";
import Buttons from "./components/buttons";
import Table from "./components/table";


function App() {
  
  const [data , setData] = useState([]);
  useEffect(()=>{
      axios.get(`https://infosystems.mn/api/insert-notifications`).then( res =>{
        setData(res.data);
      })
  },[])


  return (
    <div className="App">
        <Buttons/>
 
                <Table information={data}/>
          
     
        
    </div>
  );
}

export default App;