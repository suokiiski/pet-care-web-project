import React from "react";
import Article from "./Article.js";

const ArticleList = ({
                       items,
                       deleteArticle,
                       handleOpen,
                       saveOnFavoutires,
                     }) => (
    <div className="main_container">
      {items.map(
          ({ src, alt, id, tel, figcaption, text, cat, omistaja, nimi, username }) => (
              <Article
                  key={id}
                  id={id}
                  src={src}
                  alt={alt}
                  figcaption={figcaption}
                  text={text}
                  omistaja={omistaja}
                  nimi={nimi}
                  tel={tel}
                  cat={cat}
                  deleteArticle={deleteArticle}
                  handleOpen={handleOpen}
                  saveOnFavoutires={saveOnFavoutires}
                  username={username}
              />
          )
      )}
    </div>
);
export default ArticleList;