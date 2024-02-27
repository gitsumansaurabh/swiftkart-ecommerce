import AdminProductList from "../features/admin/components/AdminProductList";
import NavBar from "../features/navbar/Navbar";

function AdminHome() {
  return (
    <div>
      <NavBar></NavBar>
      <AdminProductList></AdminProductList>
    </div>
  );
}

export default AdminHome;
