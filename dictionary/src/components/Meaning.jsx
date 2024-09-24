const Meaning = ({ meaning }) => {

    const styleMeaning = {
        padding: "1rem",
    };

    return (
        <div style={styleMeaning}>
            <div>
                <h3>{meaning.partOfSpeech}</h3>
                <hr />
            </div>
            <h3 style={{ color: "var(--text-secondary-color)", fontWeight: "normal" }}>Meaning</h3>
            <ul>
                {meaning.definitions && meaning.definitions.map((definition, index) => {
                    return (
                        <li key={index}>
                            <p>{definition.definition}</p>
                            {definition.example && <p style={{ color: "var(--text-secondary-color)", fontStyle: "italic" }}>"{definition.example}"</p>}
                        </li>
                    );
                })}
            </ul>
            <p>
                <span style={{ color: "var(--text-secondary-color)", marginRight: "2rem" }}>Synonyms</span>
                {meaning.synonyms && <span style={{ color: "var(--primary-color)" }}>{meaning.synonyms.join(", ")}</span>}
            </p>
            <p>
                <span style={{ color: "var(--text-secondary-color)", marginRight: "2rem" }}>Antonyms</span>
                {meaning.antonyms && <p style={{ color: "var(--primary-color)" }}>{meaning.antonyms.join(", ")}</p>}
            </p>
        </div>
    );
};

export default Meaning;