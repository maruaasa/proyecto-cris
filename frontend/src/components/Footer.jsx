import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">

                    <div className="footer-brand-top">

                        <img
                            src="/images/logo.jpg"
                            alt="SSM"
                            className="footer-logo"
                        />

                        <h3>
                            SSM | Asesoría Legal y Recuperación Patrimonial
                        </h3>

                    </div>

                    <p>
                        Somos una plataforma de evaluación de casos que ayuda a
                        personas afectadas por fraude a entender su situación y
                        conocer sus opciones.
                    </p>

                </div>

                <div className="footer-column">

                    <h4>Empresa</h4>

                    <Link to="/">Inicio</Link>

                    <Link to="/nosotros">Nosotros</Link>

                    <Link to="/">Preguntas frecuentes</Link>

                    <Link to="/contacto">Contáctanos</Link>

                </div>

                <div className="footer-column">

                    <h4>Contacto</h4>

                    <p>Av. Insurgentes Sur 1431 , interior Piso14 Oficina 01, Colonia Insurgentes Mixcoac, C.P. 03920, Benito Juárez, Ciudad de México</p>

                    <p>recuperacionasistente@gmail.com</p>

                </div>

            </div>

            <div className="footer-bottom">

                © 2026 SSM | Todos los derechos reservados.

            </div>

        </footer>

    );

}

export default Footer;