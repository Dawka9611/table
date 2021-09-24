import React, { useState } from "react";
import Buttons from "./components/buttons";
import Table from "./components/table";


function App() {
  const [data , setData] = useState([
      
  ]);

  return (
    <div className="App">
        <Buttons/>
        <Table data={data}/>
    </div>
  );
}

export default App;



