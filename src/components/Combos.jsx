

import './Combos.css'

const Combos = ({Pizza1}) => {
    return (
        <main>
            <h1>Combos</h1>

            <section className="productos">
                <img src={Pizza1} alt="" />
                <div>
                    <h2>Pizza Família + Refrigerante</h2>
                    <p>Compre uma pizza familia e ganhe um refrigerante de 1 litro!</p>
                    <strong>R$ 59,90</strong>
                    <button>Comprar</button>
                </div>
            </section>
        </main>
    )
};

export default Combos;