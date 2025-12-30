import LeftNavbar from "./LeftNavbar";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TopHeader />
      <div className="app-body">
        <LeftNavbar />
        <div id="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
