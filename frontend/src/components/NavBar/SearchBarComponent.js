import {useState} from "react";

export const SearchBarComponent = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input type="text" placeholder="search for recipes" value={search} onChange={handleSearch}/>
            <button className="search-btn">
            </button>
        </div>
    );
}