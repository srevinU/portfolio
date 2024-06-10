import LoginForm from "../components/admin/LoginForm";
import "../style/pages/Admin.css";

function Admin(): JSX.Element {
  return (
    <div className="admin_page">
        <LoginForm />
    </div>
  );
}

export default Admin;
