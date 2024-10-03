import "../../src/style/pages/Admin.css";
import AdminFrom from "../components/admin/AdminForm";
import AuthService from "../webServices/Auth";

function Admin(): JSX.Element {
  AuthService.isUserLoggedIn().then((res) => {
    if (!res) {
      window.location.href = "/login";
    }
  });

  return (
    <div className="admin_page">
      <AdminFrom />
    </div>
  );
}

export default Admin;
