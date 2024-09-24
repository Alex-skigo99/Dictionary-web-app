import { useRef } from 'react';

const Search = ({ onSearch }) => {
    const inputRef = useRef();

    const styleForm = {
        display: "flex",
        width: "100%",
        height: "40px",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
        borderRadius: "10px",
        border: "none",
        outline: "none",
        paddingLeft: "20px",
        color: "var(--text-color)",
        backgroundColor: 'var(--background-secondary-color)',
    };
    const styleInput = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        border: "none",
        outline: "none",
        fontSize: "16px",
        backgroundColor: 'transparent',
        color: "var(--text-color)",
        fontFamily: "var(--primary-font)",
    };
    const styleButton = {
        backgroundColor: "transparent",
        cursor: "pointer",
        border: "none",
        marginRight: "10px",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('input word-', inputRef.current.value);
        // inputRef.current.value && onSearch(inputRef.current.value);
        if (inputRef.current.value) {
            onSearch(inputRef.current.value);
        } else {
            console.log('Please enter a word');
            alert('Please enter a word');
        }
    };

    return (
        <form style={styleForm} onSubmit={handleSubmit}>
            <input style={styleInput} type="text" ref={inputRef} placeholder="Search for a word" />
            <button type="submit" style={styleButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" backgroundColor="var(--primary-color)">
                    <path fill="none" stroke="#A445ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z" />
                </svg>
            </button>
        </form>
    );
};

export default Search;