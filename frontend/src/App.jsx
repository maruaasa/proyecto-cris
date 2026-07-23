import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import ListaNegraBrokers from "./pages/ListaNegraBrokers";

import FraudesBancarios from "./pages/servicios/FraudesBancarios";
import FraudesDigitales from "./pages/servicios/FraudesDigitales";
import RoboIdentidad from "./pages/servicios/RoboIdentidad";
import EstafasInversion from "./pages/servicios/EstafasInversion";
import EstafasRomanticas from "./pages/servicios/EstafasRomanticas";
import EstafasPiramidales from "./pages/servicios/EstafasPiramidales";


function App() {

    return (

        <BrowserRouter>


            <Navbar />


            <Routes>


                <Route
                    path="/"
                    element={<Home />}
                />


                <Route
                    path="/nosotros"
                    element={<Nosotros />}
                />


                <Route
                    path="/servicios"
                    element={<Servicios />}
                />


                <Route
                    path="/servicios/fraudes-bancarios"
                    element={<FraudesBancarios />}
                />


                <Route
                    path="/servicios/fraudes-digitales"
                    element={<FraudesDigitales />}
                />


                <Route
                    path="/servicios/robo-identidad"
                    element={<RoboIdentidad />}
                />


                <Route
                    path="/servicios/estafas-inversion"
                    element={<EstafasInversion />}
                />


                <Route
                    path="/servicios/estafas-romanticas"
                    element={<EstafasRomanticas />}
                />


                <Route
                    path="/servicios/estafas-piramidales"
                    element={<EstafasPiramidales />}
                />
                <Route 
path="/lista-negra-brokers" 
element={<ListaNegraBrokers />}
/>
<Route 
    path="/preguntas-frecuentes" 
    element={<PreguntasFrecuentes />} 
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