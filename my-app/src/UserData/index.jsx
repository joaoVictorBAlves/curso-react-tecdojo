import Style from "./UserData.module.css";

const UserData = ({ name, email, phone }) => {
  return (
    <div className={Style.UserData}>
      <h4>Dados do Usuário</h4>
      <hr />
      <br />
      <span>Nome: {name}</span>
      <span>Email: {email}</span>
      <span>Telefone: {phone}</span>
    </div>
  );
};

export default UserData;
