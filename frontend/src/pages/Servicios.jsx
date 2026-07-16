import ServiceCard from "../components/ServiceCard";


function Servicios(){


    const servicios = [

        {
            titulo: "Servicio 1",
            descripcion: "[Descripción del servicio]"
        },

        {
            titulo: "Servicio 2",
            descripcion: "[Descripción del servicio]"
        },

        {
            titulo: "Servicio 3",
            descripcion: "[Descripción del servicio]"
        },

        {
            titulo: "Servicio 4",
            descripcion: "[Descripción del servicio]"
        }

    ];



    return (

        <section className="services">


            <h1>
                Nuestros servicios
            </h1>



            <div className="services-grid">


                {
                    servicios.map((servicio, index)=>(

                        <ServiceCard

                            key={index}

                            titulo={servicio.titulo}

                            descripcion={servicio.descripcion}

                        />

                    ))
                }


            </div>


        </section>

    );


}


export default Servicios;