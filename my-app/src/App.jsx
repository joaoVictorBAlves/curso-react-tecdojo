import { useEffect, useRef, useState } from "react";
import Componente from "./Componente";

const App = () => {
  const [estado, setEstado] = useState(false);
  const meuInputRef = useRef(null);
  const name = useRef();

  useEffect(() => {
    meuInputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Olá " + name.current.value);
  }

  return (
    <div className="App">
      <Componente estado={estado} />
      <button onClick={() => setEstado(!estado)}>Muda Estado</button>
      <input ref={meuInputRef} type="text" />
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input ref={name} type="text" placeholder="Digite seu nome" />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default App;
