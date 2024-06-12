import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global.scss" 

import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Connect from './pages/Manager/Connect';
import Products from './pages/Products/Products';
import ProposePage from './pages/Propose/Propose';
import Transactions from './pages/Transactions/Transactions';
import IndexSearch from './pages/IndexSearch/IndexSearch';
import ViewAll from './pages/AllTransactions/ViewAll';
import ViewCotation from './pages/Cotation/Cotation';

const rootElement = document.getElementById('root');

const renderApp = () => {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Connect />} />
          <Route path="/Conectar" element={<Connect />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Adicionar" element={<ProposePage />} />
          <Route path="/Pendentes" element={<Transactions />} />
          <Route path="/Procurar" element={<IndexSearch />} />
          <Route path="/Visualizar" element={<ViewAll />} />
          <Route path="/Cotação" element={<ViewCotation />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

renderApp();