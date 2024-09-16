import { React,useEffect,useState } from "react";
import axios from 'axios';
//React setup

import Typography from '@mui/material/Typography'
// CSS setup

export default function Ranking () {
    const [coins,setCoindata] = useState({
         coin:{rank:"",name:"",marketCap:"",price:""},
    });
      useEffect(() => {
        const fetchCoin = async () => {
          const url =`${process.env.REACT_APP_API}`
            const response = await axios.get(url);
            const coinData =await response.data.data.reduce((acc,response,index)=>{
                const coinKey = `coin${index+1}`;
                acc[coinKey]={
                    rank:response.rank,
                    name:response.name,
                    marketCap:Math.ceil(response.marketCapUsd).toLocaleString(),
                    price:response.priceUsd
                };
                return acc;
            },{});
            setCoindata(coinData);
        }
        fetchCoin()    
        },[]);
        return (
            <div style={{ padding: '100px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h4" color="text.secondary" paddingBottom="80px">
                時価総額ランキング
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* ヘッダー */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '80%',
                  padding: '10px',
                  borderBottom: '2px solid #ddd',
                  backgroundColor: '#e0e0e0'
                }}>
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <Typography variant="h6" component="div" fontWeight="bold">
                      順位
                    </Typography>
                  </div>
                  <div style={{ flex: 2, textAlign: 'center' }}>
                    <Typography variant="h6" component="div" fontWeight="bold">
                      銘柄
                    </Typography>
                  </div>
                  <div style={{ flex: 2, textAlign: 'right' }}>
                    <Typography variant="h6" component="div" fontWeight="bold">
                      時価総額
                    </Typography>
                  </div>
                </div>
                {/* データ行 */}
                {Object.keys(coins).map((key) => {
                  const coin = coins[key];
                  return (
                    <div key={key} style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '80%',
                      padding: '10px',
                      borderBottom: '1px solid #ddd'
                    }}>
                      <div style={{ flex: 1, textAlign: 'left' }}>
                        <Typography variant="h5" component="div">
                          {coin.rank}
                        </Typography>
                      </div>
                      <div style={{ flex: 2, textAlign: 'center' }}>
                        <Typography variant="h5" component="div">
                          {coin.name}
                        </Typography>
                      </div>
                      <div style={{ flex: 2, textAlign: 'right' }}>
                        <Typography variant="body2" color="text.secondary">
                          ${coin.marketCap}
                        </Typography>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
 }