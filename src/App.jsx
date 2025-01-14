
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
import Senha from './components/senha';
import RodaPe from './components/RodaPe';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home logoPizza={logoPizza}/> }/>
          <Route path='/login' element={<Login Logo={Logo} Logo2={Logo2}/>}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/senha' element={<Senha/>}/>
        </Routes>
      </BrowserRouter>
        
      <RodaPe />
        
    </>
  )
}

export default App
