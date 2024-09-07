import { React,useEffect,useState } from "react";
import axios from 'axios';
//React
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from "@mui/material";

//Material UI
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}{...other}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
}  
CustomTabPanel.propTypes = {children: PropTypes.node,index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,};

    function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
};
}

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
            console.log(response);
        };
        fetchNews(); 
    },[]);
    return(
        <>
        <div style={{margin:'100px 0 20px 0' ,textAlign:'center'}}>
            <Typography variant="h4" color="text.secondary" margin="15px">注目記事</Typography>
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="1" {...a11yProps(0)} />
          <Tab label="2" {...a11yProps(1)} />
          <Tab label="3" {...a11yProps(2)} />
          <Tab label="4" {...a11yProps(3)} />
        </Tabs>
        </Box>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',paddingTop:'30px', justifyContent: 'center'}}>
        {news.slice(0,5).map((res,key)=>{
            return(
                <CustomTabPanel key={key} value={value} index={0}>
                <Card key={key} sx={{ maxWidth: 400, marginBottom:2}}>
                    <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                        <CardMedia sx={{height:220,objectFit:'cover',}} image={res.urlToImage}/>
                    </a>
                    <CardContent>
                        <Typography>author&nbsp;&nbsp;:&nbsp;&nbsp;{res.author}</Typography>
                        <Typography variant="h6">{res.title}</Typography>
                        <Typography variant="h6">{res.description}</Typography>
                    </CardContent>
                </Card> 
                </CustomTabPanel>
            );
        })}
        </div>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',paddingTop:'30px', justifyContent: 'center'}}>
        {news.slice(5,10).map((res,key)=>{
            return(
                <CustomTabPanel key={key} value={value} index={1}>
                <Card key={key} sx={{ maxWidth: 400, marginBottom:2}}>
                    <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                        <CardMedia sx={{height:220,objectFit:'cover',}} image={res.urlToImage}/>
                    </a>
                    <CardContent>
                        <Typography>author&nbsp;&nbsp;:&nbsp;&nbsp;{res.author}</Typography>
                        <Typography variant="h6">{res.title}</Typography>
                        <Typography variant="h6">{res.description}</Typography>
                    </CardContent>
                </Card> 
                </CustomTabPanel>
            );
        })}
        </div>     
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',paddingTop:'30px', justifyContent: 'center'}}>
        {news.slice(10,15).map((res,key)=>{
            return(
                <CustomTabPanel key={key} value={value} index={2}>
                <Card key={key} sx={{ maxWidth: 400, marginBottom:2}}>
                    <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                        <CardMedia sx={{height:220,objectFit:'cover',}} image={res.urlToImage}/>
                    </a>
                    <CardContent>
                        <Typography>author&nbsp;&nbsp;:&nbsp;&nbsp;{res.author}</Typography>
                        <Typography variant="h6">{res.title}</Typography>
                        <Typography variant="h6">{res.description}</Typography>
                    </CardContent>
                </Card> 
                </CustomTabPanel>
            );
        })}
        </div> 
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',paddingTop:'30px', justifyContent: 'center'}}>
        {news.slice(15,20).map((res,key)=>{
            return(
                <CustomTabPanel key={key} value={value} index={3}>
                <Card key={key} sx={{ maxWidth: 400, marginBottom:2}}>
                    <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                        <CardMedia sx={{height:220,objectFit:'cover',}} image={res.urlToImage}/>
                    </a>
                    <CardContent>
                        <Typography>author&nbsp;&nbsp;:&nbsp;&nbsp;{res.author}</Typography>
                        <Typography variant="h6">{res.title}</Typography>
                        <Typography variant="h6">{res.description}</Typography>
                    </CardContent>
                </Card> 
                </CustomTabPanel>
            );
        })}
        </div>       
        </>
    )
}

