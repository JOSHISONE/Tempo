import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Toast from "./Toast.jsx";
import Container from "./Container.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
  return (
    <>
      <Navbar />
      <main className="w-full flex-1 pb-16 pt-10">
        <Container><Outlet /></Container>
      </main>
      <Footer />
      <Toast />
    </>
  );
}
