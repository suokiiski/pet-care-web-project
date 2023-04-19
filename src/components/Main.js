import "../styles/Main.css";

function Main() {
  return (
    <div class="main_container">
      <article class="article">
        <figure>
          <img
            src="https://www.ifolor.fi/content/dam/ifolor/inspire-gallery/FI/kuvauskoulu/lemmikkikuvaus-kissat/nain-otat-hyvia-kuvia-kissastasi.jpg.transform/q60/image.jpg?nain-otat-hyvia-kuvia-kissastasi.jpg"
            alt="Mirri kuva"
          />
          <figcaption>Mirri, 5v</figcaption>
        </figure>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div class="nimi_container">
          <p class="nimi">Juha Kopa</p>
          <a href="tel:123-456-7890" class="tel">
            puh. 123-456-7890
          </a>
        </div>
        <p class="comment_container">
          <em>If you have any questions, add them to the comments.</em>
          <span class="comment_btn">Leave a comment</span>
        </p>
      </article>
    </div>
  );
}
export default Main;
