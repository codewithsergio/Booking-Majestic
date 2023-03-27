import NavBar from "./NavBar";
import Footer from "./Footer";
import Clients from "./Clients";
import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";
import ScrollToTop from "./reusable/ScrollToTop";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <ScrollToTop />
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Clients />
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
