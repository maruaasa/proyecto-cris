function Contacto() {

    return (

        <section className="contact">

            <h1>
                Contacto
            </h1>


            <form>

                <input
                    type="text"
                    placeholder="Nombre"
                />


                <input
                    type="email"
                    placeholder="Correo"
                />


                <input
                    type="tel"
                    placeholder="Teléfono"
                />


                <select>

                    <option>
                        Selecciona un servicio
                    </option>

                    <option>
                        Servicio 1
                    </option>

                    <option>
                        Servicio 2
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