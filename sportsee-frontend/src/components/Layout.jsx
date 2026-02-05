/**
 * Layout component that wraps the main page structure with header, sidebar, and content.
 */

import LeftNavbar from "./LeftNavbar";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router-dom";

/**
 * Renders the common layout used across the application pages.
 *
 * @returns {JSX.Element}
 */
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


