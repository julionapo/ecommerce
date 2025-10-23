// pages/Login.jsx
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/protected");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Iniciar sesión</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
