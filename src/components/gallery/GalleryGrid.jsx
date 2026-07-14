import { gallery } from "../../data/gallery";
import GalleryCard from "./GalleryCard";
import "./GalleryGrid.css";

const GalleryGrid = () => {
  return (
    <section className="gallery-grid">

      <div className="gallery-grid-container">

        {gallery.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
};

export default GalleryGrid;