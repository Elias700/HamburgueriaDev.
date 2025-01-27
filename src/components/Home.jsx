
import './Home.css';
import Combos from './Combos';
import Bebidas from './Bebidas'; 

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
                        <li><a href="/combos">Combos</a></li>
                        <li><a href="/bebidas">Bebidas</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </header> 

            <div>
                <h1 className='titulo'>Hamburgueria Dev</h1>
                <div className="configuration">
                    <p className='paragrafo'>Venha conhecer os diversos sabores de pizzas e as melhores promoções</p>
                    <img src={logoPizza} alt="Pizza logo" className='logo-pizza'/>
                </div>
                <button className='btt-principal'>Confira</button>
            </div>
          <Combos />
          <Bebidas />
        </div>
    );
};

export default Home;
