import "./App.css";
import Noticia from "./components/Noticia";
import Navbar from "./components/Navbar";
import TextBlock from "./components/TextBlock";
import Form from "./components/Form";

function App() {
  function handleClick01() {
    console.log("Você clicou!");
  }

  function handleHover01() {
    console.log("Você passou por cima!");
  }

  function writeText(text) {
    console.log(text);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <div style={{ width: 300 }}>
          <h3>Botões</h3>
          {/**
           * Funções que recebem parâmetro devem se colocadas
           * entre uma funções anônimas ()=>{} para que não disparem
           */}
          <button
            onClick={() => {
              alert("Você clicou nesse botão");
            }}
          >
            Alert
          </button>
          {/**
           * Quando não é necessário passar parâmetro pode passar apenas o nome da função
           * pois assim a função não executa automaticamente, isso vale para qualquer evento
           */}
          <button onMouseOver={handleHover01} onClick={handleClick01}>
            Console.log
          </button>
        </div>
        <div style={{ width: 300 }}>
          <h3>Escreva</h3>
          {/**
           * Nesse exemplo vemos que precisamos passar a referência do evento para recuperar
           * um valor da do que foi escrito, em alguns casos vamos precisar recuperar informações
           * do evento, para isso devemos passar o evento para a função (e) => {...}
           */}
          <input
            type="text"
            placeholder="Escreva algo"
            onChange={(e) => writeText(e.target.value)}
          />
          {/* Tratando eventos de submit */}
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
