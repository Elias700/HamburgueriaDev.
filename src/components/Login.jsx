import './Login.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Login = () => {
    return ( 
       <div>
            <h1 className='title'>Hamburgueria Dev</h1>
            <h2 className='sub-title'>Login</h2>
            <form>
                <input type="text" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <button className='botao1'>Login</button>
            </form>
            <div>
                <p>Entrar com</p>
                <div className='icons'>
                    <FaInstagram id='icon'/>
                    <FaFacebook id='icon'/>
                    <BsTwitterX id='icon'/>
                </div>
                <p>Não tem conta? <a href="/cadastro">registre-se</a></p>
                <p><a href="/senha">Recuperar Senha</a></p>
            </div> 
       </div>
    );
};

export default Login;
