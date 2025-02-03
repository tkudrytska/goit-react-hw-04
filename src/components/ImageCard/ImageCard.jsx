import s from "./ImageCard.module.css"

const ImageCard = ({image}) => {
    return (
        <div className={s.imageWrap}>
            <img className={s.image} src={image.urls.small} alt={image.description} />
        </div>
    )
}

export default ImageCard