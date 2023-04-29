import React from "react";
import Article from "./Article.js";

//ja taas, jos ei toimi on syytä poistaa username
const ArticleList = ({ items }) => (
  <div className="main_container">
    {items.map(({ src, alt, id, name, tel, figcaption, text, cat, nimi, username }) => (
      <Article
        key={id}
        src={src}
        alt={alt}
        figcaption={figcaption}
        text={text}
        nimi={nimi}
        tel={tel}
        cat={cat}
        username={username}
      />
    ))}
  </div>
);
export default ArticleList;
