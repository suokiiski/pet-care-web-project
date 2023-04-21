import React from "react";
import ArticleList from "./ArticleList";
const data = [
  {
    id: 0,
    src: "https://www.ifolor.fi/content/dam/ifolor/inspire-gallery/FI/kuvauskoulu/lemmikkikuvaus-kissat/nain-otat-hyvia-kuvia-kissastasi.jpg.transform/q60/image.jpg?nain-otat-hyvia-kuvia-kissastasi.jpg",
    alt: "Mirri kuva",
    figcaption: "Mirri, 5v",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, iure?",
    nimi: "Juha Kopa",
    tel: "123-456-7890",
    cat: true,
  },
  {
    id: 1,
    // src: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg",
    alt: "Silver kuva",
    figcaption: "Silver, 1v",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, iure?",
    nimi: "Antti Järvi",
    tel: "000-000-0000",
    cat: false,
  },

  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg",
    alt: "Silver kuva",
    figcaption: "Oscar, 2.5v",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, iure?",
    nimi: "Antti Järvi",
    tel: "000-000-0000",
    cat: false,
  },
];

const Main = () => {
  return (
    <div class="main_container">
      <ArticleList items={data} />
    </div>
  );
};

export default Main;
