import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NewsAPI from './News.jsx';
// import SignIn from './SignIn.jsx';
import LP from './LP.jsx';
import SignUp from './Signup.jsx';
// import UserPage from './UserPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<LP />}/>
        <Route path="/news" element={<NewsAPI />}/>
        {/* <Route path="/signin" element={<SignIn />}/> */}
        <Route path="/signup" element={<SignUp />}/>
        {/* <Route path="/user" element={<UserPage />}/> */}
      </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
