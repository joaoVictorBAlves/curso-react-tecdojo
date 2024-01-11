import './App.css';
import Noticia from './components/Noticia';
import Navbar from "./components/Navbar";
import TextBlock from './components/TextBlock';

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
        <TextBlock
          titulo={"Notícias de hoje para você"}
          paragrafo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        />
      </div>
      {/**
       * Repetição, Condição, Selecão (JSX)
       * */}
    </div>
  );
}

export default App;
