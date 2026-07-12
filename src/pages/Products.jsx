import ProductsBanner from "../components/products/ProductsBanner";
import ProductIntro from "../components/products/ProductIntro";
import ProductGrid from "../components/products/ProductGrid";
import CTA from "../components/home/CTA";

const Products = () => {
  return (
    <>
      <ProductsBanner />
      <ProductIntro />
      <ProductGrid />
      <CTA />
    </>
  );
};

export default Products;