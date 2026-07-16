import { Link } from "react-router-dom";
import "./ProductCard.css";




const ProductCard = ({ product }) => {
  return (
    <article className="product-card">

      <div className="product-card-image">
          <img
              src={product.image}
              alt={product.name}
              className="product-card-img"
          />
      </div>

      <div className="product-card-content">

        <h3 className="product-card-title">
          {product.name}
        </h3>

        <p className="product-card-description">
          {product.description}
        </p>

        <ul className="product-card-features">
          {product.features.map((feature, index) => (
            <li key={index}>
              ✓ {feature}
            </li>
          ))}
        </ul>

        <Link
          to={`/contact`}
          className="product-card-button"
        >
          View Details
        </Link>

      </div>

    </article>
  );
};

export default ProductCard;