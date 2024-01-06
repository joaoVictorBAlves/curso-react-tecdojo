import './App.css';
import Form from './components/Form';
import Lista from './components/Lista';
import Navbar from "./components/Navbar";
import Table from './components/Table';
import TextBlock from './components/TextBlock';

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
        <TextBlock />
        <Table />
        <Lista />
        <Form />
      </div>
    </div>
  );
}

export default App;
