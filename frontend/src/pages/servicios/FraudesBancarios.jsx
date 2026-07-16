function FraudeBancario() {

    return (

        <main className="service-page">

            <section className="service-banner">

                <img
                    src="/images/bancario.jpg"
                    alt="Fraude Bancario"
                />

                <div className="banner-content">

                    <h1>
                        Fraudes Bancarios
                    </h1>

                    <p>

                        Brindamos orientación para personas afectadas por
                        movimientos bancarios no reconocidos, transferencias
                        fraudulentas, cargos indebidos y otras situaciones
                        relacionadas con instituciones financieras.

                    </p>

                </div>

            </section>



            <section className="service-content">

                <h2>
                    ¿Qué es un fraude bancario?
                </h2>

                <p>

                    Se presenta cuando una persona pierde dinero debido a
                    operaciones financieras realizadas sin autorización,
                    engaños telefónicos, clonación de tarjetas, phishing o
                    accesos indebidos a cuentas bancarias.

                </p>


                <h2>
                    Cómo identificar el patrón
                </h2>

                <ul>

                    <li>Transferencias desconocidas.</li>

                    <li>Compras que nunca realizaste.</li>

                    <li>Llamadas solicitando códigos bancarios.</li>

                    <li>Correos falsos del banco.</li>

                    <li>Bloqueo inesperado de cuentas.</li>

                </ul>


                <h2>
                    Posibles acciones legales
                </h2>

                <p>

                    Dependiendo del caso pueden existir mecanismos de
                    reclamación ante instituciones financieras, denuncias
                    correspondientes y procesos de seguimiento.

                </p>


                <h2>
                    ¿Por qué elegirnos?
                </h2>

                <div className="benefits-grid">

                    <div className="benefit-card">

                        <h3>
                            Atención personalizada
                        </h3>

                        <p>

                            Cada caso es analizado de forma individual.

                        </p>

                    </div>

                    <div className="benefit-card">

                        <h3>
                            Confidencialidad
                        </h3>

                        <p>

                            Toda la información se maneja de forma privada.

                        </p>

                    </div>

                    <div className="benefit-card">

                        <h3>
                            Seguimiento
                        </h3>

                        <p>

                            Acompañamiento durante el proceso.

                        </p>

                    </div>

                </div>

            </section>



            <section className="faq-service">

                <h2>

                    Preguntas frecuentes

                </h2>

                <div className="faq-item">

                    <h3>

                        ¿Qué documentos necesito?

                    </h3>

                    <p>

                        Estados de cuenta, comprobantes, capturas y cualquier
                        evidencia disponible.

                    </p>

                </div>

                <div className="faq-item">

                    <h3>

                        ¿Puedo solicitar ayuda si el fraude ocurrió hace meses?

                    </h3>

                    <p>

                        Sí. Cada situación es evaluada de forma individual.

                    </p>

                </div>

            </section>



            <section className="contact-service">

                <h2>

                    Solicita asesoría

                </h2>

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
                        placeholder="Número telefónico"
                    />

                    <input
                        type="number"
                        placeholder="Monto estimado perdido"
                    />

                    <textarea
                        placeholder="Descripción del caso (opcional)"
                    />

                    <button>

                        Solicitar asesoría

                    </button>

                </form>

            </section>

        </main>

    );

}

export default FraudeBancario;