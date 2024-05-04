import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-16">
      <div className="flex justify-center gap-4 lg:justify-normal">
        <Link to="https://www.facebook.com/FullnessLand" target="_blank">
          <ion-icon name="logo-facebook" size="large"></ion-icon>
        </Link>
        <Link to="https://www.instagram.com/fullnessland" target="_blank">
          <ion-icon name="logo-instagram" size="large"></ion-icon>{" "}
        </Link>
        <Link
          to="https://api.whatsapp.com/send?phone=5215564405421&text=Hola,%20%C2%BFMe%20puedes%20brindar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20FULLNESSLAND?%20Visit%C3%A9%20la%20p%C3%A1gina%20https://fullnessland.com"
          target="_blank"
        >
          <ion-icon name="logo-whatsapp" size="large"></ion-icon>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <Link to="/aviso-privacidad" target="_blank">
          <p className="text-sm font-light text-center text-white underline underline-offset-4">
            Aviso de privacidad
          </p>
        </Link>
        <p className="text-sm font-light text-center text-white">
          © 2024 FULLNESSLAND. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
