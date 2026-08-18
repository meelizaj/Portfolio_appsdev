import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from '@/pages/Home';
import '@/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
  </BrowserRouter>,
)
