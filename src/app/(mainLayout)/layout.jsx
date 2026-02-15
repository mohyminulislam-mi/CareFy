import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
