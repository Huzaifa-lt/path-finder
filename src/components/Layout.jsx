import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./main";
import Companies from "@/pages/Companies";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className=" main">
        <Header />
        {/* <Main /> */}
        <Companies />
        {/* {children} */}
      </main>
    </>
  );
};

export default Layout;
