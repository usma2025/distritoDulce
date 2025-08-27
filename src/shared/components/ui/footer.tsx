// components/Footer.tsx
import {
  appetiteProBold,
  quicksandRegular,
  quicksandMedium,
} from "@/lib/fonts";
import { FiMapPin, FiClock, FiFacebook, FiInstagram } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="text-white py-12 relative"
      style={{
        backgroundColor: "#5bbcd3",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/foggy-birds.png")',
      }}
    >
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0  bg-opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-around flex-wrap gap-8 items-center">
          {/* Columna 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/img/logoblanco.png"
              alt="Distrito dulce"
              width={160}
              height={48}
              className="select-none"
            />
          </div>

          {/* Columna 2: Ubicaciones */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className={`${appetiteProBold.className} text-xl mb-4 flex items-center text-white`}
            >
              <FiMapPin className="mr-2" />
              Ubicaciones
            </h3>
            <div
              className={`${quicksandRegular.className} space-y-3 text-white`}
            >
              <div className="text-center md:text-left">
                <p
                  className={`${quicksandMedium.className} text-white font-semibold`}
                >
                  Sucursal Suba
                </p>
                <p className="text-sm">Carrera 139 #142b-22</p>
              </div>
              <div className="text-center md:text-left">
                <p
                  className={`${quicksandMedium.className} text-white font-semibold`}
                >
                  Sucursal San Cristobal
                </p>
                <p className="text-sm">Calle 163a #8b-05</p>
              </div>
            </div>
          </div>

          {/* Columna 3: Horarios */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className={`${appetiteProBold.className} text-xl mb-4 flex items-center text-white`}
            >
              <FiClock className="mr-2" />
              Horarios
            </h3>
            <div
              className={`${quicksandRegular.className} space-y-3 text-white text-center md:text-left`}
            >
              <div>
                <p
                  className={`${quicksandMedium.className} text-white font-semibold`}
                >
                  Lunes a Viernes
                </p>
                <p className="text-sm">8:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p
                  className={`${quicksandMedium.className} text-white font-semibold`}
                >
                  Sabados
                </p>
                <p className="text-sm">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className={`${appetiteProBold.className} text-xl mb-4 text-white`}
            >
              ¡Síguenos!
            </h3>

            {/* Iconos de redes sociales */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white/30 hover:bg-white/40 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Facebook"
              >
                <FiFacebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-white/30 hover:bg-white/40 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Instagram"
              >
                <FiInstagram size={18} className="text-white" />
              </a>
            </div>

            {/* Información de contacto */}
            {/* <div
              className={`${quicksandRegular.className} text-white mt-6 text-center md:text-left`}
            >
              <p
                className={`${quicksandMedium.className} font-semibold text-sm`}
              >
                Contacto
              </p>
              <p className="text-sm">info@distritodulce.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div> */}
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        {/* <div className="border-t border-white/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`${quicksandRegular.className} text-white/80 text-sm text-center md:text-left mb-4 md:mb-0`}
            >
              © 2024 Distrito Dulce. Todos los derechos reservados.
            </p>
            <div
              className={`${quicksandRegular.className} text-white/80 text-sm flex space-x-4`}
            >
              <Link
                href="/terminos"
                className="hover:text-white transition-colors text-xs"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/privacidad"
                className="hover:text-white transition-colors text-xs"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/contacto"
                className="hover:text-white transition-colors text-xs"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
