import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const { setSearchQuery } = useSearch();

    const handleSearch = () => {
        setSearchQuery(inputValue.trim().toLowerCase());
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Я шукаю..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSearch}>Знайти</button>
        </div>
    );
};

export default Search;
