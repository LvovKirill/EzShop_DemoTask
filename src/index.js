import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Main from './pages/Main/Main';
import AboutShop from './pages/AboutShop/AboutShop'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="app" element={<App/>}>
          <Route path="main" element={<Main/>}></Route>
          <Route path="aboutshop" element={<AboutShop/>}></Route>
        </Route>
        <Route path="/" element={<Navigate to="/app/main" replace={true}/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
