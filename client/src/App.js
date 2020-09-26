import React from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [message, updatemessage]= useState=(null)
  useEffect(()=>{
axios.get('/example').then(response => console.log(respose));

  },[])
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
