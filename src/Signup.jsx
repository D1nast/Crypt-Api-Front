import { React,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import {Link}  from '@mui/material';
// import Button from '@mui/material/Button';


export default function SignUp(){
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    const navigate = useNavigate();
    
    const onClick = async () => {
        const url = `${process.env.REACT_APP_API}/create`;
        try{
            const reqBody = { user: { email, password: pass, password_confirmation: pass } };
            const signup = await axios.post(url,reqBody);
            await signup
            console.log(reqBody);
            //右の形でパラメータが送られる　user:{email,password, password_confirmation}
            alert("ユーザー登録ありがとうございます！")
        }catch{
            alert("以下3つのいずれか当てはまるため、登録できません\n\n・既に登録済\n・無効なアドレス\n・パスワードが6文字以下")
        }
    };
    //メール配信の登録と解除
    const onClickDeliver = async () => {
        const url = `${process.env.REACT_APP_API}/change`;
        try{
            const reqBody = { user: { email, password: pass, password_confirmation: pass } };
            const signup = await axios.post(url,reqBody);
            await signup
            alert(signup.data)
        }catch{
            alert("ユーザー登録がされていないか、メールアドレスもしくはパスワードが誤っています")
        }
    };
    //ユーザー登録削除
    const onClickDelete = async () => {
        const url = `${process.env.REACT_APP_API}/delete`;
        try{
            const reqBody = { user: { email, password: pass, password_confirmation: pass } };
            const deleteUser = await axios.post(url,reqBody);
            await deleteUser;
            alert("ユーザーの削除が完了しました")
        }catch{
            alert("ユーザー登録がされていないか、メールアドレスもしくはパスワードが誤っています")
        }
    };

    return(
        <Box sx={{border:0}} style={{marginTop:'200px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div style={{display:'flex',justifyContent:'center',paddingTop:'20px',paddingBottom:'20px'}}>
                <div style={{width:"500px",display:"flex",flexDirection:"column",alignItems:"center",
                    paddingTop:"20px",paddingBottom:"20px",border:"solid #5d627b",boxShadow:"0 3px 5px rgba(0, 0, 0, 0.22)"}}>
                    <Typography style={{marginBottom:"20px"}}>ユーザー登録とメール配信</Typography>
                <div>
                    <input value={email} placeholder="Mail" onChange={(e) => setEmail(e.target.value)} style={{ width: "400px" }}/>
                </div>
                <div style={{marginTop:'50px'}}>
                    <input value={pass} placeholder="Pass(６文字以上)" onChange={(e) => setPass(e.target.value)} style={{ width: "400px"}}/>
                </div> 
                <div style={{ marginTop: "20px" }}>
                    <button onClick={onClick}>ユーザー登録</button>
                    <button onClick={onClickDeliver}>配信解除・再開</button>
                    <button onClick={onClickDelete}>ユーザー削除</button>
                </div>
                </div>
            </div>     
        </Box>         
    );
}


