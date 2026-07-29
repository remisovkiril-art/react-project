const Menu = () => {
    return (
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc", display: "flex", gap: "10px" }}>
            <a href="/">Categories</a>
            <a href="/products">Products</a>
            <a href="/contacts">Contacts</a>
        </nav>
    );
};

export default Menu;