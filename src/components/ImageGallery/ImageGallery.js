import React from "react";
import styles from "../ImageGallery/imageGallery.module.css";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem.js";

export function ImageGallery({ images, imageSelected }) {
  return (
    <>
      <ul className={styles.imageGallery}>
        {images.map((image) => (
          <ImageGalleryItem
            id={image.id}
            key={image.id}
            src={image.webformatURL}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onClick={imageSelected}
          />
        ))}
      </ul>
    </>
  );
}
