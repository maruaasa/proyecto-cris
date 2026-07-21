import { FaUser, FaEnvelope, FaPhoneAlt, FaDollarSign, FaLock, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import SobreNosotros from "../components/SobreNosotros";
import Proceso from "../components/Proceso";
import ServiciosHome from "../components/ServiciosHome";
import PorqueElegirnos from "../components/PorqueElegirnos";
import Beneficios from "../components/Beneficios";
import Testimonios from "../components/Testimonios";
import FAQ from "../components/FAQ";
import { FaWhatsapp } from "react-icons/fa";

import {
    PhoneInput
} from 'react-international-phone';

import 'react-international-phone/style.css';


function Home() {

    return (

        <main>
            <header className="hero-navbar">

    <div className="hero-logo">

        <img
             src="/images/logo.jpg"
            alt="Logo"
        />

        <h2>SSM|Asesoria Legal y Recuperacion Patrimonial</h2>

    </div>

    <nav>

        <a href="/">Inicio</a>

        <a href="/servicios">Servicios</a>

        <a href="/contacto">Contacto</a>

    </nav>

</header>

            <section className="hero">

                <div className="hero-text">

                    <h1 className="hero-title">
                        ¿FUISTE VÍCTIMA DE UNA ESTAFA?
                    </h1>

                    <h2 className="hero-subtitle">
                        RECUPERE SUS PÉRDIDAS
                    </h2>

                    <p>
                       Actua ahora antes de que sea tarde. Expertos en rastreo de activos digitales, SPEI,brokers no regulados y estafas en linea. Tecnologia avanzada y estrategias inteligentes para recuperar lo que te correspnde .
                    </p>

                    <h3 className="hero-free">
                        ¡CONSULTA GRATUITA HOY MISMO!
                    </h3>

                    <div className="hero-info">

                        <div className="rating-card">
                            <div className="stars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <h4>4.9</h4>
                            <p>Basado en +500 reseñas</p>
                        </div>

                        <div className="money-card">
                            <FaDollarSign className="money-icon"/>
                            <h4>+$50 M</h4>
                            <p>Recuperados para víctimas</p>
                        </div>

                    </div>

                </div>

                <form className="contact-form">

                    <h2>RECUPERE SUS PÉRDIDAS</h2>

                    <p>Solicite una revisión de caso sin costo hoy mismo.</p>

                    <div className="input-group">
                        <FaUser />
                        <input type="text" placeholder="Nombre completo"/>
                    </div>

                    <div className="input-group">
                        <FaEnvelope />
                        <input type="email" placeholder="Correo electrónico"/>
                    </div>

                <div className="phone-row">

    <PhoneInput
        defaultCountry="mx"
    />


</div>

                    <div className="input-group">
                        <FaDollarSign />
                        <input type="number" placeholder="Monto aproximado perdido(USD)"/>
                    </div>

                    <details className="comments-box">
                        <summary>Agregar comentarios adicionales (Opcional)</summary>
                        <textarea placeholder="Describa brevemente su caso"></textarea>
                    </details>

                    <button type="submit">
                        Solicitar Evaluación Gratuita
                    </button>

                    <small className="secure">
                        <FaLock /> Información encriptada
                    </small>

                </form>

            </section>

            <SobreNosotros />
            <ServiciosHome />
            <Proceso />
            <PorqueElegirnos />
            <Beneficios />
            <Testimonios />
           <FAQ />

<Footer />
<a
    className="whatsapp-button"
    href="https://wa.me/5663820152"
    target="_blank"
    rel="noopener noreferrer"
>
    <FaWhatsapp />
</a>

</main>

    );

}

export default Home;
