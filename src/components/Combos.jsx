

import './Combos.css'

const Combos = ({Pizza1}) => {

    const products = [
        {
            img:{Pizza1},
            title: "Pizza Família + Refrigerante",
            descption: "Compre uma pizza familia e ganhe um refrigerante de 1 litro!",
            price: "R$ 59,90"
        },
        {}
    ]

    return (
        <main>
            <h1>Combos</h1>

            <section className="productos">
                {products.map((product) => (
                    <div>
                        <img src={product.img} alt="" />
                        <h2>{product.title}</h2>
                        <p>{product.descption}</p>
                        <strong>{product.price}</strong>
                    </div>
                ))}
            </section>
        </main>
    )
};

export default Combos;