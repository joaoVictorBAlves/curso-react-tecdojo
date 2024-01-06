import './App.css';
import Navbar from "./components/Navbar";

function App() {
  /**
   * [Lógica - JS]
   * Criar funções
   * Definir estados
   * Definir reações
   */
  return (
    <div className="App">
      <Navbar />
      <div className='Content'>
        <h1>Curso de React | Componentes</h1>
        <p>Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.
          It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <h3>Tabela</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Maria</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Carlos</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
        <h3>Lista</h3>
        <ul>
          <li>Ítem 1</li>
          <li>Ítem 2</li>
          <li>Ítem 3</li>
          <li>Ítem 4</li>
        </ul>
        <h3>Formulário</h3>
        <form>
          <input type='text' placeholder='Escreva seu nome' /><br />
          <input type='number' placeholder='Digite sua idade' /><br /><br />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
