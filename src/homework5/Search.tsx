import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const newParams = new URLSearchParams(searchParams);

        if (value) {
            newParams.set("query", value);
        } else {
            newParams.delete("query");
        }

        setSearchParams(newParams);
    };

    return (
        <div style={{ margin: "15px 0" }}>
            <h3>Поиск по категории</h3>
            <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Введите название..."
                style={{ padding: "5px", width: "200px" }}
            />
        </div>
    );
};

export default Search;
