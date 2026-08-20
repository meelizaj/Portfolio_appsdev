import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/Home';
import Layout from './pages/layout';
import '@/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
