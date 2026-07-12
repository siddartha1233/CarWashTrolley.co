import ProductsBanner from "../components/products/ProductsBanner";
import ProductIntro from "../components/products/ProductIntro";
import CTA from "../components/home/CTA";

const Products = () => {
  return (
    <>
      <ProductsBanner />
      <ProductIntro />

      {/* Product Grid */}

      <CTA />
    </>
  );
};

export default Products;