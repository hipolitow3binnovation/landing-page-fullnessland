import React from "react";
import table from "../assets/table.png";

const Feature = () => {
  return (
    <section className="py-12 h-fit bg-lime-950">
      <div className="container flex flex-col items-center justify-center gap-8 p-12 mx-auto text-white h-fit bg-lime-900">
        <header>
          <h2 className="text-xl font-bold text-center md:text-2xl lg:text-4xl">ADQUIERE TUS LOTES</h2>
          <p className="mt-2 text-base font-normal text-center md:text-lg">
            Aprovecha la tendencia alcista del sector inmobiliario en Cancún
          </p>
        </header>
        <img
          src={table}
          alt="Tabla de planes de lotes"
          className="object-contain w-full"
        />
        <div>
          <p className="font-serif text-base md:text-lg lg:text-xl">- CON PLANES DE PAGO -</p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
