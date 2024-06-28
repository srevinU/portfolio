import LoginForm from "../components/admin/LoginForm";
import "../style/pages/Login.css";

function Login(): JSX.Element {
  return (
    <div className="admin_page">
      <LoginForm />
    </div>
  );
}

export default Login;
