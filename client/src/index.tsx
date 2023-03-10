import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import AuthProvider from "./context/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);


