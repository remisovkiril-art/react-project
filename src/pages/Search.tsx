import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    return (
        <div className="text-sm text-gray-300 p-2 border border-slate-700 rounded">
            Search list {searchParams.get("title")}
            <button
                className="ml-2 bg-blue-500 px-2 py-0.5 rounded text-white"
                onClick={() => setSearchParams({ title: "furniture" })}
            >
                Change
            </button>
            <div className="mt-1">
                <button
                    className="text-xs text-blue-400 underline"
                    onClick={() => navigate(`/subcategories/${searchParams.get("page")}`)}
                >
                    About
                </button>
            </div>
        </div>
    );
};

export default Search;
