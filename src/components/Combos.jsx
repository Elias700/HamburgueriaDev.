import './Combos.css';

const Combos = () => {
    const produtos = [
        {
            id: 1,
            title: 'Pizza Família + Refrigerante',
            img: 'https://img.freepik.com/fotos-gratis/uma-fatia-de-pizza-crocante-com-carne-e-queijo_140725-6974.jpg?t=st=1736875053~exp=1736878653~hmac=efb18704706c94cfd233ff737b1dc1fadfe80541d369049a3c456162dacb4d66&w=740',
            price: 'R$ 59,90',
            description: 'Compre uma pizza familia e ganhe um refrigerante de 1 litro!'
        },
        {
            id: 2,
            title: 'Pizza Grande + Refrigerante',
            img: 'https://img.freepik.com/fotos-gratis/pizza-de-salsicha-coberta-com-folha-de-louro_140725-1220.jpg?t=st=1736875783~exp=1736879383~hmac=0654e8a1c37ba7cfdcfa866036abd5e10cd7b2e1cab9cd2a8df03862824cf296&w=740',
            price: 'R$ 45,00',
            description: 'Compre uma pizza grande e ganhe um refrigerante de 1 litro!'
        },
        {
            id: 3,
            title: 'Pizza Média + Refrigerante',
            img: 'https://img.freepik.com/fotos-gratis/pizza-com-salsichas-fatiadas-e-suco-de-laranja_140725-3666.jpg?t=st=1736875860~exp=1736879460~hmac=a5174c49abcb80ece87d883379e39843f56b2281621bd943527c2b4e1b7e3c82&w=740',
            price: 'R$ 32,50',
            description: 'Compre uma pizza média e ganhe um refrigerante de 1 litro!'
        },
        {
            id: 4,
            title: 'Fatia',
            img: 'https://img.freepik.com/fotos-gratis/fatia-plana-de-pizza-de-pepperoni-no-prato_23-2148765310.jpg?t=st=1736875883~exp=1736879483~hmac=53a1734408c24d8f644fc4b491570f722e7255491ac540e68bf397cd27e3dbdd&w=826',
            price: 'R$ 13,90',
            description: 'Compre uma fatia e pague pela próxima metade do preço!'
        }
    ];

    return (
        <main>
            <h1>Combos</h1>
            <section className="combos-container">
                {produtos.map((produto) => (
                    <div key={produto.id} className='produto-card'>
                        <img src={produto.img} alt="pizza" height={'200px'} />
                        <h2>{produto.title}</h2>
                        <p>{produto.description}</p>
                        <div className='ajuste-price-btt'>
                            <strong>{produto.price}</strong>
                            <button>Adicionar</button>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Combos;
