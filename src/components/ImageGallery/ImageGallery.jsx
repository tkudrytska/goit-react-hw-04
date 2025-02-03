import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({ images, onClick }) => {
    const handleToOpen = (image) => {
        onClick(image)
    }

    return (
        <ul className={s.imagesContainer}>
            {images.map((image) => (
                <li className={s.imageWrap} key={image.id} onClick={() => handleToOpen(image)}>
                    <ImageCard image={image} />
                </li>
            ))}
        </ul>        
    )
}

export default ImageGallery