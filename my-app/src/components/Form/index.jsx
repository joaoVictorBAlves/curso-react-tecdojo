const Form = () => {
  function handleSubmit(e) {
    // Isso impede que o submit faça uma requisição padrão
    e.preventDefault();
    const name = document.getElementById("iName");
    const phone = document.getElementById("iPhone");
    const email = document.getElementById("iEmail");
    alert(
      `Você acabou de solicitar sua inscrição ${name.value}!\nIremos entrar em contato através de seu email ${email.value} ou telefone ${phone.value}`
    );
  }

  return (
    <div>
      <h3>Solicite a sua inscrição!</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input id="iName" type="text" placeholder="Escreva seu nome" required/>
        <br />
        <input id="iEmail" type="text" placeholder="Escreva seu email" required/>
        <br />
        <input id="iPhone" type="number" placeholder="Digite seu telefone" required/>
        <br />
        <br />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
