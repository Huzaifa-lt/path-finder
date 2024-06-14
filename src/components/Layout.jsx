import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./main";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className=" main">
        <Header />
        <Main />
        {/* {children} */}
      </main>
    </>
  );
};

export default Layout;
