const SelectElem = ({ items, onSelect }) => {

    const styleSelect = {
        width: "120px",
        height: "30px",
        fontFamily: 'var(--primary-font)',
        fontSize: "14px",
        fontWeight: "bold",
        color: "var(--text-color)",
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "1px solid var(--text-color)",
        outline: "none",
        cursor: "pointer",
        marginRight: "20px"
    };

    const handleChange = (event) => {
        onSelect(event.target.value);
    };

    return (
        <select style={styleSelect} id="selectelem" name="selectelem" onChange={handleChange}>
            {items.map((item, idx) => {
                return <option key={idx} value={item}>{item}</option>
            })
            }
        </select>
    );
};

export default SelectElem;