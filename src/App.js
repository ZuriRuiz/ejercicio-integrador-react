import './App.css';
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";




const App = () => {
  return(
    <div>
      <Nav/>
      <SearchBar/>
      <Section/>
      <Footer/>
    </div>
    
  )
}

export default App
