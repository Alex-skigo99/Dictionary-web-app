import './ToggleSwitch.css';

const ToggleSwitch = ({ chacked, onChange }) => {

    const styleSwitch = {
        margin: "0 20px",
    };

    const handleChange = (e) => {
        onChange(e.target.checked);
    };
    return (
        <label style={styleSwitch} className="switch">
            <input type="checkbox" chacked={chacked} onChange={handleChange} />
            <span className="slider round"></span>
        </label>
    );
};

export default ToggleSwitch;