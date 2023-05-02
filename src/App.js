//components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Pets from "./components/Pets";
import People from "./components/People";
import RegistrationForm from "./components/registrationForm";
import Login from "./components/login";
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

  const handleLoginButtonClick = () => {
    setVisibleComponent('Login')
  };


  useEffect(() => {
    posterService.getAll().then((resp) => {
      setData(resp.data);
    });
  }, []);

  const render = (newObj) => {
    console.log(newObj);
    setData([...newObj, ...data]);
  };

  return (
    <div className="App">
      <Header onMainButtonClick={handleMainButtonClick} onPeopleButtonClick={handlePeopleButtonClick} onPetsButtonClick={handlePetsButtonClick} onLoginButtonClick={handleLoginButtonClick}/>
      {visibleComponent === 'Main' ? (
          <Main data={data} addToRender={render}/>
      ) : visibleComponent === 'People' ? (
          <People data={data} addToRender={render} />
      ) : visibleComponent === 'Pets' ? (
          <Pets data={data} addToRender={render} />
      ) : (
          <Login data={data} addToRender={render} />
      )}
      <Router>
        <Routes>
          <Route path='/registration' element={<RegistrationForm />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
