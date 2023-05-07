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

/**
 * Renderöi kaikkea sivuston sisältöä
 * @returns {JSX.Element} sivuston sisältö
 * @constructor
 */
function App() {
  const [data, setData] = useState([]);
  const [visibleComponent, setVisibleComponent] = useState('Main');

  useEffect(() => {
    posterService.getAll().then((resp) => {
      setData(resp.data);
    });
  }, []);

  /**
   * Renderöi uudet ilmoitukset kun niitä luodaan
   * @param newObj uusi ilmoitus
   */
  const render = (newObj) => {
    console.log(newObj);
    setData([...newObj, ...data]);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main data={data} addToRender={render} />} />>;
          <Route path='/people' element={<People/>}/>
          <Route path='/pets' element={<Pets/>}/>
          <Route path='/sign-in' element={<Login />} />
          <Route path='/registration' element={<RegistrationForm />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
