import React from "react";

const Menu = (): React.JSX.Element => {
    return (
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <a href="/">Categories</a>{" | "}
            <a href="/products">Products</a>{" | "}
            <a href="/contacts">Contacts</a>{" | "}
            <a href="/about">About</a>
        </nav>
    );
};

export default Menu;
