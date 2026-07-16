import { useState } from "react";


function FAQ(){


    const preguntas = [

        {

            pregunta:"¿Qué información necesito para solicitar ayuda?",

            respuesta:"Datos relacionados con el caso, comprobantes, conversaciones, movimientos financieros o cualquier información disponible."

        },


        {

            pregunta:"¿Pueden ayudarme si el fraude ocurrió hace tiempo?",

            respuesta:"Cada situación se analiza individualmente considerando la información disponible y las características del caso."

        },


        {

            pregunta:"¿La asesoría tiene costo?",

            respuesta:"Depende del tipo de atención requerida y del análisis necesario para cada situación."

        },


        {

            pregunta:"¿Qué tipos de fraude atienden?",

            respuesta:"Fraudes bancarios, digitales, robo de identidad, estafas de inversión, románticas y esquemas piramidales."

        },


        {

            pregunta:"¿Cómo puedo contactar al equipo?",

            respuesta:"Puedes responder el formulario de contacto o comunicarte directamente mediante WhatsApp para poder contactar con uno de nuestros asesores."

        },


        {

            pregunta:"¿Qué documentos debo preparar?",

            respuesta:"Identificación, comprobantes de pago, capturas de conversaciones, correos, contratos o cualquier evidencia relacionada."

        }


    ];



    const [activo,setActivo] = useState(null);



    return(

        <section className="faq">


            <h2>
                Preguntas frecuentes
            </h2>



            <div className="faq-container">


                {
                    preguntas.map((item,index)=>(


                        <div 
                            className="faq-item"
                            key={index}
                        >


                            <button

                                className="faq-question"

                                onClick={()=>{

                                    setActivo(
                                        activo === index ? null : index
                                    )

                                }}

                            >

                                {item.pregunta}


                                <span>

                                    {activo === index ? "-" : "+"}

                                </span>


                            </button>



                            {
                                activo === index && (

                                    <div className="faq-answer">

                                        <p>
                                            {item.respuesta}
                                        </p>

                                    </div>

                                )
                            }



                        </div>


                    ))
                }



            </div>



        </section>

    );

}


export default FAQ;