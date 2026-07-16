import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";


function App(){

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route 
          path="/" 
          element={<Home />}
        />

        <Route 
          path="/servicios" 
          element={<Servicios />}
        />

        <Route 
          path="/contacto" 
          element={<Contacto />}
        />

      </Routes>


      <Footer />

    </BrowserRouter>

  );

}


export default App;