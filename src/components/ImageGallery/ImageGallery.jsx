import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

import styles from "./image-gallery.module.css";

const ImageGallery = ({ showModal, items }) => {
    const elements = items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            showModal={showModal}
        />
    ));

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    );
};

export default ImageGallery;










// const ImageGallery = ({showModal, items}) => {
//     const elements  = items.map(({ id, webformatURL, largeImageURL }) => <li key={id} onClick={()=> showModal({largeImageURL})} className={styles.item}>
//             <img src={webformatURL} alt="" loading="lazy" />
//         </li>);

//     return (
//         (<ul className={styles.list}>
//             {elements}
//         </ul>)
//     )
// }

// export default ImageGallery;