import "./GalleryCard.css";

const GalleryCard = ({ item }) => {
  return (
    <article className="gallery-card">


        <div className="gallery-card-image">
            <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
            />
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