
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//imagens
import Logo from './assets/pizza-logo.png';
import Logo2 from './assets/pizza-logo2.png';
import logoPizza from './assets/logo-pizza.png'
import Pizza1 from './assets/pizza1.png'

//components
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Combos from './components/Combos';
import Senha from './components/senha';

function App() {


  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home logoPizza={logoPizza}/>}/>
        <Route path='/login' element={<Login Logo={Logo} Logo2={Logo2}/>}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/senha' element={<Senha/>}/>
        <Route path='combos' element={<Combos Pizza1={Pizza1}/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
