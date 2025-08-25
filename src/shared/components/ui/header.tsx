// components/Header.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiShoppingCart,
  FiX,
  FiMenu,
  FiHome,
  FiGrid,
  FiUsers,
  FiMail,
} from "react-icons/fi";

import {
  appetiteProBold,
  appetiteProHeavy,
  appetiteProMedium,
  quicksandBold,
  quicksandMedium,
  quicksandRegular,
  quicksandSemiBold,
} from "@/lib/fonts";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Categorías con iconos y paths
  const categories = [
    {
      name: "Inicio",
      icon: <FiHome className="text-xl" />,
      path: "/",
    },
    {
      name: "Catálogo",
      icon: <FiGrid className="text-xl" />,
      path: "/catalogo",
    },
    {
      name: "Quienes somos",
      icon: <FiUsers className="text-xl" />,
      path: "/quienes-somos",
    },
    {
      name: "Contacto",
      icon: <FiMail className="text-xl" />,
      path: "/contacto",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Parte Superior del Header */}
      <div className="container mx-auto px-4 py-3 ">
        <div className="flex items-center justify-between">
          {/* Logo (IZQUIERDA) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img/Logodistrito.svg"
              alt="Distrito Dulce"
              width={256}
              height={32}
            />
          </Link>

          {/* Buscador (CENTRO) - Oculto en móviles */}
          <div className="hidden md:flex flex-1 justify-center max-w-2xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                className={`${quicksandRegular.className} w-full px-4 py-2.5 border text-black border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-[#de2164] text-white rounded-r-md hover:bg-[#de2164] transition-colors">
                <FiSearch size={18} />
              </button>
            </div>
          </div>

          {/* Iconos de Acción (DERECHA) */}
          <div className="flex items-center space-x-4">
            {/* Icono de búsqueda para móviles */}
            <button
              className="text-black md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Buscar productos"
            >
              {isSearchOpen ? <FiX size={24} /> : <FiSearch size={24} />}
            </button>

            {/* Carrito de compras */}
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-[#2563eb] transition-colors"
              aria-label="Carrito de compras"
            >
              <FiShoppingCart size={24} className="text-[#3db6ce]" />
              {cartItems > 0 && (
                <span
                  className="absolute -top-2 -right-2 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  style={{ backgroundColor: "#ef4444" }}
                >
                  {cartItems}
                </span>
              )}
            </Link>

            {/* Botón de menú móvil (A LA DERECHA) */}
            <button
              className="text-gray-700 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Buscador para móviles - Se muestra cuando está activo */}
        {isSearchOpen && (
          <div className="mt-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className={`${quicksandRegular.className} w-full text-black px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-[#de2164] text-white rounded-r-md hover:bg-[#de2164] transition-colors">
                <FiSearch size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Parte Inferior del Header - Categorías */}
      <nav
        className="border-t border-gray-200"
        style={{ backgroundColor: "#de2163" }}
      >
        <div className="container mx-auto px-4 ">
          {/* Categorías en desktop */}
          <div className="hidden md:flex justify-center space-x-6 lg:space-x-8 py-3 ">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.path}
                className={`${quicksandMedium.className} text-white hover:text-gray-200 font-medium transition-colors whitespace-nowrap flex items-center gap-1`}
              >
                {category.icon}
                <span>{category.name}</span>
              </Link>
            ))}
          </div>

          {/* Menú móvil desplegable */}
          {isMenuOpen && (
            <div className="md:hidden py-3 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-2">
                <h3
                  className={`${appetiteProMedium.className} px-4 py-2 text-gray-700 text-sm`}
                >
                  Navegación
                </h3>
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.path}
                    className={`${quicksandRegular.className} px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center gap-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
