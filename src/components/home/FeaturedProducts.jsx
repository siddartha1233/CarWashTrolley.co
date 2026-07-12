import { Link } from "react-router-dom";
import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "Single Bucket Trolley",
    description: "Compact FRP trolley for professional car washing.",
  },
  {
    id: 2,
    name: "Double Bucket Trolley",
    description: "Dual-bucket system for efficient detailing.",
  },
  {
    id: 3,
    name: "Mobile Detailing Cart",
    description: "Organized storage for tools and accessories.",
  },
  {
    id: 4,
    name: "Custom FRP Trolley",
    description: "Tailor-made solutions for commercial use.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="featured-products-container">

        <div className="section-header">
          <span className="section-subtitle">FEATURED PRODUCTS</span>

          <h2 className="section-title">
            Explore Our Premium FRP Product Range
          </h2>

          <p className="section-description">
            Designed for durability, efficiency and professional performance.
          </p>
        </div>

        <div className="products-grid">

          {products.map((product) => (
            <div key={product.id} className="product-card">

              <div className="product-image">
                📦
              </div>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <Link to="/products" className="product-button">
                View Details →
              </Link>

            </div>
          ))}

        </div>

        <div className="products-footer">
          <Link to="/products" className="view-products-btn">
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;