import s from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === "") return;
        onSubmit(inputValue);
        setInputValue("");
  }

    return (
        <header className={s.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    onChange={e => setInputValue(e.target.value.trim())}
                    value={inputValue}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>

    )
}

export default SearchBar