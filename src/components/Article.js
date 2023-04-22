import "../styles/Main.css";

const Article = ({ src, alt, nimi, tel, text, figcaption, id, cat }) => {
  return (
    <article className="article" id={id}>
      <figure>
        <img
          src={
            src
              ? src
              : "https://previews.123rf.com/images/yuliaglam/yuliaglam1202/yuliaglam120200313/12670415-dog-cat-icon.jpg"
          }
          alt={alt}
        />
        <figcaption>{figcaption}</figcaption>
      </figure>

      <p className="text">{text}</p>
      <div className="nimi_container">
        <h2 className="nimi">
          {cat ? "😺" : "🐶"}&nbsp;
          {nimi}
        </h2>
        <a href="tel:123-456-7890" className="tel">
          puh. {tel}
        </a>
      </div>
      <div className="btn_container">
        {/* <em>If you have any questions, call me.</em> */}
        <ul>
          <li
            className="edit_btn"
            title="you can edit article (opening modal window)"
          >
            <button>&#9998;</button>
          </li>
          <li className="edit_btn" title="delete the whole article">
            🗑
          </li>
          <li className="edit_btn" title="save for the future">
            ⭐
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
