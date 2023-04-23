//components
import Main from "./components/Main";
import Header from "./components/header";
import Footer from './components/footer'
import posterService from './services/posters'
import logo from './logo.svg';
//styles
import './App.css';
//data
//import data from "./data.json";

import { useState, useEffect } from 'react';



function App() {
    const[data, setData] = useState([]);

    useEffect(() => {
        posterService
            .getAll()
            .then(resp => {
                setData(resp.data);
            });
    }, [])

    console.log(data);
  return (
    <div className="App">
        <Header/>
        <Main data={data} />;
      <Footer />
    </div>
  );
}

export default App;
