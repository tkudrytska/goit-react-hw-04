import s from "./SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === "") {
            toast.error('This search field is required.');
            return
        };
        onSubmit(inputValue);
        setInputValue("");
  }

    return (
        <header className={s.container}>
            <form className={s.form} onSubmit={handleSubmit}>
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
                <Toaster />
            </form>
        </header>

    )
}

export default SearchBar