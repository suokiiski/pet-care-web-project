//styles
import "../styles/Main.css";
import "../styles/Article.css";

const Article = ({ src, alt, nimi, name, tel, text, figcaption, id, cat, username }) => {

    if(username !== localStorage.getItem('login')) {
        return(
            <article className="article" id={id}>
                <figure>
                    <img
                        src={
                            src
                                ? src
                                : "https://previews.123rf.com/images/yuliaglam/yuliaglam1202/yuliaglam120200313/12670415-dog-cat-icon.jpg"
                        }
                        className="article_img"
                        alt={alt}
                    />
                    <figcaption className="article_figcaption">{figcaption}</figcaption>
                </figure>

                <p className="article_text">{text}</p>
                <div className="article_nimi_container">
                    <h2 className="article_nimi">
                        {cat ? "😺" : "🐶"}
                        {nimi} {name}
                    </h2>
                    <a href="tel:123-456-7890" className="article_tel">
                        puh. {tel}
                    </a>
                </div>
            </article>
        )
    }

  return (
    <article className="article" id={id}>
      <figure>
        <img
          src={
            src
              ? src
              : "https://previews.123rf.com/images/yuliaglam/yuliaglam1202/yuliaglam120200313/12670415-dog-cat-icon.jpg"
          }
          className="article_img"
          alt={alt}
        />
        <figcaption className="article_figcaption">{figcaption}</figcaption>
      </figure>

      <p className="article_text">{text}</p>
      <div className="article_nimi_container">
        <h2 className="article_nimi">
          {cat ? "😺" : "🐶"}
          {nimi} {name}
        </h2>
        <a href="tel:123-456-7890" className="article_tel">
          puh. {tel}
        </a>
      </div>
      <div className="article_btn_container">
        <em>If you have any questions, call me.</em>
        <ul>
          <li
            className="edit_btn edit"
            title="you can edit article (opening modal window)"
          >
            <button>&#9998;</button>
          </li>
          <li className="edit_btn bin" title="delete the whole article">
            <button>&#10060;</button>
          </li>
          <li className="edit_btn star" title="save for the future">
            <button>⭐</button>
          </li>
        </ul>
      </div>
    </article>
  );
};

Article.defaultProps = {
  src: "https://previews.123rf.com/images/yuliaglam/yuliaglam1202/yuliaglam120200313/12670415-dog-cat-icon.jpg",
};
export default Article;
