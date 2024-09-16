import { React,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link}  from '@mui/material';
import Button from '@mui/material/Button';

export default function SignIn(){
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();
    const onClick = async () => {
        const url = `${process.env.REACT_APP_API}/login`;
        // auth_tokenでログイン、
        // const url = `${process.env.REACT_APP_API}/api/v1/auth_token`;
        try{
            const login = await axios.post(url,{email:email,password:pass,password_confirmation:pass}); 
            // const login = await axios.post(url,{auth:{email:email,password:pass}},{withCredentials:true}); 
            await login;
            console.log(login.data);
            navigate("/", { replace: true });
        }catch(error){  
            alert("ログイン失敗。バックエンド側の処理に問題があるかも")
        }
    };

    return(
        <Box sx={{border:0}} style={{margin:'200px 400px 100px 400px',padding:"40px",display:'flex',
            flexDirection:'column',alignItems:"center",textAlign:"center",border:"solid #5d627b",boxShadow:"0 3px 5px rgba(0, 0, 0, 0.22)"}}>
            <Typography style={{marginBottom:"20px"}}>Sign in</Typography>
            <div>
            <input value={email} placeholder="Mail" onChange={(e) => setEmail(e.target.value)} style={  { width: "400px" }}/>
            </div>
            <div style={{marginTop:'50px'}}>
            <input value={pass} placeholder="Pass(6文字以上)" onChange={(e) => setPass(e.target.value)} style={{ width: "400px"}}/>
            </div> 
            <div style={{ marginTop: "20px" }}>
           <button onClick={onClick}>ログイン</button>
           </div>
           <Button component={Link} href={'/signup'} sx={{ color: '#22292C' }}>
                Sign up
            </Button>
        </Box>              
    );
}