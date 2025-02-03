import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({ images }) => {
    return (
        <ul className={s.imagesContainer}>
            {images.map((image) => (
                <li className={s.imageWrap} key={image.id}>
                    <ImageCard image={image} />
                </li>
            ))}
        </ul>        
    )
}

export default ImageGallery