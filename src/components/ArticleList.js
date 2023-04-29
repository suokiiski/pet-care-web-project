import React from "react";
import Article from "./Article.js";

const ArticleList = ({ items }) => (
  <div className="main_container">
    {items.map(({ src, alt, id, name, tel, figcaption, text, cat, nimi }) => (
      <Article
        key={id}
        src={src}
        alt={alt}
        figcaption={figcaption}
        text={text}
        nimi={nimi}
        tel={tel}
        cat={cat}
      />
    ))}
  </div>
);
export default ArticleList;
