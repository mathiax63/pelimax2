import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Head from './components/layout/Head';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import Administrador from './pages/Admin';
import PaginaParaVer from './pages/PaginaParaVer';
import TodasLasPeliculas from './pages/TodasLasPelicuals';
import Detalles from './pages/Detalles';





function App() {
  return (
    <div className="App">
      <Head/>
      <Header></Header>
      
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='admin' element={<Administrador />}/>
      <Route path='paginasParaVer' element={<PaginaParaVer />}/>
      <Route path='todasLasPeliculas' element={<TodasLasPeliculas />}/>
      <Route path='/detalles' element={<Detalles />}/>
      <Route path='/detalles/:id' element={<Detalles />}/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  
  );
}

export default App;
