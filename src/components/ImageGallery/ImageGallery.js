import styles from "../ImageGallery/imageGallery.module.css";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem.js";
import PropTypes from "prop-types";

export function ImageGallery({ images, imageSelected }) {
  return (
    <>
      <ul className={styles.imageGallery}>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onClick={imageSelected}
          />
        ))}
      </ul>
    </>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  imageSelected: PropTypes.func.isRequired,
};
