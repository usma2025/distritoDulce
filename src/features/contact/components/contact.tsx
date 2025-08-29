// app/contacto/page.tsx
import {
  appetiteProBold,
  quicksandRegular,
  quicksandMedium,
} from "@/lib/fonts";
import {
  FiMapPin,
  FiClock,
  FiPhone,
  FiMail,
  FiInstagram,
} from "react-icons/fi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1
            className={`${appetiteProBold.className} text-3xl md:text-4xl text-gray-800 text-center`}
          >
            Contáctanos
          </h1>
          <p
            className={`${quicksandRegular.className} text-gray-600 text-center mt-2 max-w-2xl mx-auto`}
          >
            Estamos aquí para ayudarte. Visítanos, llámanos o escríbenos.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna izquierda - Información */}
          <div className="space-y-8">
            {/* Ubicación */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2
                className={`${appetiteProBold.className} text-xl mb-4 flex items-center text-gray-800`}
              >
                <FiMapPin className="mr-2" />
                Ubicación
              </h2>
              <div
                className={`${quicksandRegular.className} text-gray-700 space-y-2`}
              >
                <p className="text-lg">Carrera 45 # 20-35</p>
                <p className="text-lg">Local 102</p>
                <p className="text-lg">Medellín, Antioquia</p>
                <p className="text-lg">Colombia</p>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2
                className={`${appetiteProBold.className} text-xl mb-4 flex items-center text-gray-800`}
              >
                <FiClock className="mr-2" />
                Horarios
              </h2>
              <div
                className={`${quicksandRegular.className} text-gray-700 space-y-3`}
              >
                <div>
                  <p className={`${quicksandMedium.className} text-gray-900`}>
                    Lunes a sábado
                  </p>
                  <p className="text-lg">8:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className={`${quicksandMedium.className} text-gray-900`}>
                    Domingos y festivos
                  </p>
                  <p className="text-lg">9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2
                className={`${appetiteProBold.className} text-xl mb-4 flex items-center text-gray-800`}
              >
                <FiPhone className="mr-2" />
                Contacto
              </h2>
              <div
                className={`${quicksandRegular.className} text-gray-700 space-y-3`}
              >
                <div className="flex items-center">
                  <FiPhone className="mr-3 text-[#de2164]" />
                  <a
                    href="tel:+573001234567"
                    className="text-lg hover:text-[#de2164] transition-colors"
                  >
                    +57 300 123 4567
                  </a>
                </div>
                <div className="flex items-center">
                  <FiPhone className="mr-3 text-[#de2164]" />
                  <a
                    href="tel:+574444123456"
                    className="text-lg hover:text-[#de2164] transition-colors"
                  >
                    +57 4 444 1234
                  </a>
                </div>
                <div className="flex items-center">
                  <FiMail className="mr-3 text-[#de2164]" />
                  <a
                    href="mailto:info@distritodulce.com"
                    className="text-lg hover:text-[#de2164] transition-colors"
                  >
                    info@distritodulce.com
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2
                className={`${appetiteProBold.className} text-xl mb-4 flex items-center text-gray-800`}
              >
                <FiInstagram className="mr-2" />
                ¡Síguenos!
              </h2>
              <div className="flex items-center">
                <div className="bg-[#de2164] p-2 rounded-full mr-3">
                  <FiInstagram size={20} className="text-white" />
                </div>
                <span
                  className={`${quicksandMedium.className} text-gray-900 text-lg`}
                >
                  @DistritoDulce
                </span>
              </div>
              <p className={`${quicksandRegular.className} text-gray-600 mt-3`}>
                Síguenos para ver nuestras novedades y promociones
              </p>
            </div>

            {/* País */}
            <div className="text-center">
              <p
                className={`${quicksandMedium.className} text-gray-700 text-lg`}
              >
                Colombia
              </p>
            </div>
          </div>

          {/* Columna derecha - Mapa */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2
              className={`${appetiteProBold.className} text-xl mb-4 text-gray-800`}
            >
              Encuéntranos
            </h2>

            {/* Mapa de Google Maps sin API Key (usando iframe) */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-75.5617121857344!3d6.244326295493151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f6f6b4b5a5%3A0x5c5e5c5e5c5e5c5e!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Ubicación de Distrito Dulce en Medellín"
              ></iframe>
            </div>

            {/* Información adicional del mapa */}
            <div
              className={`${quicksandRegular.className} text-gray-700 mt-4 space-y-2`}
            >
              <p className="text-sm">📍 Carrera 45 # 20-35, Local 102</p>
              <p className="text-sm">🏪 Centro Comercial Los Molinos</p>
              <p className="text-sm">🚗 Parqueadero gratuito para clientes</p>
            </div>

            {/* Botones de acción */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <a
                href="https://maps.google.com/?q=Carrera+45+20-35+Medellín+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#de2164] text-white py-3 px-4 rounded-lg text-center hover:bg-[#c01a54] transition-colors"
              >
                Abrir en Maps
              </a>
              <a
                href="https://waze.com/ul?q=Carrera+45+20-35+Medellín+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] text-white py-3 px-4 rounded-lg text-center hover:bg-[#555] transition-colors"
              >
                Abrir en Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
