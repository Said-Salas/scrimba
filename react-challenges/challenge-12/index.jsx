import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Van from './pages/Van'
import './server'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Van />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);