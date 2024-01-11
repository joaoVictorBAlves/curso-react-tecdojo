const Form = () => {
  function handleSubmit(e) {
    // Isso impede que o submit faça uma requisição padrão
    e.preventDefault();
    const name = document.getElementById("iName");
    const age = document.getElementById("iAge");
    console.log(name.value, age.value);
  }

  return (
    <div>
      <h3>Formulário</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input id="iName" type="text" placeholder="Escreva seu nome" />
        <br />
        <input id="iAge" type="number" placeholder="Digite sua idade" />
        <br />
        <br />
        {/* Por padrão é executado o evento onSubmit */}
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
