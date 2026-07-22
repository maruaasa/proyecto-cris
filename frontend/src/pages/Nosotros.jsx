import "../style/Nosotros.css";
import { FaShieldAlt, FaClock, FaLock, FaWhatsapp } from "react-icons/fa";

function Nosotros() {

    return (

        <main className="nosotros">

            <section className="nosotros-hero">


                <div className="nosotros-info">


                    <div className="nosotros-badge">

                        <FaShieldAlt className="badge-icon" />

                        Transparencia y claridad

                    </div>


                    <h1 className="nosotros-titulo">


                        <span className="titulo-negro">

                            Conoce grupo SSM:

                        </span>


                        <br />


                        <span className="titulo-verde-frase">

                            Tu punto de defensa ante el fraude.

                        </span>


                    </h1>


                    <p>

                        Somos una plataforma de evaluación de casos que ayuda
                        a personas afectadas por fraude a entender su situación
                        y conocer sus opciones. No somos un despacho de abogados.

                    </p>


                </div>



                <div className="nosotros-imagen">


                    <img
                        src="/images/nosotros.jpg"
                        alt="Grupo SSM"
                    />


                    <span>

                        Orientación clara cuando más la necesitas

                    </span>


                </div>


            </section>
            <section className="mision-section">


                <div className="mision-header">


                    <h2>
                        Nuestra esencia
                    </h2>


                    <p>
                        Conoce los principios que guían cada evaluación
                        y orientación que brindamos.
                    </p>


                </div>



                <div className="mision-grid">


                    <div className="mision-card">

                        <h3>
                            Misión
                        </h3>

                        <p>
                            Brindar apoyo profesional y orientación clara a personas
                            afectadas por fraudes financieros y digitales.
                        </p>

                    </div>



                    <div className="mision-card">

                        <h3>
                            Visión
                        </h3>

                        <p>
                            Ser un referente de confianza en la evaluación y
                            orientación de casos relacionados con fraude.
                        </p>

                    </div>



                    <div className="mision-card">

                        <h3>
                            Valores
                        </h3>

                        <p>
                            Transparencia, confidencialidad, compromiso,
                            profesionalismo y atención personalizada.
                        </p>

                    </div>


                </div>


            </section>
            <section className="proceso-section">


                <div className="proceso-header">

                    <h2>
                        ¿Cómo funciona nuestra evaluación?
                    </h2>


                    <p>
                        Nuestro proceso está diseñado para brindar
                        claridad, análisis y orientación en cada etapa.
                    </p>
                </div>

                <div className="proceso-timeline">


                    <div className="proceso-item activo">


                        <div className="proceso-numero">
                            01
                        </div>


                        <div className="proceso-contenido">

                            <h3>
                                Cuéntanos tu caso
                            </h3>


                            <p>
                                Analizamos la información inicial para comprender
                                la situación y conocer los detalles del caso.
                            </p>
                        </div>
                    </div>
                    <div className="proceso-item">


                        <div className="proceso-numero">
                            02
                        </div>


                        <div className="proceso-contenido">

                            <h3>
                                Revisamos la información
                            </h3>


                            <p>
                                Evaluamos documentos, evidencias y elementos
                                relacionados con la situación presentada.
                            </p>

                        </div>
                    </div>
                    <div className="proceso-item">


                        <div className="proceso-numero">
                            03
                        </div>


                        <div className="proceso-contenido">

                            <h3>
                                Recibes orientación
                            </h3>


                            <p>
                                Te explicamos las opciones disponibles y los
                                siguientes pasos según tu caso.
                            </p>
                        </div>
                    </div>
                    <div className="proceso-item opcional">


                        <div className="proceso-numero">
                            +
                        </div>


                        <div className="proceso-contenido">

                            <span>
                                Opcional
                            </span>


                            <h3>
                                Conexión con un abogado
                            </h3>


                            <p>
                                Si lo deseas, podemos orientarte para continuar
                                con apoyo legal especializado, siempre bajo tu
                                consentimiento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
<section className="formulario-section">
    <div className="formulario-contenedor">

        <div className="formulario-info">
            <h2>
                ¿Listo para recuperar
                la tranquilidad?
            </h2>
            <p>
                Nuestro equipo está listo para
                escuchar tu historia.
            </p>
            <div className="formulario-beneficio">
                <FaClock />
                <span>
                    Respuestas en 24 horas
                </span>
            </div>
            <div className="formulario-beneficio">
                <FaLock />
                <span>
                    Confidencialidad absoluta
                </span>
            </div>
            <div className="formulario-contacto">
                <small>
                    Línea directa
                </small>
                <h3>
                    5663820152
                </h3>
                <p>
                    recuperacionasistente@gmail.com
                </p>
            </div>
        </div>
        <form className="contact-form formulario-card">

            <h2>
                Solicita una evaluación
            </h2>
            <p>
                Cuéntanos tu situación y recibe
                orientación inicial sobre tu caso.
            </p>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Nombre completo"
                />
            </div>
            <div className="input-group">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                />
            </div>
            <div className="input-group">

                <input
                    type="tel"
                    placeholder="Número de contacto"
                />
            </div>
            <div className="input-group">
            <select defaultValue="">

    <option value="" disabled>
        Selecciona tipo de fraude
    </option>
    <option value="financiero">
        Fraude financiero
    </option>
    <option value="digital">
        Fraude digital
    </option>
    <option value="identidad">
        Robo de identidad
    </option>
    <option value="otro">
        Otro
    </option>
</select>
            </div>
            <div className="comments-box">
                <textarea

                    placeholder="Describe brevemente tu situación"
                ></textarea>
            </div>
            <button type="submit">
                Solicitar evaluación
            </button>
            <div className="secure">
                 <FaLock />
                Información protegida y confidencial
            </div>
        </form>
    </div>
</section>
<a 
    href="https://wa.me/5663820152"
    className="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
>

    <FaWhatsapp />

</a>
        </main>

    );

}


export default Nosotros;