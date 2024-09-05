import { React,useEffect,useState } from "react";
import axios from 'axios';
//React
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
//Material UI
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
}  
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
};
}
//Material UI Tab

export default function NewsAPI(){

    const [news,setNews]=useState([]);
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
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
        <div style={{margin:'100px 0 20px 0' ,textAlign:'center'}}>
            <Typography variant="h4" color="text.secondary" margin="15px">News Topics</Typography>
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="1" {...a11yProps(0)} />
          <Tab label="2" {...a11yProps(1)} />
          <Tab label="3" {...a11yProps(2)} />
          <Tab label="4" {...a11yProps(3)} />
          <Tab label="5" {...a11yProps(4)} />
        </Tabs>
        </Box>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> 
        {news.slice(0,5).map((res,key)=>{
            return(
                <CustomTabPanel key={key} value={value} index={0}>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                    <div style={{flex:8,maxWidth:'65%'}}>
                        <h2>{res.author}</h2> 
                        <h2>{res.content}</h2>
                        <h2>{res.description}</h2>
                        <a href={res.url}>URL</a> 
                    </div>
                    <div style={{flex:2,maxWidth:'35%',paddingLeft:'50px'}}>
                        <h2>{res.author}</h2> 
                    </div>
                </div>                    
                </CustomTabPanel> 
            );
        })}
        {news.slice(5,10).map((res,key)=>{
            return(
                <CustomTabPanel key ={key}value={value} index={1}>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    <div style={{flex:8,maxWidth:'65%'}}>
                        <h2>{res.author}</h2> 
                        <h2>{res.content}</h2>
                        <h2>{res.description}</h2>
                        <a href={res.url}>URL</a> 
                    </div>
                    <div style={{flex:2,maxWidth:'35%'}}>
                        <h2>{res.author}</h2> 
                    </div>
                </div>                    
                </CustomTabPanel> 
            );
        })}        
        {news.slice(10,15).map((res,key)=>{
            return(
                <CustomTabPanel key={key} value={value} index={2}>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    <div style={{flex:8,maxWidth:'65%'}}>
                        <h2>{res.author}</h2> 
                        <h2>{res.content}</h2>
                        <h2>{res.description}</h2>
                        <a href={res.url}>URL</a> 
                    </div>
                    <div style={{flex:2,maxWidth:'35%'}}>
                        <h2>{res.author}</h2> 
                    </div>
                </div>                    
                </CustomTabPanel> 
            );
        })}        
        {news.slice(15,20).map((res,key)=>{
            return(
                <CustomTabPanel key={key} value={value} index={3}>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    <div style={{flex:8,maxWidth:'65%'}}>
                        <h2>{res.author}</h2> 
                        <h2>{res.content}</h2>
                        <h2>{res.description}</h2>
                        <a href={res.url}>URL</a> 
                    </div>
                    <div style={{flex:2,maxWidth:'35%'}}>
                        <h2>{res.author}</h2> 
                    </div>
                </div>                    
                </CustomTabPanel> 
            );
        })}
        {news.slice(20,25).map((res,key)=>{
            return(
                <CustomTabPanel key={key} value={value} index={4}>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',alignItems:"center"}}>
                    <div style={{flex:8,maxWidth:'65%'}}>
                        <h2>{res.author}</h2> 
                        <h2>{res.content}</h2>
                        <h2>{res.description}</h2>
                        <a href={res.url}>URL</a> 
                    </div>
                    <div style={{flex:2,maxWidth:'35%'}}>
                        <h2>{res.author}</h2> 
                    </div>
                </div>                    
                </CustomTabPanel> 
            );
        })}        
        </Box>
        </Box>          
        </>
    )
}

