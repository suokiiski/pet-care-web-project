import React from "react";
import Article from "./Article.js";

class ArticleList extends React.Component {
  render() {
    return (
      <div class="main_container">
        {this.props.items.map(
          ({ src, alt, id, nimi, tel, figcaption, text, cat }) => (
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
          )
        )}
      </div>
    );
  }
}
export default ArticleList;
