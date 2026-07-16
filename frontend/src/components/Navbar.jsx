import { Link } from "react-router-dom";


function Navbar(){

    return (

        <header className="navbar">


            <div className="navbar-brand">


                <div className="logo-image">

                </div>


                <div className="logo">

                    Grupo de Recuperación

                </div>


            </div>



            <nav className="navbar-links">


                <Link to="/">
                    Inicio
                </Link>


                <Link to="/servicios">
                    Servicios
                </Link>


                <Link to="/contacto">
                    Contacto
                </Link>


            </nav>




            <div className="navbar-action">


                <a 
                    href="tel:+5210000000000"
                    className="call-button"
                >

                    Llamar ahora

                </a>


            </div>


        </header>

    );

}


export default Navbar;