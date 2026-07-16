import { Link } from "react-router-dom";

function Servicios() {

    const servicios = [

        {
            titulo: "Fraudes Bancarios",
            imagen: "/imagenes/bancario.jpg",
            descripcion: "Orientación para casos relacionados con cargos no reconocidos, transferencias indebidas y movimientos bancarios sospechosos.",
            ruta: "/servicios/fraudes-bancarios"
        },

        {
            titulo: "Fraudes Digitales",
            imagen: "/imagenes/digital.jpg",
            descripcion: "Apoyo para personas afectadas por engaños mediante redes sociales, sitios web falsos y plataformas digitales.",
            ruta: "/servicios/fraudes-digitales"
        },

        {
            titulo: "Robo de Identidad",
            imagen: "/imagenes/identidad.jpg",
            descripcion: "Asesoría cuando terceros utilizan información personal para realizar actividades sin autorización.",
            ruta: "/servicios/robo-identidad"
        },

        {
            titulo: "Estafas de Inversión",
            imagen: "/imagenes/inversion.jpg",
            descripcion: "Orientación frente a inversiones fraudulentas y promesas de ganancias irreales.",
            ruta: "/servicios/estafas-inversion"
        },

        {
            titulo: "Estafas Románticas",
            imagen: "/imagenes/romantica.jpg",
            descripcion: "Apoyo en casos donde una relación falsa fue utilizada para obtener dinero o información personal.",
            ruta: "/servicios/estafas-romanticas"
        },

        {
            titulo: "Estafas Piramidales",
            imagen: "/imagenes/piramidal.jpg",
            descripcion: "Información y orientación sobre esquemas piramidales y modelos de inversión fraudulentos.",
            ruta: "/servicios/estafas-piramidales"
        }

    ];

    return (

        <main className="servicios">

            <section className="titulo-servicios">

                <h1>
                    Áreas de práctica
                </h1>

                <p>
                    Nuestro equipo se especializa en las formas mas complejas de delitos financieros digitales y bancarios .
                </p>

            </section>


            <section className="contenedor-servicios">

                {

                    servicios.map((servicio, index) => (

                        <article
                            className="tarjeta-servicio"
                            key={index}
                        >

                            <img
                                src={servicio.imagen}
                                alt={servicio.titulo}
                            />

                            <h2>
                                {servicio.titulo}
                            </h2>

                            <p>
                                {servicio.descripcion}
                            </p>

                            <Link
                                to={servicio.ruta}
                                className="boton-servicio"
                            >
                                Conocer más
                            </Link>

                        </article>

                    ))

                }

            </section>

        </main>

    );

}

export default Servicios;