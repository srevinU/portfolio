import "../../src/style/pages/Admin.css";
import AdminFrom from "../components/admin/AdminForm";

function Admin(): JSX.Element {
  return (
    <div className="admin_page">
      <AdminFrom />
    </div>
  );
}

export default Admin;
