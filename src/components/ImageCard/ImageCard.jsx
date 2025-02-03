import s from "./ImageCard.module.css"

const ImageCard = ({image}) => {
    return (
        <div className={s.imageWrap}>
            <img className={s.image} src={image.urls.small} alt={image.description} />
        </div>
    )
}

export default ImageCard

// { id, description, urls: { small, regular }, user: {name}, likes, alt_description }