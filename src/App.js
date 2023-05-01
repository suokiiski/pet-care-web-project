//components
import Main from "./components/Main";
import Pets from "./components/Pets";
import People from "./components/People";
import Header from "./components/header";
import Footer from "./components/footer";
import posterService from "./services/posters";
//styles
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [visibleComponent, setVisibleComponent] = useState('Main');

  const handleMainButtonClick = () => {
    setVisibleComponent('Main');
  }
  const handlePeopleButtonClick = () => {
    setVisibleComponent('People');
  };

  const handlePetsButtonClick = () => {
    setVisibleComponent('Pets');
  };

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
      <Header onMainButtonClick={handleMainButtonClick} onPeopleButtonClick={handlePeopleButtonClick} onPetsButtonClick={handlePetsButtonClick} />
      {visibleComponent === 'Main' ? (
          <Main data={data} addToRender={render} onPeopleButtonClick={handlePeopleButtonClick} onPetsButtonClick={handlePetsButtonClick}/>
      ) : visibleComponent === 'People' ? (
          <People data={data} addToRender={render} />
      ) : (
          <Pets data={data} addToRender={render} />
      )}      <Footer />
    </div>
  );
}

export default App;
