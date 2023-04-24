//components
import Main from "./components/Main";
import Header from "./components/header";
import Footer from './components/footer'
import HeroSection from "./components/Hero";
//styles
import './App.css';
//data
import data from "./data.json";



function App() {

  return (
    <div className="App">
        <Header/>
        <HeroSection/>
        <Main data={data} />;
      <Footer />
    </div>
  );
}

export default App;
