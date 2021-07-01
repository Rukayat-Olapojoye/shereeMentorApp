// import { useEffect } from "react";
// import { useState } from "react";
import { useHistory } from "react-router";

<<<<<<< HEAD
=======




>>>>>>> fb3bb7e4a82a68b5940812236a177a1ed76c35f7
const Search = () => {

    //  const [search, setSearch] = useState("")
    const searchHistory = useHistory();
    // const location = useLocation();

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        searchHistory.replace(`/search?search=${searchValue.toLowerCase()}`)
    }

    return (

        <input
            className="search-input"
            type="text"
            name="search"
            id="search"
            onChange={handleSearch}
            placeholder="'Solape, 'Software Developer', or 'Microsoft'..."
        />

    );

}

export default Search;