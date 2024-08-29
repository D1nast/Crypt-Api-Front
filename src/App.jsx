import logo from './logo.svg';
import './App.css';
// CSS setup
import {React,useState,useEffect} from 'react';
import axios from 'axios';
//React setup

export const App=()=> {
  const [localData,setData]=useState({});

  useEffect(() => {
    const fetchAPI =async()=>{
      const requests = axios.get("http://localhost:3001");
      const response = await requests;
      setData(response.data.data[0]);
    }
    fetchAPI();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{localData.symbol}</h1>
      </header>
    </div>
  );
}

export default App;