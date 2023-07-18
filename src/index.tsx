import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './store/store';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
