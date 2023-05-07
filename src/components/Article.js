//styles
import "../styles/Main.css";
import "../styles/Article.css";

/**
 * Jos käyttäjän käyttäjänimi on sama kuin ilmoituksen tekijän käyttäjän käyttäjänimi, käyttäjä pystyy poistamaan ja muokkaamaan ilmoitusta.
 * Muuten ei pysty
 * @param src lemmikin kuvan osoite
 * @param alt teksti jonka näytetään jos kuva ei toimi
 * @param nimi ilmoittajan nimi
 * @param id ilmoituksen id
 * @param tel ilmoittajan puhelinnumero
 * @param text ilmoituksen teksti
 * @param figcaption teksti kuvan alla
 * @param omistaja onko ilmoittaja lemmikin omistaja (true) tai hoitaja (false)
 * @param cat onko hoidettava lemmikki kissa (true) vai koira (false)
 * @param deleteArticle funktio joka käsittelee ilmoituksen poistamista
 * @param username ilmoittajan käyttäjänimi
 * @param handleOpen hoitaa uuden artikkelin muokkauslomakkeen avaamista
 * @param saveOnFavoutires funktio joka tallentaa ilmoitusta käyttäjän suosikkeihin
 * @returns {JSX.Element} artikkeli jossa poistamis- ja muokkauspainikkeet ovat mukana, jos käyttäjän käyttäjänimi on sama kuin ilmoittajan,
 * tai ilman niitä painikkeita, jos käyttäjänimi ei ole sama
 * @constructor
 */
const Article = ({
  src,
  alt,
  nimi,
  id,
  tel,
  text,
  figcaption,
  omistaja,
  cat,
  deleteArticle,
  username,
  handleOpen,
  saveOnFavoutires,
}) => {

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
                        {cat ? "😺" : "🐶"} {omistaja ? "Omistaja: " : "Hoitaja: "}
                        {nimi}
                    </h2>
                    <a href="tel:123-456-7890" className="article_tel">
                        puh. {tel}
                    </a>
                </div>
                <div className="article_btn_container">
                    <em>If you have any questions, call me.</em>
                    <ul>
                        <li className="edit_btn star" title="save for the future">
                            <button onClick={() => saveOnFavoutires(id)}>⭐</button>
                        </li>
                    </ul>
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
          {cat ? "😺" : "🐶"} {omistaja ? "Omistaja: " : "Hoitaja: "}
          {nimi}
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
            <button onClick={() => handleOpen(id)}>&#9998;</button>
          </li>
          <li className="edit_btn bin" title="delete the whole article">
            <button name="delete" onClick={() => deleteArticle(id)}>
              &#10060;
            </button>
          </li>
          <li className="edit_btn star" title="save for the future">
            <button onClick={() => saveOnFavoutires(id)}>⭐</button>
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
