import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Title from "../components/Title";
import Meaning from "../components/Meaning";
import Footer from "../components/Footer";

const MainPage = () => {
    const [data, setData] = useState(undefined);

    const handleSearch = (word) => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
            .then((response) => response.json())
            .then((data) => setData(data[0]));
    };

    console.log('mainPage-data-', data);
    return (
        <>
            <Header />
            <Search onSearch={handleSearch} />
            {data !== undefined ? <>
                <Title data={data} />
                {data.meanings && data.meanings.map((meaning, index) => {
                    return <Meaning key={index} meaning={meaning} />
                })}
                <Footer source={data.sourceUrls[0]} />
            </>
                : <h1 style={{ textAlign: "center", marginTop: "2rem" }}>No data found</h1>}
        </>
    );
};

export default MainPage;