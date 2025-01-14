
import './Bebidas.css'

const Bebidas = () => {

    const Bebidas = [
        {
            id: 1,
            title: 'Coca-Cola - 1 Litro',
            ml: '350ml',
            price: 'R$ 7,99',
            img: 'https://mfresh.s3.amazonaws.com/uploads/product/sku/9055/image/5b57f722-9cc2-4c8c-91d1-6b8caa6e58b2.png'
        },
        {
            id: 2,
            title: 'Pepsi - 1 Litro',
            ml: '350ml',
            price: 'R$ 6,99 por R$ 5,50',
            img: 'https://ibassets.com.br/ib.item.image.large/l-8db85e84defe4774aee6daa4d21d75fa.jpg'
        },
        {
            id: 3,
            title: 'Coca-cola Zero - Lata',
            ml: '350ml',
            price: 'R$ 4,50',
            img: 'https://static.clubeextra.com.br/img/uploads/1/659/14412659.jpg?im=Resize,width=200'
        },
        {
            id: 4,
            title: 'Pepsi Zero - Lata',
            ml: '350ml',
            price: 'R$ 4,00',
            img: 'https://floriculturatatuape.bwimg.com.br/floriculturatatuape/produtos/pepsi-lata-1691692912.2194.jpeg'
        },
        {
            id: 5,
            title: 'Red Bull',
            ml: '250ml',
            price: 'R$ 10,50',
            img: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/189028/Energetico-RED-BULL-Energy-Drink-Lata-355ml.jpg?v=637699245132670000'
        },
        {
            id: 6,
            title: 'Heineken',
            ml: '330ml',
            price: 'R$ 12,00',
            img: 'https://mercantilatacado.vtexassets.com/arquivos/ids/179369-800-auto?v=638349767017400000&width=800&height=auto&aspect=true'
        },
        {
            id: 7,
            title: 'Stella Artois',
            ml: '600ml',
            price: 'R$ 12,50 por R$ 9,90',
            img: 'https://compremais.vtexassets.com/arquivos/ids/413962/Cerveja-Stella-Artois-600ml-Garrafa.jpg?v=638549575539700000'
        }
    ]

    return (
        <main>
            <h2>Bebidas</h2>
            <div className='ajuste'>
                {Bebidas.map((Bebida) => (
                    <div>
                        <img src={Bebida.img} alt="Bebida" height={'250px'}/>
                        <h2>{Bebida.title}</h2>
                        <p>{Bebida.ml}</p>
                        <strong>{Bebida.price}</strong>
                        <button>Adicionar</button>
                    </div>
                ))}
            </div>
        </main>
            
        
    )
};

export default Bebidas;