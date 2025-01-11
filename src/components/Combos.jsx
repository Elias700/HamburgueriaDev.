

import './Combos.css'

const Combos = () => {

    const products = [ 
        {
            img: "https://img.freepik.com/fotos-gratis/uma-fatia-de-pizza-crocante-com-carne-e-queijo_140725-6974.jpg?ga=GA1.1.1549449650.1701212212&semt=ais_hybrid",
            title: "Pizza Família + Refrigerante",
            descption: "Compre uma pizza familia e ganhe um refrigerante de 1 litro!",
            price: "R$ 59,90"
        },
        {
            img: "https://img.freepik.com/fotos-gratis/pizza-de-salsicha-coberta-com-folha-de-louro_140725-1220.jpg?t=st=1736515284~exp=1736518884~hmac=f0fbe7a6dfafac0c9f950eeae41c94b1a69b568a85ff7beb249f8f583ef858d4&w=740",
            title: "Pizza Grande + Refrigerante",
            descption: "Compre uma pizza grande e ganhe um refrigerante de 1 litro!",
            price: "R$ 45,00"
        },
        {
            img: "https://img.freepik.com/fotos-gratis/pizza-com-fatias-de-calabresa-e-molho-de-tomate_114579-2944.jpg?t=st=1736515390~exp=1736518990~hmac=bd64edffa696334e998a704df7e9bb7e590315e17d93f59819c717e67afc3707&w=740",
            title: "Pizza Média + Refrigerante",
            descption: "Compre uma pizza média e ganhe um refrigerante de 1 litro!",
            price: "R$ 32,50"
        },
        {
            img: "https://img.freepik.com/fotos-gratis/fatia-plana-de-pizza-de-pepperoni-no-prato_23-2148765310.jpg?t=st=1736515416~exp=1736519016~hmac=7f0f6f8c4214fdba22aae4eca4fcb7a12d2e9c1091d2c6e74fea3d1c5fbe1037&w=826",
            title: "Fatia",
            descption: "Compre uma fatia e pague pela próxima metade do preço!",
            price: "R$ 13,90"
        }
    ];

    return (

        <main>
            <h1>Combos</h1>

            <section className="productos">
                {products.map((product, index) => (
                    <div key={index} className={`fundo fundo-${index}`}>
                        <img src={product.img} alt="Pizza" height={'200px'} className='img-pizza'/>
                        <h2 className='title-pizza'>{product.title}</h2>
                        <p className='description'>{product.descption}</p>
                        <div className='ajuste'>
                            <strong className='price'>{product.price}</strong>
                            <button className='btt-adicionar'>Adicionar</button>
                        </div>
                    </div>
                ))}
            </section>

        </main>
    )
};

export default Combos;