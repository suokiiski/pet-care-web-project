import "../styles/Main.css";

const Article = ({ src, alt, nimi, tel, text, figcaption, id, cat }) => {
  return (
    <article class="article" id={id}>
      <figure>
        <img src={src} alt={alt} />
        <figcaption>{figcaption}</figcaption>
      </figure>

      <p>{text}</p>
      <div class="nimi_container">
        <p class="nimi">
          {cat ? "😺" : "🐶"}&nbsp;
          {nimi}
        </p>
        <a href="tel:123-456-7890" class="tel">
          puh. {tel}
        </a>
      </div>
      <div class="btn_container">
        {/* <em>If you have any questions, call me.</em> */}
        <ul>
          <li
            class="edit_btn"
            title="you can edit article (opening modal window)"
          >
            &#9998;
          </li>
          <li class="edit_btn" title="delete the whole article">
            🗑
          </li>
          <li class="edit_btn" title="save for the future">
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
