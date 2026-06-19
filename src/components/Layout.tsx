import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="contenu">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
