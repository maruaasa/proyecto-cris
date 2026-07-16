function Proceso(){

    const pasos = [

        {
            numero:"01",
            titulo:"Cuéntanos tu caso",
            texto:"Analizamos la información inicial proporcionada para conocer los detalles de la situación."
        },

        {
            numero:"02",
            titulo:"Evaluamos la situación",
            texto:"Revisamos los datos disponibles, documentos y características del posible fraude."
        },

        {
            numero:"03",
            titulo:"Definimos una estrategia",
            texto:"Te orientamos sobre las acciones recomendadas y los siguientes pasos a realizar."
        },

        {
            numero:"04",
            titulo:"Damos seguimiento",
            texto:"Acompañamos el proceso brindando orientación durante las diferentes etapas."
        }

    ];


    return(

        <section className="proceso">

            <h2>
                ¿Cómo funciona nuestro proceso?
            </h2>


            <div className="proceso-grid">

                {
                    pasos.map((paso,index)=>(

                        <div 
                            className="paso"
                            key={index}
                        >

                            <span>

                                {paso.numero}

                            </span>


                            <h3>

                                {paso.titulo}

                            </h3>


                            <p>

                                {paso.texto}

                            </p>


                        </div>

                    ))
                }


            </div>


        </section>

    );

}


export default Proceso;