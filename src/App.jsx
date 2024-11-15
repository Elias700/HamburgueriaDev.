
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/* Componentes */ 
import Login from './components/Login';
import Logo from './assets/pizza-logo.png';
import Logo2 from './assets/pizza-logo2.png';
import Cadastro from './components/Cadastro';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login Logo={Logo} Logo2={Logo2}/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
   </> 

  )
}

export default App
