import Head from "next/head";
import React from "react";
import Footer from "../Footer";
import { Navbar } from "../Navigation/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>LogiQuick</title>
      </Head>
      <navbar>
        <Navbar />
      </navbar>

      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
