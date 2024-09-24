const Title = ({ data }) => {
    const styleTitle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
    };
    const styleButton = {
        backgroundColor: 'transparent',
        cursor: 'pointer',
        border: 'none',
    };

    const handlePlay = () => {
        for (let i = 0; i < data.phonetics.length; i++) {
            if (data.phonetics[i].audio === '') {
                continue;
            }
            const audio = new Audio(data.phonetics[i].audio);
            return audio.play();
        }
    };

    return (
        <div style={styleTitle}>
            <div>
                <h1>{data.word}</h1>
                <p className="primary">{data.phonetic}</p>
            </div>
            <div>
                <button style={styleButton} onClick={handlePlay}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd">
                        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" /><path d="M29 27v21l21-10.5z" /></g>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Title;