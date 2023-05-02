import React, { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
//styles
import "../styles/Main.css";
import "../styles/scrollbar.css";




const Pets = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch("API_URL_HERE");
            const data = await response.json();
            setArticles(data.filter(article => article.cat === false));
        };
        fetchArticles();
    }, []);

    return <ArticleList items={articles} />;
};

export default Pets;