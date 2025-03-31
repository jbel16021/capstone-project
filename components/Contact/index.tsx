"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    phone_number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [showModal, setShowModal] = useState(false); // Track modal visibility

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true); // Disable the button
    const { data, error } = await supabase.from("contacts").insert([formData]);

    if (error) {
      console.error("Error submitting form:", error.message);
      setIsSubmitting(false); // Re-enable the button if there's an error
    } else {
      console.log("Form submitted successfully:", data);
      setShowModal(true); // Show the confirmation modal
      setFormData({
        full_name: "",
        email: "",
        subject: "",
        phone_number: "",
        message: "",
      }); // Reset the form
    }
  };

  return (
    <>
      <section id="contact" className="flex items-center justify-center px-4 md:px-8 2xl:px-0 min-h-screen">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto w-full max-w-2xl rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:p-15"
          >
            <h2 className="mb-5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2 text-center">
            ¡ÚNETE A MI COACHING Y TRANSFORMA TU VIDA AHORA!
            </h2>
            <p className="mb-10 text-center">Estás a un paso de transformar tu vida. Contáctame hoy mismo para comenzar tu viaje con estrategias personalizadas y apoyo constante. ¡No esperes más, tu mejor versión te está esperando!</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Nombre completo"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Dirección de correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  type="text"
                  name="phone_number"
                  placeholder="Número de teléfono"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                aria-label="Enviar mensaje"
                disabled={isSubmitting} // Disable the button while submitting
                className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-medium text-white duration-300 ease-in-out ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:bg-blackho dark:bg-btndark"
                }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* confirmation modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-black">Message Sent!</h2>
            <p className="mb-6 text-gray-700">Thank you for reaching out. We will get back to you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="rounded bg-primary px-4 py-2 text-white hover:bg-primary-dark"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;