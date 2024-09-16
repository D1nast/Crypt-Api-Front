import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import Link from '@mui/material/Link';
import ScrollToTopButton from './ScrollTop'; 
import { Typography } from '@mui/material';

const Footer = () => {
  return (
        <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px 0' }}>
            <div style={{display:'flex',height:'auto',width:'100%'}}>
                <div style={{flex:'2',paddingLeft:'80px',width:'30%'}}>
                    <img src="/cnicon.png" alt="Description" style={{ width: '80%', height: 'auto' }} />
                </div>
                <div style={{flex:'8'}}>
                    <Typography variant="h6" style={{borderBottom:'2px solid white',display:'inline-block',width:'150px'}}>
                        About
                    </Typography>
                    <p>仮想通貨のマーケット情報がわかるサイトです<br/>
                        「News」では、NewsAPIから取得した直近1週間の話題のニュースが表示されます
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h6" style={{borderBottom:'2px solid white',display:'inline-block',width:'150px'}}>
                        GitHub
                    </Typography>
                    <Link href="https://github.com/D1nast" target="_blank" rel="noopener noreferrer" marginTop={'10px'}>
                     <FaGithub size={24} color="#ffffff" />
                    </Link>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
        </footer>
  );
}

export default Footer;
