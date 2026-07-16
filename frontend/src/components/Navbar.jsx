import { Link } from "react-router-dom";


function Navbar(){

    return (

        <header className="navbar">


            <div className="logo">

                [NOMBRE EMPRESA]

            </div>


            <nav>

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


        </header>

    );

}


export default Navbar;