import SideBar from "./nav/SideBar";
import NavBar from "./nav/NavBar";

const MainLayout = ({ children }) => {
 return (
    <>
  <SideBar></SideBar>
  <div id="content">
    <NavBar></NavBar>
        {children}
  </div>

    </>
 );
};

export default MainLayout;