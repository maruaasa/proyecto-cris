import { Link } from "react-router-dom";

import {
    FaUniversity,
    FaLaptopCode,
    FaUserShield,
    FaChartLine,
    FaHeart,
    FaUsers
} from "react-icons/fa";



function AreasPractica(){


    const areas = [


        {
            icon:<FaUniversity />,
            titulo:"Fraudes Bancarios",
            texto:
            "Analizamos operaciones no reconocidas, transferencias fraudulentas y situaciones relacionadas con SPEI y banca digital.",
            ruta:"/servicios/fraudes-bancarios",
            color:"verde"
        },


        {
            icon:<FaLaptopCode />,
            titulo:"Fraudes Digitales",
            texto:
            "Investigamos engaños realizados mediante plataformas digitales, redes sociales y medios electrónicos.",
            ruta:"/servicios/fraudes-digitales",
            color:"verde-claro"
        },


        {
            icon:<FaUserShield />,
            titulo:"Robo de Identidad",
            texto:
            "Evaluamos casos donde información personal es utilizada para generar afectaciones económicas.",
            ruta:"/servicios/robo-identidad",
            color:"verde-azul"
        },


        {
            icon:<FaChartLine />,
            titulo:"Estafas de Inversión",
            texto:
            "Analizamos oportunidades financieras falsas, brokers fraudulentos y pérdidas patrimoniales.",
            ruta:"/servicios/estafas-inversion",
            color:"verde-oliva"
        },


        {
            icon:<FaHeart />,
            titulo:"Estafas Románticas",
            texto:
            "Investigamos fraudes sentimentales donde la confianza personal es utilizada para obtener recursos.",
            ruta:"/servicios/estafas-romanticas",
            color:"verde-profundo"
        },


        {
            icon:<FaUsers />,
            titulo:"Estafas Piramidales",
            texto:
            "Atendemos casos de esquemas Ponzi y fraudes colectivos que afectan a múltiples personas.",
            ruta:"/servicios/estafas-piramidales",
            color:"verde-suave"
        }


    ];



    return(


        <section className="areas-practica">


            <div className="areas-header">


                <h2>
                    Áreas de práctica
                </h2>


                <p>
                    Soluciones especializadas para diferentes
                    tipos de fraude financiero.
                </p>


            </div>





            <div className="areas-grid">



                {
                    areas.map((area,index)=>(


                        <article
                        className={`area-card ${area.color}`}
                        key={index}
                        >



                            <div className="area-icon">

                                {area.icon}

                            </div>




                            <div className="area-content">


                                <h3>

                                    {area.titulo}

                                </h3>



                                <p>

                                    {area.texto}

                                </p>



                                <Link
                                to={area.ruta}
                                className="area-link"
                                >

                                    Ver detalles →

                                </Link>



                            </div>



                        </article>



                    ))
                }




            </div>



        </section>


    );


}



export default AreasPractica;