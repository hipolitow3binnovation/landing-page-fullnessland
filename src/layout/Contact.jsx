import React from "react";
import iso_fullnessland from "../assets/iso_fullnessland.svg";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section className="w-full bg-[url('./assets/jungle.webp')] relative bg-no-repeat bg-cover bg-bottom bg-fixed">
      <div className="absolute inset-0 w-full h-full bg-lime-800/25"></div>
      <div className="container relative flex flex-col justify-center w-full h-full gap-24 py-12 mx-auto text-white lg:gap-0">
        <div className="flex flex-col items-center gap-24 lg:flex-row lg:gap-0 lg:justify-evenly">
          <div className="flex flex-col w-full gap-8 px-4 lg:w-5/12 md:px-16 lg:px-0">
            <div>
              <img
                src={iso_fullnessland}
                alt="Isotipo de Fullnessland"
                className="object-contain w-10 mx-auto"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-base font-normal text-center md:text-lg">
                Sé parte de esta ciudad en desarrollo con alto impacto en 4
                comunidades integradas.
              </p>
              <p className="text-base font-normal text-center md:text-lg">
                A la vanguardia endémica se posiciona con 770 hectáreas de alta
                plusvalía en el sector inmobiliario.
              </p>
              <p className="text-base font-medium text-center md:text-lg">
                ¡Regístrate y un asesor se contactará contigo!
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-8 px-4 lg:w-5/12 md:px-16 lg:px-0">
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
