import { React,useEffect,useState } from "react";
import axios from 'axios';
import Typography from '@mui/material/Typography';

export default function SignIn(){
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");

    return(
        <div style={{display:'flex',flexDirection:'column',margin:'200px'}}>
            <Typography>ログイン</Typography>
            <div>
            <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: "500px" }}/>
            </div>
            <div style={{marginTop:'50px'}}>
            <input value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: "500px"}}/>
            </div>             
        </div>
    );
}