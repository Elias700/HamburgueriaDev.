
import './Senha.css';

const Senha = () => {
    return (
        <div className="container">
            <h2 className="title">Hamburgueria Dev</h2>
            <h3 className="subtitle">Recuperar Senha</h3>
            <strong className="instruction">Informe seu e-mail para redefinir a senha.</strong>
            <form className="form">
                <input type="text" placeholder="Digite seu e-mail" className="input" />
                <div>
                    <button className="button">REDEFINIR SENHA</button>
                </div>
            </form>
            <a href="/login" className="back-link">Voltar ao Login</a>
        </div>
    );
};

export default Senha;
