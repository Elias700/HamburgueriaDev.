import './Home.css';
import { useState } from 'react';

const Home = ({ logoPizza }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="container">
            <header>
                <nav className="navegation">
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className={menuOpen ? "line open" : "line"}></span>
                        <span className={menuOpen ? "line open" : "line"}></span>
                        <span className={menuOpen ? "line open" : "line"}></span>
                    </div>
                    <ul className={menuOpen ? "menu open" : "menu"}>
                        <li>Combos</li>
                        <li>Bebidas</li>
                        <li>Promoções</li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </header> 

            <div>
                <h1 className='title'>Hamburgueria Dev</h1>
                <div className="configuration">
                    <p className='paragrafo'>Venha conhecer os diversos sabores de pizzas e as melhores promoções</p>
                    <img src={logoPizza} alt="Pizza logo" />
                </div>
                <button className='btt.principal'>Confira</button>
            </div>
        </div>
    );
};

export default Home;
