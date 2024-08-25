// コインチェックの場合
// const fetchData = async () => {
//     try {
//         const { default: fetch } = await import('node-fetch');
//         const response = await fetch('https://coincheck.com/api/rate/btc_jpy');
//         const response2 = await fetch('https://coincheck.com/api/rate/eth_jpy');
//         const response3 = await fetch('https://coincheck.com/api/rate/avax_jpy');
//         const response4 = await fetch('https://coincheck.com/api/rate/dot_jpy');
//         const text = await response3.json(); // レスポンスのテキストを取得
//         console.log(text); // テキストをコンソールに出力
//     } catch (error) {
//         console.error('エラー:', error);
//     }
// }
// fetchData();

// CoinCapの場合
// const fetchData = async () => {
//     try {
//         const { default: fetch } = await import('node-fetch');
//         const response = await fetch('https://api.coincap.io/v2/assets/bitcoin');
//         const text = await response.json(); // レスポンスのテキストを取得
//         console.log(text); // テキストをコンソールに出力
//     } catch (error) {
//         console.error('エラー:', error);
//     }
// }
// fetchData();
const fetchData = async () => {
    try {
        const { default: fetch } = await import('node-fetch');
        const response = await fetch('https://api.coincap.io/v2/assets/bitcoin');
        const json = await response.json();
        console.log(json.data.priceUsd);
    } catch (error) {
        console.error('エラー:', error);
    }
};

fetchData();


// APIの動作を試すためだけ　コインチェックはlocalhostからのリクエスト不可
