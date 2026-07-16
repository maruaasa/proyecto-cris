function Home(){

    return (

        <main>

            <section className="hero">

                <div className="hero-text">

                    <h1>
                        [NOMBRE DE LA EMPRESA]
                    </h1>

                    <h2>
                        Soluciones profesionales para nuestros clientes
                    </h2>

                    <p>
                        [Descripción principal de la empresa y sus servicios]
                    </p>

                    <button>
                        Solicitar información
                    </button>

                </div>


                <form className="contact-form">

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


                    <textarea
                    placeholder="Escribe tu mensaje"
                    ></textarea>


                    <button>
                        Enviar
                    </button>


                </form>


            </section>



            <section className="about">

                <h2>
                    Sobre nosotros
                </h2>

                <p>
                    [Información de la empresa]
                </p>

            </section>


        </main>

    );

}


export default Home;