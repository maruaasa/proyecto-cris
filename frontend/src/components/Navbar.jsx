import { Link } from "react-router-dom";


function Navbar(){

    return (

        <header className="navbar">


            <div className="navbar-brand">


                <div className="logo-image">

                    <img 
                        src="/images/logo.jpg"
                        alt="Logo SSM"
                    />

                </div>


                <div className="logo">

                    SSM | Asesoria Legal y Recuperacion Patrimonial

                </div>


            </div>





            <nav className="navbar-links">


                <Link to="/">
                    Inicio
                </Link>


                <Link to="/nosotros">
                    Nosotros
                </Link>


                <Link to="/servicios">
                    Servicios
                </Link>





                {/* RECURSOS */}

                <div className="recursos-menu">


                    <span className="recursos-titulo">

                        Recursos ▾

                    </span>



                    <div className="submenu-recursos">


                        <Link to="/preguntas-frecuentes">

                            Preguntas Frecuentes

                        </Link>



                        <Link to="/lista-negra-brokers">

                            Lista Negra de Brokers

                        </Link>



                    </div>


                </div>





                <Link to="/contacto">

                    Contacto

                </Link>



            </nav>








            <div className="navbar-action">


                <a 
                    href="tel:+5663820152"
                    className="call-button"
                >

                    Consulta

                </a>


            </div>





        </header>

    );

}


export default Navbar;