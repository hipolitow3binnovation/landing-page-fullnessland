import React from "react";
import logo_fullnessland from "../assets/logo_fullnessland.svg";

const Hero = () => {
  return (
    <section className="min-h-screen h-screen bg-[url('./assets/home.webp')] relative bg-no-repeat bg-cover bg-top bg-fixed">
      <div className="absolute inset-0 w-full h-full backdrop-opacity-10 backdrop-invert bg-black/50"></div>
      <div className="absolute bottom-0 flex flex-col justify-end w-full gap-8 h-fit lg:h-96">
        <div className="flex items-center justify-center">
          <img
            src={logo_fullnessland}
            alt="Logotipo de Fullnessland"
            className="w-64 sm:w-96 md:w-[40rem] object-contain"
          />
        </div>

        <div className="w-full h-full bg-[url('./assets/jungle.webp')] relative bg-no-repeat bg-cover bg-top bg-fixed">
          <div className="absolute inset-0 w-full h-full bg-lime-800/25"></div>
          <div className="relative flex flex-col w-3/4 py-12 mx-auto text-white lg:w-2/4 h-fit lg:flex-row">
            <div className="w-full pb-12 text-base font-normal border-b-2 lg:w-3/5 h-fit md:text-lg lg:pr-12 lg:pb-0 lg:border-r-2 lg:border-b-0">
              <p>
                A la vanguardia endémica se posiciona con 770 hectáreas de alta
                plusvalía en el sector inmobiliario.
              </p>
              <br />
              <p>
                Sé parte de esta ciudad en desarrollo con alto impacto en 4
                comunidades integradas.
              </p>
            </div>

            <div className="flex justify-center w-full pt-12 font-serif text-lg font-normal md:text-2xl lg:w-2/5 h-fit lg:pl-12 lg:pt-0 lg:justify-normal">
              <ul className="flex flex-col gap-4">
                <li>ENDÉMICA</li>
                <li>WELLNESS</li>
                <li>ARTE & CIENCIA</li>
                <li>TECNOLÓGICA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
