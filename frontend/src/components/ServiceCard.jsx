function ServiceCard({titulo, descripcion}){


    return (

        <div className="card">


            <h3>
                {titulo}
            </h3>


            <p>
                {descripcion}
            </p>


            <button>
                Más información
            </button>


        </div>

    );


}


export default ServiceCard;