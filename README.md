# 概要
仮想通貨関連のニュースを配信するWEBサイト</br> 
登録ユーザーに、毎朝７時に仮想通貨に関するニュースを送信</br>
本サイト上段にはNews APIから取得したニュースを、中段には時価総額ランキングを表示</br>

## 目次
- [画面イメージ](#画面イメージ)
- [フロントエンド](#フロントエンド)
- [バックエンド](#バックエンド)
- [インフラ](#インフラ)
- [API](#API)
- [参考文献](#参考文献)


## 画面イメージ
![ニュース](https://github.com/user-attachments/assets/f86c83e3-0b58-42ec-bad1-77183d1dc60f)
![時価総額](https://github.com/user-attachments/assets/d667941c-5146-4434-ac86-160e3ab7a567)
![ユーザー登録](https://github.com/user-attachments/assets/29f02d31-6e7d-44ed-9cd8-d9b09c8410f3)

## フロントエンド
- React v18.3.1
- Material-UI
## バックエンド
- Ruby v3.1.2
- Rails v6.1.7.8
## インフラ 
インフラ図は以下の通</br>
HTTPリクエストはHTTPSにリダイレクトされるよう制御</br>
<img width="465" alt="Crypt Portalインフラ" src="https://github.com/user-attachments/assets/5b410645-9adb-4e10-a68b-c0ed893b1892" />

## API
- CoinCap API2.0
- NewsAPI
