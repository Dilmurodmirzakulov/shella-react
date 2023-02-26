import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartModal from "../components/Modals/CartModal";
import FavoritesModal from "../components/Modals/FavoritesModal";
import ProfileModal from "../components/Modals/ProfileModal";
import SearchModal from "../components/Modals/SearchModal";
import ServiceModal from "../components/Modals/ServiceModal";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <SearchModal />
      <ServiceModal />
      <ProfileModal />
      <FavoritesModal />
      <CartModal />
    </div>
  );
}

export default Layout;
