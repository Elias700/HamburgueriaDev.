
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//imagens
import Logo from './assets/pizza-logo.png';
import Logo2 from './assets/pizza-logo2.png';
import logoPizza from './assets/logo-pizza.png'

//components
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Senha from './components/senha';
import Home from './components/Home';

function App() {


  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home logoPizza={logoPizza}/>}/>
        <Route path='/login' element={<Login Logo={Logo} Logo2={Logo2}/>}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/senha' element={<Senha/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
