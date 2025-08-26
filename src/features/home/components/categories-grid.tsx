// components/CategoriesGrid.tsx
import { appetiteProBold, quicksandRegular } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

interface Category {
  name: string;
  image: string;
  description?: string;
  slug: string;
}

interface CategoriesGridProps {
  categories: Category[];
  title?: string;
  subtitle?: string;
}

export default function CategoriesGrid({
  categories,
  title = "Distribuidora Mayorista",
  subtitle = "¡Todos los dulces y snacks que amamos, en un solo lugar!",
}: CategoriesGridProps) {
  return (
    <section className="w-[70%] m-auto py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2
            className={`${appetiteProBold.className} text-3xl md:text-4xl text-gray-800 mb-4`}
          >
            {title}
          </h2>
          <p
            className={`${quicksandRegular.className} text-lg md:text-xl text-gray-600 max-w-2xl mx-auto`}
          >
            {subtitle}
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/categoria/${category.slug}`}
              className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Imagen de la categoría */}
              <div className="relative h-64 md:h-72">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay para mejor legibilidad */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300" />

                {/* Nombre de la categoría */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3
                    className={`${appetiteProBold.className} text-white text-2xl md:text-3xl text-center drop-shadow-lg`}
                  >
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Descripción (hover) */}
              {category.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p
                    className={`${quicksandRegular.className} text-sm md:text-base text-center`}
                  >
                    {category.description}
                  </p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
