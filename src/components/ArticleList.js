import React from "react";
import Article from "./Article.js";

const ArticleList = ({ items, deleteArticle }) => (
  <div className="main_container">
    {items.map(({ src, alt, id, name, tel, figcaption, text, cat, nimi, username }) => (

      <Article
        key={id}
        id={id}
        src={src}
        alt={alt}
        figcaption={figcaption}
        text={text}
        nimi={nimi}
        tel={tel}
        cat={cat}
        deleteArticle={deleteArticle}
        username={username}
      />
    ))}
  </div>
);
export default ArticleList;
