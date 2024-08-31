import { React,useEffect,useState } from "react";
import axios from 'axios';

import Typography from '@mui/material/Typography';

export default function NewsAPI(){
    const [news,setNews]=useState([]);

    useEffect(()=>{
        const fetchNews = async ()=>{
            const url = `${process.env.REACT_APP_API}/news`;
            const request = await axios.get(url);
            const response = await request.data.articles
            setNews(response);
        };
        fetchNews(); 
    },[]);
    return(
        <>
        <div style={{margin:'100px' ,textAlign:'center'}}>
            <Typography variant="h4" color="text.secondary" margin="15px">News Topics</Typography>

        </div>
        {news.map((res,key) => {
            console.log(key);
            return(
                <div key={key}style={{margin:'100px',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    <div style={{flex:8,maxWidth:'80%'}}>
                        <h2>{res.author}</h2> 
                        <h2>{res.content}</h2>
                        <h2>{res.description}</h2>
                        <a href={res.url}>URL</a> 
                    </div>
                    <div style={{flex:2,maxWidth:'20%'}}>
                        <h2>{res.author}</h2> 
                    </div>
                </div>
            );
        })}
        </>
    )
}