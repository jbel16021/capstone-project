"use client";
import React, { useEffect, useState } from "react";
import SingleInstagram from "./SingleInstragram";
import SectionHeader from "../Common/SectionHeader";
import supabase from "utils/supabaseClient"; // Adjust the path to match your project structure

const Instagram = () => {
  const [instagramData, setInstagramData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramData = async () => {
      const { data, error } = await supabase
        .from("instagram_data")
        .select("*")
        .order("id", { ascending: true })
        .limit(3); // Fetch only 3 Instagram cards
      if (error) {
        console.error("Error fetching Instagram data:", error);
      } else {
        setInstagramData(data);
      }
      setLoading(false);
    };

    fetchInstagramData();
  }, []);

  return (
    <section id="instagram" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "Regístrate para mi Coaching",
            subtitle: "¿Cuál es tu objetivo principal de fitness?",
            description: `¿Estás listo para desbloquear la mejor versión de ti mismo? Este es tu momento para elevarte por encima de lo ordinario y romper cada límite que hayas establecido. Ya sea que busques ganar fuerza, perder peso o redefinir tu cuerpo, mi coaching está diseñado para impulsar tu transformación en cada paso del camino. Con la mentalidad correcta, orientación experta y apoyo inquebrantable, no hay nada que no puedas lograr. No solo sueñes con tu potencial—abrázalo y hazlo realidad. Vamos a tomar acción juntos y convertir tus objetivos de fitness en resultados de los que te sientas orgulloso. Aquí es donde comienza tu camino hacia la grandeza. ¡Vamos a arrasarlo!`,
          }}
        />

        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5 place-items-center px-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            instagramData.map((feature, key) => (
              <SingleInstagram feature={feature} key={key} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
