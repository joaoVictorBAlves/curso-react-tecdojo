import './App.css';
import Navbar from "./components/Navbar";

function App() {
  const nome = "Maria Rosa"
  const idade = 18
  const a = 10
  const b = 15

  function multiplicacao(a, b) {
    return a * b
  }

  return (
    <div className="App">
      <Navbar />
      <div className='Content'>
        <ul>
          <li>Nome: {nome}</li>
          <li>Idade: {idade} anos</li>
          <li>Soma de {a} + {b} = {a + b}</li>
          <li>Soma de {a} - {b} = {a - b}</li>
          <li>{a} maior {b} ? {a > b ? "Sim" : "Não"}</li>
          <li>{a} menor {b} ? {a < b ? "Sim" : "Não"}</li>
          <li>6 x 3 = {multiplicacao(6, 3)}</li>
          <button style={a > b ? { background: "red" } : { background: "blue" }}>Botão</button>
        </ul>
      </div>
      {/**
       * Repetição, Condição, Selecão (JSX)
       * */}
    </div>
  );
}

export default App;
