import React, { useState } from "react";
import "../style/ListaNegraBrokers.css";


const brokersData = [

    {
        nombre:"Global Trade FX",
        categoria:"Broker No Regulado",
        estado:"lista"
    },

    {
        nombre:"CryptoMina MX",
        categoria:"Esquema Ponzi",
        estado:"lista"
    },

    {
        nombre:"Support-Banamex.com",
        categoria:"Sitio Phishing",
        estado:"lista"
    },

    {
        nombre:"Go4Rex",
        categoria:"Broker No Regulado",
        estado:"lista"
    },

    {
        nombre:"70Trades",
        categoria:"Broker No Regulado",
        estado:"lista"
    },

    {
        nombre:"AMG GPT",
        categoria:"Esquema de Inversión",
        estado:"lista"
    },

    {
        nombre:"Forex Blend",
        categoria:"Broker Forex",
        estado:"lista"
    },

    {
        nombre:"FORTIS IM TRADE",
        categoria:"Plataforma Trading",
        estado:"lista"
    },

    {
        nombre:"Omega Pro",
        categoria:"MLM / Cripto",
        estado:"lista"
    },

    {
        nombre:"Generación Zoe",
        categoria:"Esquema Ponzi",
        estado:"lista"
    },


    {
        nombre:"eToro",
        categoria:"Broker Internacional",
        estado:"precaucion"
    },

    {
        nombre:"IQ Option",
        categoria:"Opciones Binarias",
        estado:"precaucion"
    },

    {
        nombre:"XM Global",
        categoria:"Forex / CFDs",
        estado:"precaucion"
    },

    {
        nombre:"Exness",
        categoria:"Forex / CFDs",
        estado:"precaucion"
    },

    {
        nombre:"Plus500",
        categoria:"CFDs",
        estado:"precaucion"
    }

];



const preguntas = [

    {
       pregunta:"¿Por qué hay brokers en 'Precaución'?",
        respuesta:"Porque algunas plataformas pueden operar internacionalmente, pero requieren verificar regulación, permisos y condiciones antes de invertir."
    },

    {
        pregunta:"¿Cómo puedo denunciar un broker fraudulento?",
        respuesta:"Puedes enviarnos información de la entidad para analizar antecedentes, señales de riesgo y posibles acciones."
    },

    {
        pregunta:"¿Es seguro operar con brokers no regulados en México?",
        respuesta:"Operar con entidades sin regulación comprobable aumenta el riesgo de pérdida patrimonial."
    },

    {
        pregunta:"¿Su broker no aparece aquí?",
        respuesta:"Nuestra base se actualiza constantemente. Puedes solicitar una revisión gratuita."
    }

];




function ListaNegraBrokers(){

    const [busqueda,setBusqueda] = useState("");
    const [filtro,setFiltro] = useState("todos");


    const brokersFiltrados = brokersData.filter((broker)=>{


        const coincideNombre =
        broker.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());


        const coincideFiltro =
        filtro==="todos" ||
        broker.estado===filtro;


        return coincideNombre && coincideFiltro;

    });



    return(

        <main className="lista-brokers">


            {/* HERO */}

            <section className="broker-hero">

                <div>

                    <h1>
                        Lista Negra de Brokers
                    </h1>

                    <p>
                        Consulte nuestra base de datos de entidades financieras 
                        identificadas con señales de riesgo. Proteja su patrimonio 
                        verificando antes de invertir.
                    </p>


                    <button
                    onClick={()=>
                    document
                    .getElementById("reporte")
                    .scrollIntoView()
                    }
                    >
                        Reportar Broker
                    </button>

                </div>

            </section>




            {/* BUSCADOR */}

            <section className="buscador-brokers">


                <h2>
                    Buscar Broker
                </h2>


                <input

                type="text"

                placeholder="Escribe el nombre del broker"

                value={busqueda}

                onChange={(e)=>
                setBusqueda(e.target.value)
                }

                />


            </section>





            {/* FILTROS */}

            <section className="filtros-brokers">


                <button
                className={filtro==="todos" ? "activo":""}
                onClick={()=>setFiltro("todos")}
                >
                    Todos
                </button>


                <button
                className={filtro==="lista" ? "activo":""}
                onClick={()=>setFiltro("lista")}
                >
                    Lista Negra
                </button>


                <button
                className={filtro==="precaucion" ? "activo":""}
                onClick={()=>setFiltro("precaucion")}
                >
                    Precaución
                </button>


            </section>






            {/* TARJETAS */}

            <section className="tarjetas-brokers">


                {
                    brokersFiltrados.map((broker,index)=>(


                        <article
                        className={`broker-card ${broker.estado}`}
                        key={index}
                        >


                            <h3>
                                {broker.nombre}
                            </h3>


                            <span>
                                {broker.categoria}
                            </span>


                            <p>

                            {
                            broker.estado==="lista"
                            ?
                            "⚠️ Entidad con señales de riesgo"
                            :
                            "🔎 Requiere verificar regulación"
                            }

                            </p>


                        </article>


                    ))
                }


            </section>






            {/* FAQ */}

            <section className="faq-brokers">


                <h2>
                    Preguntas frecuentes sobre Brokers
                </h2>


                {
                    preguntas.map((item,index)=>(

                        <article key={index}>

                            <h3>
                                {item.pregunta}
                            </h3>

                            <p>
                                {item.respuesta}
                            </p>

                        </article>

                    ))
                }


            </section>







            {/* FORMULARIO */}

            <section 
            className="reporte-broker"
            id="reporte"
            >


                <div className="reporte-info">


                    <h2>
                        ¿Fuiste víctima de un broker?
                    </h2>


                    <p>
                        Podemos ayudarte a analizar tu caso,
                        revisar información disponible y orientarte
                        sobre los siguientes pasos.
                    </p>


                    <button>
                        Reportar entidad sospechosa
                    </button>


                </div>





                <form className="formulario-broker">


                    <input
                    type="text"
                    placeholder="Nombre completo"
                    />


                    <input
                    type="email"
                    placeholder="Correo electrónico"
                    />


                    <input
                    type="tel"
                    placeholder="Teléfono"
                    />


                    <input
                    type="text"
                    placeholder="Nombre del broker"
                    />


                    <input
                    type="text"
                    placeholder="Monto aproximado"
                    />


                    <textarea
                    placeholder="Cuéntanos tu caso"
                    ></textarea>


                    <button>
                        Enviar caso
                    </button>


                    <small>
                        🔒 Información protegida mediante cifrado 256-bits.
                    </small>


                </form>


            </section>



        </main>

    );

}


export default ListaNegraBrokers;