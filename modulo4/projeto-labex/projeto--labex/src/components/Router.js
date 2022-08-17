import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHomePage from '../pages/Main/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';

// PASSO 1: CRIAR AS NOSSAS ROTAS
function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <AdminHomePage /> } />
            {/* PASSO 8: CRIAR UMA PATH VARIABLES NA ROTA NECESSÁRIA */}
            <Route path="ApplicationForm" element={ <ApplicationFormPage /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;