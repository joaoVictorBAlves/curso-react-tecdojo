import Product from "./Product";

function App() {
  const products = [
    {
      id: 1,
      imgPath:
        "https://images-americanas.b2w.io/produtos/412767620/imagens/pc-gamer-completo-amd-6-nucleos-3-8ghz-8gb-ram-placa-de-video-radeon-2gb-hd-500gb-monitor-19-5-led-kit-gamer-skill/412767953_1_large.jpg",
      name: "Computador",
      price: "$5999.99",
      qtd: 0,
    },
    {
      id: 2,
      imgPath:
        "https://down-br.img.susercontent.com/file/br-11134207-7qukw-libflcic5ink3b",
      name: "Nord Stage 3",
      price: "$20009.99",
      qtd: 10,
    },
    {
      id: 3,
      imgPath:
        "https://socd.vteximg.com.br/arquivos/ids/183568-1310-1310/Garrafa-Termica-Matte-Pink.jpg?v=638030912876770000",
      name: "Garrafa",
      price: "$129.99",
      qtd: 5,
    },
    {
      id: 4,
      imgPath:
        "data:image/jpeg;base64,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",
      name: "Sabre de Luz",
      price: "$299.99",
      qtd: 15,
    },
  ];

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        {products.map((product) => (
          <Product
            key={product.id}
            imgPath={product.imgPath}
            name={product.name}
            price={product.price}
            qtd={product.qtd}
          />
        ))}
      </div>
    </>
  );
}

export default App;
