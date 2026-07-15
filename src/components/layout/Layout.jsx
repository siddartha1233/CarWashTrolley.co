import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <WhatsAppButton />

      <Footer />
    </>
  );
};

export default Layout;