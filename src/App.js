//components
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Main from "./components/Main";
import Header from "./components/header";
import Footer from './components/footer'
import RegistrationForm from "./components/registrationForm";
import Login from "./components/login";
import posterService from './services/posters'
import logo from './logo.svg';
//styles
import './App.css';

import { useState, useEffect } from 'react';



function App() {
    const[data, setData] = useState([]);

    useEffect(() => {
        posterService
            .getAll()
            .then((resp) => {
                setData(resp.data);
            });
    }, [])

  const render = (newObj) => {
    console.log(newObj);
    data = [...newObj, ...data];
  };
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<Main data={data} addToRender={render} />} />>;
              <Route path='/sign-in' element={<RegistrationForm />} />
          </Routes>
      </Router>
        <Login />
        <Footer />
    </div>
  );
}

export default App;
