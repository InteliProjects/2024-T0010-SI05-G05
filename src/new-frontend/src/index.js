import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Importar páginas
import ConnectPage from './pages/connectPage/connectPage';
import CotationPage from './pages/cotations/cotationsPage';
import ManageUsers from './pages/manageUsers/manageUsers';
import TransactionPage from './pages/transactionPage/transactionPage';
import ValidationPage from './pages/validation/validationPage';

const rootElement = document.getElementById('root');

const renderApp = () => {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<ConnectPage/>} />
          <Route path="/manage-users" element={<ManageUsers/>} />
          <Route path="/visualizar-cotação" element={<CotationPage/>} />
          <Route path="/transação" element={<TransactionPage/>} />
          <Route path="/validação" element={<ValidationPage/>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
