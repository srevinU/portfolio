import { useEffect } from "react";
import "../../src/style/pages/Admin.css";
import AdminFrom from "../components/admin/AdminForm";
import AuthService from "../webServices/Auth";

function Admin(): JSX.Element {
  const isUserLoggedIn = async () => {
    const res = await AuthService.isUserLoggedIn();
    if (!res) {
      console.log("User not logged in");
      // window.location.href = "/login";
    } else {
      console.log("User logged in");
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <div className="admin_page">
      <AdminFrom />
    </div>
  );
}

export default Admin;
