import React from 'react';
import ReactDOM from 'react-dom/client';
import MyShopifyApp from './MyShopifyApp';

import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyShopifyApp />
  </React.StrictMode>
);
