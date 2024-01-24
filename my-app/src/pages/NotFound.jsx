import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div>
      <h1>Page not found</h1>
      <p>The {location.pathname} doesn't exist :(</p>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default NotFound;
