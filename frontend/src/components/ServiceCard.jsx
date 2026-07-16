import { Link } from "react-router-dom";


function ServiceCard({titulo, descripcion, ruta, icono}){


    return (

        <div className="card">


            <div className="card-icon">

                {icono}

            </div>


            <h3>
                {titulo}
            </h3>


            <p>
                {descripcion}
            </p>



            <Link to={ruta}>

                <button>
                    Conocer más
                </button>

            </Link>


        </div>

    );

}


export default ServiceCard;