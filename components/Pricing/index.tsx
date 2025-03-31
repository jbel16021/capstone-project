"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";


const Pricing = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30" id="pricing">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Planes de Precios`,
                subtitle: `Precios Simples`,
                description: `No más complicaciones, no más excusas. Te ofrezco opciones claras y accesibles para que puedas enfocarte en lo que realmente importa: tu transformación. El precio que pagas es una inversión en tu futuro, en tu salud y en tu bienestar. No dejes que los obstáculos financieros te detengan. Con planes flexibles y sin sorpresas, tendrás acceso a todo lo que necesitas para llevar tu rendimiento al siguiente nivel. Este es el momento perfecto para comprometerte con tu éxito. ¡Tu futuro fitness comienza ahora, y está más cerca de lo que piensas!`,
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $10 USD{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /mes
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
              Acceso a la Comunidad y Apoyo Básico
              </h4>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Contenido Exclusivo:</strong> Accede a planes de entrenamiento premium, guías de nutrición y consejos de expertos solo disponibles para los miembros del grupo.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Conexión Comunitaria:</strong> Interactúa, comparte tus avances y celebra tus logros con una red de personas que, como tú, buscan superarse cada día.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Acceso al Grupo Privado de WhatsApp:</strong> Soporte instantáneo, respuestas en tiempo real y un sentido de comunidad constante para mantenerte motivado y enfocado.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">¡Con solo $10 al mes, tendrás acceso a todo lo que necesitas para comenzar a transformar tu cuerpo y tu mente! La comunidad está esperando por ti. ¡No pierdas la oportunidad de ser parte de algo grande!</strong>
                  </li>
                </ul>

              </div>

              <button
                aria-label="Get the Plan button"
                className="group inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white"
                onClick={() => { window.open("https://buy.stripe.com/test_dR68xy64e87AckofZ0", "_blank", "noopener,noreferrer"); }}
              >
                <span className="duration-300 group-hover:text-purple-500">
                Obtén el plan
                </span>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $59 USD{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /mes
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
              Coaching Online Elite + Acceso Total a la Comunidad
              </h4>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Todo lo que ofrece el Paquete 1:</strong> Incluye acceso exclusivo a nuestros grupos privados de Facebook y WhatsApp, contenido premium, planes de entrenamiento personalizados, y soporte constante de la comunidad.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Coaching Personalizado:</strong> Recibe rutinas de entrenamiento hechas a medida para ti, ajustadas a tus metas y nivel de fitness.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Check-ins Mensuales:</strong> Una llamada por video de 30 minutos cada mes para revisar tu progreso, ajustar tus planes y fijar nuevos objetivos que te lleven a la grandeza.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">¡Transforma tu vida con el apoyo, la motivación y la guía que necesitas! Aprovecha este paquete para lograr resultados reales, con contenido exclusivo y atención personalizada. ¡Es tu momento de actuar!</strong>
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white"
                onClick={() => {window.open("https://buy.stripe.com/test_14k5lm0JUgE67045kl", "_blank", "noopener,noreferrer");
                }}
              >
                <span className="duration-300 group-hover/btn:text-purple-500">
                Obtén el plan
                </span>
              </button>
            </div>

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $199 USD{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /mes
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
              Fitness Elite Pack: Transformación Total
              </h4>
              <p></p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Todo lo que ofrece el Paquete 1 y Paquete 2</strong>
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Check-ins Semanales:</strong> Asegúrate de mantener un progreso continuo con interacciones regulares por mensaje, respuestas a tus preguntas y ajustes inmediatos cuando sea necesario.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Orientación Nutricional Completa:</strong> Consejos personalizados de planificación de comidas, junto con recomendaciones de macronutrientes para complementar tu entrenamiento y maximizar tus resultados.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">Responsabilidad Semanal:</strong> Supervisión constante para asegurarte de que te mantienes enfocado en tus objetivos y sigues avanzando, con un sistema de seguimiento efectivo para garantizar tu éxito.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  <strong className="text-white">¡Este es el paquete definitivo para una transformación completa! Con acceso total a todos los recursos y un nivel de apoyo incomparable, estarás más cerca que nunca de alcanzar tu mejor versión. ¡Hazlo ahora y lleva tu viaje de fitness a su máxima expresión!</strong>
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:text-purple-500">
                Obtén el plan
                </span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Pricing;
