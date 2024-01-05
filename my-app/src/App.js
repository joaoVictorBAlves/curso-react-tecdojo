import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <h1>Curso de react</h1>
      <div className='Components'>
        <div className='Component'>
          <h5>Componente #1</h5>
          <HelloWorld />
        </div> 
      </div>
    </div>
  );
}

export default App;
