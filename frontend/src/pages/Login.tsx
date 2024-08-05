import LoginForm from "../components/admin/LoginForm";
import "../style/pages/Login.css";

function Login({ handlePopin }: { handlePopin: Function }): JSX.Element {
  return (
    <div className="admin_page">
      <LoginForm handlePopin={handlePopin} />
    </div>
  );
}

export default Login;
