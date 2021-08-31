import styles from "../ImageGalleryItem/imageItems.module.css";
import PropTypes from "prop-types";

export function ImageGalleryItem({ webformatURL, largeImageURL, onClick }) {
  return (
    <li className={styles.imageItem} onClick={() => onClick(largeImageURL)}>
      <img
        src={webformatURL}
        alt=""
        className={styles.imageGalleryItem_image}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
