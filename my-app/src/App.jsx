import { useRef, useState, useEffect } from "react";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([]);

  const iUserName = useRef();
  const iUserAge = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/pessoas")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Ocorreu um erro na requisição");
      });
  }, []);

  function handleAddUser(e) {
    e.preventDefault();
    const name = iUserName.current.value;
    const age = parseInt(iUserAge.current.value);

    if (name && age) {
      const newUser = { name, age };
      const updatedUsers = [...users, newUser];

      fetch("http://localhost:5000/pessoas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers(updatedUsers);
          // Limpar campos de entrada após adicionar usuário
          iUserName.current.value = "";
          iUserAge.current.value = "";
        })
        .catch((error) => {
          console.log("Ocorreu um erro na requisição");
        });
    }
  }

  return (
    <div className="App">
      <section className="AddUser">
        <h1>Adicione um usuário</h1>
        <form>
          <input ref={iUserName} type="text" placeholder="Nome" required />
          <input ref={iUserAge} type="number" placeholder="Idade" required />
          <button onClick={(e) => handleAddUser(e)}>Add</button>
        </form>
      </section>
      <section className="Users">
        <h1>Lista de Usuários</h1>
        {users.map((user, index) => (
          <User key={index} name={user.name} age={user.age} />
        ))}
      </section>
    </div>
  );
};

export default App;
