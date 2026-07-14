import "./GalleryCard.css";

const GalleryCard = ({ item }) => {
  return (
    <article className="gallery-card">

      <div className="gallery-card-image">
        <div className="gallery-placeholder">
          🖼️
        </div>
      </div>

      <div className="gallery-card-content">

        <span className="gallery-category">
          {item.category}
        </span>

        <h3 className="gallery-title">
          {item.title}
        </h3>

      </div>

    </article>
  );
};

export default GalleryCard;