import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ previewImage, alt, fullImage, showFullImage }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => showFullImage(fullImage)}
    >
      <img
        className={css.ImageGalleryItem__image}
        src={previewImage}
        alt={alt}
      />
    </li>
  );
};

export default ImageGalleryItem;
