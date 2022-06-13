import React from "react";
import Header from "./Header";
import "../style/Layout.css";

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            {children}
        </div>
    )
}

export default Layout;