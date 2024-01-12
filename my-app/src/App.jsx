import Product from "./Product";

function generateRandomValue(a, b) {
  return Math.random() * (b - a) + a;
}

function App() {
  const frutas = ["Banana", "Maçã", "Limão", "Pera"];

  const pessoas = [
    {
      name: "João",
      idade: 21,
    },
    {
      name: "Maria",
      idade: 18,
    },
    {
      name: "Pedro",
      idade: 12,
    },
  ];

  const products = [
    {
      id: 1,
      imgPath:
        "https://images-americanas.b2w.io/produtos/412767620/imagens/pc-gamer-completo-amd-6-nucleos-3-8ghz-8gb-ram-placa-de-video-radeon-2gb-hd-500gb-monitor-19-5-led-kit-gamer-skill/412767953_1_large.jpg",
      name: "Computador",
      price: "$5999.99",
    },
    {
      id: 2,
      imgPath:
        "https://down-br.img.susercontent.com/file/br-11134207-7qukw-libflcic5ink3b",
      name: "Nord Stage 3",
      price: "$20009.99",
    },
  ];

  // Pode ser renderizado ou não
  const products2 = null;

  const erro = 1;

  // Exemplo de uso
  var valorAleatorio = generateRandomValue(10, 20);
  console.log(valorAleatorio);

  return (
    <div className="App">
      <h1>Listagens</h1>

      <h3>Lista de Frutas</h3>

      <ul>
        {frutas.map((fruta) => (
          <li>{fruta}</li>
        ))}
      </ul>

      <h3>Tabela de Pessoas</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.map((pessoa, index) => (
            <tr>
              <td>{index}</td>
              <td>{pessoa.name}</td>
              <td>{pessoa.idade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Lista de Produtos</h3>
      {products.map((product) => (
        <Product
          key={product.id}
          imgPath={product.imgPath}
          name={product.name}
          price={product.price}
        />
      ))}

      <h1>Renderização Condicional</h1>
      <h3>Alert de erro</h3>
      {erro === 1 && <span className="Erro">Ocorreu um erro</span>}

      <h3>Incerteza na Iteração</h3>
      {products2 &&
        products2.map((product) => (
          <Product
            key={product.id}
            imgPath={product.imgPath}
            name={product.name}
            price={product.price}
          />
        ))}
    </div>
  );
}

export default App;
