
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './components/Login';
import Logo from './assets/pizza-logo.png';
import Logo2 from './assets/pizza-logo2.png';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Senha from './components/senha';

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login Logo={Logo} Logo2={Logo2}/>}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/senha' element={<Senha/>}/>
      </Routes>
    </BrowserRouter>



      
      
        
    </>
  )
}

export default App
