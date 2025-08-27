import Header from "@/shared/components/ui/header";
import Banner from "../components/banner";
import CategoriesGrid from "../components/categories-grid";
import { categories } from "@/shared/lib/categories";
import Footer from "@/shared/components/ui/footer";
export default function HomePage() {
  return (
    <>
      <Header />
      <Banner imageUrl="/img/Banner.jpg" title="DULCES Y GOMAS" />
      <CategoriesGrid
        categories={categories}
        title="Distribuidora Mayorista"
        subtitle="¡Todos los dulces y snacks que amamos, en un solo lugar!"
      />
      <Footer />
    </>
  );
}
