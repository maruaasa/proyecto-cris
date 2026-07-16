function Contacto(){


    return(


        <section className="contact">


            <div className="contact-info">


                <h1>
                    Contacto
                </h1>


                <h2>
                    Grupo de Recuperación
                </h2>


                <p>
                    Atención especializada en casos financieros
                    y digitales.
                </p>


                <p>
                    WhatsApp:
                </p>


                <button>
                    Contactar por WhatsApp
                </button>


                <p>
                    Correo:
                    contacto@grupo-recuperacion.com
                </p>


            </div>




            <form>


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



                <select>


                    <option>
                        Tipo de problema
                    </option>


                    <option>
                        Fraude bancario
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


                </select>



                <textarea
                    placeholder="Mensaje"
                />



                <button>
                    Enviar solicitud
                </button>


            </form>



        </section>


    );


}


export default Contacto;