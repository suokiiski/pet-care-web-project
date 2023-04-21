import Main from "./components/Main";
import ArticleList from "./components/ArticleList";

import data from "./data.json";
function App() {
  return (
    <Main>
      <ArticleList items={data} />
    </Main>
  );
}

export default App;
