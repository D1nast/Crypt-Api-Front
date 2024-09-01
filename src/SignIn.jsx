import { React,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function SignIn(){
    const [address,setAddress] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();
    const onClick = async () => {
        const url = `${process.env.REACT_APP_API}/login`;
        const login = await axios.post(url,{address,pass}); 
        await login
        navigate("/", { replace: true });
    };

    return(
        <Box sx={{border:0}} style={{margin:'200px 400px 0px 400px',padding:"40px",display:'flex',
            flexDirection:'column',alignItems:"center",textAlign:"center",border:"solid #5d627b",boxShadow:"0 3px 5px rgba(0, 0, 0, 0.22)"}}>
            <Typography style={{marginBottom:"20px"}}>Sign in</Typography>
            <div>
            <input value={address} placeholder="Mail" onChange={(e) => setAddress(e.target.value)} style={{ width: "400px" }}/>
            </div>
            <div style={{marginTop:'50px'}}>
            <input value={pass} placeholder="Pass" onChange={(e) => setPass(e.target.value)} style={{ width: "400px"}}/>
            </div> 
            <div style={{ marginTop: "20px" }}>
           <button onClick={onClick}>ログイン</button>
           </div>
        </Box>              
    );
}