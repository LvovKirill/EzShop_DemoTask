import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './app/18n.js';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './shared/redux/store/ConfigureStore.js';

import App from './app/App.jsx';
import ProductListPage from './pages/ProductListPage/ProductListPage.jsx';
import AboutShop from './pages/AboutShop/AboutShop.jsx';

import { SDKProvider } from '@telegram-apps/sdk-react';
import ProductPage from './pages/ProductPage/ProductPage.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <SDKProvider acceptCustomStyles debug>
//   <Provider store={store}>
//     <BrowserRouter>
//       <Routes>
//         <Route path="app" element={<App/>}>
//           <Route path="productlist" element={<ProductListPage/>}></Route>
//           <Route path="main" element={<Main/>}></Route>
//           <Route path="aboutshop" element={<AboutShop/>}></Route>
//         </Route>
//         <Route path="/" element={<Navigate to="/app/productlist" replace={true}/>}></Route>
//       </Routes>
//     </BrowserRouter>
//   {/* <script src="https://cdn.jsdelivr.net/npm/eruda"></script> */}
//   {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}
//   </Provider>
//   </SDKProvider>
// );

root.render(
  <SDKProvider acceptCustomStyles debug>
  <Provider store={store}>
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="app" element={<App/>}>
          <Route path="productlist" element={<ProductListPage/>}></Route>
          {/* <Route path="main" element={<Main/>}></Route> */}
          <Route path="aboutshop" element={<AboutShop/>}></Route>
          <Route path="product" element={<ProductPage/>}></Route>
        </Route>
        <Route path="/" element={<Navigate to="/app/productlist" replace={true}/>}></Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
  </Provider>
  </SDKProvider>
);
