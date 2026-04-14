import { Outlet } from "react-router-dom";
import Navbar from "../screens/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;