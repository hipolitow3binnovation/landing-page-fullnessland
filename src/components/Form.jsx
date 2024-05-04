import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import moment from "moment";

const Form = () => {
  const [locationInfo, setLocationInfo] = useState({});
  const [browserInfo, setBrowserInfo] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del Formulario");
    console.log(data);
    //alert(JSON.stringify(data));

    const now = moment();
    const fechaActual = now.format("DD-MM-YYYY");
    const horaActual = now.format("HH:mm");

    const dataConFechaYHora = {
      fecha: fechaActual,
      hora: horaActual,
      ...data,
    };

    writeToSheet(dataConFechaYHora);
    reset();
    setFormSubmitted(true);
    setFeedbackMessage("¡Tus datos han sido enviados correctamente!");
    setShowMessage(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFeedbackMessage("");
      setShowMessage(false);
    }, 5000);
  };

  const writeToSheet = async (dataConFechaYHora) => {
    console.log("Datos del FormData en writeToSheet");
    console.log(dataConFechaYHora);

    if (
      Object.keys(locationInfo).length > 0 &&
      Object.keys(browserInfo).length > 0
    ) {
      const userInfo = [
        [
          ...Object.values(dataConFechaYHora),
          ...Object.values(locationInfo),
          ...Object.values(browserInfo),
        ],
      ];

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}write-to-sheet`,
          { data: userInfo }
        );
        //alert(JSON.stringify(userInfo));
        console.log("DATA RESPONSE::::::: ", response.data);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    }
  };

  useEffect(() => {
    // Obtener información de geolocalización
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setLocationInfo({
          ip: data.ip,
          city: data.city,
          region: data.region,
          region_code: data.region_code,
          country: data.country,
          country_name: data.country_name,
          country_code: data.country_code,
          country_capital: data.country_capital,
          postal: data.postal,
          timezone: data.timezone,
          country_calling_code: data.country_calling_code,
          currency: data.currency,
          currency_name: data.currency_name,
          languages: data.languages,
          org: data.org,
        });
      })
      .catch((error) =>
        console.log("Error fetching location information: ", error)
      );

    // Detectar navegador y tipo de dispositivo
    const userAgent = navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    const deviceType = isMobile
      ? /Android/i.test(userAgent)
        ? "Android"
        : "iOS"
      : "Desktop";
    let browser = userAgent.match(/(firefox|msie|chrome|safari|trident)/i);
    browser = browser ? browser[0] : "Other";

    setBrowserInfo({
      navegador: browser,
      tipoDeDispositivo: deviceType,
    });
  }, []);

  return (
    <div>
      <form
        className="flex flex-col gap-4 px-6 py-8 bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <header>
          <h2 className="text-xl font-semibold text-center text-slate-800 md:text-2xl">
            Regístrate
          </h2>
          <p className="my-2 text-base text-center md:text-lg font-base text-slate-600">
            Introduce tu información personal
          </p>
        </header>

        {formSubmitted && showMessage && (
          <div className="px-4 py-3 text-sm font-normal text-center border border-lime-800/50 bg-lime-800/10 text-lime-800 animate-message_feedback">
            {feedbackMessage}
          </div>
        )}

        <div className="flex flex-col gap-8">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              {...register("name", {
                required: {
                  value: true,
                  message: "Ingresa tu nombre",
                },
                pattern: {
                  value: /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ-]{1,80}$/i,
                  message:
                    "El nombre no puede tener números ni carácteres especiales.",
                },
                maxLength: {
                  value: 80,
                  message: "El nombre no puede tener más de 80 carácteres.",
                },
              })}
            />
            <p>
              {errors.name && (
                <span className="text-xs text-red-700">
                  {errors.name.message}
                </span>
              )}
            </p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Correo electrónico"
              {...register("email", {
                required: {
                  value: true,
                  message: "Ingresa tu correo electrónico",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail|icloud)\.(com|es)$/i,
                  message: "Correo electrónico con formato incorrecto.",
                },
              })}
            />
            <p>
              {errors.email && (
                <span className="text-xs text-red-700">
                  {errors.email.message}
                </span>
              )}
            </p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Dirección"
              {...register("address", {
                required: {
                  value: true,
                  message: "Ingresa tu direción",
                },
                maxLength: {
                  value: 160,
                  message: "La dirección no puede tener más de 160 carácteres.",
                },
              })}
            />
            <p>
              {errors.address && (
                <span className="text-xs text-red-700">
                  {errors.address.message}
                </span>
              )}
            </p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Teléfono"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Ingresa tu número de teléfono.",
                },
                pattern: {
                  value: /^\d{10}$/i,
                  message: "El número de teléfono sólo debe tener 10 dígitos.",
                },
              })}
            />
            <p>
              {errors.phone && (
                <span className="text-xs text-red-700">
                  {errors.phone.message}
                </span>
              )}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 mt-4 text-base font-medium text-center text-white transition duration-300 ease-in-out bg-lime-700 hover:bg-lime-800"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
