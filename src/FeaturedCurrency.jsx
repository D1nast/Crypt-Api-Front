import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//↑MaterialUI
import { React,useEffect,useState } from "react";
import axios from 'axios';

export default function FeaturedCurrency() {

  const [coins,setCoindata] = useState({
    coin:{name:"",priceUsd:"",supply:""},
  });
   
  useEffect(() => {
    const fetchCoin = async () => {

        //以下配列に掲載したい銘柄のcoincapのidを書く
        const coinIds = ['bitcoin','ethereum','solana','avalanche','cardano','polkadot'];
        const requests = coinIds.map(id => axios.get(`https://api.coincap.io/v2/assets/${id}`));
        const responses = await Promise.all(requests);
        //↑CoinCap APIからのデータ取得

        const coinData = responses.reduce((acc,response,index)=>{
          const data = response.data.data;  
          //APIのデータ上data.dataとする必要あり
          const coinKey = `coin${index + 1}`;
          acc[coinKey] = {
            name:data.name,
            priceUsd:data.priceUsd,
            supply:data.supply
          };
          return acc;
        },{});
        //ここまでcoinData関数　APIから取得したデータを配列として格納
        setCoindata(coinData);
    }
    fetchCoin();
    },[]); 

  return (
    <div style={{margin:'100px',textAlign :'center'}}> 
      <Typography variant="h4" color="text.secondary" margin="15px">注目銘柄</Typography>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexWrap:'wrap',gap:'16px'}}>
      {Object.keys(coins).map((key) => {
      const coin = coins[key];
      //↑各アイテムを作成

      const formatter = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      });
      const calculateMarketCap = (priceUsd,supply)=>{
        const MarketCap = parseFloat(priceUsd) * parseFloat(supply);
        const formattedNumber = formatter.format(MarketCap);
        return formattedNumber;
      };
      //↑小数点の整えと時価総額の計算

      return (
        <Card key={key} sx={{ maxWidth: 400, marginBottom: 2 }}>
          <CardMedia sx={{ height: 140 }} title={coin.name}/>
          <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {coin.name}
              </Typography>
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <Typography variant="body2" color="text.secondary">
                  価格: ${formatter.format(coin.priceUsd)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  供給量:{formatter.format(coin.supply)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  時価総額:${calculateMarketCap(coin.priceUsd,coin.supply)}
                </Typography>
              </div>
          </CardContent>
          <CardActions>
            <Button size="small">詳細</Button>
          </CardActions>
        </Card>
      );
      })}
    </div>
    </div>
  );
}