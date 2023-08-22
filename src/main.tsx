import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './Routes/Root.tsx';

// PROBAR ESTA FORMA DE RUETO  QUE ES LA OFICIAL-------
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root></Root>,
//   },
//   {
//     path: 'App',
//     element: <App />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 {/* Wrapeando App para que funcione el router */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
