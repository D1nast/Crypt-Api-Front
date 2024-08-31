
import { React,useEffect,useState } from "react";
import axios from 'axios';

export default function NewsAPI(){
    const [news,setNews]=useState([]);
    useEffect(()=>{
        const fetchNews = async ()=>{
            const url = `${process.env.REACT_APP_API}/news`;
            const response = await axios.get(url);
            setNews(response.data.articles[0]);
        }
        fetchNews(); 
    },[]);
    console.log(news);
    return (
        <>
        <h1>aaa</h1>
        <h2>{news.author}</h2>
        <h2>{news.content}</h2>
        <h2>{news.description}</h2>
        </>
      );
}