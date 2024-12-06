
import './Home.css'

const Home = ({logoPizza}) => {


    return (
        <div className='container'>

            <header>
                <nav className='navegation'>               
                    <ul>
                        <li>Combos</li>
                        <li>Bebidas</li>
                        <li>Promoções</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>

            <div>
                <h1>Hamburgueria Dev</h1>
                <div className='configuration'>
                    <p>Venha conhecer os diversos sabores de pizzas e as melhores promoções</p>
                    <img src={logoPizza} alt="" />
                </div>
                <button>Confira</button>
            </div>

        </div>
    )
};

export default Home;