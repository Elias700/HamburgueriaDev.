


import './Cadastro.css';

const Cadastro = () => {
    return ( 
        <div>
            <h2 className='title'>Hamburguerai Dev</h2>
            <h3 className='subtitle'>Cadastro</h3>
            <form>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <input type="password" placeholder='Confirme a senha'/>
            </form>
            <div className='btt'>
                <button className='botao2'>Cadastre-se</button>
            </div>
            <p id='p3'>Já possu conta? <a href="/login">Faça login</a> </p>
        </div>
    )
};

export default Cadastro;