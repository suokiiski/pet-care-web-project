//components
import Main from "./components/Main";
import Header from "./components/header";
import Footer from "./components/footer";
import posterService from "./services/posters";
//styles
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    posterService.getAll().then((resp) => {
      setData(resp.data);
    });
  }, []);

  const render = (newObj) => {
    console.log(newObj);
    data = [...newObj, ...data];
  };
  return (
    <div className="App">
      <Header />
      <Main data={data} addToRender={render} />;
      <Footer />
    </div>
  );
}

export default App;
