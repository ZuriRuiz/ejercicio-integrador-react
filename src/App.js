import './App.css';
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { useState} from "react";





const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    setBusqueda(valorDelInput);
  };

  return(
    <div>
      <Nav/>
      <SearchBar
        actualizarInput={handleChange}
        escucharClickDelBoton={handleClick}

      />
      <Section busqueda={busqueda} />
      <Footer/>
    </div>
    
  )
}

export default App