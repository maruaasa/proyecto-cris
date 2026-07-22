import React from "react";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaQuestionCircle,
    FaWhatsapp,
    FaLock,
    FaBolt,
    FaBalanceScale
} from "react-icons/fa";

import {
    PhoneInput
} from "react-international-phone";

import "react-international-phone/style.css";

import "../style/Contacto.css";


function Contacto(){

    return(

        <>


        {/* HERO */}

        <section className="contact-hero">

            <span>
                Contáctanos
            </span>


            <h1>
                Estamos Aquí Para Ayudarte
            </h1>


            <p>
                Sabemos que enfrentar un fraude es estresante.
                Nuestro equipo está listo para escucharle,
                resolver sus dudas y ofrecerle una estrategia
                clara para recuperar su patrimonio.
            </p>


        </section>





        {/* CONTENIDO PRINCIPAL */}


        <section className="contact-section">



            {/* COLUMNA IZQUIERDA */}


            <div className="contact-info">



                <div className="contact-card">


                    <h3>
                        Información de contacto
                    </h3>



                    <div className="contact-item">

                        <FaPhoneAlt/>

                        <p>
                            Teléfono
                            <br/>
                            5663820152
                        </p>

                    </div>




                    <div className="contact-item">

                        <FaEnvelope/>

                        <p>
                            Correo electrónico
                            <br/>
                            recuperacionasistente@gmail.com
                        </p>

                    </div>




                    <div className="contact-item">

                        <FaMapMarkerAlt/>

                        <p>
                            Dirección
                            <br/>
                           Av. Insurgentes Sur 1431 , interior Piso14 Oficina 01, Colonia Insurgentes Mixcoac, C.P. 03920, Benito Juárez, Ciudad de México
                        </p>

                    </div>


                </div>







                <div className="contact-card">


                    <h3>
                        Horario de atención
                    </h3>



                    <div className="contact-item">


                        <FaClock/>


                        <p>

                            Lunes a viernes
                            <br/>
                            9:00 AM - 6:00 PM

                            <br/>
                            <br/>

                            Sábados y Domingos
                            <br/>
                            Cerrado

                        </p>


                    </div>


                </div>







                <div className="contact-card">


                    <h3>
                        Preguntas frecuentes
                    </h3>



                    <div className="contact-item">


                        <FaQuestionCircle/>


                        <p>
                            Consulta las dudas más comunes
                            sobre nuestro proceso.
                        </p>


                    </div>



                    <a href="/preguntas-frecuentes">

                        Ver preguntas frecuentes

                    </a>


                </div>



            </div>









            {/* COLUMNA DERECHA */}



            <div className="contact-right">





                <div className="contact-form">


                    <h2>
                        Solicita orientación
                    </h2>


                    <p>
                        Cuéntanos tu situación y recibe una evaluación inicial de tu caso.
                    </p>




                    <form>



                        <input

                            type="text"

                            placeholder="Nombre completo"

                        />





                        <input

                            type="email"

                            placeholder="Correo electrónico"

                        />






                        <PhoneInput

                            defaultCountry="mx"

                            placeholder="Número telefónico"

                        />







                        <select defaultValue="">


                            <option value="" disabled>

                                Selecciona tipo de fraude

                            </option>


                            <option>
                                Fraude financiero
                            </option>


                            <option>
                                Fraude digital
                            </option>


                            <option>
                                Robo de identidad
                            </option>


                            <option>
                                Estafa de inversión
                            </option>


                            <option>
                                Otro
                            </option>


                        </select>







                        <input

                            type="number"

                            placeholder="Monto estimado de pérdida"

                        />







                        <textarea

                            placeholder="Cuéntanos brevemente qué ocurrió (opcional)"

                        />







                        <button type="submit">

                            Enviar solicitud

                        </button>




                    </form>



                </div>







                {/* TARJETAS DE CONFIANZA */}



                <div className="trust-cards">



                    <div className="trust-card">


                        <FaLock className="trust-icon"/>


                        <h3>
                            100% Confidencial
                        </h3>


                        <p>
                            Secreto profesional garantizado
                        </p>


                    </div>






                    <div className="trust-card">


                        <FaBolt className="trust-icon"/>


                        <h3>
                            Respuesta Rápida
                        </h3>


                        <p>
                            Máximo 24 horas
                        </p>


                    </div>







                    <div className="trust-card">


                        <FaBalanceScale className="trust-icon"/>


                        <h3>
                            Abogados Certificados
                        </h3>


                        <p>
                            Cédulas profesionales vigentes
                        </p>


                    </div>



                </div>




            </div>



        </section>









        {/* MAPA */}



        <section className="map-section">


            <div className="map-card">


                <h2>
                    Nuestra ubicación
                </h2>



                <iframe

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.988220954311!2d-99.1805856!3d19.3696627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8fb16760b3%3A0x17b400867860f7f2!2sIZA%20Business%20Centers%20IS1431!5e0!3m2!1ses-419!2smx!4v1784759505501!5m2!1ses-419!2smx"

                    width="100%"

                    height="400"

                    style={{
                        border:0
                    }}

                    loading="lazy"

                    title="Ubicación SSM"

                ></iframe>



            </div>


        </section>








        {/* WHATSAPP */}



        <a

            className="whatsapp-button"

            href="https://wa.me/5663820152"

            target="_blank"

            rel="noopener noreferrer"

        >

            <FaWhatsapp/>

        </a>



        </>

    );

}


export default Contacto;