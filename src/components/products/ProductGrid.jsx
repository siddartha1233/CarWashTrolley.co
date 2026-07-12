import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = () => {
  return (
    <section className="product-grid">
      <div className="product-grid-container">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </section>
  );
};

export default ProductGrid;