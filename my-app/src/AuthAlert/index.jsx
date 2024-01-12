import Style from "./AuthAlert.module.css";

const AuthAlert = () => {
  return (
    <div className={Style.AuthAlert}>
      <span>Usuário precisa se autenticar</span>
    </div>
  );
};

export default AuthAlert;
