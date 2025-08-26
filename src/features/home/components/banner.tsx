// components/Banner.tsx
import { appetiteProBold, quicksandRegular } from "@/lib/fonts";
import Image from "next/image";

interface BannerProps {
  imageUrl: string;
  title: string;
  description?: string;
  height?: string;
  titleSize?: string;
  overlayOpacity?: number;
}

export default function Banner({
  imageUrl,
  title,
  description,
  height = "h-96", // altura por defecto
  titleSize = "text-4xl", // tamaño de título por defecto
  overlayOpacity = 50, // opacidad del overlay por defecto (50%)
}: BannerProps) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Imagen de fondo */}
      <Image
        src={imageUrl}
        alt="Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay para mejorar legibilidad del texto */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      />

      {/* Contenido del banner */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
        {/* Título */}
        <h1
          className={`${appetiteProBold.className} ${titleSize} mb-4 drop-shadow-md`}
        >
          {title}
        </h1>

        {/* Descripción (solo se muestra si existe) */}
        {description && (
          <p
            className={`${quicksandRegular.className} text-lg max-w-2xl drop-shadow-md`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
