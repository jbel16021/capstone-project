"use client";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30" id="about">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h2 className="text-5xl font-bold text-black dark:text-white mb-4">
              Norma Trejo
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Fundadora de Normiss Fitness
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text */}
            <div className="animate_top">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed text-black dark:text-gray-300 mb-6">
Normiss Fitness es liderado por Norma Trejo, entrenadora de fuerza y acondicionamiento físico desde el 2007 trabajando con educación, pasión y experiencia transformando vidas a través del movimiento, la disciplina y el entrenamiento inteligente. Es Licenciada y Maestra en Educación Física, con una sólida trayectoria como profesora, entrenadora deportiva y líder en programas de salud y bienestar. Maestría en Educación en el Área de Educación Física, Diplomado en Soporte Nutriciónal en Pacientes criticos y otros. Norma no cree en soluciones rápidas ni en modas pasajeras: cree y sabe la enseñanza en el entrenamiento fitness con propósito, disciplina, el saberlo aplicar a uno mismo con trabajo estratégico y fundamentos reales.
                </p>
                <p className="text-base leading-relaxed text-black dark:text-gray-300">
Ha trabajado con mujeres embarazadas, bebés, niños, jóvenes, mujeres, grupos mixtos, adultos mayores en entrenamiento de fuerza, acondicionamiento físico y rendimiento deportivo, su nutrición y motivarles, además de liderar talleres comunitarios de salud tanto en México como en Estados Unidos enseñando hábitos saludables y expandiendose en Latinoámerica. Su enfoque combina ciencia del ejercicio, prevención de lesiones, buenos hábitos y mentalidad fuerte, ofreciendo entrenamientos estructurados, retadores y efectivos. Bilingüe en español e inglés, Norma brinda la confianza, guía y exigencia que necesitas para lograr resultados duraderos, disfrutando el momento y amando tus resultados viviendo una vida con potencial y propósito teniendo salud, bienestar, gozo, sonriendo a tu cuerpo, a la vida y trabajando en tu mejor versión.</p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="animate_top flex justify-center">
              <div className="relative w-full max-w-[400px]">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/brand/norma-trejo-about-me.jpg"
                    alt="Norma Trejo"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
