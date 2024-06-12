import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Main from "./main";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className=" w-full">
        <Header />
        <Main />
        {/* {children} */}
      </main>
    </>
  );
};

export default Layout;
