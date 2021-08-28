import React from "react";
import styles from "../ImageGalleryItem/imageItems.module.css";

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
