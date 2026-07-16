import { Link } from "react-router-dom";
import "./FeaturedProducts.css";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpeg";

const products = [
  {
    id: 1,
    name: "60 Liter Bucket Trolley",
    img: img1,
    description: "Compact Fiberglass  trolley for professional car washing.",
  },
  {
    id: 2,
    name: "130 Liter Bucket Trolley",
    img: img2,
    description: "Dual-bucket system for efficient detailing.",
  },
  {
    id: 3,
    name: "Mobile Detailing Cart",
    img: img3,
    description: "Organized storage for tools and accessories.",
  },
    
  {
    id: 4,
    name: "Custom Fiberglass  Trolley",
    img: img4,
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
            Explore Our Premium Fiberglass  Product Range
          </h2>

          <p className="section-description">
            Designed for durability, efficiency and professional performance.
          </p>
        </div>

        <div className="products-grid">

          {products.map((product) => (
            <div key={product.id} className="product-card">

              <div className="product-image">
                <img
                  src={product.img}
                  alt={product.name}
                />
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