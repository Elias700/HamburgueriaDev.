

import './Login.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useState } from 'react';


const Login = ({Logo, Logo2}) => {

    const [login, setLogin] = useState('');

    const recuperacaoSenha = () => {
        alert('Foi enviado um email para recuperação da senha')
    };

    return (
        <div>
           <h2 className='title'>Hamburgueria Dev</h2> 
           <h3 className='subtitle'>Login</h3>
           <form>
                <input type="text" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <div className="btt">
                    <button className='botao1' >Login</button>
                </div>
           </form>
            <p>Entrar com</p>
           <div className='icons'>
                <FaInstagram />
                <FaFacebook />
                <BsTwitterX />
           </div>
           <div>
            <p id='p1'>Não em conta?  <a href="/cadastro">cadastre-se</a></p>
            <p id='p2'><a href="/Senha">Recuperar senha</a></p>
           </div>
           <img src={Logo2} alt="Logo pizza" height={'300px'}/>
        </div>
        
    )
}

export default Login;