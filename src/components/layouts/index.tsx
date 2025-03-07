import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../partials";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
