import "./GalleryBanner.css";

const GalleryBanner = () => {
  return (
    <section className="gallery-banner">
      <div className="gallery-banner-container">

        <span className="gallery-banner-subtitle">
          GALLERY
        </span>

        <h1 className="gallery-banner-title">
          Explore Our Manufacturing
          <span>& Product Showcase</span>
        </h1>

        <p className="gallery-banner-description">
          Browse our collection of product images, manufacturing
          facilities and completed projects that reflect our
          commitment to quality and craftsmanship.
        </p>

      </div>
    </section>
  );
};

export default GalleryBanner;